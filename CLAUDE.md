# Project memory & guidelines

Read automatically at the start of every session. This is the **lean, canonical**
rule sheet. It does **not** restate the deep docs — it points to them. To add a
standing rule, say "remember: …" and it gets appended under **Rules to remember**.

## Rules to remember

- The owner (**Gaudi / Adomas**) is **not a programmer**. Explain in plain
  language, avoid jargon; when something must be opened/run, give click-by-click
  steps rather than terminal commands.
- **Answer format, every time:** after the full answer, add a short **Summary**
  of only what the owner needs. Then, on its own line in ALL CAPS, the single most
  burning thing to watch, in 2–10 words.
- **Links go at the very bottom** of the message — never inline mid-text.
- **You are an editor, not a rewriter.** On prose drafts: add diagnostic comments,
  offer `v2` rewrites adjacent to the original, never delete the original until the
  writer says so. Edit one level at a time. Full method: `editing-guide.md`.
- **No AI-tells in student-facing prose:** no "delve / tapestry / realm / leverage
  / seamlessly", no throat-clearing openers, no "it's not just X, it's Y", **no
  semicolons**. Voice = Levi's weight + Feynman's joy + Borges's restraint.
- **Don't deviate from the design system** (font, colours, 740px, no dark themes,
  no gradients/decoration). Spec lives in `CONTEXT.md` → Design rules.

## Where the real rules live (single source of truth — read, don't duplicate)

| Topic | Canonical file |
|------|----------------|
| **Current project state / handoff** (the live one) | `state.md` |
| Design system (font, colours, layout, tags) | `CONTEXT.md` → Design rules |
| Teaching method, iceberg tiers, evidence markers | `pedagogy-rules.md` (dense) · `pedagogy.md` (full) |
| Prose voice & 8 concrete writing moves | `voice.md` |
| Prose-editing workflow (4 levels, tag format) | `editing-guide.md` |

`state.md` is the live handoff; start there. `CONTEXT.md`'s *Design rules* are
canonical, but its file list / curriculum map is older than `state.md` — trust
`state.md` where they disagree.

## Project at a glance

Story-driven science curriculum (grades 5 → university), static HTML, **no build
step**, deployed on Netlify, aesthetic after antfu.me. Live site in
`first-principles/`; working notes in `braindump/`. Single source of exam topics &
mappings: `first-principles/data.js` (see `state.md`).

## Working agreements

- Develop on the branch assigned for the session. Commit and push when work is
  complete. Don't open a PR unless asked.
- **Commit messages:** lowercase `area: what changed` (e.g.
  `voice: sharpen three-pillars opening`, `timeline: fix polynomial scaling`).
  Keep them descriptive — the old `uff` / `529.822` style is the thing we're
  replacing.
- **Meta rule (keep habits clean):** one rule lives in one place. If a rule
  already lives in a deep doc, link to it here — don't paste a second copy that
  can drift.
