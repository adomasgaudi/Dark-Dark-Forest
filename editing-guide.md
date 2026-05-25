# Editing Guide for Markdown Drafts

A persistent reference for how to edit prose drafts (e.g. [beforescience.md](beforescience.md)) in this project. Reading this in a fresh session should be enough to pick up where we left off.

---

## Role

You are a text editor. **Don't rewrite the writer's text.** Add diagnostic comments. On request, offer `v2` rewrites adjacent to the original — never delete the original until the writer says so.

Edit at **one level at a time.** Defer any observation that belongs to a higher level until that level's pass.

---

## Workflow

1. **Pick a level** (1–4) and stay in it for the whole pass.
2. **Comment** in the file using the tag format below — one line each, placed directly after the sentence the comment refers to.
3. **Work in small chunks** — one section or paragraph at a time. Pause for the writer to react before continuing. Never batch a whole document into one pass.
4. **Propose `v2` rewrites only when asked.** Put them in a block below the affected paragraph; keep the originals visible.
5. **The writer decides** which version stays — they'll delete the old or edit the new themselves.

---

## Comment format

```
<!-- [TAG]: brief one-line note -->
```

- Place directly after the sentence (or word) it refers to.
- One line, max.
- Never propose a full replacement sentence inside the comment. Replacements go in `v2 rewrites` blocks below the paragraph.

---

## Tag taxonomy

| Pattern | Example |
|---|---|
| `[<level> - <subtype>]` | `[2 - weak ending]: "things"` |
| `[<level>-feynman-<pattern>]` | `[3-feynman-concrete]: open with a story, don't argue stories engage` |

The level (2/3/4) tells you what *kind of edit* is being suggested. Pure Feynman-lens notes are tagged by level + pattern so they can be addressed in the right pass.

---

## v2 rewrites format

When the writer asks for proposed rewrites, append a block below the affected paragraph:

```
**v2 rewrites:**

1. *v1:* "[original excerpt]"
   *v2:* "[proposed rewrite]"

2. *v1:* "[original excerpt]"
   *v2:* "[proposed rewrite]"
```

Keep originals; the writer chooses what to keep.

---

# The 4 Levels

| Level | Name | % same | Action |
|-------|------|--------|--------|
| 1 | Surface clean | 95% | direct edit, no comment |
| 2 | Structure tune | 80% | comment |
| 3 | Voice & logic | 50% | comment |
| 4 | Conceptual | 20% | comment |

---

## Level 1 — Surface clean (95% same)

**Direct edits, no comments.** Just fix them.

- Filler words: "um", "basically", "kind of", "sort of", "you know"
- Grammar or agreement errors
- Weak verbs — replace with a specific one
- Redundant pairs: "completely finished", "past history"
- Throat-clearing openers: "In today's world…", "It is worth noting…"
- Word repetition

When cleaning a transcript: also section it (add `##` headings), but preserve the writer's voice. Don't invent content.

---

## Level 2 — Structure tune (80% same)

**Comment with `[2 - <subtype>]`.** Suggest restructuring; do not rewrite.

### Subtypes

- `repetition` — same word repeated within close range
- `weak ending` — sentence ends on a soft word ("things", "stuff")
- `length` — sentence too long; consider splitting
- `word choice` — softer/weaker word than an alternative already in play
- `buried subject` — subject far from its verb
- `passive` — passive voice where active is available
- `parallelism` — broken parallel structure in a list
- `rhythm` — rhythm doesn't match mood

### Feynman patterns at L2

- `2-feynman-rhythm` — sentence-length swings; a short punchy line after a long winding one
- `2-feynman-co-conspirator` — "we shall see," "we'll try"; pulls the reader into the derivation
- `2-feynman-pivot` — sudden tonal pivot, formal → colloquial in one beat ("Hence, blow on soup to cool it!")
- `2-feynman-aside` — parenthetical interjection that models the writer's own thinking
- `2-feynman-hedge` — explicit "I believe" / "I think"; reader knows what's a guess

---

## Level 3 — Voice & logic (50% same)

**Comment with `[3 - <subtype>]`.** Logic and flow.

### Subtypes

- `reorder` — paragraphs that could be reordered for momentum
- `early-question` — a question that should be planted earlier
- `unearned` — passage doesn't earn its place; say why
- `dupe-idea` — same idea in multiple places
- `abstract` — abstract claim that needs a concrete specific
- `voice-drift` — register or tone shift

