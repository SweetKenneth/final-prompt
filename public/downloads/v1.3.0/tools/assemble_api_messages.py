#!/usr/bin/env python3
"""Offline, bounded message-set builder for the Final Prompt specification.

Does not connect to providers or access external projects. Host must authenticate,
authorize, meter, isolate and verify tools/evidence outside the language model.
"""
import argparse,json,sys
from pathlib import Path

ROOT=Path(__file__).resolve().parent.parent

def main():
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--module',type=int,action='append',required=True,help='Numbered 01..25; repeat flag for adjacent stages')
    ap.add_argument('--task',required=True,help='Authorized task instructions without secrets')
    ap.add_argument('--output',help='Write JSON to path; stdout if omitted')
    ap.add_argument('--max-chars',type=int,default=160000,help='Refuse larger prompt drafts (default 160000 characters)')
    args=ap.parse_args()
    stages=json.loads((ROOT/'contracts/STAGE_ORDER.json').read_text())
    ids={int(x['id']):x for x in stages['stages']}
    if len(args.module)>5:ap.error('Refusing more than five modules in one call; split into checkpointed phases')
    if any(x not in ids for x in args.module):ap.error('Invalid stage: choose 1–25')
    if args.module!=sorted(set(args.module)):ap.error('Modules must be unique and ascending to preserve canonical order')
    if not args.task.strip() or len(args.task)>12000:ap.error('Task must be nonempty and <=12000 characters')
    read=lambda p:(ROOT/p).read_text(encoding='utf-8')
    messages=[{'role':'system','content':read('api/00_API_SYSTEM_PROMPT.md')},{'role':'developer','content':read('00_MASTER_PROMPT.md')}]
    for num in args.module:
        x=ids[num];messages.append({'role':'developer','content':f"FINAL PROMPT TRUSTED MODULE {x['id']} ({x['module']})\n\n"+read(x['path'])})
    messages.append({'role':'user','content':args.task})
    raw=json.dumps(messages,indent=2,ensure_ascii=False)
    if len(raw)>args.max_chars:ap.error(f'Generated {len(raw)} chars > --max-chars {args.max_chars}; split the request')
    if args.output:Path(args.output).write_text(raw+'\n',encoding='utf-8')
    else:print(raw)

if __name__=='__main__':main()
