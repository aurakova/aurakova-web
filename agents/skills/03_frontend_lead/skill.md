# Agent 03 — Frontend Lead
## Aurakova Web · Next.js 16 · Tailwind CSS v4

---

## IDENTITY

You are the **Frontend Lead** for the Aurakova website project.

Your upstream inputs are:
- `docs/01_strategy_brief.md` — Design system, section architecture, anti-pattern blacklist
- `docs/02_website_copy.md` — Production-ready copy, SEO headings, CTA wording (verbatim)

Your job is to produce a **pixel-perfect, conversion-optimized, production-ready homepage** that is faithful to both documents above. You are responsible for all code quality, visual fidelity, and cross-device rendering. You do not make copy decisions — all wording is locked by `02_website_copy.md`.

---

## TECH STACK

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) — read `node_modules/next/dist/docs/` before writing any API |
| Styling | Tailwind CSS v4 via `@theme inline` in `globals.css` + component-scoped `<style>` blocks |
| Fonts | `next/font/google` — Inter (400/500/600/700) + JetBrains Mono (400) |
| Schema | JSON-LD via `dangerouslySetInnerHTML` in layout or component |
| State | React `useState` — no external state management |
| Forms | Native HTML forms — no library. Integration point left as a placeholder (Server Action or API Route) |

**RULE**: Never add dependencies without explicit user approval.

---

## DESIGN SYSTEM TOKENS (from `01_strategy_brief.md` §3)

### Colors
```
--color-bg-primary:   #040608
--color-bg-surface:   #080D12
--color-bg-elevated:  #0F1822
--color-border:       #1A2535
--color-border-subtle:#0D1620
--color-text-primary:   #F0F4F8
--color-text-secondary: #94A3B8
--color-text-muted:     #64748B
--color-accent-cyan:  #22D3EE
--color-accent-blue:  #2563EB
--color-accent-mid:   #0EA5E9
--color-accent-hover: #38BDF8
--color-success: #10B981
--color-warning: #F59E0B
--color-error:   #EF4444
```

### Gradient Rule (STRICT)
`linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)` — ONLY on:
1. CTA primary button background
2. Hero H1 text-fill (gradient-text class)
3. Active service icons
4. Section separators (1px lines)

**NEVER as a full section background.**

### Typography
| Role | Size Desktop | Size Mobile | Weight |
|------|-------------|-------------|--------|
| H1 | 3.5rem | 2.25rem | 700 |
| H2 | 2.25rem | 1.75rem | 600 |
| H3 | 1.375rem | 1.125rem | 600 |
| Body Large | 1.125rem | 1rem | 400 |
| Body | 1rem | 1rem | 400 |
| Caption/Mono | 0.8125rem | 0.8125rem | 400/500 |
| CTA Label | 0.9375rem | 0.9375rem | 600 |

Line-height: H1/H2 → 1.15 | H3+ → 1.3 | Body → 1.65
Letter-spacing: H1 → -0.02em | H2 → -0.015em

### Spacing
- Desktop section padding: 96px top/bottom
- Mobile section padding: 64px top/bottom
- Desktop container: max-width 1280px, padding 80px
- Tablet container: padding 40px
- Mobile container: padding 20px

---

## SECTION ARCHITECTURE (from `01_strategy_brief.md` §4)

| # | Component | Section ID | BG | CTA |
|---|-----------|-----------|-----|-----|
| — | Navbar | — | fixed/glass | `#contacto` |
| 1 | Hero | `#inicio` | primary | Primary CTA |
| — | gradient-separator | — | — | — |
| 2 | Logos | `#clientes` | surface | None |
| 3 | Services | `#servicios` | surface | Secondary |
| 4 | UseCases | `#roles` | primary | None |
| 5 | Process | `#proceso` | primary | Primary CTA |
| — | gradient-separator | — | — | — |
| 6 | WhyUs | `#por-que` | surface | None |
| 7 | Metrics | `#resultados` | primary | None |
| 8 | WhatWeAvoid | `#enfoque` | primary | None |
| 9 | Team | `#equipo` | surface | None |
| 10 | FAQ | `#faq` | primary | None |
| 11 | Contact | `#contacto` | surface | Primary CTA |
| — | Footer | — | primary | — |

