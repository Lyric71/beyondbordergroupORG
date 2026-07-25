---
seo_title: AI native, both sides of the wall | BearingBridge
meta_description: "BearingBridge runs AI native: cross-border marketing between China and the West, AI consulting, and AIGC production. Two model ecosystems, one group."
excerpt: AI changed the agency job. BearingBridge runs AI native across cross-border marketing, AI consulting, and AIGC production, advising both sides of the wall, every day.
canonical: https://www.bearingbridge.com/the-group/
---

# The Group page: build spec for Claude Code

Target page: https://www.bearingbridge.com/the-group/ on the existing Astro site.

## Build rules

- Replace the page body only. Keep the site header, nav, footer, fonts, colors, and spacing system as they are.
- Use the copy in this file verbatim. Do not rewrite, shorten, or add. Never introduce em dashes.
- Every section below has a wireframe, the copy, and build notes. The wireframe shows desktop. All card grids stack to one column on mobile; the stat strip may go 2x2 on tablet.
- Eyebrows use the site's existing small label style. Stat numbers are large, labels small, source lines smallest and muted.

## Page map, top to bottom

```
1  hero          eyebrow / H1 / lead paragraph
2  engine        display line / 4 beat cards / support line
3  proof strip   eyebrow / lead / 4 stat cards / optional pull quote
4  three shifts  eyebrow / 3 cards / kicker line
5  the wall      2 columns + center divider / body / link
6  practices     transition line / 3 link cards / closer / link
7  operator      photo left / bio right
8  where we are  cities line / languages line
9  cta           headline / body / button
```

## Section 1: Hero

```
+----------------------------------------------------+
| The group                                          |
|                                                    |
| AI changed the agency job.                         |
| We rebuilt the group around it.                    |
|                                                    |
| lead paragraph, max width around 60ch              |
+----------------------------------------------------+
```

Eyebrow: The group

H1: AI changed the agency job. We rebuilt the group around it.

Lead: AI is changing the way everything gets made: strategy, content, media, websites, commerce. An agency that treats it as a side project is quoting yesterday's prices for yesterday's work.

Build notes: full-width band, generous top padding, no imagery.

## Section 2: The engine

```
+----------------------------------------------------+
| AI is now our core engine.                         |
|                                                    |
| +----------+ +----------+ +----------+ +---------+ |
| | We       | | We use   | | We live  | | We grow | |
| | advise   | | it every | | on it.   | | on it   | |
| | on it.   | | day.     | |          | | with our| |
| |          | |          | |          | | clients.| |
| +----------+ +----------+ +----------+ +---------+ |
|                                                    |
| support line under the row                         |
+----------------------------------------------------+
```

Display line: AI is now our core engine.

Beat cards, in this order:
1. We advise on it.
2. We use it every day.
3. We live on it.
4. We grow on it with our clients.

Support line: We have no AI department, because we have no non-AI department. Every brief in this group, from a Tmall flagship launch to a LinkedIn program, runs through the same stack we sell.

Build notes: four equal cards in one row, subtle surface fill, no borders heavier than the site hairline. Order is meaningful, keep it.

## Section 3: Proof strip

```
+----------------------------------------------------+
| The job has already changed                        |
| lead paragraph                                     |
|                                                    |
| +--------+  +--------+  +--------+  +-----------+  |
| |  87%   |  |  70%   |  |  602M  |  | 60 to 90% |  |
| | label  |  | label  |  | label  |  |  label    |  |
| | source |  | source |  | source |  |  source   |  |
| +--------+  +--------+  +--------+  +-----------+  |
|                                                    |
| optional pull quote, desktop only                  |
+----------------------------------------------------+
```

Eyebrow: The job has already changed

Lead: Nobody argues anymore about whether AI belongs in marketing. The biggest advertisers are building the capability in-house and repricing the work. The open question is what an agency does with the hours it gives back.

Stat card 1
Number: 87%
Label: of marketers use generative AI as of Q1 2026, up from 51% two years earlier
Source: Salesforce State of Marketing 2026

Stat card 2
Number: 70%
Label: cut in advertising production time and cost at Nestlé, scaling AI digital twins
Source: Nvidia, 2026

Stat card 3
Number: 602M
Label: generative AI users in China by December 2025, up 141.7% in one year
Source: CNNIC, February 2026

Stat card 4
Number: 60 to 90%
Label: cheaper: what open Chinese models can run versus leading Western ones
Source: OpenRouter data via CNBC, July 2026

Optional pull quote, desktop only: Unilever now produces brand imagery twice as fast at half the cost using AI and digital twins.
Pull quote attribution: Nvidia, 2026

Build notes: number on top at display size, label at body-small, source at caption size muted. If the template has no pull quote block, drop the pull quote, do not improvise one.

## Section 4: Three shifts

```
+----------------------------------------------------+
| What changed for us                                |
|                                                    |
| +---------------+ +-------------+ +--------------+ |
| | More with     | | Faster      | | More         | |
| | less          | |             | | audiences    | |
| | body          | | body        | | body         | |
| +---------------+ +-------------+ +--------------+ |
|                                                    |
| kicker line under the row                          |
+----------------------------------------------------+
```

Eyebrow: What changed for us

Card 1 title: More with less
Card 1 body: A small senior team with a full AI stack now does what used to take departments: research, positioning, copy in the client's languages, design systems, video, working code. We do not bill hours for work machines finish in minutes. Scopes and retainers are priced on outcomes and volume, not headcount.

