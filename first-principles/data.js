// ═════════════════════════════════════════════════════════
// SHARED DATA · Grades 8–10
//
// Single source of truth for exam topics and lecture-to-topic mapping.
// Loaded by:
//   - map.html (drives the exam table + curriculum tables)
//   - each lecture page (drives the "Exam topics covered" panel)
//
// Topic IDs (e.g. `p-univ-fusion-stars`) are stable contracts — never
// rename or remove an ID that is referenced by a lecture or page anchor.
//
// To edit a topic's bullets: find it in examData8to10.subjects[].topics[].points
// To change exam coverage:    edit defaultCoverage profile,
//                              or add `topicCoverage` to override per topic,
//                              or use { text, coverage } object form per point.
// To wire a new lecture:      add an entry to lectureData8to10.bottomUp / topDown
//                              with a `covers: [{ topicId, degree }]` array.
// ═════════════════════════════════════════════════════════

const examData8to10 = {

  exams: [
    // Grade 8-10
    { id: 'nmpp',    name: 'NMPP',              sub: 'G8 diagnostic' },
    { id: 'vl',      name: 'Vilniaus Licėjus',  sub: 'G8→9 · 2 hr' },
    { id: 'kj',      name: 'Kauno Jėzuitai',    sub: 'G8→9 · 60 min' },
    { id: 'vj',      name: 'Vilniaus Jėzuitai', sub: 'G8→9 · Apr 2026' },
    { id: 'other',   name: 'Other gymnasia',    sub: 'G8→9 varies' },
    { id: 'pupp',    name: 'PUPP',              sub: 'G10 gate' },
    // Grade 11-12
    { id: 'vbe',     name: 'VBE / Brandos',     sub: 'G12 matura' },
    { id: 'sat',     name: 'SAT',               sub: 'US apps' },
    { id: 'ib',      name: 'IB Diploma',        sub: 'Vilnius Lyceum' },
    { id: 'alevels', name: 'A-Levels',          sub: 'UK apps' }
  ],

  // Coverage profiles per (subject, grade-level). A topic uses its own
  // `defaultProfile` if set, otherwise the subject's.
  defaultCoverage: {
    // ── Grade 8–9 syllabus topics ──
    mathG8:    { nmpp: '●', vl: '●', kj: '●', vj: '?', other: '●', pupp: '●',
                 vbe: '●', sat: '●', ib: '●', alevels: '●' },
    physicsG8: { nmpp: '—', vl: '●', kj: '—', vj: '?', other: '○', pupp: '—',
                 vbe: '○', sat: '—', ib: '○', alevels: '●' },
    chemG8:    { nmpp: '—', vl: '—', kj: '—', vj: '?', other: '—', pupp: '—',
                 vbe: '○', sat: '—', ib: '○', alevels: '○' },

    // ── Grade 11–12 syllabus topics ──
    mathG12:    { nmpp: '—', vl: '—', kj: '—', vj: '—', other: '—', pupp: '—',
                  vbe: '●', sat: '○', ib: '●', alevels: '●' },
    physicsG12: { nmpp: '—', vl: '—', kj: '—', vj: '—', other: '—', pupp: '—',
                  vbe: '○', sat: '—', ib: '○', alevels: '●' },
    chemG12:    { nmpp: '—', vl: '—', kj: '—', vj: '—', other: '—', pupp: '—',
                  vbe: '○', sat: '—', ib: '○', alevels: '○' }
  },

  subjects: [

    {
      name: 'Mathematics',
      shortName: 'Mathematics',
      defaultProfile: 'mathG8',
      topics: [
        {
          name: 'Numbers',
          gradeLevel: 'g8',
          points: [
            { id: 'm-num-integers',     text: 'Natural numbers and integers (including negative numbers)' },
            { id: 'm-num-divisibility', text: 'Divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10' },
            { id: 'm-num-primes',       text: 'Prime and composite numbers; prime factorisation' },
            { id: 'm-num-gcd-lcm',      text: 'Greatest common divisor (GCD) and least common multiple (LCM)' },
            { id: 'm-num-fractions',    text: 'Fractions: proper, improper, mixed; add, subtract, multiply, divide' },
            { id: 'm-num-decimals',     text: 'Decimals: place value, conversion to and from fractions' },
            { id: 'm-num-ratios',       text: 'Ratios and proportions; direct and inverse proportionality' },
            { id: 'm-num-percentages',  text: 'Percentages: of a number, increase and decrease, simple interest' },
            { id: 'm-num-exponents',    text: 'Powers with positive integer exponents and laws of exponents' },
            { id: 'm-num-roots',        text: 'Square roots and cube roots; perfect squares' },
            { id: 'm-num-sci-notation', text: 'Scientific notation for very large or very small numbers' }
          ]
        },
        {
          name: 'Algebra',
          gradeLevel: 'g8',
          points: [
            { id: 'm-alg-variables',        text: 'Variables, algebraic expressions, evaluation' },
            { id: 'm-alg-like-terms',       text: 'Like terms and simplification' },
            { id: 'm-alg-polynomials',      text: 'Polynomials: terms, degree, classification (monomial, binomial, trinomial)' },
            { id: 'm-alg-poly-ops',         text: 'Polynomial operations: addition, subtraction, multiplication' },
            { id: 'm-alg-special-products', text: 'Special products: (a+b)², (a−b)², (a+b)(a−b)' },
            { id: 'm-alg-factoring',        text: 'Factoring: common factor, grouping, special patterns (difference of squares, perfect square trinomial)' },
            { id: 'm-alg-linear-eq',        text: 'Linear equations in one variable: solving and checking' },
            { id: 'm-alg-linear-ineq',      text: 'Linear inequalities: solving and graphing on a number line' },
            { id: 'm-alg-systems',          text: 'Systems of two linear equations: substitution and elimination' },
            { id: 'm-alg-word',             text: 'Word problems: motion (d = v·t), mixture, age, money' }
          ]
        },
        {
          name: 'Geometry',
          gradeLevel: 'g8',
          points: [
            { id: 'm-geo-angles',           text: 'Angle types: acute, right, obtuse, straight, reflex; complementary, supplementary, vertical' },
            { id: 'm-geo-parallels',        text: 'Parallel lines cut by a transversal: corresponding, alternate interior, alternate exterior, co-interior' },
            { id: 'm-geo-triangles-sides',  text: 'Triangles by sides: scalene, isosceles, equilateral' },
            { id: 'm-geo-triangles-angles', text: 'Triangles by angles: acute, right, obtuse' },
            { id: 'm-geo-triangle-sum',     text: 'Triangle angle sum = 180°; exterior angle theorem' },
            { id: 'm-geo-congruence',       text: 'Congruence criteria: SSS, SAS, ASA, AAS, RHS' },
            { id: 'm-geo-pythagoras',       text: 'Pythagorean theorem and its converse' },
            { id: 'm-geo-area-2d',          text: 'Perimeter and area: rectangle, square, parallelogram, triangle, trapezoid, rhombus' },
            { id: 'm-geo-quadrilaterals',   text: 'Quadrilateral properties and classification' },
            { id: 'm-geo-circle',           text: 'Circle: radius, diameter, chord, circumference, area' },
            { id: 'm-geo-solids-3d',        text: '3D solids: cube, cuboid, prism, pyramid, cylinder, cone, sphere' },
            { id: 'm-geo-area-volume-3d',   text: 'Surface area and volume of the above solids' }
          ]
        },
        {
          name: 'Combinatorics',
          gradeLevel: 'g8',
          note: 'Limited to simple problems at this level.',
          topicCoverage: { pupp: '—' },
          points: [
            { id: 'm-cmb-counting',     text: 'Fundamental counting principle (multiplication rule)' },
            { id: 'm-cmb-addition',     text: 'Addition rule for mutually exclusive cases' },
            { id: 'm-cmb-tree',         text: 'Tree diagrams for systematic counting' },
            { id: 'm-cmb-permutations', text: 'Simple permutations and arrangements' },
            { id: 'm-cmb-combinations', text: 'Simple combinations' },
            { id: 'm-cmb-factorial',    text: 'Basic factorial notation' }
          ]
        },

        // ── Grade 11–12 syllabus topics ──
        {
          name: 'Calculus',
          gradeLevel: 'g12',
          defaultProfile: 'mathG12',
          points: [
            { id: 'm-calc-limits',       text: 'Limits and continuity' },
            { id: 'm-calc-derivatives',  text: 'Derivatives: rules, chain rule, product rule' },
            { id: 'm-calc-applications', text: 'Applications: optimisation, rates of change' },
            { id: 'm-calc-integrals',    text: 'Integrals: antiderivatives, definite integrals' },
            { id: 'm-calc-area',         text: 'Area under a curve, fundamental theorem of calculus' }
          ]
        },
        {
          name: 'Complex numbers',
          gradeLevel: 'g12',
          defaultProfile: 'mathG12',
          topicCoverage: { sat: '—' },
          points: [
            { id: 'm-cpx-form',        text: 'Imaginary unit i and complex form a + bi' },
            { id: 'm-cpx-operations',  text: 'Addition, multiplication, conjugate, modulus' },
            { id: 'm-cpx-polar',       text: 'Polar form and Euler\'s formula e^(iθ)' },
            { id: 'm-cpx-rotations',   text: 'Complex numbers as rotations in the plane' }
          ]
        },
        {
          name: 'Sequences and series',
          gradeLevel: 'g12',
          defaultProfile: 'mathG12',
          topicCoverage: { sat: '—' },
          points: [
            { id: 'm-seq-arithmetic', text: 'Arithmetic sequences and series' },
            { id: 'm-seq-geometric',  text: 'Geometric sequences and series' },
            { id: 'm-seq-infinite',   text: 'Infinite series and convergence (intuition)' }
          ]
        },
        {
          name: 'Probability and statistics',
          gradeLevel: 'g12',
          defaultProfile: 'mathG12',
          topicCoverage: { sat: '●' },
          points: [
            { id: 'm-stat-distributions', text: 'Distributions: normal, binomial' },
            { id: 'm-stat-mean-sd',       text: 'Mean, median, mode, standard deviation' },
            { id: 'm-stat-probability',   text: 'Probability: independent / conditional / Bayes' },
            { id: 'm-stat-hypothesis',    text: 'Hypothesis testing (intro)' }
          ]
        }
      ]
    },

    {
      name: 'Physics',
      shortName: 'Physics',
      defaultProfile: 'physicsG8',
      topics: [
        {
          name: 'Structure of matter',
          gradeLevel: 'g8',
          note: 'Basically: what atoms are made of and how they break apart.',
          points: [
            { id: 'p-sm-notation',     text: 'Atomic notation: chemical symbol with mass number A on top, atomic number Z on bottom' },
            { id: 'p-sm-atomic-num',   text: 'Atomic number Z = number of protons (defines the element)' },
            { id: 'p-sm-mass-num',     text: 'Mass number A = protons + neutrons' },
            { id: 'p-sm-isotopes',     text: 'Isotopes: same Z, different A (e.g. ¹²C, ¹³C, ¹⁴C)' },
            { id: 'p-sm-alpha',        text: '<strong>Alpha decay (α):</strong> emits a helium nucleus; A −4, Z −2' },
            { id: 'p-sm-beta-minus',   text: '<strong>Beta-minus decay (β⁻):</strong> neutron → proton + electron; A unchanged, Z +1' },
            { id: 'p-sm-beta-plus',    text: '<strong>Beta-plus decay (β⁺):</strong> proton → neutron + positron; A unchanged, Z −1' },
            { id: 'p-sm-gamma',        text: '<strong>Gamma emission (γ):</strong> high-energy photon; A and Z unchanged' },
            { id: 'p-sm-half-life',    text: 'Half-life: time for half a radioactive sample to decay' },
            { id: 'p-sm-fission',      text: 'Nuclear fission: heavy nucleus splits (uranium-235, chain reaction)' },
            { id: 'p-sm-fusion',       text: 'Nuclear fusion: light nuclei combine into heavier ones (hydrogen → helium in stars)' },
            { id: 'p-sm-conservation', text: 'Conservation of atomic and mass numbers in nuclear equations' },
            { id: 'p-sm-protection',   text: 'Radiation protection: distance, time, shielding (paper for α, aluminium for β, lead for γ)' }
          ]
        },
        {
          name: 'The Universe',
          gradeLevel: 'g8',
          note: 'Surprisingly deep for a Grade 8 exam — they need to know how stars live and die.',
          points: [
            { id: 'p-univ-hierarchy',    text: 'Hierarchy of cosmic objects: planet, moon, star, planetary system, star cluster, nebula, galaxy, galaxy cluster' },
            { id: 'p-univ-solar',        text: 'The Solar System: Sun + 8 planets, moons, asteroid belt' },
            { id: 'p-univ-nebulae',      text: 'Nebulae as stellar nurseries: emission, dark, planetary, supernova remnants' },
            { id: 'p-univ-fusion-stars', text: 'Stellar energy source: nuclear fusion of hydrogen into helium (proton-proton chain)' },
            { id: 'p-univ-low-mass',     text: '<strong>Low-mass stars (~Sun):</strong> main sequence → red giant → planetary nebula → white dwarf' },
            { id: 'p-univ-high-mass',    text: '<strong>High-mass stars (≥8 solar masses):</strong> main sequence → red supergiant → supernova → neutron star or black hole' },
            { id: 'p-univ-galaxies',     text: 'Galaxy types: spiral (Milky Way), elliptical, irregular' },
            { id: 'p-univ-light-year',   text: 'Light-year as a unit of distance' },
            { id: 'p-univ-big-bang',     text: 'The Big Bang and the expanding universe (brief introduction)' }
          ]
        },
        {
          name: 'Electricity',
          gradeLevel: 'g8',
          points: [
            { id: 'p-el-charge',     text: 'Electric charge: positive and negative, conservation, unit (coulomb, C)' },
            { id: 'p-el-current',    text: 'Electric current: rate of charge flow, I = Q/t, unit (ampere, A)' },
            { id: 'p-el-voltage',    text: 'Voltage / potential difference: energy per charge, V = W/Q, unit (volt, V)' },
            { id: 'p-el-resistance', text: "Resistance: opposition to current, R = V/I, unit (ohm, Ω) — Ohm's law" },
            { id: 'p-el-work',       text: 'Electrical work: W = V·I·t, unit (joule, J)' },
            { id: 'p-el-power',      text: 'Electrical power: P = V·I, unit (watt, W); kilowatt-hour (kWh) for energy bills' },
            { id: 'p-el-series',     text: '<strong>Series circuits:</strong> current same throughout; voltages add; resistances add' },
            { id: 'p-el-parallel',   text: '<strong>Parallel circuits:</strong> voltage same across branches; currents add; 1/R = 1/R₁ + 1/R₂' },
            { id: 'p-el-diagrams',   text: 'Reading circuit diagrams: symbols for battery, resistor, switch, bulb, ammeter, voltmeter' },
            { id: 'p-el-units',      text: 'Unit conversions: mA↔A, mV↔V, kΩ↔Ω, kWh↔J' }
          ]
        },

        // ── Grade 11–12 syllabus topics ──
        {
          name: 'Mechanics + thermodynamics',
          gradeLevel: 'g12',
          defaultProfile: 'physicsG12',
          points: [
            { id: 'p-mech-kinematics',  text: 'Kinematics: position, velocity, acceleration' },
            { id: 'p-mech-newton',      text: "Newton's laws applied with vectors and calculus" },
            { id: 'p-mech-energy',      text: 'Work, kinetic and potential energy, conservation' },
            { id: 'p-mech-momentum',    text: 'Momentum, impulse, collisions' },
            { id: 'p-mech-rotation',    text: 'Rotational motion: torque, angular momentum' },
            { id: 'p-thermo-laws',      text: 'Laws of thermodynamics; entropy (qualitative)' },
            { id: 'p-thermo-gas',       text: 'Ideal gas law: PV = nRT' }
          ]
        },
        {
          name: 'Electromagnetism',
          gradeLevel: 'g12',
          defaultProfile: 'physicsG12',
          points: [
            { id: 'p-em-fields',      text: 'Electric and magnetic fields (vector form)' },
            { id: 'p-em-maxwell',     text: "Maxwell's equations — qualitative" },
            { id: 'p-em-induction',   text: 'Electromagnetic induction; Lenz\'s law' },
            { id: 'p-em-waves',       text: 'EM waves: speed of light from Maxwell\'s equations' }
          ]
        },
        {
          name: 'Optics and waves',
          gradeLevel: 'g12',
          defaultProfile: 'physicsG12',
          points: [
            { id: 'p-opt-reflection',  text: 'Reflection, refraction, Snell\'s law' },
            { id: 'p-opt-lenses',      text: 'Lenses and mirrors; image formation' },
            { id: 'p-wave-properties', text: 'Wave properties: interference, diffraction, polarisation' },
            { id: 'p-wave-doppler',    text: 'Doppler effect' }
          ]
        },
        {
          name: 'Modern physics (quantum + relativity intro)',
          gradeLevel: 'g12',
          defaultProfile: 'physicsG12',
          points: [
            { id: 'p-qm-photoelectric', text: 'Photoelectric effect: light as particles' },
            { id: 'p-qm-de-broglie',    text: 'De Broglie wavelength: matter as waves' },
            { id: 'p-qm-uncertainty',   text: 'Heisenberg uncertainty principle' },
            { id: 'p-qm-schrodinger',   text: 'Schrödinger equation — qualitative' },
            { id: 'p-rel-postulates',   text: 'Special relativity: speed of light invariant' },
            { id: 'p-rel-dilation',     text: 'Time dilation and length contraction' },
            { id: 'p-rel-mc2',          text: 'E = mc², mass-energy equivalence' }
          ]
        }
      ]
    },

    {
      name: 'Chemistry',
      shortName: 'Chemistry',
      defaultProfile: 'chemG8',
      topics: [
        // ── Grade 11–12 syllabus topics (no G8 chemistry on exams) ──
        {
          name: 'Organic chemistry',
          gradeLevel: 'g12',
          defaultProfile: 'chemG12',
          points: [
            { id: 'c-org-carbon',     text: "Carbon's versatility: bonding, chains, rings" },
            { id: 'c-org-hydrocarbons', text: 'Hydrocarbons: alkanes, alkenes, alkynes' },
            { id: 'c-org-functional', text: 'Functional groups: alcohols, acids, esters, amines' },
            { id: 'c-org-mechanisms', text: 'Reaction mechanisms (intro): substitution, addition' },
            { id: 'c-org-isomerism',  text: 'Isomerism: structural and stereo' }
          ]
        },
        {
          name: 'Reaction kinetics',
          gradeLevel: 'g12',
          defaultProfile: 'chemG12',
          points: [
            { id: 'c-kin-rate',         text: 'Rate of reaction; factors that change it' },
            { id: 'c-kin-equilibrium',  text: "Equilibrium and Le Chatelier's principle" },
            { id: 'c-kin-catalysts',    text: 'Catalysts and activation energy' }
          ]
        },
        {
          name: 'Electrochemistry',
          gradeLevel: 'g12',
          defaultProfile: 'chemG12',
          points: [
            { id: 'c-ec-redox',         text: 'Oxidation and reduction; redox half-equations' },
            { id: 'c-ec-cells',         text: 'Galvanic / voltaic cells, electrode potentials' },
            { id: 'c-ec-electrolysis',  text: 'Electrolysis and industrial applications' }
          ]
        },
        {
          name: 'Thermochemistry',
          gradeLevel: 'g12',
          defaultProfile: 'chemG12',
          points: [
            { id: 'c-thermo-enthalpy', text: 'Enthalpy changes: exo / endothermic reactions' },
            { id: 'c-thermo-hess',     text: "Hess's law and energy diagrams" },
            { id: 'c-thermo-bond',     text: 'Bond energies and reaction energy' }
          ]
        }
      ]
    }

  ]
};