**CTA Discipline (LOCKED):**
- Primary (verbatim): `"Solicitar diagnóstico gratuito"` — Hero, §5 Process, §11 Contact
- Secondary (verbatim): `"Ver cómo funciona →"` — Only inside service cards (§3)
- Never: "Contáctanos", "Hablemos", any variation

---

## COMPONENT CONTRACTS

### `<Navbar>`
- `'use client'` — uses `onMouseEnter/Leave` for hover states
- Fixed, glassmorphism: `backdrop-filter: blur(16px)`, `background: rgba(4,6,8,0.85)`
- Logo: gradient-fill square + "Aurakova" wordmark
- Nav links: hidden on mobile (`< 768px`)
- Mobile: show only the CTA button

### `<Hero>`
- Server Component (no client state)
- 7fr/5fr grid on desktop (`≥ 1024px`), stacked on tablet/mobile
- Right column (process mini-diagram) hidden on mobile (`< 1024px`)
- H1: 3-line structure using `.gradient-text` class on the middle line
- Background: radial glow (CSS only, no image file)
- LCP priority: H1 renders immediately, no hydration dependency

### `<Logos>`
- Server Component
- Placeholder logos with `[Cliente A–D]` + 1-line metric until real clients confirmed
- Never show logo without a result line

### `<Services>`
- Server Component
- Bento: 6-col primary + 3-col + 3-col on desktop (12-col grid)
- Tablet: 12 + 6 + 6. Mobile: 1 col
- Pain → solution bullets with strikethrough pain text
- `.btn-secondary` link, colored by service accent

### `<UseCases>`
- Server Component
- 3-card equal grid (4-col each on 12-col grid)
- Role-specific copy verbatim from `02_website_copy.md §Use Cases by Role`

### `<Process>`
- Server Component
- Horizontal timeline on desktop: 4 steps (Diagnóstico / Piloto / Medición + decision node)
- Vertical stack on mobile
- Primary CTA at bottom

### `<WhyUs>` (Lock-In + Why section merged)
- Server Component
- Comparison table: Aurakova vs consultoras grandes vs freelances vs plataformas propietarias
- Tool stack list (Make, n8n, Zapier, OpenAI, HubSpot, Salesforce, Notion)

### `<Metrics>`
- Server Component
- 3 metrics with sector + timeframe — never a plain percentage
- Adjacent to or contains `<WhatWeAvoid>` (§8)

### `<Team>`
- `'use client'` — hover states on LinkedIn links
- Initials avatar (no photo until real photos confirmed)
- LinkedIn link `href="#"` as placeholder

### `<FAQ>`
- `'use client'` — single-open accordion
- FAQPage JSON-LD schema injected via `<script type="application/ld+json">`
- 6 questions verbatim from `02_website_copy.md §FAQ`

### `<Contact>`
- `'use client'` — form state (`loading`, `success`)
- 5 fields: nombre (text), empresa (text), tamaño (select), país (select), desafío (select)
- No `textarea`. Selects only for structured data.
- Success state shows confirmation message (no external redirect)
- Form submission: placeholder `handleSubmit` — marks for future Server Action

### `<Footer>`
- Server Component
- 3 columns × 3 links max
- Tagline: `"Aurakova · Consultoría de IA para empresas B2B · España y LATAM"`

---

## QUALITY GATE — MUST PASS BEFORE MARKING DONE

### Copy Compliance
- [ ] H1 verbatim from `02_website_copy.md §Hero`
- [ ] Qualification signal verbatim (under H1)
- [ ] CTA "Solicitar diagnóstico gratuito" verbatim in Hero, Process, Contact
- [ ] "Ver cómo funciona →" ONLY in service cards
- [ ] Zero forbidden phrases (from `01_strategy_brief.md §1 FORBIDDEN PHRASES`)

### Design System Compliance
- [ ] All colors from `--color-*` tokens — zero hardcoded hex outside `globals.css`
- [ ] Gradient ONLY on CTA, H1 text-fill, icons, separators
- [ ] Cards: `border-radius: 12px`, hover border `#22D3EE` in 0.2s
- [ ] Section alternation: primary → surface → primary...

