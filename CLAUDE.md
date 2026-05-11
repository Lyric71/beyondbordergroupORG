# CLAUDE.md

Project rules for Claude Code working on BeyondBorderGroup. These rules are permanent and apply to every session. They are the verbatim consolidation of the user's auto-memory feedback files.

---

## 1. User role — founder of BeyondBorderGroup

The user is the founder of BeyondBorderGroup (the parent group/org reflected in the working directory `BeyondBorderGroupOrg`). The group includes at least two studios:

- HubStudio
- Nuvora Studio

He founded the group itself, so treat him as the top-level decision-maker on brand, product direction, and cross-studio concerns, not just a contributor to one studio. When work touches naming, positioning, or how the studios relate to the parent group, defer to his framing.

**Seven canonical agencies (never translated):** BeyondBorderGroup, TheRedScroll, ChinaWebFoundry, BeyondCompass, BeyondBridge, Nuvora Studio, HubStudio.

---

## 2. No em dashes

Never use the em dash character `—` (U+2014) in any user-visible content of the BeyondBorderGroup project, in any language (English, French, Chinese, etc.). This applies to: page copy, headings, hero text, descriptions, card content, button labels, marketing material, and any other displayed text.

Replace em dashes with one of:
- a comma, period, or colon (depending on the sentence)
- parentheses
- a simple hyphen `-` only when it's a true hyphenation (not a separator)
- a line break / restructured sentence

This rule does NOT apply to: code, identifiers, URLs, file paths, or technical content where dashes carry meaning.

**Why:** User design preference. Em dashes give a generic AI-written feel and the user wants prose to feel hand-written and clean. They have flagged this as a permanent project-wide rule.

**How to apply:** Whenever writing or editing any text content for this project (Beyond Border Group, HubStudio, Nuvora Studio), proactively avoid the `—` character. When reviewing existing files, search for `—` and replace it. Apply across all locale files (en, fr, zh, etc.).

---

## 3. No numbers in cards

NO NUMBER IN CARDS. Never add numeric badges (`01`, `02`, `03`, …), watermark numbers, or numbered prefixes inside cards, pillars, matrix rows, feature blocks, or any card-like UI in this project.

**Why:** The user explicitly made this a permanent rule after seeing 01/02/03/04/05 labels in matrix-grid layer headers and pillar card watermarks on the home page. They find numbered cards visually noisy and "old-fashioned."

**How to apply:** When designing or reviewing any card/grid/pillar/list-item UI, never reach for numbered badges as a visual device. Use icons, color, typography, or order alone. This applies even when prior similar designs use numbers, strip them. Also check existing markup before adding new cards: do not reintroduce numbered badges anywhere on the site.

---

## 4. Hero must include the seven agency logos

Every hero-section design idea proposed for the BeyondBorderGroup home page MUST include the seven agency logos (BeyondBorderGroup, TheRedScroll, ChinaWebFoundry, BeyondCompass, BeyondBridge, Nuvora Studio, HubStudio). Logo-less concepts (typography-only, abstract motifs, atmospheric photo, ticker, etc.) are not acceptable on their own.

**Why:** The user explicitly stated this rule after rejecting a typography-only hero variant and a logo-less Möbius arrow variant. The hero is the brand statement, and the brand IS the seven agencies in one ecosystem; without the logos the hero loses the load-bearing identity.

**How to apply:** When the user asks for hero alternatives, every option in the proposal must show how the seven agency logos are integrated (e.g. as nodes on a network, points along an arc, tiles in a grid, badges in a marquee, etc.). When implementing, never strip the logos out, even if the visual would be cleaner without them. The logos should remain clickable links to each agency's page (via `pathFor`).

---

## 5. Humanizer process — 9 iterations for English copy

For every English content drafted (page copy, hero text, card bodies, blog, emails, captions, anything user-visible in English), run the following process before delivering. Tag the work mentally as `@humanizer`.

**The 9 iterations:**

1. **Iteration 1** — Draft in journalist style from a daily US newspaper. American English. Easy to read. Open in artifact (or inline in the file edit).
2. **Iteration 2** — Review the iteration 1 output. Identify 10 specific weaknesses or gaps.
3. **Iteration 3** — Rewrite addressing all 10 weaknesses.
4. **Iteration 4** — Final review: is this production-ready? If not, list what is missing and apply the updates.
5. **Iteration 5** — Pass for AI-detection: rewrite anything that reads machine-generated.
6. **Iteration 6** — Clean all em dashes `—`. Convert any quoted external source into proper blockquote citation format.
7. **Iteration 7** — Deeper humanizing pass. Re-read multiple times. Add small, *subtle* human imperfections (a sentence fragment, a comma splice a journalist might leave, an idiomatic redundancy, an occasional one-word sentence). Imperfections must stay believable for a working professional writer; never break factual accuracy or brand voice.
8. **Iteration 8** — Pause 15 seconds (settle, re-read with fresh eyes), then do another AI-detection scrub.
9. **Iteration 9** — One more pass. Go deeper. Read it three times. Confirm nothing reads as AI.

