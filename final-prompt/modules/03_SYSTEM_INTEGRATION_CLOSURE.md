# FINAL PROMPT / MODULE 03: Universal System Integration Gap Discovery & Closure

**Purpose:** Find the missing connective tissue between **existing** features, components and operational contracts. This is a real inspect → repair → verify pass, not a speculative feature backlog. Apply to the actual authorized scope; do not manufacture a feature to satisfy these examples.

## Global contract

The master controller's limits, source/evidence rules, approval gates, policy pinning, human decisions, cost limits and file ownership rules override this pass. Every statement distinguishes `OBSERVED`, `INFERRED`, `UNVERIFIED` and `NOT_APPLICABLE`. Preserve deliberately isolated experiments, safety stops and intentionally disabled integrations. Do not mistake an unused file for a missing requirement.

## 1. Discover the intended behaviors and interfaces

Start with the project's genuine product contract: repository code, routes, documented behavior, accepted issues, running configuration and authenticated owner-provided requirements. Create a map of actual producers, consumers, events, state stores, tasks, public interfaces, and authorization boundaries. Distinguish user-visible claims from operational reality. Confirm which branches are planned, legacy, optional, intentionally denied or currently deployed. Never guess a requirement from a variable name, TODO or marketing sentence alone.

## 2. Follow actual critical pathways

For each important existing workflow, identify:

`trigger → authenticate/authorize → validate → dispatch → perform → commit/deliver → consumer → persist/observe → next legitimate step`

Stages vary by application. Identify the precise implementation, method of invocation, branch conditions, payload schema, ownership, side effects, failure modes, data durability, and evidence. Trace both happy and failure routes with source references, not just box diagrams. Check cycles: the output must actually be consumed where the architecture promises feedback. A result that is logged but never consumed is a dead end if downstream consumption is required.

## 3. Gap classes to investigate selectively

- **Dead ends:** emitted events with no consumer; completed jobs with no result delivery; API responses unused; stored states never read; links/buttons that do not complete their advertised action.
- **Unreachable code:** implemented workers without registration, tasks without schedule wiring, unreachable route branches, flags with no activation path, orphan subscriptions or missing lifecycle hooks.
- **Broken loops:** learning, observation, or feedback written but never used; missing replay/retrieval/retention, feedback only during the same process, incomplete restart continuity.
- **False completion:** optimistic UI shown despite failed or uncommitted operation; ack before durable commit; swallowed errors; simulated `success` or hardcoded sample results in production paths.
- **Stub confusion:** TODO, mock, no-op, placeholder, commented path, synthetic test double or future hook incorrectly represented as operational. Treat a stub as a defect **only** if proven to block a required behavior. A deny-by-default stub may be an intentional protection.
- **Contract drift:** schema/field mismatches, changing identifiers, data version incompatibility, serialization and type transformations, missing transactional boundaries, incompatible component assumptions.
- **State inconsistencies:** request/session/process/database lifecycles, stale caches, stale closures, concurrency, partial writes, unconsumed progress, undocumented temporary stores or lost events.
- **Environment drift:** preview versus production wiring, job schedules, secrets/config presence (names only), hosting limitations, migrations, permissions and boundary assumptions. No live claims without live evidence.
- **Policy bypass:** paths that skip essential authentication, authorization, revocation, validation or audit, including calls created by newly connected subsystems. Never connect a new effect path around a guard.
- **UX-to-backend gaps:** labeled success that only means 'queued'; inaccessible errors; user cannot see completion, failure or next necessary action.

## 4. Build the connectivity inventory and gap ledger

For each key workflow record: `workflow_id`, contract/source, actual entry, producer(s), consumer(s), state store, authority/effect boundary, observable exit, failure path, version/commit/environment, verification. Missing evidence is `UNVERIFIED`, not inferred success.

For each defect record a stable `finding_id`, evidence links, expected vs observed behavior, root cause, class, impact P0–P3, confidence, owner, minimal correction, regression risks, approval requirements, verification plan and current state. Reuse existing findings when the same defect is already owned by another module. Avoid duplicate tickets for symptoms of one root cause.

## 5. Remediate with the smallest viable wiring change

Complete authorized, evidenced deficiencies: subscribe an intended consumer, fix adapter handoff, connect state readback, register an existing worker, complete a legitimate lifecycle transition, implement error propagation, or replace an inappropriate production stub with real bounded behavior. Preserve contracts, monotonic safety and least privilege. Favor reuse over replacement and idempotent work over duplicate execution. Changes to production data, external effects, auth, permissions, credentials, deployments or irreversible operations require their separate explicit approval gates.

Do not make an experimental capability operational merely because you discover it is disconnected. Do not automatically remove feature flags or release gates. Document cross-component edits and coordinate one writer per file.

## 6. Verify the **whole** repaired path

Use actual contract tests, integration tests, held-out adversarial inputs, restart/persistence tests, E2E interaction and safe failure injection where appropriate. An isolated unit test for the consumer is not proof the producer calls it. Fake dependencies are supporting evidence, not a real integration proof. Verify exact input, output, downstream consumption, durable state, failure state and authority checks. When a repair exposes another gap, add it to the ledger and follow that path within the original bounded scope.

## 7. Stop condition and delivery

Do not run an unbounded hunt. Stop at the authorized budget, critical workflow coverage, or documented absence of new high-confidence findings. Output: integration map, coverage matrix, ordered findings, repaired diffs, test commands/artifact references, intentionally isolated components, unresolved missing evidence, and accurate `VERIFIED_CLOSED / CODE_ONLY / OPEN / BLOCKED / DEFERRED / NOT_APPLICABLE` dispositions. Never say the whole project is wired when you only inspected a subset.

**Outcome:** The components that *are supposed* to interact genuinely do, and verified evidence spans their boundaries. Built to last.