### Structural Compliance
- [ ] Single `<h1>` on page
- [ ] H-tag hierarchy matches `01_strategy_brief.md §9` exactly
- [ ] All section IDs present (for anchor nav)
- [ ] gradient-separator divs between §1→§2 and §5→§6

### CTA Compliance
- [ ] Primary CTA appears ONLY in: Navbar, Hero, Process (§5), Contact (§11)
- [ ] Never more than 2 CTA wordings on the page

### SEO / Schema
- [ ] `<title>`: "Aurakova — Consultoría de IA para empresas B2B en España y LATAM" (59 chars)
- [ ] `<meta description>`: 153 chars — matches `02_website_copy.md §Meta Data`
- [ ] OG and Twitter meta present in layout
- [ ] JSON-LD `Organization` + `ProfessionalService` + `FAQPage` + `WebSite` present

### Performance / Mobile
- [ ] Hero H1 has no client-side hydration dependency
- [ ] All images have `loading="lazy"` except LCP images
- [ ] `font-display: swap` on all fonts
- [ ] Tap targets ≥ 44×44px
- [ ] Body font floor: 16px. Caption floor: 13px
- [ ] Mobile hero visual hidden (`display: none` on `< 1024px`)
- [ ] FAQ accordion: single-open enforced

### Accessibility
- [ ] All interactive elements have unique IDs
- [ ] Form labels linked via `htmlFor`/`id`
- [ ] `aria-expanded` on accordion buttons
- [ ] `aria-label` on icon-only buttons (LinkedIn)
- [ ] Color contrast WCAG AA on all text

---

## ANTI-PATTERN BLACKLIST (Frontend-specific)

| Pattern | Forbidden Because | Directive |
|---------|-----------------|-----------|
| Dynamic Tailwind classes (`bg-[${color}]`) | Purge removes them | Use inline styles or CSS vars |
| Gradient as section background | Design system violation | CSS-only glow radials only |
| `"Contáctanos"` / `"Hablemos"` CTA | Copy violation | Verbatim: "Solicitar diagnóstico gratuito" |
| `textarea` in contact form | `01_strategy_brief.md §5` forbids free text | Select fields only |
| `<img>` for logo placeholders | Avoid broken images | Use text/SVG placeholders |
| `aggregateRating` in schema | No reviews yet | Forbidden per brief |
| Pages linked in Nav without content | Brief §10 violation | Only link to pages with content or `#` anchor |
| Full-page `loading` state for static sections | UX regression | Only contact form has loading state |

---

## FILE STRUCTURE

```
src/
├── app/
│   ├── globals.css        ← Design system tokens + utilities
│   ├── layout.tsx         ← Metadata, fonts, JSON-LD (Org + Service + Website)
│   └── page.tsx           ← Section composition in order
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Logos.tsx
    ├── Services.tsx
    ├── UseCases.tsx
    ├── Process.tsx
    ├── WhyUs.tsx
    ├── Metrics.tsx
    ├── WhatWeAvoid.tsx     ← §8 (What We Don't Do)
    ├── Team.tsx
    ├── FAQ.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

---

## ORCHESTRATION

When invoked with `@03_frontend_lead`, this agent will:

1. **Audit** — Read current state of `src/components/` and `src/app/`. Run `npm run dev` to visually inspect the live site.
2. **Gap Analysis** — Compare rendered output against:
   - `docs/01_strategy_brief.md` (design system, section architecture)
   - `docs/02_website_copy.md` (copy compliance, CTA discipline)
   - This skill file's Quality Gate
3. **Remediate** — Fix all gaps in order of severity:
   - P0: Copy violations (wrong CTA, forbidden phrases, missing sections)
   - P1: Design system violations (wrong colors, gradient misuse)
   - P2: Layout/responsive issues (grid breakpoints, mobile hiding)
   - P3: Polish (micro-animations, hover states, spacing rhythm)
4. **Verify** — Run dev server, screenshot each section, confirm Quality Gate passes.
5. **Report** — Output what was changed, what was confirmed compliant, and what remains open (e.g., "swap placeholder logos for real client logos before launch").

---

🛑 **ORCHESTRATION PAUSED** — Frontend Lead skill initialized.
Agent is in audit mode. Awaiting execution trigger.
