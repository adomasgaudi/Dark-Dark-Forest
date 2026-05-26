# Project state — handoff for future sessions

Read this together with [context.md](context.md) at the start of any new session. Between the two, you have everything needed to continue work without re-explaining.

**Last updated:** 2026-05-25 (after bu-01 was rewritten as The Cheat Sheet).

---

## What this project is

Static HTML curriculum for grades 5 → University. Author: **Gaudi (Adomas)** — building it for a Lithuanian education company, eventually for students. Language: English. Deployed on Netlify. **No build step.** Aesthetic reference: antfu.me.

Two folders:
- `first-principles/` — the live curriculum site
- `braindump/` — working notes (sessions 1–7 logged in `braindump/index.html`)

Root-level `.md` files are working documents for prose and methodology:
- [context.md](context.md) — project rules (font, colors, layout, structure)
- [voice.md](voice.md) — literary inspirations (Borges, Feynman, Levi, Sagan, Nabokov, …) and 8 concrete writing moves
- [editing-guide.md](editing-guide.md) — prose-editing methodology (4 levels, tag taxonomy, v2 rewrites)
- [pedagogy.md](pedagogy.md) — teaching method (sprinkle, don't lecture; history as tool; math-in-physics; cross-connect formulas; don't trust your knowledge). Living doc, not student-facing.
- [monologue.md](monologue.md) — Gaudi's spoken drafts → polished prose (10 topics)
- [beforescience.md](beforescience.md) — current prose draft (became `first-principles/before-science.html`)
- [state.md](state.md) — this file

---

## The single-most-important architectural decision: data.js

[first-principles/data.js](first-principles/data.js) is the **only** place exam topics and lecture-to-topic mappings live. It is loaded by `map.html` and by every lecture page that needs to display covered topics.

