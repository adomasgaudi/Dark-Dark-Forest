# Quantum mechanics

Working notes. Captures the minimum quantum mechanics a student of this curriculum needs to absorb, *not* a full QM course. Sprinkle these ideas into the lectures on light, atoms, and chemistry — they cannot be avoided in any of those topics.

Quantum mechanics is ★★★★★ + *experimentally proven* — the most precisely-tested theory we have. The deeper *why* behind it is still open. See [pedagogy.md](pedagogy.md) Idea #8 for the marker convention used here.

---

## Why you cannot avoid this

If you study light, photons, atoms, or chemistry, quantum mechanics will reach in and demand attention. Try to teach the photoelectric effect without it — a wave hits a metal and somehow turns into discrete packets of energy ejecting electrons. You will have to explain *what* is going on. Try to teach atomic structure — electrons sit in shells, are also somehow waves, and refuse to spiral into the nucleus. Same problem.

I do not want to teach quantum mechanics as its own subject in this curriculum. But I have to mention three of its ideas often enough that the student needs a working grasp of them:

- **Superposition** (with its partner, wave-function collapse).
- **Quantization** — the existence of a smallest possible amount.
- **Entanglement** — outcomes that are linked across space.

This document is the minimum sprinkle.

---

## The Copenhagen interpretation (the version used here)

Quantum mechanics has multiple interpretations and we do not know which is true. I will use the **Copenhagen interpretation** throughout, not because it explains *why*, but because it gives the cleanest description of *what we see*. It is ★★★ + *theoretical / proposed* — genuinely contested at the interpretive level, even though the *predictions* on top of it are ★★★★★.

The Copenhagen story in three lines:

- When a small particle (electron, photon) is not interacting with anything, it does not have a definite position or state. It is described by a *wave of probability* — a fuzzy distribution of where it might be and what it might be doing.
- The moment something interacts with it (a detector clicks, an atom absorbs it), the wave collapses to a single definite outcome. One place. One state. The other possibilities vanish.
- There is no hidden information that "would have told you" the answer in advance. The fuzziness is not ignorance — it is the actual situation. Bell's experiments ruled out *local* hidden variables. Some non-local hidden-variable theories survive (Bohmian mechanics), but Copenhagen is the standard working frame.

A common framing is "the electron disappears when you are not looking." I do not like that framing. A better one: when nothing is interacting with the electron, the electron *is* a wave of probability — not hidden, just genuinely spread out. The interaction is what forces it to localise.

---

## Superposition and collapse

Treat these as two faces of one idea:

- **Superposition** is the state *before* measurement, when the particle is genuinely in multiple possibilities at once.
- **Collapse** is the moment measurement forces the particle into one of those possibilities.

A useful image. An electron's probability wave is spread between two detectors, A and B.

- If A finds the electron → B will find nothing, with 100% certainty.
- If B finds the electron → A will find nothing, with 100% certainty.
- The electron is never in *both* places, and never in *neither*.

The two detectors are linked: knowing where the electron *is* is the same as knowing where it *isn't*. This is one of the entry points to entanglement — outcomes that are correlated even though no signal seems to have passed between them.

---

## Quantization — the smallest possible amount

Many physical quantities come in indivisible packets at small scales. You cannot have:

- Half an electron.
- Half an electron's worth of charge.
- A photon below the energy needed for the smallest possible interaction with matter.

You can have an electron with *more* energy, but only in discrete steps — never halfway between two allowed values. This is the *quantum* in *quantum mechanics*. Energy, charge, angular momentum, spin — all come in fixed-size units at the bottom.

The trio — *superposition, quantization, entanglement* — is the minimum kit. Hold on to these three and you can read most of the formulas in atomic and optical physics without getting lost.

---

## Reframe — the photon as an interaction, not a particle

This is not the standard textbook framing. It is my own preferred way in, and I find it more honest. Tag as: *top-of-iceberg analogy with a non-standard mechanism underneath. Useful for intuition, not for exams.*

The idea: a photon is best thought of as an **interaction** between an electromagnetic wave and matter, not as a tiny billiard ball flying through space.

- A wave can carry any amount of energy in principle.
- But if a wave does not carry enough energy to cause the smallest possible interaction with matter, it cannot be detected. In physics, what cannot be detected may as well not exist.
- So the wave only *manifests* as a photon at the moment an interaction occurs. Before that moment, it is just a wave.

