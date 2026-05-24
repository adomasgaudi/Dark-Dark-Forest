# Science Curriculum Project — Context for Claude Code

Read this file at the start of every session. It contains everything needed to continue work without re-explaining.

---

## What this project is

A story-driven science curriculum for grades 5–12, built as HTML files. Target audience: Lithuanian education company, eventually students. The curriculum will become a website.

**Author:** Gaudi (Adomas)  
**Language:** English — the best science sources are in English. Lithuanian frameworks may need to adapt.  
**Philosophy:** Deep Forest approach (after Krashen's Input Hypothesis) — students encounter inspiring questions first, precision and rules come later.

---

## Design rules

All HTML files follow the same design system. **Do not deviate.**

- Background: `#fff`, text: `#111`
- Font: `Inter` from Google Fonts, 15px, line-height 1.7
- Max-width: `740px`, centered, padding `80px 24px 120px`
- Minimalist — no dark themes, no decorative elements, no color blocks
- Subject tags are the only color: small pill labels with light background tints
- Structure: vertical blog, clear hierarchy, generous whitespace
- Reference aesthetic: antfu.me

### Subject tag colors
```css
.tag-phys  { color: #2563eb; border-color: #bfdbfe; background: #eff6ff; }
.tag-chem  { color: #d97706; border-color: #fde68a; background: #fffbeb; }
.tag-math  { color: #16a34a; border-color: #bbf7d0; background: #f0fdf4; }
.tag-hist  { color: #7c3aed; border-color: #ddd6fe; background: #f5f3ff; }
.tag-bio   { color: #db2777; border-color: #fbcfe8; background: #fdf2f8; }
```

### Blockquotes (verbatim monologue)
```css
border-left: 2px solid #ddd; padding-left: 16px; color: #555; font-style: italic;
```

### Artifacts
- `● built` — green pill: `color: #16a34a; border-color: #bbf7d0; background: #f0fdf4`
- `○ planned` — grey pill: `color: #999; border-color: #e8e8e8; background: #fafafa`

---

## Files in this project

| File | Purpose |
|------|---------|
| `curriculum-map.html` | The main curriculum document — for the Lithuanian education company |
| `braindump.html` | Working notes — Gaudi's ideas captured from conversation |
| `CONTEXT.md` | This file |

### Existing artifact HTMLs (built in previous sessions)
- Antibonding → Spinors (8-layer learning path)
- Timeline: Antiquity → 1000 CE
- Population + criticality chart
- 3-pillar convergence chart
- Matrices workbook
- Elements treemap, 3D cubes, nested cube
- Pop III enrichment chart
- Abundance ladder
- Alchemy game (17th century chemistry simulation)

---

## Curriculum structure

### Philosophy
The spine follows science history as a **chain of discoveries** — each unlocked by a new tool or observation. Students go into the "deep forest" first (inspiring questions, big ideas) and work backwards to the precision exams demand.

Italic items in the curriculum = optional deep dives. Never required.

### The 5 discovery chains

**Chain 0 · Prologue (Grades 5–6)**  
Before science — why it didn't happen sooner.  
Harari: acceptance of ignorance. Carroll: criticality / sandpile model. Kerala school as near-miss.

**Chain 1 · Grades 6–7**  
Gases → mass conservation → atomic theory  
Phlogiston collapses when you weigh the products. Lavoisier, Dalton.

**Chain 2 · Grades 7–8**  
Telescope + conservation of momentum → Newton's laws  
Kepler's data + Galileo's experiments + Newton's math. Three separate laws become one equation.

*[Milestone: Grade 8 — Vilnius Lyceum entry exam. Math 25pts, Physics 15pts, History 15pts, Lithuanian 25pts]*

**Chain 3 · Grades 8–9**  
Light + electrical tools → EM unification  
Maxwell's four equations. Out falls the speed of light. Light was not mentioned.

**Chain 4 · Grades 9–10**  
Tools + chemistry → particles, atom model  
Cathode rays, Rutherford scattering, Bohr model. The atom has internal structure.

**Chain 5 · Grades 10–12**  
Electron + light → relativity + quantum mechanics  
Blackbody crisis, photoelectric effect, de Broglie, Schrödinger. Also: human biology / biochemistry.

*[Milestone: Grade 12 — Brandos egzaminai + SAT / international readiness]*

**Chain 6 · TBD**  
Not yet defined.

### Math thread
Math is not yet threaded through the chains. It needs to be added — showing which math was required at each step (geometry, logarithms, calculus, complex numbers, linear algebra). To be done in a future session.

---

## Key ideas to preserve

1. **Deep Forest / Krashen** — intuition before rules. Inspiring question first, precision second.
2. **Natural science boundary** — "bracket the unknowable, expand the knowable." Science is the agreement to only play the game you can win.
3. **Criticality (Carroll)** — Scientific Revolution = sandpile reaching critical slope. Kerala school is the sharpest proof: Madhava had Taylor series in 1400 CE, it didn't cascade because the pile wasn't ready.
4. **Multiplication is 2D** — not natural on a line. Teaching insight for math.
5. **Derive, don't memorize** — quadratic formula from completing the square. Derivative of x² from area geometry. Pascal's triangle from binomial expansion.
6. **Memorization creates hooks** — useful when it attaches to context. Useless when it doesn't. Natural re-exposure beats spaced repetition long-term.

---

## How to work on this project

- Edit text content directly in the HTML files
- For structural or style changes, describe what you want and Claude Code will show a diff
- Keep both files in sync with the same design system
- When adding a new chain or unit, follow the existing pattern exactly
- Never introduce dark themes, gradients, or decorative elements

---

*Last updated: Session 2 · May 2026*