// ═════════════════════════════════════════════════════════
// LECTURE DATA · Grades 8–10
// Two parallel curricula. Each lecture is tagged with the
// exam topic IDs it covers and the degree of coverage.
//
// `degree` values: 'full' (●), 'partial' (◐), 'mention' (○)
//
// Cross-references between bottomUp and topDown are derived
// from shared topicIds — you only tag once.
//
// Sample lectures are placeholders. Edit / add / remove freely.
// ═════════════════════════════════════════════════════════

const lectureData8to10 = {

  bottomUp: [
    {
      id: 'bu-01',
      n: 1,
      title: 'Before science — why it didn\'t happen sooner',
      summary: 'The cultural and material preconditions for science. Iron-from-stars as the hook; Harari + Carroll as the framework.',
      page: 'before-science.html',
      covers: [
        { topicId: 'p-univ-fusion-stars', degree: 'partial' },
        { topicId: 'p-univ-low-mass',     degree: 'mention' },
        { topicId: 'p-univ-high-mass',    degree: 'mention' }
      ],
      sources: [
        { label: 'Harari — Sapiens (ch. The Discovery of Ignorance)', url: 'https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind' },
        { label: 'Carroll — sandpile / self-organised criticality', url: 'https://en.wikipedia.org/wiki/Self-organized_criticality' }
      ]
    },
    {
      id: 'bu-02',
      n: 2,
      title: 'Gases → mass conservation → atomic theory',
      summary: 'Phlogiston dies when Lavoisier weighs the products. Dalton builds atomic chemistry on top.',
      page: 'gases-to-atoms.html',
      covers: [
        { topicId: 'p-sm-conservation', degree: 'full' },
        { topicId: 'p-sm-notation',     degree: 'full' },
        { topicId: 'p-sm-atomic-num',   degree: 'partial' },
        { topicId: 'p-sm-mass-num',     degree: 'partial' }
      ],
      sources: [
        { label: 'Wikipedia — Antoine Lavoisier', url: 'https://en.wikipedia.org/wiki/Antoine_Lavoisier' },
        { label: 'Wikipedia — Dalton atomic theory', url: 'https://en.wikipedia.org/wiki/John_Dalton#Atomic_theory' },
        { label: 'Wikipedia — Phlogiston theory', url: 'https://en.wikipedia.org/wiki/Phlogiston_theory' }
      ]
    },
    {
      id: 'bu-03',
      n: 3,
      title: 'Telescope + momentum → Newton\'s laws',
      summary: 'Tycho\'s data, Kepler\'s geometry, Newton\'s calculus. Three separate planetary laws become one equation.',
      page: 'newton-laws.html',
      covers: [
        { topicId: 'p-univ-solar', degree: 'mention' },
        { topicId: 'm-num-ratios', degree: 'mention' }
      ],
      sources: [
        { label: 'Wikipedia — Kepler\'s laws of planetary motion', url: 'https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion' },
        { label: 'Wikipedia — Newton\'s laws of motion', url: 'https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion' },
        { label: 'Wikipedia — Galileo Galilei', url: 'https://en.wikipedia.org/wiki/Galileo_Galilei' }
      ]
    },
    {
      id: 'bu-04',
      n: 4,
      title: 'Light + electrical tools → EM unification',
      summary: 'Faraday\'s experiments, Maxwell\'s equations. Electricity and magnetism turn out to be one thing — light falls out as a bonus.',
      page: 'em-unification.html',
      covers: [
        { topicId: 'p-el-charge',     degree: 'full' },
        { topicId: 'p-el-current',    degree: 'full' },
        { topicId: 'p-el-voltage',    degree: 'full' },
        { topicId: 'p-el-resistance', degree: 'partial' },
        { topicId: 'p-el-series',     degree: 'mention' },
        { topicId: 'p-el-parallel',   degree: 'mention' }
      ],
      sources: [
        { label: 'Wikipedia — Maxwell\'s equations', url: 'https://en.wikipedia.org/wiki/Maxwell%27s_equations' },
        { label: 'Wikipedia — Michael Faraday', url: 'https://en.wikipedia.org/wiki/Michael_Faraday' },
        { label: 'Wikipedia — Electromagnetic spectrum', url: 'https://en.wikipedia.org/wiki/Electromagnetic_spectrum' }
      ]
    },
    {
      id: 'bu-05',
      n: 5,
      title: 'Tools + chemistry → particles, atom model',
      summary: 'Cathode rays, Rutherford scattering, Bohr model. Three experiments in 30 years crack the atom open.',
      page: 'atom-model.html',
      covers: [
        { topicId: 'p-sm-notation',   degree: 'full' },
        { topicId: 'p-sm-atomic-num', degree: 'full' },
        { topicId: 'p-sm-mass-num',   degree: 'full' },
        { topicId: 'p-sm-isotopes',   degree: 'partial' }
      ],
      sources: [
        { label: 'Wikipedia — Rutherford scattering', url: 'https://en.wikipedia.org/wiki/Rutherford_scattering_experiments' },
        { label: 'Wikipedia — Bohr model', url: 'https://en.wikipedia.org/wiki/Bohr_model' },
        { label: 'Wikipedia — Periodic table', url: 'https://en.wikipedia.org/wiki/Periodic_table' }
      ]
    },
    {
      id: 'bu-06',
      n: 6,
      title: 'Electron + light → relativity + quantum mechanics',
      summary: 'Three sub-units: quantum mechanics replaces classical, Einstein breaks time and space, physics now predicts protein folding.',
      page: 'modern-physics.html',
      covers: [
        { topicId: 'p-univ-fusion-stars', degree: 'partial' },
        { topicId: 'p-sm-isotopes',       degree: 'partial' }
      ],
      sources: [
        { label: 'Wikipedia — Photoelectric effect', url: 'https://en.wikipedia.org/wiki/Photoelectric_effect' },
        { label: 'Wikipedia — Schrödinger equation', url: 'https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation' },
        { label: 'Wikipedia — Special relativity', url: 'https://en.wikipedia.org/wiki/Special_relativity' },
        { label: 'Wikipedia — Protein folding', url: 'https://en.wikipedia.org/wiki/Protein_folding' }
      ]
    }
  ],

  topDown: [
    {
      id: 'td-01',
      n: 1,
      title: 'An atom in one diagram',
      summary: 'The modern atom: nucleus + electron cloud. Why Z and A matter. Isotopes as a footnote.',
      covers: [
        { topicId: 'p-sm-notation',   degree: 'full' },
        { topicId: 'p-sm-atomic-num', degree: 'full' },
        { topicId: 'p-sm-mass-num',   degree: 'full' },
        { topicId: 'p-sm-isotopes',   degree: 'full' }
      ],
      sources: [
        { label: 'Sean Carroll — Atoms (Biggest Ideas)', url: 'https://www.youtube.com/results?search_query=sean+carroll+biggest+ideas+atoms' }
      ]
    },
    {
      id: 'td-02',
      n: 2,
      title: 'Stable vs unstable nuclei: where decay comes from',
      summary: 'The neutron-to-proton ratio. Alpha, beta, gamma derived from energy considerations. Half-life as a probabilistic constant.',
      covers: [
        { topicId: 'p-sm-isotopes',     degree: 'full' },
        { topicId: 'p-sm-alpha',        degree: 'full' },
        { topicId: 'p-sm-beta-minus',   degree: 'full' },
        { topicId: 'p-sm-beta-plus',    degree: 'full' },
        { topicId: 'p-sm-gamma',        degree: 'full' },
        { topicId: 'p-sm-half-life',    degree: 'full' },
        { topicId: 'p-sm-conservation', degree: 'full' }
      ],
      sources: [
        { label: 'Wikipedia — Radioactive decay', url: 'https://en.wikipedia.org/wiki/Radioactive_decay' },
        { label: 'Wikipedia — Half-life', url: 'https://en.wikipedia.org/wiki/Half-life' }
      ]
    },
    {
      id: 'td-03',
      n: 3,
      title: 'Why electrons live in shells',
      summary: 'A hint of quantum mechanics from the top. Why the periodic table looks how it looks.',
      covers: [
        { topicId: 'p-sm-atomic-num', degree: 'partial' }
      ],
      sources: []
    }
  ]
};


