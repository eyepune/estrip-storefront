---
name: scroll-site-generator
description: Generates a custom-built, scroll-and-3D-animated, high-conversion homepage and product-page mockup (single-file HTML/CSS/JS) for eco-friendly and D2C wellness/CPG brand clients — think plant-based cleaning, natural skincare, supplements, organic food, sustainable home goods. Use this whenever the user asks for a "high-end conversion website," a "3D animated site," a "scroll site," a client homepage/product page mockup, or a redesign concept for an eco/D2C/wellness brand, even if they don't name this skill directly. Also use when asked to pitch or mock up a website for a lead/client in this space before a proposal. Do NOT use for B2B SaaS, fintech, enterprise, or non-eco/wellness consumer brands — those need a different visual language than this skill produces.
---

# Scroll Site Generator (Eco/D2C Wellness Edition)

Builds a single-file, scroll-animated, conversion-optimized homepage (and, on request, a matching product page) for eco-friendly and D2C wellness/CPG clients. This is a **design + build** skill: the output is a working HTML mockup the user can open in a browser and hand to a client, not a text description of a design.

This skill is tuned specifically for the eco/D2C wellness category (plant-based cleaning, natural personal care, supplements, organic food, sustainable home). Do not reuse this playbook unmodified for other categories (SaaS, fintech, enterprise) — the palette formula, tone, and trust signals here are calibrated to "natural product, needs credibility + category education," which doesn't transfer.

## Step 1: Get the brand facts before designing anything

Before writing any code, gather (from the conversation, an uploaded brief, or by fetching the client's current site):
- The core product mechanic — what's the one physical/visible thing that makes this product work? (e.g., a sheet dissolving, a serum absorbing, a capsule releasing). This becomes the animated hero signature moment.
- Real product names, prices, and any certifications/lab tests they actually have. Never invent certifications, review counts, or test standards — if unknown, use realistic placeholders and flag them as placeholders in a code comment.
- Existing brand colors/logo if any — don't discard a real brand identity in favor of this skill's default palette without checking.

If any of this is missing and the user hasn't supplied a source, ask one concise question rather than inventing product facts wholesale.

## Step 2: Brand system

**Palette formula** (avoid the generic "eco green + white" cliché — every brand should feel distinct):
- One deep, desaturated primary tied to the category, not just "green" — e.g., ink teal, terracotta, deep plum, charcoal olive
- One warm, single accent color pulled from an actual ingredient or product detail (citrus, turmeric, clay) — used sparingly, never as a second primary
- A soft neutral base (cream/off-white, not stark white) for backgrounds
- A pale tint of the primary for secondary surfaces/motifs
- Keep it to 4-5 colors total. Reference the client's real brand colors first if they exist.

**Type system**:
- Display serif with warmth/character for headlines (Fraunces is the default choice — has enough personality to avoid feeling corporate; substitute if the brand has an existing display font)
- Clean grotesque sans for body/nav/UI (Inter is the default)
- Monospace for data-driven trust content — certifications, specs, ingredient names, prices (IBM Plex Mono is the default) — this typographic contrast is what makes certification/spec sections feel credible rather than decorative

**The signature moment principle** (critical — this is what separates this skill's output from generic "add animations everywhere" work):
- Pick exactly ONE moment, almost always the hero, where 3D/scroll animation directly demonstrates the product mechanic identified in Step 1. This is where animation budget goes.
- Everywhere else, animation is restrained: scroll-triggered fade/reveal-on-entry only. Do not animate every element — over-animating a natural/wellness product's trust content (certifications, ingredient facts) undermines credibility rather than adding polish.
- Sequential content (real step-by-step instructions) gets numbered steps. Non-sequential content (ingredient lists, feature grids) gets an unordered "specimen index" grid instead — don't force numbering onto things that aren't a sequence.

## Step 3: Homepage anatomy

Build these sections in order, adapting copy/specifics to the real brand:

1. **Announcement bar** — shipping threshold, discount code, one-line trust claim
2. **Sticky nav** — logo, category links, cart/menu icons, primary CTA button; backdrop-blur on scroll
3. **Hero** — eyebrow line, headline (serif, one word/phrase in italic accent color), subhead, dual CTA (primary + secondary "see how it works"), a trust-badge row (customer count, units diverted from landfill, certifications), and the signature animated moment
4. **Value strip** — 4-icon grid of core value props, scroll-reveal on entry
5. **Product/shop grid** — 3-4 cards, hover-lift with subtle 3D tilt, price with strikethrough-anchor where a bundle/subscription discount applies, badges (bestseller, new, savings)
6. **How it works** — tabbed by product line if the brand has multiple use-cases, numbered steps, scroll-reveal
7. **Ingredient/spec index** — unordered grid, dark-background section for contrast, hover state per card
8. **Comparison** — honest table vs. the category incumbent (liquid/powder/pods, or equivalent) plus a price-per-use bar chart that fills in on scroll
9. **Social proof wall** — UGC/video-style testimonial grid with aggregate star rating
10. **Subscribe/bundle upsell banner** — the CRO workhorse; discount %, cancel-anytime reassurance
11. **FAQ accordion** — answer real objections (efficacy, safety, cancellation) — this reduces support load and pre-empts hesitation
12. **Final CTA** — restate the offer, repeat the discount code
13. **Footer** — newsletter capture, shop/company/policy link columns

## Step 4: Product page anatomy (when requested)

- Sticky/pinned gallery or product visual alongside scrolling info panel
- Sticky add-to-cart bar that follows scroll on mobile
- One-time vs. subscribe toggle with visible per-unit savings
- A "how far this goes" calculator or equivalent (loads/uses per pack)
- Ingredient/spec accordion (reuse Step 3 pattern, condensed)
- Reviews block with real-feeling but clearly-marked-placeholder quotes if none supplied
- Mini comparison vs. the category incumbent
- Related/complete-the-routine products

## Step 5: Technical build

- Single HTML file, GSAP + ScrollTrigger loaded via `https://cdnjs.cloudflare.com` for all scroll animation — this is the default animation engine for this skill
- Reserve any heavier WebGL/Three.js only for the one signature hero moment; if the user hasn't asked for true WebGL, a CSS-3D-transform + GSAP illusion (as used in the E-strip build) is the safer default — it's far more reliable to render correctly than real WebGL and still reads as "3D animated"
- Mobile-first responsive grid, `prefers-reduced-motion` respected, keep total animated elements reasonable so mobile scroll stays smooth
- Follow the standard file process: build in the working directory, copy the final file into the outputs directory, and use the file-presentation tool so the user can open/download it — don't just print code in chat
- Name the output file after the client and purpose, e.g. `<client>-conversion-site.html`

## Step 6: Present and iterate

Since this is a vibe-check workflow rather than an automated eval loop: after building, briefly point out the 2-3 design decisions most likely to need client sign-off (palette choice, the signature moment concept, which comparison claims are placeholders needing real data) so the user can catch issues before sending it to their client.