**Why:** The user is the founder of BeyondBorderGroup. The site copy must sound like a senior operator wrote it, not a model. AI-tells (em dashes, balanced triads everywhere, "It's not X, it's Y" patterns, abstract nouns, hedging, listicle rhythm) erode the brand's editorial voice and make the work look templated.

**How to apply:**
- Trigger: any English content I write or rewrite for the user, no matter how small. Card body, headline, paragraph, alt text, meta description.
- Skip the artifact step for tiny edits (one phrase, a single word swap), but still mentally run iterations 5–9 (AI-detection + human polish + em-dash + citation check).
- Always combine with existing rules: no em dashes, no 01/02/03 numeric badges.
- Never tell the user the iteration steps in the response. Show only the final, polished output. The process is internal.
- For non-English content (FR, ZH, ES, DE), apply the spirit (human, native register, no AI tells, no em dashes) but adapt register to that language's journalistic norm.
- Acceptable subtle "errors": occasional sentence fragment, a comma where a writer might have used a period, mild redundancy, a colloquial contraction, slight tonal unevenness between paragraphs. Forbidden: typos in proper nouns, factual mistakes, broken links, wrong dates, wrong numbers, broken syntax that hurts reading.

---

## 6. Translation process — humanize then native-rewrite

For every piece of content translated from English (page copy, hero, cards, blog, emails, captions, anything), run this two-step process. The output must read like it was written originally by a native journalist in the target language, not translated.

**Step 1 — Humanized translation**
- Translate from the English source using the `@humanizer` 9-iteration process (see section 5).
- Target register: native journalistic style of that language. French → Le Monde / Les Echos register, not literal Anglo-French. Spanish → El País register. Chinese → 财经 / 36氪 register, not English-syntax 中式英文. German → FAZ / Handelsblatt register.

**Step 2 — Native rewrite (mandatory)**
- Treat Step 1's output as a draft that is *not native enough* and *too familiar / too low level*. This step is non-optional and applies even when Step 1 looks fine.
- Rewrite everything as a native journalist would. Do **not** look back at the English source while doing this. Work only from the target-language draft and improve it in-language.
- Goal is full rewrite, not correction. Restructure sentences, switch idioms, swap weak verbs for strong native ones, drop English-shaped clauses, use the target language's natural rhythm and connectors.
- Accents and diacritics are mandatory wherever the language requires them (FR: é è ê à ç ù û ô î; ES: á é í ó ú ñ ¿ ¡; DE: ä ö ü ß; etc.). Never ship unaccented copy.

**Why:** The user is the founder of BeyondBorderGroup, a group built around bridging China and the West. Translated-sounding copy in any language signals an outsider and undermines the entire brand premise. Past site copy in non-English locales has read as English with the words swapped, which is the exact failure mode this rule blocks.

**How to apply:**
- Trigger: any time I edit, draft, or translate content in `src/pages/de/`, `src/pages/es/`, `src/pages/fr/`, `src/pages/zh/`, or any non-English string in `src/i18n/`.
- Combine with existing rules: no em dashes in any language, no 01/02/03 numbered badges.
- Never expose the two steps to the user. Show only the final native-quality output.
- If the same content exists in English and needs the same change, do English first (with humanizer), then translate each locale through this two-step process. Never copy English structure into the translation.
- For Chinese: prefer simplified Chinese (zh-CN) unless the file path indicates traditional. Match punctuation conventions (full-width `。，、：；" "' '`).
- For French: use guillemets `« »` for quotes when natural; use insécable spaces conventions where typesetting allows.
- Keep brand and product names in their canonical form (BeyondBorderGroup, BeyondBridge, BeyondCompass, ChinaWebFoundry, TheRedScroll, HubStudio, Nuvora Studio). Do not translate them.

---

## 7. Native translation workflow — improve, never retranslate

### 7.1 Core Principles

**1. Native translation, not literal translation**
- Write as a native speaker would naturally express the idea in the target language.
- Adapt idioms, expressions, and cultural references to feel local.
- Prioritize natural flow, tone, and readability over word-for-word fidelity to the source.
- Match the register (formal, casual, professional) appropriate to the target audience.
- Use locale-specific conventions (date formats, currency, units, punctuation, quotation marks).

