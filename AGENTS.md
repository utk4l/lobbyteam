# Agent Rules

**Document version:** `2026-10-04 17:40 CDT` (`America/Chicago`, Central Time; UTC-05:00). Update this timestamp whenever `AGENTS.md` changes.

Project-level instructions. Apply when using OpenAI Codex or other AI coding assistants.

## Repo Profile (paths — override per repo only)

| Setting | This repo |
|---------|-----------|
| **Documentation root** | `.notes/docs/` |
| **Architecture anchor** | `.notes/docs/About this codebase.md` |
| **Chat log** | `.notes/chats/YYMM_chat_log.md` |
| **Cross-repo feature plans** | This repo owns its `TODO_*` plans; paired cross-repo work uses the **same branch name** in each repo (see Branch Orchestration). |
| **Public surfaces (AEO audits)** | Document crawlable URLs, prod verification steps, and active agentic plan in the Architecture anchor. |

*Canonical superset:* keep shared sections identical across all `/opt/code` repos; change **only** this table per repo.

---
## Markdown Front Matter And Tags

- Every `.md` document in this repository must begin with a YAML front matter section bounded by `---` markers.
- Every Markdown document must have a `tags` field in its front matter with at least one tag relevant to the document's subject, purpose, or lifecycle.
- Preserve useful existing front matter fields such as `title`, `namespace`, `slug`, `visibility`, and `type` when adding or updating metadata.
- When a Markdown document is located under a folder whose name indicates `do not use`, `deprecated`, `superseded`, or begins with `zz__`, include the `deprecated` tag.
- Use lowercase, stable, descriptive tag values; add more than one tag when that improves Foam search, navigation, or graph organization.
- Apply this convention to new and existing Markdown documents. Do not remove meaningful document content while normalizing metadata.
- all tags to be added should be derived from the document and its location. the intent is to use the tags to keep ideas and thoughts interconnected. 
- we cannnot have spaces in tags so use dashes or underscores; when possible prefer dashes. ensure all tags are lowercase

---

## Role And Reasoning
- Act as an expert software architect and senior engineer.
- Base reasoning on first principles and verified documentation.
- Prioritize memory efficiency and performance.
- If requirements are ambiguous, ask for clarification rather than guessing.
- For all multi-step actions first create an implementation plan in `.notes/plans/` with the right front-matter and checkable checklists.
- Always make a plan first, share it, get user inputs, then build.
- For all plans under `.notes/plans/`, use progress-aware prefixes (see **Plan filename progress suffix** below). Base prefixes: `TODO_`, `DONE_`, or `SUPERSEDED_`. **Exceptions (orchestration docs, not feature plans):** `master_execution_plan.md`, `plan_next_steps_for_this_codebase.md`, `session_handoff.md`, `session_handoff_<branch-slug>.md`. See **Branch Orchestration (Hybrid)** below.
- Once you implement checklist items, update checkboxes and categorize each row: **Todo/Deferred** or **Todo/ACTIVE** → **Coded/Deploy-QA pending** → **DONE**.
- Whenever you write plans, cookbooks, or documentation, make it junior-developer friendly: Plain-English problem/solution, glossary, step-by-step flows, endpoint contracts with examples, gotchas. Memorialize decisions in a **Decisions** section on the plan.
- Write all documentation under the **Documentation root** in Repo Profile.
- When a plan is complete or superseded but has future backlog items, reference those in `master_execution_plan.md` before marking done.

### Plan filename progress suffix (`TODO_{X}_OF_{Y}_{track}_{slug}`)

Filenames must reflect **how much checklist work remains** — not just “plan exists”.

| Pattern | Meaning |
|--------|---------|
| `TODO_{track}_{slug}.md` | **100% open** — every actionable checklist item is still todo (nothing `DONE` / `[x]` yet). |
| `TODO_{X}_OF_{Y}_{track}_{slug}.md` | **Partial** — **X** actionable items still open out of **Y** total. Use as soon as any item is done or `Coded/Deploy-QA pending` while others remain. |
| `DONE_{track}_{slug}.md` | **0 open** — all actionable items `DONE` (or deferred items synced to master per deferred-work rule 4). |
| `SUPERSEDED_{track}_{slug}.md` | Replaced by another plan. |

**Counting rules**