Concretely:
- `examData8to10.subjects[].topics[].points[]` defines every examinable topic with a **stable kebab-case ID** (e.g. `p-univ-fusion-stars`, `p-osc-echo`, `p-light-refraction`).
- `lectureData8to10.bottomUp[]` and `.topDown[]` tag each lecture with a `covers: [{ topicId, degree }]` array. `degree` is `'full'` / `'partial'` / `'mention'`.
- Helper functions (`_buildTopicLookup`, `_degSymbol`, `_degLabel`, `_resolveCoverage`, `_findLecturesCoveringTopic`, …) live in data.js so any page can use them.
- `map.html` keeps its render functions inline (they're map-specific) and loads data.js via `<script src="data.js">` **before** its inline `<script>`.
- Each lecture page can declare a topics-covered mount and let a small inline render script walk `lectureData8to10` for its own ID.

**Stable contracts:** topic IDs are referenced by `lecture.covers` AND by page anchors (`map.html#topic-{id}`). Never rename or remove an ID without updating every caller. If you change a topic's wording, keep its ID.

---

## 2025 Lithuanian fizikos stojamasis syllabus — merged into data.js

Lithuanian exam syllabi drift year to year. As of 2025 the Vilniaus Licėjus G8 entrance exam has five topics. Both 2025 topics AND older topics live in data.js (older mock papers still test the old ones).

| Topic | data.js IDs | New in 2025? |
|---|---|---|
| I. Mechanical oscillations and waves (sound) | `p-osc-*` | ✅ new |
| II. Light (optics) | `p-light-*` | ✅ new |
| III. Structure of matter | `p-sm-*` | already present |
| IV. The Universe | `p-univ-*` | already present |
| V. Electricity | `p-el-*` (+ `p-el-electrification`, `p-el-direction`, `p-el-fuse`) | partially new |

data.js's header has a "Syllabus drift" comment block documenting this. When future syllabi change, append rather than replace.

---

## bu-01 is now "The Cheat Sheet" — the project's thesis

It used to be "Before science — why it didn't happen sooner" (Harari + Carroll prologue, grades 5–6). It is now the **pedagogical thesis** for the whole curriculum, framed ironically:

> "Memorize these and you will not fail. Understand them and you will not need to memorize."

The page (`first-principles/before-science.html` — filename kept) opens with a "Dear student" address, lists every G8 topic with formulas in styled blocks, and closes with a CTA → `gases-to-atoms.html` (bu-02). data.js's bu-01 `covers` array tags all 38 G8 Physics topic IDs at `full` degree.

The pedagogical point: memorize-without-understanding is the failure mode of standard education. The Cheat Sheet hands the student exactly what they need to pass, then the rest of the curriculum is the antidote.

**Do not revert** bu-01 to the old Harari/Carroll content without explicit user direction.

---

## Standard lecture-page pattern

For any new lecture page in `first-principles/`:

1. Copy layout from an existing lecture page (`gases-to-atoms.html` is a good template — `before-science.html` is now the Cheat Sheet which has its own structure).
2. Set `<title>`, lecture-tag (e.g. `Bottom-up · Lecture 2 · Foundations`), nav-brand (`bu-02`), H1, grades, unit-question blockquote.
3. (Optional) Topics-covered panel — declare a mount:
   ```html
   <div class="topics-covered" id="topics-covered-mount" data-lecture-id="bu-02">…</div>
   ```
   The inline render script at the bottom looks up the lecture by ID in `lectureData8to10` and renders its topic list.
4. (Optional) Featured clip — YouTube card with **prominent timecode**: 12px title (muted grey), 17px bold timecode (`0:05 → 1:35`).
5. (Optional) Expandable written version — use `<details><summary>` with cleaned-up monologue prose.
6. Bottom of file: `<script src="data.js"></script>` then the inline render script.

Filename convention: descriptive kebab-case (`gases-to-atoms.html`), not numeric (`lec02.html`).

---

## Voice and style rules

From [voice.md](voice.md) and explicit user feedback during this session:

- **Equation:** Levi's weight + Feynman's joy + Borges's restraint.
- **No semicolons** in the writer's prose or v2 rewrites — user considers them an AI tell. Use commas, periods, em-dashes.
- **"Rearrange" ≠ "rewrite"** — when applying Pass 2 to a monologue, preserve the writer's exact words and only restructure + add ~20 connector words. Full prose rewrites are Pass 3+ and never done without explicit ask.
- **Edit at one level at a time** — [editing-guide.md](editing-guide.md) defines four levels (L1 Surface → L2 Structure → L3 Voice → L4 Conceptual). Stay in one level per pass. Defer cross-level observations until that level's pass.
- **Comments inline** on prose drafts use `<!-- [X.Y - subtype]: note -->` format. v2 rewrites go in a `**v2 rewrites:**` block below the paragraph. The writer signals decisions inline:
  - ` D` suffix = "done, keep my edit" → strip asterisks, delete comment + v2 entry
  - `X.Y vN` (in chat) = "use version N" → apply that version, strip asterisks, delete comment
  - `SYN>>word` = "give me synonyms here"

---

## File layout (quick map)

```
first-principles/
  index.html              landing page (hero, principles, inquiry form)
  map.html                curriculum overview — loads data.js, renders exam table + bu/td tables
  data.js                 SINGLE SOURCE OF TRUTH (examData + lectureData + lookup helpers)
  before-science.html     bu-01 — The Cheat Sheet (filename kept despite content change)
  gases-to-atoms.html     bu-02 — Gases → mass conservation → atomic theory
  newton-laws.html        bu-03 — Telescope + momentum → Newton's laws
  em-unification.html     bu-04 — Light + electrical tools → EM unification
  atom-model.html         bu-05 — Tools + chemistry → particles, atom model
  modern-physics.html     bu-06 — Electron + light → relativity + quantum mechanics
braindump/
  index.html              working notes — sessions 1–7 logged
context.md                project rules
voice.md                  literary inspirations + 8 writing moves
monologue.md              Gaudi's drafts (10 topics; topic 1 done at Pass 2, others at Pass 1)
editing-guide.md          editing methodology
pedagogy.md               teaching method (sprinkle ideas, not lecture); living doc
beforescience.md          draft prose preceding the cheat-sheet HTML
beforescience2.md         empty scratch file
state.md                  this file
```

---

## Workflow gotchas

- **PowerShell UTF-8 corruption** — `Get-Content` / `Set-Content` on Windows reads as CP1252 and writes UTF-16, corrupting em-dashes / · / ▶ into mojibake (â€" / Â· / â–¶). For bulk file edits use `sed -i` via Bash, which preserves UTF-8 cleanly. Verify with `git diff` after any large encoding-touching edit.
- **YouTube embed Error 153** — some videos disable third-party embedding. Don't try `youtube-nocookie.com` (doesn't fix it). Fallback is a thumbnail-link card: `https://img.youtube.com/vi/{ID}/maxresdefault.jpg` with `hqdefault.jpg` fallback via `onerror`, wrapped in an `<a>` to the watch page. Even simpler: a card with title + bold timecode (12px / 17px), no thumbnail.
- **`git mv`** — not needed. Plain `mv` works; Git detects renames at commit time.
- **`<script src="data.js">` order** — must come **before** any inline `<script>` that references `examData8to10` or `lectureData8to10`. Scripts execute in document order.

---

## Pending threads (carry-forward TODOs)

- **9 more monologue topics** in [monologue.md](monologue.md) still at Pass 1. Pass 2 (rearrangement only, preserve writer's words) was done only for topic 1 (Three Pillars). Apply topic-by-topic when the user asks so each commit's diff stays isolated.
- **Lecture pages bu-02 to bu-06** are mostly skeletons. Real lesson content needed.
- **Featured-clip videos** — most lecture pages have placeholder video links. Real URLs to wire in.
- **Filename `before-science.html`** still named after the old content. User may want `cheat-sheet.html`; that's a 4-touchpoint change (rename file + update `page:` in data.js + two `href`s on `index.html`). Not done unless asked.
- **Top-down curriculum** — only td-01..td-03 defined in data.js. Many more to come.
- **Math thread** — context.md notes math is not yet threaded through the chains. Future pass needed to tag which math (geometry, logs, calculus, complex numbers, linear algebra) was required at each historical step.
- **Chain 6** — referenced in context.md but not yet defined.

---

## Things to NOT undo without explicit ask

- The data.js single-source refactor — don't re-inline data into individual pages.
- bu-01 as The Cheat Sheet — pedagogical thesis. Don't revert to Harari/Carroll prologue.
- Pre-2025 syllabus topics in data.js — kept on purpose; older mock papers still test them.
- Existing topic IDs — never rename without auditing every `covers` reference and every page anchor.
