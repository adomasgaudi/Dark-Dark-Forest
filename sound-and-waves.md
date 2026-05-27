# Sound and waves

Working notes for the future Sound and Waves lecture page (cheat-sheet Topic I → deep-dive). Mixes the teacher's monologue, worked examples for the pedagogy principles, candidate analogies, and external resources. To be reorganised into a proper lecture page when ready.

---

## Teacher's monologue (L1-cleaned)

A spoken draft, L1-cleaned. Captures *why* the formulas alone are unsatisfying and *why* sound is worth treating as a doorway to everything else.

Alright. So you look through the formulas of sounds and waves, and you don't quite understand it. Or you cannot solve the exam questions. So we were looking for a more in-depth understanding. Or you simply can't remember what the rules are when you read them, you understand them, but you don't remember. Well, in this case I mean, you can fairly easily find visualizations that explain how the waves move and the formulas to calculate how the amplitude or the intensity, how they relate to decibels if you understand how logarithms work. It's all pretty straightforward.

### You can solve them, but for what?

But nevertheless, it's not really super inspiring because the only thing you can do with that is calculate the frequency and intensity of waves... of sound waves. So it's... you're getting a tool, but for what purpose? I mean, unless you are a microphone engineer, this seems like a bit of a waste of your time. Like, if you wanna just understand what sound is and how it moves, you don't need to know the formula to understand. You can take a look at the formulas and say, okay, decibels are logarithmic and, you know, who cares how to calculate the intensity? You know, have you ever talked about sound intensity in a different manner? In a separate manner from decibels? Doesn't really seem like something you would do.

Nevertheless, the dictators of physics demand that we know, so we have to learn.

### A note for teachers

What I am here to say is that... first of all, it's just interesting to see what was not known before and how people understood these things incorrectly. Because it's easy to see when everyone knows the truth. It's easy to see, like, oh, okay. So that's how things are. But it's interesting to see how much of a different world view you would have had. If nobody had told you. Which starts this itching question of, if I had lived in the past, would I have been smart enough to discover this myself, and how could I have discovered this myself?

On top of that, the names for all of the units and the unit sizes are also something that is just... someone decided that, and there's no real reason why it couldn't have been different. So there's a million different names and a million different units that could have been used instead. So that to me also is a place where a little bit of history just makes it easier and more fun to remember why the specific units were used. This is all a note for teachers, by the way. Not the student.

### The real reason — sound as a key to everything else

So... but disregarding all of that, the reason why you should learn how sound waves work is because everything else works in the same way. So you have some sort of thing that's calculated over an area, and then you get intensity. It just seems like, you know what area is, but the power and intensity, those terms in this situation might mean completely different things to you. And so it's just a completely new formula. But in fact, it's not a completely new formula because there's a myriad of other formulas that follow the exact same pattern. And they don't draw these parallels between these different formulas because they all behave in the same way.

So understanding this formula might perhaps help you understand other formulas from optics and electricity, for example the inverse square law is foundationally fundamental to all propagating forces and energies. And, of course, from a mathematical... a lot of things in nature are logarithmic. It's not for no reason called the natural logarithm. And just like multiplication is a natural process to happen for a two-dimensional space and becomes hard to predict if you try to squish it down to a single line, to a single-dimensional line, in the same way, you might want to explore what objects are natural to logarithms. And why exactly do we perceive the world in many ways in logarithmic form? And so on. So the transverse and longitudinal waves, that might be an interesting topic also.

So I would treat the science of sound waves... I would treat that as just a historical benchmark. Just a historical checkpoint. Checkpoint that is going to give you some understanding of the history of science, like what was the perception of the world at the time. So you might just... just in the future when you have different kinds of events, you might add on the sound events to that history, making it easier to remember. But on top of that, I would treat the formulas for sound and the wave propagation as an accessory to learn the deeper connections between all sides of classical and non-classical physics and mathematics.

---

## Diffraction — worked example of iceberg pedagogy

A demonstration of the iceberg principle from [pedagogy.md](pedagogy.md): present diffraction first at the top of the iceberg, then drop into the deeper mechanism, with the tier shift clearly marked.

### Top of the iceberg — *what* happens

Waves diffract depending on the size of the slit they pass through. The narrower the slit — the closer its size is to the wavelength of the wave — the more the wave spreads out after passing through.

This tells you *what* happens. It does not tell you *why*.

### Deeper — *why* it happens