// === RENDER HELPERS ===

function _symbolClass(s) {
  if (s === '●') return 'yes';
  if (s === '○') return 'elec';
  if (s === '?') return 'unk';
  return 'no';
}

function _resolveCoverage(data, subject, topic, point) {
  // Topic may override the subject's default profile (e.g. G12 topic in
  // a subject whose default profile is the G8 one).
  const profileName = topic.defaultProfile || subject.defaultProfile;
  const subjectDefault = data.defaultCoverage[profileName] || {};
  const topicCoverage  = Object.assign({}, subjectDefault, topic.topicCoverage || {});
  if (typeof point === 'object' && point.coverage) {
    return Object.assign({}, topicCoverage, point.coverage);
  }
  return topicCoverage;
}

function _pointText(point) {
  return typeof point === 'string' ? point : point.text;
}

function _pointId(point) {
  return (typeof point === 'object' && point.id) ? point.id : null;
}

function _degSymbol(d) {
  return d === 'full' ? '●' : d === 'partial' ? '◐' : '○';
}

function _degLabel(d) {
  return d === 'full' ? 'fully covered'
       : d === 'partial' ? 'partially covered'
       : 'mentioned only';
}

function _escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function _truncate(s, n) {
  return s && s.length > n ? s.substring(0, n - 1) + '…' : s;
}

