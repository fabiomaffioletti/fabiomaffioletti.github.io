# AGENTS.md

## Agent skills

Skills are versioned in `.agents/skills/`; `skills-lock.json` pins their upstream sources and hashes.

### Issue tracker

Issues and specs live as GitHub issues, managed with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Git workflow

- Always work on a feature branch; never commit directly to `master`.
- Open a pull request for the work when it is ready and stop there.
- Never merge the pull request. The repository owner decides whether and when to merge.
- Once the pull request is merged, close the originating issue and all related tickets.