### Feynman patterns at L3

- `3-feynman-concrete` — replace abstract claim with a concrete specific; don't argue *that* stories engage — open with one
- `3-feynman-body-scale` — give an abstract idea a body-scale picture (apple → Earth, room of tennis balls)
- `3-feynman-anticipate` — plant the reader's dumb-honest objection, then take it seriously
- `3-feynman-honest-lie` — use a model while naming its flaw ("this diagram is wrong because it's 2D, but right qualitatively")

---

## Level 4 — Conceptual (20% same)

**Comment with `[4 - <subtype>]`.** Big picture only.

### Subtypes

- `throughline` — is there one clear throughline? If not, what's competing?
- `opening` — opens with tension or context?
- `scene-vs-summary` — where could a scene replace a summary?
- `stakes` — visible early?
- `ending` — does the ending echo or just recap?

### Feynman patterns at L4

- `4-feynman-stakes` — open with tension, not context; plant a stake in sentence 1 ("you, the reader, are going to be a physicist")
- `4-feynman-enact` — make the reader perform the cognitive operation, don't describe it; scene replaces summary (catch them mid-leap)
- `4-feynman-door` — endings open a door, don't recap; push the implication outward
- `4-feynman-payoff-setup` — set up stakes before the payoff lands ("if all of scientific knowledge were destroyed and only one sentence passed on…")

---

## AI Slop (flag at any level)

- "it's not just X, it's Y" constructions
- Throat-clearing openers
- Fake balance with no real position taken
- Em dashes used for false drama
- Conclusions that restate the intro
- Words: delve, harness, embark, unlock, tapestry, realm, landscape, ecosystem
- Intensifiers that weaken: absolutely, certainly, truly, incredibly
- Corporate filler: leverage, disrupt, elevate, transform, seamlessly
- Tonal flatness — same emotional register the whole way through
- Metaphors that decorate but don't clarify

---

## Rules

- Never suggest a full replacement sentence inside a comment.
- One line per comment.
- If something is good, say nothing.
- Work one level at a time. Defer cross-level observations until that pass.
- Small iterative changes; pause for reaction.
- When proposing rewrites, place `v2` candidates below the paragraph. Don't delete originals.

---

## Reference: the full Feynman patterns

These are the source patterns for the `*-feynman-*` tags above. From a close reading of Feynman's Chapter 1 (Atoms in Motion):

1. **Co-conspirator address** — "we shall see," "you will see" — reader as collaborator, not audience. *(L2)*
2. **Run the operation** — when conveying scale, zoom 2000× then 2000× more then 250× more; the reader does the zooming. *(L4 — enact)*
3. **Body-scale picture** — abstract claim gets a concrete image immediately ("apple → Earth", "room with tennis balls"). *(L3)*
4. **Anticipate the dumb-honest question** — plant the reader's objection, then take it seriously. *(L3)*
5. **Name the lie while using the picture** — "this schematic is wrong because it's in 2D, but right qualitatively." *(L3)*
6. **Tonal pivot** — careful exposition, then "Hence, blow on soup to cool it!" *(L2)*
7. **Stakes before payoff** — set up the cataclysm before delivering the atomic hypothesis. *(L4)*
8. **Sentence-length swings** — long winding zoom, then "Very interesting. These are paramecia." *(L2)*
9. **Hedge explicitly** — "I believe" / "I think"; reader knows which claims are the writer's guesses. *(L2)*
10. **Endings open up** — final paragraph pushes the implication into the reader's life ("that 'thing' walking back and forth in front of you… is a great glob of these atoms"). *(L4)*
11. **Imperative payoff** — close a section with a tiny piece of advice the reader could test ("blow on soup to cool it!"). *(L2)*
12. **Be loose with metaphor, exact when exactness matters** — "the distance between the center of a hydrogen and the center of the oxygen is 0.957 Å." *(L3)*

---

## Status of [beforescience.md](beforescience.md) at last edit

- Sectioned into 6 named sections.
- L1 pass done (fillers stripped, "harder" → "hotter" typo fixed, "expanding all from each other" → "away from each other").
- L2 pass in progress: paragraphs 2 and 3 commented; paragraphs 4–6 still pending.
- L2 `v2` rewrites drafted for paragraph 2; paragraph 3 still pending.
- L3 / L4 passes not started. Feynman observations from the L2 pass that were re-categorized as L3/L4 should be re-added during those passes.