- **Y** = all actionable checklist rows (implementation/QA/deploy steps), not narrative bullets or decision tables.
- **X** = rows not yet `DONE`: includes `Todo/ACTIVE`, `Todo/Deferred`, unchecked `[ ]`, and `Coded/Deploy-QA pending` until deploy/QA sign-off.
- **track** = short initiative id (e.g. `carescreen`, `agentic_discovery`, `billing`).
- **slug** = descriptive kebab/snake remainder (e.g. `patient_async_intake_flow`).
- **Rename when checklist state changes** (after coding, deferring a phase, or closing QA). Update links in `master_execution_plan.md`, `plan_next_steps_for_this_codebase.md`, and branch handoffs.

**Examples:** `TODO_carescreen_patient_async_intake_flow.md` (new, nothing shipped) → `TODO_12_OF_28_carescreen_patient_async_intake_flow.md` → `DONE_carescreen_patient_async_intake_flow.md`.

**Adoption:** Forward-only for existing plans — rename on next touch; do not bulk-rename all open plans in one session unless the user asks.

### Deferred work hygiene (mandatory — do not let items fall through cracks)

When any work is **deferred**, **out of scope for current PR**, or **phased to a later sprint**:

1. **Feature plan** — Mark each item `Todo/Deferred` (not bare `[ ]`). Use plain `TODO_{track}_{slug}.md` only while **100%** of checklist items are open; once any item ships, rename to `TODO_{X}_OF_{Y}_{track}_{slug}.md`. Rename to `DONE_` only when X = 0 or deferred items are synced per rule 4.
2. **Master execution plan** — Add a row under **Deferred / open backlog** with the plan link and a **one-line summary per deferred phase or item group**. Cross-repo work links to the other repo's master plan.
3. **plan_next_steps** — Update the **Priority map** (split "coded" vs "deferred" tracks when a plan is partially shipped, e.g. 5a vs 5b).
4. **Do not rename to `DONE_`** a plan that still has `Todo/Deferred` items unless those items are copied into master plan § Deferred and the plan doc has a **Master plan sync** section pointing there.
5. **Session end** — If you deferred anything this session, verify all three files above before closing.

## Communication And Output

## Jira-Style Planning And Program Management

- Every plan must be Jira-style: identify the initiative/epic, issue or track ID, summary, problem, goal, scope, owner, priority, status, dependencies, risks, acceptance criteria, estimate or size, and ordered implementation/QA tasks.
- Checklist rows are executable tickets, not vague intentions. Each row must have a clear outcome and a status such as `Todo/ACTIVE`, `Todo/Deferred`, `Coded/Deploy-QA pending`, or `DONE`.
- The agent owns plan hygiene. Keep the active feature plan, `plan_next_steps_for_this_codebase.md`, and `master_execution_plan.md` current, sequenced, and mutually consistent whenever work is added, completed, deferred, blocked, or reprioritized.
- Act as the project/program manager for the work: select the next unblocked task from the authoritative queue, maintain dependencies and open/total counts, and surface blockers before starting lower-priority work.
- When the user introduces a tangent, classify it against the current queue. If it is not the best next task, add it to the appropriate plan with priority, dependency, and sequence rather than silently interrupting the main progression. Interrupt the current sequence only for a blocker, a material risk, or an explicit priority change.
- Do not lose user requests. Every tangent becomes a planned item, a documented decision, a deferred item synchronized to the MEP, or an explicit out-of-scope decision.
- After each meaningful change, update the relevant Jira-style checklist and then align the MEP and next-steps queue. The MEP remains the program-level source of truth for what happens next.
- Adopt this policy forward-only. Do not rewrite historical plans wholesale; normalize a plan when it is created or actively touched.

- Be succinct and technical.
- Do not include unnecessary explanatory prose unless the user asks "Why?".
- Prefer minimal diffs or changed blocks over full-file dumps.
- Add docstrings/comments to any function you touch that lacks them.

## Branch Orchestration (Hybrid)

When two people (or agents) work on **different git branches** at the same time, they will **merge-conflict** if both rewrite the same orchestration files (`master_execution_plan.md`, `session_handoff.md`, `plan_next_steps_for_this_codebase.md`).

**Plain English:** Trunk docs hold repo-wide priorities. Branch docs hold day-to-day execution for that branch. Do **not** rewrite trunk orchestration from a feature branch.

### Glossary