This frame explains, in one move, why photons behave wave-like and particle-like at once. The wave is real and continuous. The "particle" is just what we call the interaction.

---

## The puzzle this does not solve

The case that still feels strange even after all of the above.

A single electron emits a single photon. In which direction does the photon go?

Classical intuition says: a pulse of energy spreads outward in all directions — a sphere of light expanding from the electron, like a sound wave from a clap. Quantum mechanics agrees that the *wave* spreads spherically. But when the wave eventually hits a detector somewhere on its expanding surface, *all* of the photon's energy is delivered at that one spot, instantly, and the rest of the spherical wave is gone.

A dispersed wave, expanding through space, collapsing into a single point. This is the photoelectric-effect puzzle, restated.

I do not claim to have a clean explanation for *how* this happens. Nobody does — the Copenhagen interpretation only tells you *what* to predict. The deeper *why* is where the iceberg goes far below the level of this curriculum. But the student should know the question is real, and that the strangeness is not a flaw in their understanding. It is a feature of how the world actually behaves.

---

## Thought experiment — does coherent multi-emission "fill in" the detectors?

A sharper version of the above puzzle. Built in two steps.

### Step 1 — the single-emitter case

One electron emits one photon. Surround it with 100 detectors arranged on a sphere — so each detector covers about 1/100 of the spherical wavefront.

The energy reaching any one detector is at most 1/100 of one photon's energy. That is *below* the threshold the detector needs to register anything — a detector needs a full photon's worth of energy to click.

Yet experimentally: exactly one of the 100 detectors clicks. The whole photon's worth of energy is delivered there. The other 99 detectors register nothing.

Where was the energy a moment before? Distributed across the sphere, or already at the lucky detector? The Copenhagen interpretation answers: the *probability* was distributed across the sphere. The *energy* was never distributed — it is delivered as a single quantum at the moment of interaction.

This has been verified. The canonical experiment is Grangier, Roger, Aspect (1986), *Europhysics Letters* 1, 173–179: an atomic cascade emits single photons, and a beam splitter offers two possible detection paths. The result — *anticoincidence* — is sharp. A single photon never triggers both detectors at once. ★★★★★ + *experimentally proven*.

### Step 2 — your multi-emitter version

Now scale up. Put 100 electrons at the centre, each emitting one photon at the same moment. Same 100 detectors arranged in a sphere.

Two competing intuitions:

- **Wave-superposition intuition.** Each photon spreads spherically. Each detector receives 1/100 of each of the 100 waves. If the waves add coherently, each detector receives the full energy of one photon — *all 100 detectors click*.
- **Particle-trajectory intuition.** Each electron emits one photon, each photon goes to one detector at random. By Poisson statistics, some detectors get 0, some get 1, some get 2 or more. Roughly 100 clicks total, distributed unevenly.

### What experiments show

The particle-trajectory intuition is the right one — but the reason is subtle. It comes down to **coherence**.

For 100 *independent* electrons emitting with random relative phases (the usual physical situation), the wave *amplitudes* do not add coherently. Only the *intensities* add. So each detector's per-second click rate is roughly 100× larger than in the single-emitter case, but the *single-photon character of every detection is preserved*. You see roughly 100 detections distributed across the detectors, Poisson-statistical, not 100 simultaneous clicks.

For 100 emitters with *truly coherent* emission — same phase, same direction — the output is no longer spherically symmetric in the first place. You get directional beams (this is essentially how a laser works), and the spherical-detector geometry of the thought experiment no longer applies.

So there is no regime in which the wave-superposition intuition wins:

- Incoherent emission → intensities add → Poisson-distributed single-photon detections.
- Coherent emission → the wave is no longer spherical → the geometry of the thought experiment changes.

The single-photon character is preserved at every detection event, regardless of how many emitters you stack. The waves are real, but they are *probability* waves — they determine where the next quantum is delivered, not how the energy of one emission is split.

### What this does not resolve

The multi-emitter case is settled. The single-emitter case is not.

For one electron emitting one photon, the energy still seems to travel as a spherical wave and is then delivered at one point with no warning. The Copenhagen interpretation lets you compute the right probability for *where* the click will land. It does not tell you what is *actually* happening to the energy while it is in flight. That is one of the open questions in physics — the *that*-is-settled, *how*-is-open pattern from [pedagogy.md](pedagogy.md) Idea #8.
