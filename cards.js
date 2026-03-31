/**
 * Geometry flashcard deck — edit this file to add or change cards.
 * Each card: topic id, type (rule | problem), front, back.
 * Plain text; use \n for line breaks in strings.
 * Rule-card diagrams: optional SVG strings keyed by id in diagrams.js (GEOMETRY_DIAGRAMS).
 */
(function () {
  window.GEOMETRY_CARDS = [
    /* ---------- 30-60-90 triangle ---------- */
    {
      id: "t30-1",
      topic: "30-60-90",
      type: "rule",
      front: "In a 30°-60°-90° triangle, what is the ratio of the three sides (short leg : long leg : hypotenuse)?",
      back: "1 : √3 : 2\n\nThe side opposite 30° is the shortest (call it x). The side opposite 60° is x√3. The hypotenuse (opposite 90°) is 2x.",
    },
    {
      id: "t30-2",
      topic: "30-60-90",
      type: "rule",
      front: "If the shortest side of a 30-60-90 triangle is 4, how do you find the other two sides?",
      back: "Short leg = x = 4.\nLong leg = x√3 = 4√3.\nHypotenuse = 2x = 8.\n\nAlways identify which side is x (opposite the 30° angle) first.",
    },
    {
      id: "t30-3",
      topic: "30-60-90",
      type: "problem",
      front: "A right triangle has angles 30°, 60°, and 90°. The leg opposite 30° has length 7. Find the hypotenuse and the other leg.",
      back: "Short leg (opposite 30°): x = 7.\nHypotenuse: 2x = 14.\nLong leg (opposite 60°): x√3 = 7√3.\n\nCheck: 7² + (7√3)² = 49 + 147 = 196 = 14². ✓",
    },
    {
      id: "t30-4",
      topic: "30-60-90",
      type: "problem",
      front: "In a 30-60-90 triangle, the hypotenuse is 18. Find both legs.",
      back: "Hypotenuse = 2x = 18, so x = 9 (short leg opposite 30°).\nLong leg = x√3 = 9√3.\n\nAnswer: legs are 9 and 9√3.",
    },

    /* ---------- 45-45-90 triangle ---------- */
    {
      id: "t45-1",
      topic: "45-45-90",
      type: "rule",
      front: "In a 45°-45°-90° (isosceles right) triangle, what is the ratio of leg : leg : hypotenuse?",
      back: "1 : 1 : √2\n\nThe two legs are equal. If each leg has length x, the hypotenuse is x√2 (by Pythagoras: √(x² + x²) = x√2).",
    },
    {
      id: "t45-2",
      topic: "45-45-90",
      type: "rule",
      front: "How do you get from the hypotenuse back to a leg in a 45-45-90 triangle?",
      back: "If hypotenuse = h, then each leg = h / √2.\n\nRationalize: h√2 / 2.\n\nExample: hypotenuse 10 → leg = 10/√2 = 5√2.",
    },
    {
      id: "t45-3",
      topic: "45-45-90",
      type: "problem",
      front: "Each leg of an isosceles right triangle is 5. Find the hypotenuse.",
      back: "hypotenuse = leg × √2 = 5√2.\n\nCheck: 5² + 5² = 50, and (5√2)² = 50. ✓",
    },
    {
      id: "t45-4",
      topic: "45-45-90",
      type: "problem",
      front: "The hypotenuse of a 45-45-90 triangle is 12. Find the length of each leg.",
      back: "leg = hypotenuse / √2 = 12/√2 = 6√2 (after rationalizing).\n\nEach leg is 6√2.",
    },

    /* ---------- Pythagorean theorem ---------- */
    {
      id: "py-1",
      topic: "pythagorean",
      type: "rule",
      front: "State the Pythagorean theorem and when it applies.",
      back: "For a right triangle with legs a and b and hypotenuse c:\n\na² + b² = c²\n\nOnly for right triangles. c must be the side opposite the right angle.",
    },
    {
      id: "py-2",
      topic: "pythagorean",
      type: "rule",
      front: "What is the converse of the Pythagorean theorem? Why is it useful?",
      back: "If a² + b² = c² for the three sides of a triangle, then the triangle is a right triangle (with right angle opposite c).\n\nUseful to test whether a triangle is right-angled from side lengths.",
    },
    {
      id: "py-3",
      topic: "pythagorean",
      type: "problem",
      front: "A right triangle has legs 9 and 12. Find the hypotenuse.",
      back: "c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15\n\nThis is a 3-4-5 triangle scaled by 3 (9, 12, 15).",
    },
    {
      id: "py-4",
      topic: "pythagorean",
      type: "problem",
      front: "A ladder 13 ft long leans against a wall. Its base is 5 ft from the wall. How high up the wall does the ladder reach?",
      back: "Right triangle: legs 5 and h, hypotenuse 13.\n5² + h² = 13² → 25 + h² = 169 → h² = 144 → h = 12.\n\nThe ladder reaches 12 ft up the wall.",
    },

    /* ---------- Law of Cosines ---------- */
    {
      id: "lc-1",
      topic: "law-of-cosines",
      type: "rule",
      front: "Write the Law of Cosines for side c opposite angle C in triangle ABC.",
      back: "c² = a² + b² − 2ab cos(C)\n\nLetters pair up: side c with angle C. You can write similar formulas for a² and b² by cycling the vertices.",
    },
    {
      id: "lc-2",
      topic: "law-of-cosines",
      type: "rule",
      front: "When does the Law of Cosines reduce to the Pythagorean theorem?",
      back: "When C = 90°, cos(C) = cos(90°) = 0, so the −2ab cos(C) term vanishes.\n\nc² = a² + b² + 0 = a² + b².\n\nSo the Pythagorean theorem is the special case for a right angle.",
    },
    {
      id: "lc-3",
      topic: "law-of-cosines",
      type: "problem",
      front: "In triangle ABC, sides a = 7, b = 10, and angle C = 60°. Find side c (opposite angle C).",
      back: "c² = a² + b² − 2ab cos(C)\nc² = 49 + 100 − 2(7)(10)(0.5)\nc² = 149 − 70 = 79\nc = √79\n\n(Keep exact form unless asked to round.)",
    },
    {
      id: "lc-4",
      topic: "law-of-cosines",
      type: "problem",
      front: "Triangle has sides 3, 4, and 5. Use the Law of Cosines to find the largest angle.",
      back: "Largest angle is opposite the longest side (5). Call it C with c = 5, a = 3, b = 4.\n\n25 = 9 + 16 − 2(3)(4)cos(C)\n25 = 25 − 24 cos(C) → cos(C) = 0 → C = 90°.\n\nIt’s a right triangle; the largest angle is 90°.",
    },

    /* ---------- Law of Sines ---------- */
    {
      id: "ls-1",
      topic: "law-of-sines",
      type: "rule",
      front: "State the Law of Sines for triangle ABC with sides a, b, c opposite angles A, B, C.",
      back: "a / sin A = b / sin B = c / sin C\n\nOften written as one ratio equal to 2R (circumradius), but this form is enough for solving triangles.",
    },
    {
      id: "ls-2",
      topic: "law-of-sines",
      type: "rule",
      front: "When is the Law of Sines especially handy compared to the Law of Cosines?",
      back: "Use Law of Sines when you know a side–angle pair (ASA, AAS) or two angles and a side, and want other sides.\n\nAmbiguous case: SSA can have 0, 1, or 2 triangles — check carefully.",
    },
    {
      id: "ls-3",
      topic: "law-of-sines",
      type: "problem",
      front: "In triangle ABC, angle A = 40°, angle B = 60°, and side c (opposite C) = 12. Find side a (opposite A).",
      back: "First, angle C = 180° − 40° − 60° = 80°.\nLaw of Sines: a / sin A = c / sin C\na / sin 40° = 12 / sin 80°\na = 12 sin 40° / sin 80°\n\nUse a calculator if a decimal is required.",
    },
    {
      id: "ls-4",
      topic: "law-of-sines",
      type: "problem",
      front: "Why might you use both the Law of Cosines and the Law of Sines on the same triangle problem?",
      back: "Typical flow (SAS): use Law of Cosines to find the third side, then Law of Sines to find a smaller angle (safer to avoid the ambiguous large angle first).\n\nOr (SSS): Law of Cosines for one angle, then Law of Sines for others.",
    },

    /* ---------- SOH-CAH-TOA (right triangle trig ratios) ---------- */
    {
      id: "soh-1",
      topic: "soh-cah-toa",
      type: "rule",
      front: "SOH means what?",
      back: "SOH means sin(θ) = opposite / hypotenuse.\n\nUse sine when you are relating the side opposite angle θ to the hypotenuse in a right triangle.",
    },
    {
      id: "soh-2",
      topic: "soh-cah-toa",
      type: "rule",
      front: "What does CAH tell you?",
      back: "CAH means cos(θ) = adjacent / hypotenuse.\n\nUse cosine when you are relating the side adjacent to angle θ to the hypotenuse.",
    },
    {
      id: "soh-3",
      topic: "soh-cah-toa",
      type: "rule",
      front: "What does TOA stand for?",
      back: "TOA means tan(θ) = opposite / adjacent.\n\nUse tangent when you are relating the opposite and adjacent legs (no hypotenuse needed in the ratio itself).",
    },
    {
      id: "soh-4",
      topic: "soh-cah-toa",
      type: "rule",
      front: "In a right triangle, how do you decide which side is “opposite” and which is “adjacent” for an acute angle θ?",
      back: "The hypotenuse is always opposite the right angle.\n\nFor angle θ at a vertex: the leg touching θ (other than the hypotenuse) is adjacent; the leg not touching θ is opposite.\n\nThen pick SOH, CAH, or TOA based on which two of those three parts you know or want.",
    },
    {
      id: "soh-5",
      topic: "soh-cah-toa",
      type: "rule",
      front: "What is the SOH-CAH-TOA mnemonic for?",
      back: "It remembers the three core ratios for an acute angle θ in a right triangle:\n\nSOH → sin(θ) = opposite / hypotenuse\nCAH → cos(θ) = adjacent / hypotenuse\nTOA → tan(θ) = opposite / adjacent\n\nAlso note: tan(θ) = sin(θ) / cos(θ) when cos(θ) ≠ 0.",
    },
    {
      id: "soh-6",
      topic: "soh-cah-toa",
      type: "problem",
      front: "In a right triangle, angle A is 35° and the hypotenuse is 10. Which trig ratio helps you find the side opposite angle A? Then set up the equation.",
      back: "Use sine, because sine relates opposite and hypotenuse (SOH).\n\nsin(A) = opposite / hypotenuse\nsin(35°) = opposite / 10\nopposite = 10 sin(35°)\n\nCompute with a calculator if a decimal is required.",
    },
    {
      id: "soh-7",
      topic: "soh-cah-toa",
      type: "problem",
      front: "In a right triangle, an acute angle is 50° and the hypotenuse is 15. You need the leg adjacent to the 50° angle. Which ratio do you use, and how do you solve?",
      back: "Use cosine, because cosine relates adjacent and hypotenuse (CAH).\n\ncos(50°) = adjacent / 15\nadjacent = 15 cos(50°)\n\nCosine is correct because the adjacent side and hypotenuse are the two parts involved.",
    },
    {
      id: "soh-8",
      topic: "soh-cah-toa",
      type: "problem",
      front: "Relative to angle θ in a right triangle, the adjacent leg is 9 and the opposite leg is 12. Which ratio finds θ, and what equation do you write?",
      back: "You know opposite and adjacent, so use tangent (TOA): tan(θ) = opposite / adjacent.\n\ntan(θ) = 12 / 9 = 4/3\nθ = arctan(4/3)\n\nTangent is the right choice because the hypotenuse is not needed to set up this ratio.",
    },
    {
      id: "soh-9",
      topic: "soh-cah-toa",
      type: "problem",
      front: "In a right triangle, the side opposite angle θ is 5 and the hypotenuse is 10. Find θ.",
      back: "Opposite and hypotenuse → use sine (SOH).\n\nsin(θ) = 5 / 10 = 1/2\nθ = arcsin(1/2) = 30°\n\n(Angles in degrees; in radians, θ = π/6.)",
    },
    {
      id: "soh-10",
      topic: "soh-cah-toa",
      type: "problem",
      front: "A right triangle has legs 5 and 12, and the hypotenuse is 13. For the acute angle θ opposite the side of length 5, explain which ratio uses the two known sides you need first to find θ.",
      back: "For θ, opposite = 5 and hypotenuse = 13.\n\nUse sine: sin(θ) = 5/13, so θ = arcsin(5/13).\n\nYou could also use cosine with adjacent = 12: cos(θ) = 12/13 — same θ. The key is labeling opposite/adjacent relative to θ before choosing SOH, CAH, or TOA.",
    },

    /* ---------- Reciprocal trig functions ---------- */
    {
      id: "rec-1",
      topic: "reciprocal-trig",
      type: "rule",
      front: "Define csc(θ) as a ratio in a right triangle and as the reciprocal of sin(θ).",
      back: "csc(θ) = hypotenuse / opposite, when opposite ≠ 0.\n\ncsc(θ) = 1 / sin(θ).\n\nSine and cosecant are reciprocals: multiply them and you get 1 (where defined).",
    },
    {
      id: "rec-2",
      topic: "reciprocal-trig",
      type: "rule",
      front: "Define sec(θ) as a ratio in a right triangle and as the reciprocal of cos(θ).",
      back: "sec(θ) = hypotenuse / adjacent, when adjacent ≠ 0.\n\nsec(θ) = 1 / cos(θ).\n\nCosine and secant are reciprocals.",
    },
    {
      id: "rec-3",
      topic: "reciprocal-trig",
      type: "rule",
      front: "Define cot(θ) as a ratio in a right triangle and as the reciprocal of tan(θ).",
      back: "cot(θ) = adjacent / opposite, when opposite ≠ 0.\n\ncot(θ) = 1 / tan(θ) (when tan(θ) is defined and not zero).\n\nTangent and cotangent are reciprocals.",
    },
    {
      id: "rec-4",
      topic: "reciprocal-trig",
      type: "problem",
      front: "If sin(θ) = 3/5, what is csc(θ)?",
      back: "csc(θ) is the reciprocal of sin(θ).\n\ncsc(θ) = 1 / sin(θ) = 1 / (3/5) = 5/3.\n\nCheck: sin(θ) · csc(θ) = (3/5)(5/3) = 1.",
    },
    {
      id: "rec-5",
      topic: "reciprocal-trig",
      type: "problem",
      front: "A right triangle has opposite = 8 and adjacent = 6 relative to angle θ. What is cot(θ)?",
      back: "cot(θ) = adjacent / opposite\n\ncot(θ) = 6/8 = 3/4.\n\nCotangent is the reciprocal of tangent; here tan(θ) = 8/6 = 4/3, and indeed 1/(4/3) = 3/4.",
    },
    {
      id: "rec-6",
      topic: "reciprocal-trig",
      type: "problem",
      front: "If cos(θ) = 12/13, what is sec(θ)?",
      back: "sec(θ) = 1 / cos(θ) = 1 / (12/13) = 13/12.\n\nAs a triangle ratio, sec(θ) = hypotenuse / adjacent = 13/12, which matches.",
    },
    {
      id: "rec-7",
      topic: "reciprocal-trig",
      type: "problem",
      front: "If tan(θ) = 4/3 (θ acute), what is cot(θ)? Explain using the reciprocal relationship.",
      back: "tan(θ) and cot(θ) are reciprocals: cot(θ) = 1 / tan(θ).\n\ncot(θ) = 1 / (4/3) = 3/4.\n\nYou can also think: cot(θ) = adjacent / opposite = 3/4 if opposite = 4 and adjacent = 3 for that angle.",
    },
    {
      id: "rec-8",
      topic: "reciprocal-trig",
      type: "problem",
      front: "Relative to angle θ in a right triangle, the hypotenuse is 17 and the adjacent leg is 8. What is sec(θ)? Why is sec the right function?",
      back: "Secant pairs hypotenuse and adjacent: sec(θ) = hypotenuse / adjacent.\n\nsec(θ) = 17/8.\n\nThat is also 1/cos(θ), since cos(θ) = adjacent / hypotenuse = 8/17.",
    },
  ];
})();