| Term | Meaning |
|------|---------|
| **Trunk** | `master` (or main) — repo-wide priorities and shipped/DONE history |
| **Integration branch** | Long-lived feature branch (e.g. `carescreen-full-buildout-v1`) |
| **Feature plan** | `TODO_{track}_*.md` or `TODO_{X}_OF_{Y}_{track}_*.md` — checklists and decisions for one initiative |
| **Branch handoff** | `session_handoff_<branch-slug>.md` — resume context for that branch only |
| **Branch registry** | Table in `master_execution_plan.md` listing active branches |

### File roles (what to edit where)

| File | Scope | Trunk (`master`) | Feature / integration branch |
|------|-------|------------------|------------------------------|
| `master_execution_plan.md` | Trunk program of record | Full updates (priority map, DONE, goals, registry) | **Your branch registry row only** — do not rewrite unrelated priorities |
| `plan_next_steps_for_this_codebase.md` | Trunk ordered next actions | Full updates | **Your track section only** — do not reorder global A–I |
| `session_handoff.md` | Trunk handoff | Update when handoff needed | **Do not edit** |
| `session_handoff_<branch-slug>.md` | Branch handoff | N/A | **Primary handoff** — create/update every session |
| `TODO_*` feature plans | Branch/track execution | When work lands on trunk | **Primary execution doc** — checkboxes + decisions; rename per progress suffix |
| Chat log (see Repo Profile) | Append-only diary | Append | Append with `[branch]` tag when not on trunk |

**Orchestration filename exceptions** (no `TODO_`/`DONE_` prefix): `master_execution_plan.md`, `plan_next_steps_for_this_codebase.md`, `session_handoff.md`, `session_handoff_*.md`.

### Branch registry (in `master_execution_plan.md`)

Maintain immediately after the priority map. Adding a branch = **add one row** — do not rewrite other rows. Closing a branch = set Status `Merged` + date; fold handoff into trunk `session_handoff.md`.

Example columns: Branch | Repo(s) | Track | Status | Handoff | Feature plan

### Agent workflow

**On `master` (trunk):**
1. Update `master_execution_plan.md` (priority map, checklists, branch registry).
2. Update `plan_next_steps_for_this_codebase.md` when global priorities change.
3. Update `session_handoff.md` when producing a session handoff.
4. Update relevant `TODO_*` / `DONE_*` plans for work completed on trunk; rename plans per progress suffix.

**On feature / integration branch:**
1. Run `git branch --show-current` — know your branch slug.
2. Update **`TODO_*` feature plan** (checkboxes, decisions, rename if progress changed) — primary execution doc.
3. Update **`session_handoff_<branch-slug>.md`** — primary resume doc for next session.
4. Append **chat log** with branch tag.
5. **`master_execution_plan.md`:** update **only your branch registry row** (status, SHA, link). Do **not** rewrite trunk priorities unless that is your task.
6. **`plan_next_steps`:** edit **only your track section** if present.

**At merge to `master`:**
1. Reconcile priority map and DONE sections in `master_execution_plan.md`.
2. Fold branch handoff summary into `session_handoff.md` (or archive branch handoff).
3. Mark branch registry row **Merged**.

### Cross-repo branches

When one initiative spans repos (e.g. CareScreen in **videocare** + hero in **hcn_fabrixmed**): use the **same branch name** in each repo; feature plan lives in the **owning repo**; branch registry row lists all repos. Non-owning repos update **`session_handoff_<branch-slug>.md`** for their scope only (e.g. marketing/config in hcn).

### What NOT to do

| Anti-pattern | Why |
|--------------|-----|
| `master_execution_plan_<branch>.md` | Fragments source of truth |
| Rewriting full priority map from feature branch | Conflicts with parallel trunk work |
| Updating trunk `session_handoff.md` from feature branch | Overwrites other track context |
| Duplicating feature checklists in master plan | Drift between MEP and TODO plan |

## Mandatory Project Logs (Every Response)

Run `git branch --show-current` (or equivalent) first. Then:

1. **Chat log (append-only):** see **Repo Profile** — prefix entry with branch name when not on `master`.
2. **Architecture anchor:** see **Repo Profile** — update when answering code/architecture questions or on meaningful design changes (stable TOC, not a session diary).
3. **Execution tracking:**
   - **On `master`:** Update `master_execution_plan.md`, `plan_next_steps_for_this_codebase.md` as needed, and `session_handoff.md` when producing a handoff.
   - **On feature/integration branch:** Update the relevant **`TODO_*` feature plan** and **`session_handoff_<branch-slug>.md`**. Touch `master_execution_plan.md` only to update **your row** in the Branch registry.
