# Pedagogy

Working notes on **how** this curriculum is taught. For me (Gaudi) and for the assistant — **not for students**. Students should never have to read methodology to begin learning. The method should be implied, sprinkled in when needed, understood through the text itself.

A separate methodology section in a lecture page can exist — but it must never be the gate the reader has to pass through to reach the actual content.

---

## don't make students read about how they'll learn

Most students will not commit to reading methodology before the content. They want to scroll to the practical part and get on with it. So:

1. Give them exactly what they want.
2. Sprinkle in everything I want them to have, so that it is unavoidable.

This document captures *what* gets sprinkled in and *why*. The reader of the curriculum should pick up the method without realising they were taught it.

---

## Why I wouldn't just memorise blindly

Subjects in school exist for a few different reasons, and you should know which is which.

The first is the best one, it's general education. It's understanding and comprehension of the world. This is the part that is the most interesting and the most useful and the longest lasting.

The second is that some of what you learn is the foundation for everything else. Learning how to measure sound waves is not really all that important to your understanding of nature — they are about waves. Once you understand a wave with precision, you have something that you can re-use in optics, in electromagnetism, in quantum mechanics. You learn the formula for one wave and you have learned a piece of the language nature uses everywhere.

The third is that some of what you learn is the working knowledge of a profession. Trigonometry, resistance in circuits, counting reactants and products in chemistry — these are drilled to precision because precision is exactly what an engineer or a chemist needs on a Tuesday morning.

So far so good. I am not arguing against learning these things, nor against drilling them, nor against being tested on them. I am arguing for something narrower. You should know why you're learning it.

The problem is that the drill was once a tool, sharpening something useful for a larger purpose. Over time standardization of curricula and tests, and the tool quietly became the goal. Students now memorize formulas to pass the test that exists to verify they memorized the formulas. Why anyone started doing this in the first place — that part got lost.

What I want to do is put the tool back where it belongs. The drilling exercises and the uninteresting topics are a tool to understand and use everything else, so let's try and use it that way.

---

## Ideas

### 1. Start with the practical question

Open each lecture with what the student actually needs to know to solve the exam problem. From there, lead them to the story, to the logical derivation, or to a related field. Do not open with "the history of X" or "the philosophy of Y" — open with the question they came for, and let everything else follow as the answer expands.

### 2. Sprinkle in philosophy of science

Do not teach philosophy of science as a separate course. Embed it. Every time a derivation makes a leap, name the assumption. Every time a model is convenient but wrong, name the lie. The lesson lands because it is attached to the thing the student is already trying to learn.

### 3. History as a tool, not a side quest

History is not optional flavour. It is the mechanism for understanding. Once you already know the answer, it is very easy to miss the steps that got there. Walking the historical path forces the reader to step through what someone in 1700 did *not* yet know, and to notice the moves that took us from there to here.

This is also the cleanest way to teach the philosophical lesson — that science is built from incomplete attempts — without ever announcing the lesson.

### 4. Integrate mathematics with physics and chemistry

Math should not be a prerequisite the student fetched somewhere else. When a physical formula needs a piece of math, *that* is the moment to teach that math — anchored to the physical problem that needed it. The math feels more intuitive that way, and the physics feels less arbitrary.

Mathematicians have also pursued math for its own sake, which is interesting on its own and worth a sidebar when it lands at the right moment. But the default: math arrives when physics or chemistry needs it. Open up the *anatomy* of the math at the point of use, so the physical formula no longer reads as a black box.

### 5. Cross-connect formulas

