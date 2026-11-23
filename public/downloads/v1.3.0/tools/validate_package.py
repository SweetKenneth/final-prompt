#!/usr/bin/env python3
"""Validate files, SHA-256, stage map, references, examples and selected negative cases.
This does NOT verify any customer's repository or a live API service.
"""
from pathlib import Path
import sys,hashlib,json,re,subprocess,tempfile
BASE=Path(__file__).resolve().parent.parent
errors=[]
def check(ok,msg):
    if not ok:errors.append(msg)
def read(p):return (BASE/p).read_text(encoding='utf-8')
def load(p):return json.loads(read(p))
stage=load('contracts/STAGE_ORDER.json')
expected=[str(i).zfill(2) for i in range(1,26)]
check(stage['version']=='1.3.0','wrong stage version')
check([x['id'] for x in stage['stages']]==expected,'stages not sequential')
check(len({x['path'] for x in stage['stages']})==25,'duplicate stage paths')
for x in stage['stages']:
    p=BASE/x['path'];check(p.is_file(),f"missing {x['path']}")
    if p.is_file():check(re.search(r'^# FINAL PROMPT / MODULE '+x['id']+':',p.read_text(),re.M)!=None,f"incorrect module title {x['path']}")
mods=sorted((BASE/'modules').glob('*.md'))
check(len(mods)==25,'expected exactly 25 canonical modules')
check([m.name for m in mods]==[Path(x['path']).name for x in stage['stages']],'module filenames differ from canonical stage order')
for n,name in [(3,'SYSTEM_INTEGRATION_CLOSURE'),(4,'API_ORCHESTRATION_INTEGRITY'),(11,'ARCHITECTURAL_RESILIENCE'),(19,'UNIVERSAL_VISUAL_POLISH'),(22,'FINAL_GAP_SWEEP'),(23,'RELEASE_GATE'),(24,'FOUNDERS_GUIDE'),(25,'GUIDE_AUDIT')]:
    check((BASE/f'modules/{n:02}_{name}.md').exists(),f'wrong stage {n}: {name}')
master=read('00_MASTER_PROMPT.md')
for x in stage['stages']:
    check(x['module'] in master,f"master missing {x['module']}")
check('supplements/' not in master,'master refers to retired supplements')
check('01` through `21' not in read('contracts/PHASE_ROUTING_MAP.md'),'routing map has obsolete 21-stage text')
check('Modules 24–21' not in master and 'Modules 24–21' not in read('contracts/FOUNDER_GUIDE_CONTRACT.md'),'invalid final guide range')
check('Module 24' in read('modules/25_GUIDE_AUDIT.md'),'guide audit missing prerequisite 24')
for n in range(1,19):check(bool(re.search(r'^###\s*'+str(n)+r'\.',read('modules/24_FOUNDERS_GUIDE.md'),re.M)),f'guide missing section {n}')
# exactly referenced packaged paths only
for f in BASE.rglob('*.md'):
    if f.name=='AUDIT_V1.0_TO_V1.1.md':continue
    s=f.read_text()
    for p in re.findall(r'`((?:modules|contracts|templates|api)/[^`\s]+\.(?:md|json|html))`',s):
        check((BASE/p).is_file(),f'{f.relative_to(BASE)} dangling reference {p}')
try:
    from jsonschema import Draft202012Validator,FormatChecker
except ImportError:
    errors.append('Install jsonschema to validate example schemas')
else:
    v=FormatChecker()
    for p in ['contracts/RUN_STATE_SCHEMA.json','contracts/GUIDE_MANIFEST_SCHEMA.json','contracts/API_RUN_REQUEST_SCHEMA.json','contracts/API_RUN_RESPONSE_SCHEMA.json']:
        Draft202012Validator.check_schema(load(p))
    for schema,example in [('contracts/RUN_STATE_SCHEMA.json','contracts/EXAMPLE_RUN_STATE.json'),('contracts/API_RUN_REQUEST_SCHEMA.json','api/EXAMPLE_API_REQUEST.json'),('contracts/API_RUN_RESPONSE_SCHEMA.json','api/EXAMPLE_API_RESPONSE.json')]:
        errs=list(Draft202012Validator(load(schema),format_checker=v).iter_errors(load(example)))
        check(not errs,f'{example} invalid: {str(errs[0])[:200] if errs else ""}')
    sr=Draft202012Validator(load('contracts/RUN_STATE_SCHEMA.json'),format_checker=v)
    demo=load('contracts/EXAMPLE_RUN_STATE.json')
    for invalid in [{**demo,'tests':[{'id':'a','name':'a','status':'PASS','environment':'local','commit':'abc'}]},{**demo,'approvals':[{'id':'a','action':'deploy','status':'APPROVED','scope':'prod'}]}]:
        check(bool(list(sr.iter_errors(invalid))),'run state schema incorrectly accepts forged PASS/approval')
    ar=Draft202012Validator(load('contracts/API_RUN_RESPONSE_SCHEMA.json'),format_checker=v)
    a=load('api/EXAMPLE_API_RESPONSE.json')
    check(bool(list(ar.iter_errors({**a,'status':'PASS','evidence':[]}))), 'API response schema incorrectly allows empty-evidence PASS')
# validate offline launcher and no obsolete files
check(not (BASE/'supplements').exists(),'retired unnumbered supplement folder remains')
try:
    r=subprocess.run([sys.executable,str(BASE/'tools/assemble_api_messages.py'),'--module','1','--module','2','--task','Inspect a test repo snapshot'],capture_output=True,text=True,timeout=15)
    check(r.returncode==0,'offline API assembler smoke failed: '+r.stderr[:200])
    if r.returncode==0:
        msgs=json.loads(r.stdout);check(len(msgs)==5 and msgs[0]['role']=='system' and msgs[-1]['role']=='user','offline assembler roles wrong')
    q=subprocess.run([sys.executable,str(BASE/'tools/assemble_api_messages.py'),'--module','26','--task','Test'],capture_output=True,text=True,timeout=15)
    check(q.returncode!=0,'offline assembler accepted invalid stage 26')
except Exception as e:errors.append('offline assembler error '+str(e))
m=load('MANIFEST.json')
check(m['version']=='1.3.0' and m['module_count']==25,'manifest version/module count mismatch')
listed={x['path']:x for x in m['files']};found={str(p.relative_to(BASE)) for p in BASE.rglob('*') if p.is_file() and p.name!='MANIFEST.json'}
check(found==set(listed),f'manifest files missing={sorted(found-set(listed))} extra={sorted(set(listed)-found)}')
for path,e in listed.items():
    p=BASE/path
    if p.is_file():
        check(p.stat().st_size==e['bytes'],f'size drift: {path}')
        check(hashlib.sha256(p.read_bytes()).hexdigest()==e['sha256'],f'hash drift: {path}')
html=read('templates/OWNERS_MANUAL_TEMPLATE.html')
for q in ['name="viewport"','@media print','Template only','href="#executive-summary"']:
    check(q in html,f'owner template missing {q}')
if errors:
    print('FAIL',len(errors));[print(' -',x) for x in errors];sys.exit(1)
print(f'PASS: {len(mods)} ordered native modules; {len(listed)} hashed package files; schemas and JSON examples; offline API launcher; sample negative checks; reference paths; owner manual chapters')