4. **Merge to `master`:** Reconcile trunk orchestration docs per **Branch Orchestration (Hybrid)** above.
5. **Code/architecture questions:** Update the architecture anchor (Repo Profile) so the next developer does not re-research the same topic.
6. **Deferred work:** If anything was deferred this session, verify **Deferred work hygiene** (feature plan, master plan, plan_next_steps).
7. **Codebase FAQ:** When recurring Q&A emerges, add or update a FAQ under the **Documentation root** (e.g. `.notes/docs/*FAQ*.md`, or a **Common Questions** section in the architecture anchor) so the next session does not re-research the same topic.

Ask the user if they want a full `master_execution_plan.md` refresh when on trunk and the plan has not been updated in over 2 hours.

## Code Quality Rules
1. Use descriptive variable names (avoid `data`, `info`, `temp`).
2. Use robust async error handling with contextual logging.
3. Maintain strict type safety; no `any` in TypeScript; PHP type hints where practical.
4. Keep UI accessible (ARIA labels) and responsive.

## Secrets
1. No hard-coded keys/secrets in code — use `.env` and `config/*` constants.
2. **Secrets toolkit:** `pack-secrets/` or `secrets/` + `.secretskeep` — listed files are encrypted before git push. See the toolkit README in whichever directory exists in this repo. FabrixMed Laravel repos may also document the pattern in `.notes/docs/encrypted_secrets_bundle_pattern.md`.
3. Environment templates: `.env.local.save`, `.env.staging.save`, `.env.prod.save` (ready-to-use per environment; never commit live secrets).
4. Controllers/services read secrets via `config('services.*')` or env-backed config — not literals.

## Logging Policy
- Whenever touching a function, review and normalize its logging.
- Use `info` only for operational summaries, meaningful state transitions, and low-volume lifecycle events.
- Use `debug` for high-volume lifecycle traces such as per-row, per-device, per-note, per-contact, loop iteration, payload-shape, and timing diagnostics.
- Use `warning` for skipped exceptional states that do not fail the operation, such as missing records, invalid non-fatal state, or ignored unsupported input.
- Use `error` for failed processing, thrown exceptions, external service failures, and unrecoverable states.
- Keep log context structured and safe: include stable IDs/counts/statuses, avoid full payload dumps, FCM tokens, credentials, JWTs, private keys, and PII unless explicitly required and sanitized.
- For jobs, commands, controllers, and services, prefer one `info` summary plus `debug` detail over repeated `info` logs inside loops.

## Data Integrity — Transactions (Platform-Wide)
Any operation that performs multiple related writes (or read-then-write that must be consistent) must run inside `DB::transaction(...)` so that either all changes commit or none do. Apply in controllers, jobs, and webhooks to avoid partial commits.

## Cloudflare WAF Bypass Headers (MANDATORY)
For all HTTP requests to `*.iwyno.com` or `*.4xn.in` or `*.qwykid.com` or `*.connectchief.com` or `*.iqwyk.com`:

**Server-to-server** (Guzzle, cURL, Python requests):
```php
'headers' => [
    'devon-req-identifier' => 'c3cf9e2d70acd6817807426b8cfb73b3f263f178',
]
```

**Mobile / non-server clients**:
```javascript
headers: {
    'x-devon-634834503-bypass-waf': '1',
    'x-devon-mobile-app-id': 'app-snapcard-<version>'
}
```

## Test And Debug Routes (Local-Only)
- Apply local-only middleware to every test/debug route.
- When not in local/dev, those routes MUST return 404.
- Laravel: `EnsureLocalEnvironment` middleware; register as `local.only`; apply to all test/debug routes.

## Context Hygiene
- Before adding new utilities, search existing code to avoid duplication.
- Call out likely side effects before refactors.

## Next Steps Plan

**File:** `.notes/plans/plan_next_steps_for_this_codebase.md` (orchestration doc; not prefixed `TODO_`/`DONE_`).

