/**
 * SVG diagrams keyed by card id (rule cards). Loaded before app.js.
 * Triangles use consistent labeling; angles and ratios match standard geometry texts.
 * Right angles use the standard small-square symbol (not an arc).
 */
(function () {
  "use strict";

  var stroke = "#1e5a8a";
  var muted = "#5c6370";
  var fillRt = "none";
  var raFill = "#ffffff";

  /** Right-angle square at vertex (cx,cy): legs run +x and −y (SVG y-down), size s. */
  function markRA_BL(cx, cy, s) {
    s = s || 15;
    return (
      '<path d="M ' +
      cx +
      " " +
      cy +
      " L " +
      (cx + s) +
      " " +
      cy +
      " L " +
      (cx + s) +
      " " +
      (cy - s) +
      " L " +
      cx +
      " " +
      (cy - s) +
      ' Z" fill="' +
      raFill +
      '" stroke="' +
      muted +
      '" stroke-width="1.25" stroke-linejoin="miter"/>'
    );
  }

  window.GEOMETRY_DIAGRAMS = {
    /* 30°-60°-90°: x and x√3 outside legs; 2x outside hypotenuse (same style); angles tucked into wedges away from strokes */
    "t30-1":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 222" role="img" aria-label="30-60-90 triangle with sides x, x times square root of 3, and 2x">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 170 L 213 170 L 40 70 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 170, 15) +
      '<text x="148" y="158" font-size="11" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">30°</text>' +
      '<text x="64" y="100" font-size="11" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">60°</text>' +
      '<text x="12" y="122" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">x</text>' +
      '<text x="126" y="192" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">x√3</text>' +
      '<text x="142" y="90" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">2x</text>' +
      "</g></svg>",

    "t30-2":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 222" role="img" aria-label="30-60-90 triangle: short leg x, long leg x root 3, hypotenuse 2x">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 170 L 213 170 L 40 70 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 170, 15) +
      '<text x="148" y="158" font-size="11" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">30°</text>' +
      '<text x="64" y="100" font-size="11" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">60°</text>' +
      '<text x="12" y="122" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">x</text>' +
      '<text x="126" y="192" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">x√3</text>' +
      '<text x="142" y="90" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">2x</text>' +
      "</g></svg>",

    /* 45°-45°-90°: top 45° at A sits deep in wedge (below hypotenuse); x√2 further out; bottom 45° clear of hyp */
    "t45-1":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 222" role="img" aria-label="45-45-90 triangle with legs x and hypotenuse x root 2">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 170 L 140 170 L 40 70 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 170, 15) +
      '<text x="12" y="122" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">x</text>' +
      '<text x="90" y="192" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">x</text>' +
      '<text x="124" y="82" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">x√2</text>' +
      '<text x="100" y="158" font-size="11" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">45°</text>' +
      '<text x="54" y="118" font-size="11" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">45°</text>' +
      "</g></svg>",

    "t45-2":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 222" role="img" aria-label="45-45-90 triangle with legs x and hypotenuse x root 2">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 170 L 140 170 L 40 70 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 170, 15) +
      '<text x="12" y="122" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">x</text>' +
      '<text x="90" y="192" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">x</text>' +
      '<text x="124" y="82" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">x√2</text>' +
      '<text x="100" y="158" font-size="11" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">45°</text>' +
      '<text x="54" y="118" font-size="11" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">45°</text>' +
      "</g></svg>",

    /* Right triangle: legs a, b; hypotenuse c */
    "py-1":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 218" role="img" aria-label="Right triangle with legs a and b and hypotenuse c">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 50 160 L 220 160 L 50 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(50, 160, 15) +
      '<text x="28" y="102" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600">b</text>' +
      '<text x="132" y="182" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">a</text>' +
      '<text x="148" y="88" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600">c</text>' +
      "</g></svg>",

    "py-2":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 218" role="img" aria-label="Triangle with sides a, b, c; right angle opposite c when a squared plus b squared equals c squared">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 50 160 L 220 160 L 50 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(50, 160, 15) +
      '<text x="28" y="102" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600">b</text>' +
      '<text x="132" y="182" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">a</text>' +
      '<text x="148" y="88" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600">c</text>' +
      "</g></svg>",

    /* Triangle ABC — no right angle */
    "lc-1":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 212" role="img" aria-label="Triangle A B C with sides a opposite A, b opposite B, c opposite C">' +
      '<g transform="translate(14 12)">' +
      '<path d="M 140 28 L 38 168 L 242 168 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      '<text x="132" y="22" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">A</text>' +
      '<text x="28" y="182" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">B</text>' +
      '<text x="248" y="182" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">C</text>' +
      '<text x="138" y="178" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600" text-anchor="middle">a</text>' +
      '<text x="78" y="108" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600">c</text>' +
      '<text x="198" y="108" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600">b</text>' +
      "</g></svg>",

    "lc-2":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 228" role="img" aria-label="Right triangle with right angle at C, legs a and b, hypotenuse c">' +
      '<g transform="translate(14 14)">' +
      '<path d="M 45 165 L 225 165 L 45 40 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(45, 165, 15) +
      '<text x="38" y="38" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">A</text>' +
      '<text x="232" y="172" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">B</text>' +
      '<text x="32" y="178" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">C</text>' +
      '<text x="28" y="108" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600">b</text>' +
      '<text x="128" y="182" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600" text-anchor="middle">a</text>' +
      '<text x="148" y="92" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600">c</text>' +
      '<text x="118" y="200" font-size="10" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">∠C = 90° ⇒ cos C = 0</text>' +
      "</g></svg>",

    "ls-1":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 218" role="img" aria-label="Triangle with vertices A B C and sides a b c for Law of Sines">' +
      '<g transform="translate(14 12)">' +
      '<path d="M 140 28 L 38 168 L 242 168 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      '<text x="132" y="22" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">A</text>' +
      '<text x="28" y="182" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">B</text>' +
      '<text x="248" y="182" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">C</text>' +
      '<text x="138" y="178" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600" text-anchor="middle">a</text>' +
      '<text x="78" y="108" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600">c</text>' +
      '<text x="198" y="108" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600">b</text>' +
      '<text x="96" y="52" font-size="10" font-family="system-ui,sans-serif" fill="' +
      muted +
      '">a/sin A</text>' +
      "</g></svg>",

    "ls-2":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 212" role="img" aria-label="Generic triangle for side-angle relationships">' +
      '<g transform="translate(14 12)">' +
      '<path d="M 140 28 L 38 168 L 242 168 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      '<text x="132" y="22" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">A</text>' +
      '<text x="28" y="182" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">B</text>' +
      '<text x="248" y="182" font-size="13" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700">C</text>' +
      '<text x="138" y="178" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600" text-anchor="middle">a</text>' +
      '<text x="78" y="108" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600">c</text>' +
      '<text x="198" y="108" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" font-weight="600">b</text>' +
      "</g></svg>",

    /* Right triangle SOH/CAH/TOA — θ at B; hyp near interior offset from hypotenuse midpoint; θ in acute wedge; formula below */
    "soh-1":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 238" role="img" aria-label="Right triangle: sine equals opposite over hypotenuse">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 165 L 210 165 L 40 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 165, 15) +
      '<text x="172" y="146" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700" text-anchor="middle">θ</text>' +
      '<text x="12" y="102" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">opp</text>' +
      '<text x="125" y="180" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">adj</text>' +
      '<text x="110" y="114" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">hyp</text>' +
      '<text x="125" y="212" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" text-anchor="middle">sin θ = opp/hyp</text>' +
      "</g></svg>",

    "soh-2":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 238" role="img" aria-label="Right triangle: cosine equals adjacent over hypotenuse">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 165 L 210 165 L 40 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 165, 15) +
      '<text x="172" y="146" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700" text-anchor="middle">θ</text>' +
      '<text x="12" y="102" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="start">opp</text>' +
      '<text x="125" y="180" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">adj</text>' +
      '<text x="110" y="114" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">hyp</text>' +
      '<text x="125" y="212" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" text-anchor="middle">cos θ = adj/hyp</text>' +
      "</g></svg>",

    "soh-3":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 238" role="img" aria-label="Right triangle: tangent equals opposite over adjacent">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 165 L 210 165 L 40 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 165, 15) +
      '<text x="172" y="146" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700" text-anchor="middle">θ</text>' +
      '<text x="12" y="102" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">opp</text>' +
      '<text x="125" y="180" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">adj</text>' +
      '<text x="110" y="114" font-size="12" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">hyp</text>' +
      '<text x="125" y="212" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" text-anchor="middle">tan θ = opp/adj</text>' +
      "</g></svg>",

    "soh-4":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 238" role="img" aria-label="Right triangle labeling opposite, adjacent, and hypotenuse relative to angle theta">' +
      '<g transform="translate(14 14)">' +
      '<text x="125" y="22" font-size="10" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">Hypotenuse is opposite the right angle.</text>' +
      '<path d="M 40 165 L 210 165 L 40 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 165, 15) +
      '<text x="172" y="146" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700" text-anchor="middle">θ</text>' +
      '<text x="12" y="102" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">opp</text>' +
      '<text x="125" y="180" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">adj</text>' +
      '<text x="110" y="114" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">hyp</text>' +
      "</g></svg>",

    "soh-5":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 252" role="img" aria-label="SOH-CAH-TOA ratios on a right triangle">' +
      '<g transform="translate(14 12)">' +
      '<text x="125" y="20" font-size="10" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">SOH: sin θ = opp/hyp</text>' +
      '<text x="125" y="34" font-size="10" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">CAH: cos θ = adj/hyp</text>' +
      '<text x="125" y="48" font-size="10" font-family="system-ui,sans-serif" fill="' +
      muted +
      '" text-anchor="middle">TOA: tan θ = opp/adj</text>' +
      '<path d="M 40 185 L 210 185 L 40 55 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 185, 15) +
      '<text x="172" y="166" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700" text-anchor="middle">θ</text>' +
      '<text x="12" y="122" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">opp</text>' +
      '<text x="125" y="200" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">adj</text>' +
      '<text x="110" y="134" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">hyp</text>' +
      "</g></svg>",

    "rec-1":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 238" role="img" aria-label="Cosecant as hypotenuse over opposite">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 165 L 210 165 L 40 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 165, 15) +
      '<text x="172" y="146" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700" text-anchor="middle">θ</text>' +
      '<text x="12" y="102" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">opp</text>' +
      '<text x="110" y="114" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">hyp</text>' +
      '<text x="125" y="212" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" text-anchor="middle">csc θ = hyp/opp</text>' +
      "</g></svg>",

    "rec-2":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 238" role="img" aria-label="Secant as hypotenuse over adjacent">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 165 L 210 165 L 40 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 165, 15) +
      '<text x="172" y="146" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700" text-anchor="middle">θ</text>' +
      '<text x="125" y="180" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">adj</text>' +
      '<text x="110" y="114" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">hyp</text>' +
      '<text x="125" y="212" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" text-anchor="middle">sec θ = hyp/adj</text>' +
      "</g></svg>",

    "rec-3":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 238" role="img" aria-label="Cotangent as adjacent over opposite">' +
      '<g transform="translate(14 10)">' +
      '<path d="M 40 165 L 210 165 L 40 35 Z" fill="' +
      fillRt +
      '" stroke="' +
      stroke +
      '" stroke-width="2.2" stroke-linejoin="round"/>' +
      markRA_BL(40, 165, 15) +
      '<text x="172" y="146" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="700" text-anchor="middle">θ</text>' +
      '<text x="12" y="102" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="start">opp</text>' +
      '<text x="125" y="180" font-size="12" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" font-weight="600" text-anchor="middle">adj</text>' +
      '<text x="125" y="212" font-size="11" font-family="system-ui,sans-serif" fill="' +
      stroke +
      '" text-anchor="middle">cot θ = adj/opp</text>' +
      "</g></svg>",
  };
})();