function _lecPillClass(id) {
  return id.startsWith('bu') ? 'bu' : (id.startsWith('td') ? 'td' : '');
}

// Build { topicId → { id, text, path } } lookup from examData
function _buildTopicLookup(examData) {
  const lookup = {};
  examData.subjects.forEach(subj => {
    subj.topics.forEach(topic => {
      topic.points.forEach(point => {
        const pid = _pointId(point);
        if (pid) {
          lookup[pid] = {
            id: pid,
            text: _pointText(point),
            path: subj.name + ' · ' + topic.name
          };
        }
      });
    });
  });
  return lookup;
}

// Lectures from `otherLectures` that share at least one topicId.
// Returns full lecture objects (so callers can read `page`, etc).
function _findMirroredLectures(thisLec, otherLectures) {
  if (!thisLec.covers || !otherLectures) return [];
  const myTopicIds = new Set(thisLec.covers.map(c => c.topicId));
  return otherLectures.filter(other => {
    if (!other.covers) return false;
    return other.covers.some(c => myTopicIds.has(c.topicId));
  });
}

// Lectures (from any pool) that cover a given topicId.
// Returns { id, n, title, page, degree } so the caller can build links.
function _findLecturesCoveringTopic(topicId, lecturePools) {
  const result = [];
  lecturePools.forEach(pool => {
    if (!pool) return;
    pool.forEach(lec => {
      if (!lec.covers) return;
      const cov = lec.covers.find(c => c.topicId === topicId);
      if (cov) {
        result.push({ id: lec.id, n: lec.n, title: lec.title, page: lec.page, degree: cov.degree });
      }
    });
  });
  return result;
}

// True if any topic in this subject has at least one covering lecture.
function _subjectHasAnyLectures(subject, lecturePools) {
  if (!subject.topics || !lecturePools || !lecturePools.length) return false;
  for (let i = 0; i < subject.topics.length; i++) {
    const topic = subject.topics[i];
    if (!topic.points) continue;
    for (let j = 0; j < topic.points.length; j++) {
      const pid = _pointId(topic.points[j]);
      if (pid && _findLecturesCoveringTopic(pid, lecturePools).length > 0) return true;
    }
  }
  return false;
}