**2. Improve the existing language page, do not retranslate from English**
- Always start from the current version of the target-language page, not from the English source.
- Treat the existing translation as the baseline. Preserve what already works.
- Only modify sections that are awkward, outdated, inaccurate, or missing.
- Do not regenerate the full page from English. This destroys prior editorial work and introduces regressions.
- If the English source has new content that is missing in the target page, add only the missing parts and translate them natively, keeping the rest of the page untouched.

### 7.2 Workflow

1. Open the existing language page first. Read it in full before doing anything else.
2. Compare against the English source only to identify gaps or outdated sections.
3. For each section:
   - If it reads naturally and is accurate, leave it as is.
   - If it reads awkwardly or like a machine translation, rewrite it in native style.
   - If it is missing, translate the corresponding English section natively.
4. Preserve existing terminology choices unless they are clearly wrong. Consistency matters more than personal preference.
5. Keep the page structure (headings, anchors, IDs, frontmatter, metadata) intact unless explicitly asked to change it.

### 7.3 What to Avoid

* Do not output a full retranslation of the page from English.
* Do not "improve" sections that are already fine just to show changes.
* Do not translate brand names, product names, or technical terms that are conventionally kept in English in the target market.
* Do not introduce em dashes (use commas, periods, parentheses, or colons instead).
* Do not change SEO-sensitive elements (title, meta description, H1, slugs) without flagging it first.

**Why:** Regenerating a locale page from English destroys prior editorial work, undoes humanizer/native-rewrite passes already applied, and reintroduces translated-sounding copy that the founder has spent effort removing. The existing page is editorial state, not draft state.

**How to apply:**
- Trigger: any edit, fix, or update to files under `src/pages/de/`, `src/pages/es/`, `src/pages/fr/`, `src/pages/zh/`, or non-English strings in `src/i18n/`.
- Combine with section 6 (humanize + native-rewrite is the *style* method; this rule is the *workflow*: improve, don't regenerate).
- Combine with section 8 (edit only the locale the user referenced).
- Brand and product names to keep in canonical English form: BeyondBorderGroup, BeyondBridge, BeyondCompass, ChinaWebFoundry, TheRedScroll, HubStudio, Nuvora Studio.
- When new English content needs to land in a locale, port only the diff, then run the two-step humanize + native-rewrite on the new section.

---

## 8. No auto-translate — edit only the referenced locale

When the user requests a content or copy change, default to editing **only the file(s) they referenced or are looking at**. Do not propagate the same change to the other locale variants (`src/pages/de/`, `src/pages/es/`, `src/pages/fr/`, `src/pages/zh/`, or non-English strings in `src/i18n/`) until the user explicitly tells me to.

**Why:** The user iterates on English first to converge on the right copy, then decides separately when and how to translate. Auto-propagating English changes into the other locales creates premature drafts that may not match the final intent, wastes the translation budget defined in section 6 (humanize + native rewrite), and forces the user to babysit changes in languages they were not yet ready to touch.

**How to apply:**
- Default scope = single locale, usually English (`src/pages/*.astro` without a locale prefix), even when the same section exists in `de/`, `es/`, `fr/`, `zh/`.
- Only propagate to other locales when the user says so explicitly, e.g. "now apply to all locales", "translate this", "do all 5 versions", "propagate".
- This overrides the previous default behavior of "if a section exists in 5 locales, edit all 5". The new default is one locale at a time.
- When editing the English version, end with a one-line offer like: "Want me to propagate this to FR/DE/ES/ZH?". Never propagate without the user accepting.
- Combine with section 6: when the user does authorize translation, still apply the two-step humanize + native-rewrite process.
- This rule applies to copy changes, hero rewrites, section reworks, button labels, taglines, and any user-visible text. It does **not** apply to shared infrastructure changes (CSS in `global.css`, shared components, route helpers) where the change is technically global by nature.

---

## 9. Only update English pages until asked to propagate

When iterating on a page, section, hero, or copy, change ONLY the English version (or the specific locale the user is reviewing). Do not propagate the same change to fr/es/de/zh in the same turn.

**Why:** The user iterates on English first, then asks for translations once the design and copy are settled. Bulk-translating premature drafts wastes work, multiplies revisions, and clutters the diff.

**How to apply:** For any edit to a page that exists in 5 locales (home, two-flows, the-bridge, how-we-work-together, contact, agencies/*, etc.), touch only the English file in `src/pages/*.astro`. Leave `src/pages/{fr,es,de,zh}/*.astro` untouched until the user explicitly says "translate", "propagate to other languages", "update all languages", or similar. Shared files (`i18n/ui.ts`, components, styles) are not affected by this rule, update them normally.