Many formulas across topics share the same shape. Surface those connections explicitly rather than letting the student rediscover them on their own (most won't):

- The inverse-square law applies to every force or quantity that spreads over a spherical volume — gravity, light intensity, sound intensity, electric field. One pattern, many appearances.
- Many formulas relate quantities to distance or time and follow the same internal pattern.
- Sound intensity is rarely used directly — we use decibels, a logarithmic unit. What would happen if we applied the same logarithmic treatment to other power-per-area quantities, or to other quantities with huge dynamic range? Which common physical units would benefit from a logarithmic form, and which would not?

Each cross-connection is also a chance to ask: *why* does this same pattern keep recurring? That question opens onto the deeper structure of physics.

### 6. Don't trust your knowledge

This lesson should be repeated at many separate moments, never as a standalone lecture. Specific moves:

- Point out logical holes in common, popular science explanations.
- Point out that the student is likely to make those same holes in their own reasoning, **because** knowing the answer is what lets the holes form. The brain skips the steps it thinks it has already done.
- Distinguish *memorisation* from *understanding*. Students often mistake the first for the second. The Cheat Sheet exists in part to expose this distinction — the formulas alone do not constitute understanding.
- Distinguish *quality of the science* from *quality of the information about it*. Even when the underlying science is sound, the information the student reads about it may not be. Dark matter theories are a good test case — the underlying observations are solid, much of the public discussion around them is not.

The aim of this lesson is meta: the student becomes their own quality check, rather than a passive consumer of whatever they are told.

### 7. Iceberg learning — tag each explanation by depth

Categorise every explanation by how deep into the iceberg it goes. The student should always know which tier they are reading.

**The holy trio** — simplicity *and* accuracy *and* clarity in one. The Feynman / "explain it like I'm five" target. Usually achieved through a single wonderful analogy. Rare. When you find one, use it — an explanation that lives high on the iceberg but happens to also be deep is the best teaching artifact there is.

**Eight tiers, from shallowest (most common, least accurate) to deepest (rarest, most accurate):**

| Tier | Label | What it looks like |
|------|-------|---------------------|
| 1 | **Folk** | Widespread but wrong. The intuitions everybody has by default — "heavier objects fall faster", "there is no gravity in space". Not insulting to hold — brains build these on their own. Worth naming so we can step away from them deliberately. |
| 2 | **Popular** | Read a pop-science article or watched a YouTube video. Correct vocabulary, shallow grasp. The "black hole is a giant vacuum cleaner" stage. |
| 3 | **School** | The *typical* high schooler with slightly above-average grades. Textbook-correct but no underlying machinery. Knows F = ma without yet knowing what an inertial frame is. |
| 4 | **Undergraduate** | First-year university physics. Methods + simple derivations. Can solve textbook problems with the standard tools. |
| 5 | **Graduate** | Advanced specialised study. Full mathematical machinery for one branch. |
| 6 | **PhD** | Research-level depth in a sub-field. Can read the literature and identify the moves. |
| 7 | **Frontier** | Working on open questions. Operating at the edge of what is currently known. |
| 8 | **Nobel** | Top of the world — discovering new fundamentals. |

A given fact in physics can usually be told at several of these tiers. The curriculum's job is to (a) choose the right tier for the student in front of us, (b) say *which* tier the explanation lives at, and (c) signal that a deeper tier exists if the student wants it.

This avoids the most common failure mode in popular science: a student learns the Tier 1 or Tier 2 version, mistakes it for the truth, and never realises there is more below.

Note on Tier 3 ("School"): plenty of individual high schoolers sit higher than this. Tier 3 names the *typical* high-school grasp of a topic — not a ceiling.

*(See [waves.md](waves.md) for a worked example: diffraction explained first at the top of the iceberg, then deeper, with a deliberate marker on the tier shift.)*

### 8. Tag every claim with its evidence and its consensus

The student should always be able to ask "how do we know this?" and find the answer attached to the claim itself, not buried in a footnote or assumed. Every meaningful claim in the curriculum carries two markers.

**Marker A — kind of support.** What kind of warrant does this claim have?

- **Experimentally proven** — confirmed by repeatable experiments. *(Newton's laws at human scales. Conservation of momentum. The Doppler effect.)*
- **Theoretically derived** — follows mathematically from established theory. *(E = mc² from special relativity. Orbital periods from Newton's law of gravitation.)*
- **Logically derived** — follows by deductive argument from first principles or definitions. *(The impossibility of perpetual motion. Conservation of energy in a closed system.)*
- **Theoretical / proposed** — internally consistent, not ruled out, but not yet confirmed by experiment. *(String theory. Specific dark-matter candidates. Many quantum-gravity proposals.)*

**Marker B — consensus.** What fraction of respected scientists in the relevant field accept the claim?

| Marker | Consensus | Read as |
|--------|-----------|---------|
| **★★★★★** | ~99% | Overwhelming. Treating the claim as false would require discarding enormous amounts of evidence. |
| **★★★★** | ~80% | Strong majority. Reasonable specialists disagree on details, not the core. |
| **★★★** | ~50% | Genuinely contested. Multiple serious frameworks alive at once. |
| **★★** | ~20% | Minority position. Held by a serious sub-community but not widely accepted. |
| **★** | <5% | Fringe or speculative. May yet turn out right — currently lacks support. |

"Respected scientists" means active researchers in the relevant field whose work passes peer review. *Not* laypeople, journalists, or social-media physicists — anyone can hold any view, but the marker tracks only the scientific side. Public consensus and scientific consensus often diverge sharply (climate, vaccines, evolution); this is exactly why the marker is needed.

The two markers can land on different axes for the same claim:

- The Big Bang: ★★★★★ + *experimentally proven* (CMB, redshift, light-element abundances).
- Cosmic inflation: ★★★★ + *theoretically derived* (mathematically clean, indirectly supported).
- A specific dark-matter candidate (e.g. WIMPs): ★★ + *theoretical / proposed*.
- Conservation of energy in a closed system: ★★★★★ + *logically derived*.

This lets the student see what kind of grip the field actually has on each claim, instead of treating "physics says X" as a single confident voice. It also doubles as a quiet teacher of how science works — that warrant and consensus are separate things, both worth tracking.

**Worked example — established consensus vs. unknown mechanism.** A useful pattern to surface whenever both halves co-exist in one field:

- *Origin of life.* We are essentially certain that life on Earth evolved from non-living chemistry — ★★★★★ + *experimentally proven* in broad strokes (fossil record, molecular phylogeny, repeated lab demonstrations of organic molecules forming spontaneously). But the specific path from primordial soup to the first self-replicating cell — that step is ★★ + *theoretical / proposed*. Many candidates, no definitive answer yet.

- *Quantum mechanics and classical reality.* Quantum mechanics is ★★★★★ + *experimentally proven* — the most precisely-tested theory we have. But the question of *how* quantum behaviour gives rise to every classical-looking phenomenon (decoherence, measurement, the apparent existence of definite outcomes) is ★★★ + *theoretical / proposed*. Multiple serious frameworks (Copenhagen, many-worlds, decoherence, pilot-wave) compete to fill in the details.

The shape is the same in both: a high-level *that* is settled, while the low-level *how* remains genuinely open. Teach students to look for this pattern — it recurs across science, and conflating the two halves is where most public confusion about "scientific knowledge" comes from.

### 9. Sharpen imagination with exact numbers

Every hypothetical, every thought experiment, every "imagine that..." in this curriculum should come with concrete parameters.

- Not "imagine an electron moves fast" — *imagine an electron moves at 0.99 c.*
- Not "a sphere of detectors around an electron" — *100 detectors arranged on a sphere of radius 10 cm.*
- Not "a distant galaxy" — *a galaxy 100 million light-years away, receding at 2000 km/s.*
- Not "Cavendish measured G" — *Cavendish used two 158 kg lead balls and two 0.73 kg test balls separated by 23 cm, measuring a twist of about 0.16 milliradians.*

**The argument.** Vague imagination produces vague intuition. Precise imagination produces real grip. When the student knows the exact dimensions, they can run the scenario in their head and notice which quantities matter, which can be varied, and which are doing the actual work in the answer.

Math is not a separate skill imposed on top of physics — it is the tool that makes imagination precise enough to move forward. Once the picture is sharpened by numbers, the student can take it to the next level: *now imagine the electron at 0.999 c — what changes? Now 1000 detectors — does the result hold?* The math turns "I sort of get it" into "I can predict the next step".

**The rule.** Whenever the prose says "consider a..." or "imagine that...", attach the specific parameters. Make the hypothetical real by making it numerical.

This idea threads through several of the others:

- **With Idea #3 (history as tool)** — present historical experiments with their actual numbers. Specific equipment, specific measurements, specific results.
- **With Idea #4 (math integrated)** — the numbers are *why* the math is needed. The student arrives at the math because the scenario demanded it, not because the textbook said so.
- **With Idea #5 (cross-connect formulas)** — the inverse-square law becomes vivid when you compute it: a light source 1 m away delivers exactly 4× the intensity of one 2 m away.
- **With Idea #7 (iceberg learning)** — deeper tiers usually demand more numerical precision. A folk-tier explanation can hand-wave at "very far away". A graduate-tier explanation cannot.

### 10. Memory techniques — natural first, unnatural when needed

Use **memory techniques everywhere it helps**, both natural and unnatural.

**Natural memory techniques** — the kind that fall out of *understanding the thing*. Physics is full of these:

- Cross-linking between disciplines. The same formula recurring in optics, sound, and electricity is a natural memory hook — you do not have to memorise the formula three times.
- Historical narrative. A formula remembered as "the thing Cavendish actually measured with two lead balls" sticks differently from a formula remembered as a symbol.
- Causal structure. F = ma is hard to forget once you have watched a cart accelerate under varying force, because the *story* is the equation.

When the natural hook is present, use it. The curriculum's whole bottom-up arc is one large natural memory technique.

**Unnatural memory techniques** — the classical mnemonic toolkit, used as targeted tools, not as a course.

- Memory palaces (loci) — for ordered lists (planet order, periodic-table blocks, the four Maxwell equations).
- The Dominic system / PAO — for digits (Avogadro's number, π, the speed of light).
- Major system — same purpose, different mapping.
- Vivid imagery and exaggeration — for individual stubborn facts (the name of the scientist who discovered the neutron, the difference between *isotope* and *isobar*).

Style: **incremental and inline.** Whenever a lecture hits a name or a number that the student will have to memorise, *suggest* a memory technique on the spot — a tiny mnemonic, or a one-line "try this palace move". The curriculum does not stop to teach a memory course. It teaches a memory technique the moment one would help, and moves on.

Reference: the *Moonwalking with Einstein* toolkit covers everything we need. Use it as a quiet undercurrent, never as a separate module.

### 11. Spaced repetition + input-vs-output, passive-vs-active

The two ideas from language-learning pedagogy that transfer cleanly:

- **Spaced repetition.** Once a fact is learned, schedule it for re-encounter at increasing intervals (Anki, SuperMemo, Leitner boxes — the family of systems built on Ebbinghaus's curve). Re-encountering a fact just as you are about to forget it consolidates it more cheaply than re-reading.
- **Input vs. output, passive vs. active.** Reading a derivation (passive input) is not the same as deriving it yourself with the page closed (active output). The curriculum should explicitly mark which mode each exercise demands. Default to active output whenever the student is consolidating, default to passive input whenever they are encountering something new.

**Implementation:** building a real spaced-repetition engine inside the curriculum is hard — it needs deck management, scheduling, interval tuning, the works. So for now we **set the hooks** and leave the engine for a later phase:

- Each lecture page can carry a list of *flashcardable facts* in a stable JSON structure (fact, prompt, expected answer, tags). When the SR engine arrives, it scrapes these.
- Each exercise carries a *mode* tag (`mode:input` / `mode:output`) so a future review tool can distinguish them.
- The student-facing prose stays unchanged. The metadata accumulates underneath.

This way, when the SR engine ships, the content is already structured for it. No retroactive scrape needed.

### 12. Synonyms — every term seen from many angles

Each technical term should travel with a small set of synonyms. The canonical word stays in the text, but a parallel "synonym pass" lets the student see the same idea phrased two or three ways. The versions are not redundant. Each synonym highlights a different facet of the same concept.

**Examples.**

- *Force* → *push*, *interaction*, *agency*, *compulsion*, *driver*. The math is identical. The intuition each word triggers is different. *Force* sounds violent. *Interaction* sounds gentle and symmetric. *Compulsion* hints at constraint.
- *Energy* → *capacity for change*, *bookkeeping number*, *doing-ability*. The first makes its conservation feel natural. The second makes its abstraction explicit.
- *Field* → *carpet of values*, *background everywhere-quantity*, *plenum*. *Carpet* gets the spatial extension right. *Plenum* hooks back to the term's 17th-century philosophical roots.
- *Wave* → *ripple*, *oscillation*, *periodic disturbance*. *Ripple* is concrete water imagery. *Oscillation* is abstract pure-math.
- *Spin* → *intrinsic angular degree of freedom*, *built-in two-state property*. The canonical case of a misleading word. The synonyms make clear that nothing is actually rotating.
- *Particle* → *quantum*, *excitation*, *lump*, *localised disturbance*. *Quantum* and *excitation* both fight the marble-in-empty-space picture the word *particle* invites.

**The mechanism.** Words come with embedded metaphors. The first time a student hears *force*, the muscular meaning bleeds in. The first time they hear *spin*, they picture a top. These metaphors are useful for getting started and become traps later. The synonym pass keeps the metaphor present (so the term remains intuitive) and provisional (so the student sees through the word to the underlying concept).

**Style.** Synonyms belong alongside the canonical text, not buried in footnotes. Inline parentheses work — *(also called X, or in everyday terms, Y)*. For longer pieces a parallel margin column, a hover-reveal, or a small "alt-term" pill near the heading makes the swap effortless without breaking the reading flow.

**Edge case — when the technical term is honest, name it.** *Acceleration* really does mean the second derivative of position. Inventing a folksy synonym ("speed-changing-ness") buys nothing. The synonym pass is for words that are *misleading* (spin, force, particle, field) or *abstract* (energy, entropy, action). Where the literal word already paints the right picture, leave it alone.

**Pairs with #6 (don't trust your knowledge)** and **#4 (math integrated)**. A student who can name three synonyms for *energy* is harder to fool by anyone (themselves or others) using the word loosely. And the synonyms make it visible *which* mathematical move the word is shorthand for.

### 13. Linear algebra deserves equal billing with calculus — Strang's order

**Gilbert Strang's position** (in his MIT 18.06 lectures, his *Introduction to Linear Algebra*, and several essays) is that linear algebra should be taught as soon as calculus — if not before it. The standard order, calculus-then-linear-algebra, is a historical accident, not a pedagogical truth. Newton happened to invent the calculus in the 17th century, so the universities have started there ever since. Strang argues we should stop.

**The case in short.**

- **Linear algebra is more concrete.** A matrix is a grid of numbers you can see. A vector is an arrow you can draw. A limit is a delicate piece of analysis that took mathematicians two hundred years to make rigorous. Both deserve rigour, but only one resists the mental picture.
- **Linear algebra is more useful for the modern student.** Data science, machine learning, computer graphics, statistics, quantum mechanics, optimisation, networks, regression — they all live in matrix language. Calculus matters too, but in 2026 the student is much more likely to need eigenvalues than to need an ε-δ proof.
- **The historical order is reversed for what students will actually do.** Continuous mathematics was invented to describe a smooth world. Discrete and linear mathematics was invented for the world of data, networks, and computers. Teach the one closer to the student's century first.
- **Linear algebra scales cleanly from 2D to 3D to nD.** The Pythagorean theorem in 2D extends without modification. Calculus, by contrast, takes a long ladder of generalisations (single-variable → multivariable → vector calculus → differential forms) to reach the same generality.

**Where this clashes.** Most standard high-school curricula in the Lithuanian system and elsewhere park calculus in grade 11 or 12 and barely touch linear algebra outside a single chapter on vectors. So Strang's order is a deviation. This curriculum already sprinkles vectors and matrices into physics from grade 9 (via [Riemann Surface](first-principles/riemann-surface.html) drills and the modern-physics chains), so the deviation is mostly about being *explicit* — naming the move, telling the student "you've been doing linear algebra for two years, the textbook just calls it vector addition."

**Implementation.** Where a derivation can be done with matrices instead of calculus, do it that way. Don't pretend a problem "needs" calculus when a 2×2 system solves it cleanly. Introduce vectors the moment physics needs forces — not three years later when the math curriculum gets around to them.

**Pairs with #4 (math integrated)** — physics generates the demand for both, and linear algebra is ready to answer that demand earlier. **Also pairs with #12 (synonyms)** — "vector" lives in everyday speech (arrow, push, direction, lifeguard's route) far more comfortably than "derivative."

### 14. Hunt for dualities — name the unity each time

**The original observation.** A cloud of hydrogen gas collapses under gravity. It releases energy — first as kinetic motion, then as heat, then as radiation. This is how protostars light up *before* fusion even starts. Separately, a pair of atoms bond into a molecule. The bond length shortens compared to the separation distance, and the system releases energy — as a photon, or as heat into the surroundings, or as kinetic energy of the resulting molecule. Same shape of phenomenon. Same direction. Same physical reason. *Both are systems finding a lower-energy configuration, and the excess has to go somewhere.*

The numbers differ by twenty orders of magnitude. The story is identical.

**More duals of the same kind.**

- *Nuclear fusion.* Light nuclei fuse, the product is more tightly bound per nucleon, the difference comes out as kinetic energy of the products. Stars, reactors, weapons.
- *Crystallisation.* A liquid cools and settles into a crystal. Molecules now sit more tightly bound to their neighbours. The released energy is the *latent heat of fusion* — a name collision with nuclear fusion that itself hints at the underlying unity.
- *Electron transitions.* An electron drops from a higher orbital to a lower one. The lower orbital is more tightly bound to the nucleus. The energy difference leaves as a photon. The whole science of spectroscopy is built on counting these.
- *Accretion onto a black hole.* The largest-scale version. Matter falling into a black hole's gravitational well liberates a few percent of its rest-mass energy as light, orders of magnitude more efficient than fusion. Quasars run on this.

**The principle, once.** *Energy comes out when a system gets more bound.* The unit of binding changes (gravitational, chemical, nuclear, electromagnetic), but the bookkeeping is identical. Find one of these stories and you have found them all.

**Why this matters as a curriculum rule.** The energy-release case is one example of a much wider habit. Modern physics increasingly insists every important idea has at least one *dual* — AdS/CFT, mirror symmetry, wave/particle, electric/magnetic, position/momentum, time/energy, source/charge, real/imaginary, discrete/continuous. A student trained to *expect* a hidden dual for every concept they meet builds the right reflex. They stop seeing fifteen separate phenomena and start seeing one phenomenon in fifteen places.

**The teaching move.** When a phenomenon is introduced, the teacher's next sentence should be: *"and the same thing happens at this completely different scale."* If a class learns about chemical exothermic reactions on Monday, fusion on Wednesday, and electron transitions on Friday without the unity being named, the curriculum has failed at its main job. Name the unity each time.

**Pairs with #5 (cross-connect formulas)** — formulas share shape, phenomena share story. **Pairs with #12 (synonyms)** — calling something *binding energy* in one chapter, *bond energy* in another, and *gravitational potential energy* in a third is the same word in three disguises. **Pairs with #1 (start with the practical question)** — every duality answers "what does this have to do with anything I know?"

---

## Segway hooks

A bank of specific worked-example pivots — moments where one concept can be used to land another. List grows over time. The assistant checks this section when the relevant topics come up in a lecture or conversation, so it can suggest the segway at the right moment rather than after the fact.

### Lifeguard's path — fastest, not straightest (sand vs sea, mud vs road)

**Trigger when:** introducing optics (refraction, Snell's law), Fermat's principle, Lagrangian mechanics, principle of least action, variational principles, geodesics — or whenever "shortest path" gets discussed.

**The hook.** A lifeguard on the beach has to reach a swimmer in the water. Running on sand is fast (say 5 m/s), swimming is slow (say 1 m/s). The straight line from lifeguard to swimmer is *not* the fastest path — too much of it is spent in the slow medium. The fastest path bends at the water's edge, with more distance covered on land and less in the water. Work out the angles and the ratio of the sines equals the ratio of the speeds. That is Snell's law for refraction — discovered for light, derived here for a lifeguard.

(Equivalent framings: mud vs road, walking vs running, walking vs swimming. Pick whichever lands best for the audience.)

**Why this segways everywhere.**
- **Optics.** This is exactly Fermat's principle. Light takes the path of least *time*, not least distance. Refraction bends light at boundaries between media of different speed (different refractive index) for the same reason the lifeguard bends. Snell's law and the lifeguard's optimal angle are the same equation.
- **Lagrangian mechanics.** Once you accept that nature minimises time (or, more generally, action) rather than distance, the principle of least action stops being mystical. The lifeguard problem is a baby variational problem — minimise total time over a path, get a curve that satisfies Snell's law / the Euler-Lagrange equation. The grown-up version replaces "time" with "action" and the answer is mechanics.
- **General relativity.** Geodesics in curved spacetime are also "least-action" paths. Same idea, generalised to a manifold where the "speed" depends on the local metric. The lifeguard intuition scales all the way up to gravity.

**Why it works pedagogically.** It hands the student a variational principle without naming it. By the time they meet Fermat or Lagrange formally, they already have the picture in their bones — and they got it from a scenario, not a formula. Pairs with Idea #1 (start with the practical question), Idea #4 (math arrives when physics needs it), and Idea #5 (cross-connect formulas — Snell's law and least-action are the same shape).

---

## TODO

More ideas to come as the curriculum evolves. Add them here.
