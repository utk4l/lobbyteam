---
title: Sophimind Presentation Brand Guidelines
status: canonical
updated: 2026-09-08
tags: sophimind, brand-kit, presentations, revealjs, show
---

# Sophimind Presentation Brand Guidelines

These are the default rules for every Sophimind presentation written in reveal.js markdown and published to Show. They preserve the visual direction established for Sophimind decks: calm, spacious, distinctive, and easy to follow. Persistent branding is owned by the Show theme, following the working FabrixMed pattern.

The canonical theme source is [`reveal-theme-sophimind.css`](./reveal-theme-sophimind.css); Show serves it as `reveal-theme-sophimind.css` whenever a deck selects `theme: sophimind`.

## 1. Brand assets: use the actual image files

The canonical assets are in this folder:

| Asset | Use |
| --- | --- |
| `sophimind-light-trans-logo.png` | Transparent square logo artwork for light-background slides. It contains the dark SophiMind mark. |
| `sophimind-darkest-trans-logo.png` | Transparent square logo artwork for dark cover slides. It contains the light SophiMind mark. |
| `sophimind-dark-trans.png` | Transparent square logo artwork for dark interior slides. It contains the light SophiMind mark. |
| `sophimind-dark-background.png` | Full-bleed dark background for every dark slide. |
| `sophimind-light-background.png` | Full-bleed light background for every light slide. |
| `sophimind palette.png` | Palette reference only; do not use it as a slide background. |

Do not redraw the logo with text, Unicode symbols, CSS circles, inline approximations, or a substitute icon. Do not use the wordmark alone when the square logo is requested. Use the correct PNG asset for the slide background.

For Show publication, a deck must reference a stable served asset URL or an approved embedded asset. A local path such as `/Users/deepesh/...` will not work for viewers. If Show’s asset path is used, copy the canonical image without changing its proportions or colors and verify the live slide after publishing.

## 2. Logo placement

The Sophimind square logo must appear on every interior slide at the absolute top-right, matching the placement convention used by the FabrixMed decks. Cover slides are the exception: they use only the large centered logo and do not show the small corner logo.

Recommended treatment:

- position: fixed in a Show-level viewport overlay supplied by the Sophimind theme;
- top: `0.75rem`;
- right: `0.75rem`;
- width and height: approximately `3rem` to `3.5rem`;
- z-index: above slide content (recommended `20`);
- preserve the square aspect ratio;
- keep clear space around the logo;
- never place body text beneath or behind it.

Use `sophimind-darkest-trans-logo.png` on dark cover slides, `sophimind-dark-trans.png` on dark interior slides, and `sophimind-light-trans-logo.png` on light slides. The transparent variants are required so the logo does not introduce an opaque square behind the mark. The logo is a navigation and trust marker, not a decorative title element; it should be visible without competing with the slide’s message.

## 3. Cover slides

Every deck needs a clear cover slide with only:

- a large centered Sophimind square logo;
- one title;
- one subtitle.

Do not place a small top-right logo, next-step prompt, paragraph, qualification, link, or speaker-facing note on the cover. Put any presenter guidance on the next slide or in the deck's private talk track.

For a dark cover, use `sophimind-dark-background.png` as the full-slide background and `sophimind-darkest-trans-logo.png` as the centered logo. For a light cover, use `sophimind-light-background.png` and `sophimind-light-trans-logo.png`.

The cover should communicate the subject in seconds. Do not put a table of contents, dense qualifications, multiple claims, or a full paragraph on the cover.

## 4. Horizontal and vertical slide system

In Show/reveal.js markdown:

- `---` creates the next horizontal story section and moves left/right.
- `--` creates a vertical deep-dive slide within the current section and moves up/down.

### Horizontal slides: dark narrative

Horizontal slides carry the primary story arc:

**Problem → pressure → solution → proof → commercial value → next step**

Use `sophimind-dark-background.png` as the full-slide background and `sophimind-dark-trans.png` at the top-right. Keep the slide decisive and memorable; it should advance the story rather than explain every detail.

### Vertical slides: light deep-dives

Vertical slides answer the natural follow-up question raised by the horizontal slide. They may contain:

- workflow detail;
- examples;
- comparison grids;
- operating mechanics;
- metrics;
- risks and controls;
- implementation details.

Use `sophimind-light-background.png` as the full-slide background and `sophimind-light-trans-logo.png` at the top-right. A viewer should be able to return to the horizontal story without losing the main thread.

## 5. Typography

Use **Raleway** for all regular text, product names, cover titles, slide headings, lists, tables, notes, and supporting copy. Reserve **Monoton** exclusively for the explicitly styled lowercase `sophimind` brand word. Keep typography consistent across decks; do not introduce a different display or body family for an individual product.

For product cover lockups, use the exact casing `ProductInCamelCase by sophimind`: the product name stays in its approved CamelCase form in Raleway, while lowercase `sophimind` is styled in Monoton. For example: `BoothTeam by sophimind`.

Recommended hierarchy:

- one strong H1 or H2 idea per slide;
- short subhead for qualification or consequence;
- normal-weight body copy for explanation;
- bold only for the few words that carry the point;
- monospace only for code, API names, identifiers, or technical payloads.

Use generous line height and whitespace. Avoid all-caps body copy. Small labels may use uppercase with letter spacing, but they should remain short.

### Responsive type scale

The canonical theme uses a fluid type scale rather than a fixed percentage
increase. Body text grows with available viewport width on large screens and
is bounded separately on narrow screens. Headings use the same approach with
their own limits. This makes use of generous desktop whitespace without
letting vertical deep-dives become unreadable or overflow on phones.

Do not override the theme with fixed pixel sizes for ordinary slide text. If a
slide still feels sparse, improve hierarchy or add a visual relationship
before increasing local font sizes. Small labels, notes, and the persistent
logo remain independently sized.

## 6. Text density and visual discipline

The slide face is for the audience; the speaker notes are for the presenter.

Default rules:

- one idea per slide;
- no more than three to five short bullets unless the slide is explicitly a deep-dive grid;
- avoid paragraphs longer than two or three lines;
- use a diagram, sequence, table, or example when relationships matter;
- do not force all caveats, citations, definitions, and implementation detail onto one slide;
- put supporting evidence, nuance, citations, and talk track in `Note:` speaker notes;
- split a crowded slide into a horizontal claim plus vertical supporting slides.

If a slide requires the presenter to read it aloud, it is too dense. If a claim needs qualification, keep the claim concise and put the qualification in the notes or the next vertical slide.

## 7. Content and story standards

Every product deck should make these questions easy to answer:

1. What problem exists?
2. Who experiences it?
3. Why is the current solution insufficient?
4. What does Sophimind make possible?
5. What is materially better for the customer or operator?
6. Where does the product fit in the Sophimind portfolio?
7. What proof would establish that it works?

Do not lead with internal architecture or generic “AI-powered” language. Lead with the business problem and the changed outcome. Technical detail belongs in vertical deep-dives, appendices, or notes unless the audience is explicitly technical.

## 8. Product-family consistency

FrontDesk, Hola, Remi, AYS, Revenue Room, Preso, and SOPHI may have distinct stories, but they should feel like one portfolio:

- Sophimind is the parent brand;
- product names remain prominent and readable;
- product-specific colors may be accents, not replacements for the Sophimind system;
- the logo treatment, typography, spacing, and slide rhythm remain consistent;
- shared capabilities should be described through the product outcome they enable.

Do not force a shared capability into a product story where it does not improve the customer outcome.

## 9. Reveal.js / Show implementation pattern

Use the standard Show frontmatter. The `sophimind` theme is a custom Show theme and must be selected explicitly:

```yaml
slideOptions:
  theme: sophimind
  center: true
  transition: slide
  margin: 0.08
  slideNumber: true
  compact: true
  autoFit: true
  scrollOverflow: true
```

Use slide-level background and text variables so the dark/light treatment remains legible:

```html
<!-- .slide: data-background-color="#10152b" style="--r-main-color:#f4f0e8;--r-heading-color:#f4f0e8" -->
```

```html
<!-- .slide: data-background-color="#eef2f3" style="--r-main-color:#171b32;--r-heading-color:#171b32" -->
```

The actual logo image should be supplied by the Show-level `sophimind` theme, following the FabrixMed pattern. Do not put repeated corner-logo `<img>` elements inside Markdown slides; the theme overlay must remain outside Reveal's transformed slide tree. It uses fixed top-right placement, high z-index, preserved square dimensions, no pointer interaction, and responsive narrow-screen insets. The logo must be visible in the published viewer, not only in the local editor.

Every slide must also declare its matching full-slide background image with `data-background-size="cover"`; do not use the background image only on the cover. The first slide is the exception for the persistent corner logo: the theme hides the viewport overlay on the cover.

## 10. QA checklist before publishing

- [ ] Every interior slide has the correct square logo at the absolute top-right through the Show-level Sophimind theme overlay.
- [ ] Cover slides have no corner logo and contain only the large centered logo, title, and subtitle.
- [ ] Dark covers use `sophimind-darkest-trans-logo.png`; dark interior slides use `sophimind-dark-trans.png`; light slides use `sophimind-light-trans-logo.png`.
- [ ] Cover titles, product names, all other headings, and regular text use Raleway; only explicit lowercase `sophimind` brand words use Monoton.
- [ ] The cover uses the correct full-slide background and a large centered logo.
- [ ] Horizontal slides tell the story; vertical slides deepen it.
- [ ] No slide is text-heavy or visually crowded.
- [ ] Speaker notes contain citations, caveats, and presenter detail where needed.
- [ ] Links, images, and asset URLs work outside the local filesystem.
- [ ] The deck is published under the correct namespace and slug.
- [ ] The live URL is hard-refreshed and checked at desktop and narrow widths.
- [ ] Navigation confirms `---` is horizontal and `--` is vertical.

## Related

- [Publish a deck to Show](../Cookbook%20—%20Publish%20a%20deck%20to%20show.iqwyk.com.md)
- [Public presentation registry](../../presentations/README.md)
