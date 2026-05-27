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

---

## TODO

More ideas to come as the curriculum evolves. Add them here.