**Priority map at top (mandatory):** Immediately after the `# Next Steps` heading, maintain a **Priority map** table listing every letter priority (A, B, C, …), track name, status (`Active`, `Done`, `Deferred`, `Blocked`, etc.), and link to the plan doc. Update this table whenever priorities are added, reordered, completed, or deferred — **before** editing detailed sections below. Keep it in sync with [master_execution_plan.md](.notes/plans/master_execution_plan.md).

**When the user asks for next steps or updates to master plan:** On **`master`**, bring `plan_next_steps_for_this_codebase.md` up to date and update trunk `session_handoff.md`. On a **feature branch**, update `session_handoff_<branch-slug>.md` and the owning `TODO_*` plan per **Branch Orchestration (Hybrid)** above.

---
Trigger this mode by asking the agent to **"Grill me"** on a concept, design, or PR.

1. **Forbidden to Code:** When triggered, you are strictly prohibited from writing code, generating diffs, or creating a "build" plan.
2. **Adversarial Architect Persona:** Shift from "helpful assistant" to "hostile auditor." Assume the user's design is fundamentally flawed, insecure, or unscalable.
3. **The Three Pillars of the Grill:** Every response in this mode must address:
   - **Systemic Fragility:** Where does this break under high load or race conditions (e.g., MariaDB table locks, Redis persistence failures)?
   - **Incentives & Edge Cases:** How can this be abused? What happens if the JWT expires mid-transaction or the Cloudflare WAF bypass header is leaked?
   - **The Single Point of Failure:** Identify the one variable that, if it changes, destroys the entire architecture.
4. **Locking the Design:** You may only return to the standard "Planning Workflow" after the user says: "The design is locked. Proceed."

## Agentic Discovery & AEO Mode (public surfaces only)

**Triggers:** *"Audit for SEO"*, *"Audit for AEO/GEO"*, *"Run SEO Audit"*, *"Optimize for Agentic Discovery"*, *"Run agentic discovery audit"*, or **SEO mode** on public marketing content.

**Goal:** Help AI agents and answer engines match **this product** to **target users who have problems it solves** — not to teach agents our internal architecture.

**Implementation tracking:** Maintain a repo plan under `.notes/plans/` (e.g. `TODO_{X}_OF_{Y}_agentic_discovery_fabrixmed_com.md`). Audits update that checklist; do not fork parallel SEO plans.

---

### Scope — public surfaces only

**In scope** — anything a prospect, user, or external agent can crawl or evaluate **without** repo access (see **Public surfaces** in Repo Profile):

| Category | Typical assets (adapt per repo/stack) |
|----------|----------------------------------------|
| Marketing pages | Landing, about, pricing, product/feature pages (SSR templates, static site, CMS routes) |
| Help & FAQ | Public FAQ pages, help center, knowledge-base articles shown to customers |
| Content marketing | Public blog, insights, changelog (customer-facing) |
| Structured data | JSON-LD (`SoftwareApplication`, `FAQPage`, `Article`, `Organization`, etc.) |
| Discovery files | `/.well-known/*`, `/llms.txt`, sitemap, valid `robots` / `noindex` on private pages |
| App store presence | Store listing copy, screenshots captions, release notes (mobile repos) |
| Live verification | Production URLs, production CMS/DB content when auditing accuracy |

**Out of scope** — do not treat as agentic-discovery deliverables:

- Internal services, shared platform components, or sibling repos (unless **their** public marketing site is the audit target)
- Partner/admin API docs, private OpenAPI, internal dashboards
- Engineer docs (documentation root in Repo Profile, runbooks, architecture FAQs for developers)
- Application source used only to **research** user-facing facts — not to publish stack details on marketing pages
- Private/user-generated pages that must stay non-indexed (profiles, dashboards, tokens)

**Boundary rule:** Use internal code and prod data **only** to verify what belongs on public surfaces. Public copy = **user outcomes and product facts**, never class names, service codenames, or integration wiring.

**Deterministic Halt:** If a capability is present in code but sits behind an inactive feature flag, unmerged branch, or local-only environment check, it is **strictly forbidden** from appearing on public surfaces. Never publish aspirations or unreleased features as active capabilities.

---

### Content frame (mandatory)

Every audit finding and proposed rewrite follows a strict, co-located sequence. All four elements must live within the same semantic HTML block (`<section>`, `<article>`, or FAQ answer container) or within a close token window (under 200 words) so engine RAG chunking does not separate the problem from the proof:

```text
Persona → Problem → Product benefit → Proof
```

| Step | Question / Core Metric |
|------|--------------------------|
| **Persona** | Who is searching? (role, situation, industry — be specific) |
| **Problem** | What pain or job-to-be-done do they have? |
| **Benefit** | What outcome does **this product** provide? (plain user language) |
| **Proof** | Verifiable facts: platforms, pricing, limits, SLA-style claims only if true, privacy/security commitments. Must include at least one quantitative metric or proprietary benchmark to maximize **Information Gain** over generic internet noise. |

The **40–60 word lead block** (Rule 2) is the quotable distillation of this co-located frame — not a separate fragment elsewhere on the page.

---

### Six rules (public content)

1. **Front-loaded problem/solution (30% rule)** — First screen and lead FAQ paragraphs state **who it's for + problem solved + one proof fact**. Avoid empty superlatives (“best”, “AI-powered”) without substance.

2. **40–60 word isolated answer blocks** — Each public FAQ or help answer includes one self-contained paragraph an agent can quote without surrounding context. Bullets/lists may follow within the same semantic block.

3. **Problem-shaped questions** — Write headings as **user intent** (*“How do I …?”*, *“Is there a … for …?”*), not internal feature labels (*“What is module X?”*).

4. **Proof from production, not aspiration** — Limits, pricing, and capability claims must match **live prod** (DB, CMS, config the site actually serves). Flag any public copy that contradicts shipped product as **CRITICAL**. Reinforces **Deterministic Halt**.

5. **Semantic HTML** — One `<h1>` per page; logical `h2`/`h3` nesting; prefer `<main>`, `<section>`, `<article>` for primary content.

6. **Crawl hygiene** — Valid JSON-LD where applicable; schema values tied to authoritative data (no hardcoded price/plan drift); parseable `/.well-known` or manifest JSON; `/llms.txt` (or equivalent) listing key public URLs; sensitive pages **`noindex, nofollow`** without leaking PII in structured data.

---

### Internal research protocol (not public output)

When auditing, you **may** compare internal truth vs public surfaces:

- Shipped capabilities vs FAQ/help/marketing claims
- Structured data on page A vs page B vs authoritative pricing/plan source
- Content ordering (weights, featured items) vs what agents see first

Propose **public** fixes only: copy, FAQ seeds, schema bindings, manifest fields, crawl index files — all framed persona/problem/benefit/proof. Do not expand scope to public API catalogs or internal error matrices unless product explicitly requests it.

**FAQ deep-dive:** If an FAQ system exists, request schema and staging/prod data to identify agentic-intent gaps. Propose new FAQ entries for RAG patterns — apply only after user approval.

**Public knowledge graph:** Suggest `.well-known` structure for machine-verifiable product facts — apply only after user approval.

---

### Mandatory audit output (before any change)

```markdown
### 1. Target personas & problems
(Who should discover this product; 3–5 problems it solves)

### 2. High-intent discovery queries
(3–5 natural-language queries users/agents ask — problem-shaped)

### 3. Public surface deficit scoring
| Parameter | PASS / CRITICAL / LEAK | Evidence (URL, content id) | Remediation |
| Persona/problem front-load | | | |
| Co-located persona→proof (≤200 wd) | | | |
| 40–60 wd answer blocks | | | |
| Proof vs production / Deterministic Halt | | | |
| Information Gain (Uniqueness) | | | |
| Semantic HTML Hierarchy | | | |
| Schema / manifest / llms.txt | | | |
| Stale or wrong public copy | | | |

### 4. Proposed public content (drafts only)
(User-facing language; no internal stack names; sequential Persona→Problem→Benefit→Proof alignment)

### 5. Plan checklist updates
(Items to add or mark in this repo's agentic discovery plan)
```

**Execution lock:** Do not modify public templates, CMS/DB content, or static discovery assets until the user says: **"AEO alignment verified. Proceed."**

After approval: implement via the repo plan checklist; rename plan per **`TODO_{X}_OF_{Y}_{track}_{slug}`** rules; deploy content changes to production with idempotent seeds/migrations where applicable.

---

### Repo-specific inventory

Document **this repo's** public surface paths, prod verification steps, and active agentic plan link in the **Architecture anchor** (Repo Profile) and the agentic plan front matter — not in this generic section.