Waves are constantly interacting with themselves through constructive and destructive interference. What we see at any point in space is the *sum* of all those interferences, not any single wave on its own. Even a single point source produces a complicated picture, because the wave it emits is already interfering with itself the moment it exists.

A useful mental image: imagine every point along an expanding wavefront as *itself* a tiny point source emitting its own wave. Each of those point waves then interacts with every other one. The further from the original source you go, the weaker each individual point source becomes, but the principle stays the same. *(This is Huygens' principle.)*

Now apply this picture to a slit:

- The wave arriving at the slit generates new point sources all along the slit's opening.
- After the slit, only the point sources *inside the opening* contribute — the rest are blocked by the barrier.
- At the edges of the slit there is more visible interference along the sides — edge diffraction.
- The dominant contribution downstream is the constructive interference of all the point sources directly behind the slit.
- A wide slit (large compared to the wavelength) contains many point sources contributing in parallel. Their constructive interference is highly directional, and the wave proceeds mostly straight.
- A narrow slit (close to the wavelength) contains very few point sources — closer to a single point source — so the wave spreads broadly on the far side.

That is *why* a narrower slit causes more spreading.

### Visualisation tip

Draw each point source as a dot with short lines radiating outward, rather than as concentric circles. Watching the lines from many dots overlap makes the constructive-vs-destructive pattern much easier to see than nested ripple-circles do.

---

## Quantization — the Game of Life analogy

Candidate **holy-trio** analogy (simplicity + accuracy + clarity in one image) for explaining why electron states are discrete.

### The puzzle

A wave on a string or on water can be made arbitrarily small — halve the wavelength, halve it again, no lower bound. Why then can an electron's wave not keep shrinking? Why does a bound electron have a minimum state below which it cannot go?

### The analogy

Imagine Conway's Game of Life — a grid of cells, each one either ON or OFF, never in between. You can paint any pattern on this grid, as long as each cell stays binary. Now ask: what is the smallest possible pattern? One cell. You cannot paint half a cell, and you cannot paint a pattern smaller than a single cell, because cells are not subdividable.

- Water and string waves live on a **continuous canvas** — you can always zoom in and find more room. There is no minimum size.
- Bound electron states live on a **Game-of-Life-style canvas** — there is a fundamental discreteness below which no state can exist. The minimum wave is one cell wide.

### Why this is a holy-trio candidate

- **Concrete and visual** — binary cells are easy to picture and easy to manipulate mentally. No equations required to grasp the core point.
- **Accurate at the structural level** — the real physics is genuinely about discrete states emerging from boundary conditions on the wavefunction. The binary-cell stand-in captures the *discreteness* without misleading about its source.
- **Clean contrast with classical waves** — the novelty of the quantum case becomes obvious rather than mysterious. The student leaves with the right question planted: *why* is the canvas discrete?

### Caveat to tag when using

The Game-of-Life cell is not literally how spacetime works. The analogy is about *structural quantization*, not about cells of space. Mark this clearly when teaching — top of the iceberg, but with a *true* mechanism underneath rather than a false one.

---

## External resources — Doppler effect and relative motion

A natural cross-connect cluster: source–observer relative motion changes perceived frequency. Same logic applies to sound (audible pitch shift), to light (astronomical red/blue shift), and to relativistic motion (extreme visual effects near light speed). Walk the student from Topic I (sound) → Topic II (light) → Topic IV (universe), illustrating that one wave-vs-observer principle keeps recurring.

- **Frequency in Motion: Understanding the Doppler Effect** (YouTube) — [Ur3F-JLdq_Q](https://www.youtube.com/watch?v=Ur3F-JLdq_Q)
  Source-observer relative motion compresses or stretches the waves between them, changing the perceived frequency. Covers the audio case (the changing pitch of a passing car) and the optical case (astronomers reading galactic red/blue shift to determine whether a galaxy is approaching or receding). Good single-video introduction to the whole cluster.

- **A Slower Speed of Light** (game, presumed) — MIT Game Lab's relativistic visualisation game where the player moves through a 3D world at near-light speed, watching the visible-light Doppler effect distort the scene in real time. Lets students *feel* what relative motion does to electromagnetic waves rather than just calculate it. *TODO: confirm title and add URL.*

- **ScienceClic — relative speeds simulation** (YouTube) — animated explanation of relative motion and how observers at different velocities see different things. Companion piece to the relativistic-Doppler discussion. *TODO: locate the specific video and add the URL.*