Card 2 title: Faster
Card 2 body: Work that took a quarter now takes weeks, and the weeks are turning into days. Production is rarely the bottleneck now. Approval is. So we rebuilt our review loops along with our production, on a single weekly cadence wherever a client lets us.

Card 3 title: More audiences
Card 3 body: When the cost of one more variant collapses, markets that never justified the budget suddenly do. More languages. More platforms and formats than the old budget ever covered. A mid-size brand can now run a multi-market program that used to require a holding company.

Kicker: Localization used to be the expensive part of entering China or leaving it. Now the expensive part is judgment: which platform, which claim, which price, which partner. That is the part we sell, and the part we do not hand to a machine.

Build notes: three bordered cards, equal height. Kicker is one full-width paragraph, slightly emphasized, not a card.

## Section 5: Both sides of the wall

```
+----------------------------------------------------+
| Both sides of the wall                             |
|                                                    |
| +--------------------+ | +----------------------+ |
| | West               | | | China                | |
| | GPT                | | | Qwen                 | |
| | Claude             | | | DeepSeek             | |
| | Gemini             | | | Doubao               | |
| |                    | | | Kimi                 | |
| +--------------------+ | +----------------------+ |
|            center divider is the wall              |
|                                                    |
| body paragraph under both columns                  |
| link: the bridge                                   |
+----------------------------------------------------+
```

Eyebrow: Both sides of the wall

Left column label: West
Left column list: GPT, Claude, Gemini

Right column label: China
Right column list: Qwen, DeepSeek, Doubao, Kimi

Body: Two AI ecosystems are growing up on either side of the wall. Our AI teams benchmark them against each other on real tasks, month after month, because the ranking does not hold still. We hold no allegiance to either side. We pick whatever wins the task at a price the market can carry. The same neutrality applies to our advice. We take Western brands into China and Chinese brands into the West, and we sit on both sides of the wall while we do it.

Link text: The longer version of this argument is on the bridge.
Link URL: https://www.bearingbridge.com/the-bridge/

Build notes: two tinted panels with a visible vertical rule between them, the rule is the wall. Distinct tints per side, same tint family for label and text. Columns stack on mobile with the rule becoming horizontal.

## Section 6: Three practices, one stack

```
+----------------------------------------------------+
| None of this is theory. Here is where it runs.     |
|                                                    |
| +---------------+ +---------------+ +------------+ |
| | AI Services   | | Cross-Border  | | Products   | |
| | one-liner     | | Marketing     | | one-liner  | |
| |               | | one-liner     | |            | |
| +---------------+ +---------------+ +------------+ |
|                                                    |
| closer line                                        |
| link: how we work                                  |
+----------------------------------------------------+
```

Transition line: None of this is theory. Here is where it runs.

Card 1 title: AI Services
Card 1 URL: https://www.bearingbridge.com/ai-services/
Card 1 body: The stack itself: AI consulting, our Intelligence platform, AIGC production, and LinkedIn B2B, from strategy through production.

Card 2 title: Cross-Border Marketing
Card 2 URL: https://www.bearingbridge.com/cross-border-marketing/
Card 2 body: The stack under market pressure: five agencies carrying brands between China and the West, in both directions, every day.

Card 3 title: Products
Card 3 URL: https://www.bearingbridge.com/products/
Card 3 body: The stack with our own money at stake: media and software we own and operate.

Closer: Whatever we recommend to a client has already run on our own business. If it breaks, it breaks on us first.

Link text: The mechanics are on how we work.
Link URL: https://www.bearingbridge.com/how-we-work/

Build notes: three clickable cards, whole card is the link target, use the site's existing agency card pattern if one exists.

## Section 7: The operator

```
+----------------------------------------------------+
| The operator                                       |
|                                                    |
| +---------+  bio text block                        |
| | photo   |  four short sentences plus link        |
| +---------+                                        |
+----------------------------------------------------+
```

Eyebrow: The operator

Body: BearingBridge is founded and led by Cyril Drouin. Digital, eCommerce, and brand, across Europe and North Asia. Former Chief Digital and eCommerce Officer, Publicis Groupe North Asia. Founder of BysoftChina. He rebuilt this group around AI because he has watched every previous platform shift punish the agencies that moved last.

Link text: Connect on LinkedIn
Link URL: https://www.linkedin.com/in/cyril-d-68835729/

Photo asset: existing portrait at /Team/CyrilDrouin.jpg

Build notes: photo left, text right, stacks photo above text on mobile.

## Section 8: Where we are

```
+----------------------------------------------------+
| Where we are                                       |
| Shanghai · Hong Kong · Singapore · Paris · Hangzhou|
| reps line, languages line                          |
+----------------------------------------------------+
```

Eyebrow: Where we are

Line 1: Shanghai · Hong Kong · Singapore · Paris · Hangzhou, with in-market reps in the US, UK, Germany, and France.
Line 2: We work in English, French, Spanish, German, and Chinese, on a working day that overlaps China and Europe.

Build notes: single quiet band, no cards.

## Section 9: CTA

```
+----------------------------------------------------+
| Start with the practice you need.    [Book a call] |
| body line under the headline                       |
+----------------------------------------------------+
```

Headline: Start with the practice you need.

Body: Thirty minutes on a call. We will point you to the right practice and the right team inside it, and we reply within one working day, Shanghai or Paris time.

Button label: Book a call
Button URL: https://www.bearingbridge.com/contact/

Build notes: closing band, site's primary button style, no other elements after it.
