# Strategy Blueprint — Aurakova

---

## 1. Competitive Audit & Anti-Patterns (somoscamaleon.com)

> Fuente: análisis del HTML, meta tags, schema markup y copy visible en el sitio de Camaleón.

| Categoría | Anti-Patrón Detectado | Evidencia Directa | Clasificación |
|-----------|----------------------|-------------------|---------------|
| **Copy hueco** | "Transformamos empresas B2B con Inteligencia Artificial" | OG Description principal | HOLLOW PHRASE |
| **Copy hueco** | "ecosistema integral" | Schema FAQ answer | HOLLOW PHRASE |
| **Copy hueco** | "líder en México y LATAM" | Meta description, schema | UNVERIFIABLE CLAIM |
| **Métricas placeholder** | "+100 empresas en 15 países" sin ningún caso nombrado ni sector | Meta description, schema | CREDIBILITY ANTI-PATTERN |
| **Métricas espurias** | "incrementos de hasta 340% en tasas de conversión" sin fuente, cliente ni contexto | Schema FAQ | FABRICATED METRIC |
| **Métricas espurias** | "reducciones del 60% en costos operativos" sin atribución | Schema FAQ | FABRICATED METRIC |
| **Métricas espurias** | "ROI promedio de 3x" sin sector ni timeframe | Schema FAQ | FABRICATED METRIC |
| **Distracción de foco** | "AI Academy – Comunidad de Aprendizaje" como 5.º servicio | Schema service catalog | AUDIENCE DILUTION |
| **Dispersión de CTA** | 4 variantes: "sesión de diagnóstico gratuita", "Consultar ahora", "Capacitaciones", "Unirse a la comunidad" | Schema + nav | CTA DISCIPLINE FAILURE |
| **Navegación sin contenido** | Pages `/consultoria`, `/automatizaciones`, `/marketing`, `/capacitaciones` linkeadas sin contenido verificable | Schema URLs | NAVIGATION INTEGRITY FAILURE |
| **Estructura monótona** | hero → métricas en badges → lista de servicios → logos → CTA footer | Patrón inferido | LAYOUT ANTI-PATTERN |
| **Credibilidad facial** | Cero personas identificadas, cero LinkedIn, cero fotos de equipo | Schema Organization | FACELESS CONSULTANCY |
| **SEO genérico** | Keywords: "agencia inteligencia artificial México" sin long-tail por sector | Meta keywords | SEO ANTI-PATTERN |

### FORBIDDEN PHRASES — Aurakova NEVER uses:
- "Transformamos empresas"
- "Resultados reales"
- "Ecosistema integral / completo / 360"
- "Líder en [mercado]"
- "Socios, no proveedores"
- "No vendemos humo"
- "340% de conversión" (o cualquier % sin fuente y cliente nombrado)
- "IA para todos"
- "Automatizamos tu negocio" (genérico)
- "Tu empresa del futuro"

---

## 2. Behavioral Analysis

> Perfil primario: Director de Operaciones / CEO / Responsable de Digital en empresa B2B de 30–300 empleados, España o LATAM, con herramientas digitales activas pero sin IA integrada estratégicamente.

| Dimensión | Output Específico para Aurakova |
|-----------|--------------------------------|
| **Estado emocional al llegar** | Mezcla de presión y escepticismo. Llegan desconfiados, no curiosos. Han visto proveedores que prometieron demasiado. |
| **Riesgo percibido #1** | "Voy a gastar €10K–€30K en una consultoría, me van a entregar un PowerPoint y desaparecer." |
| **Riesgo percibido #2** | "El proveedor construirá sobre una plataforma propietaria. Si hay problemas, estaré atado." |
| **Riesgo percibido #3** | "No sé si mi empresa realmente necesita IA o si me lo están vendiendo porque es la moda." |
| **Señales de confianza que FUNCIONAN** | (1) Nombres y caras reales con LinkedIn. (2) Proceso codo-a-codo. (3) Stack real (Make, n8n, OpenAI, Zapier). (4) Piloto de 4–8 semanas con entregable medible. (5) Años de experiencia B2B (20+ y 15+ años). |
| **Señales de confianza que NO FUNCIONAN** | Testimonios anónimos. Logos sin resultado. Porcentajes sin cliente. "100+ empresas" sin saber cuáles. |
| **Info NECESARIA antes de agendar** | ¿Cuánto tiempo? ¿Qué herramientas? ¿Qué pasa si el piloto no da resultados? ¿Qué necesito preparar? |
| **Info que NO necesitan** | Historia fundacional. Misión/visión/valores. Premios. "Somos apasionados por la tecnología." |
| **Decisor vs. validador** | Director de Ops/Digital inicia y valida. CEO/CFO aprueba presupuesto. El copy habla al primero, anticipa preguntas del segundo. |
| **Benchmark mental del decisor** | Compara contra: (a) freelance de automatización, (b) equipo interno, (c) consultora grande (Accenture, KPMG). |

---

## 3. Design System

### Color Palette

| Token | Hex | Usage | WCAG Contrast vs. bg-primary |
|-------|-----|-------|------------------------------|
| `--color-bg-primary` | `#040608` | Fondo de página principal | — |
| `--color-bg-surface` | `#080D12` | Cards, secciones alternadas | — |
| `--color-bg-elevated` | `#0F1822` | Hover states, modals, tooltips | — |
| `--color-border` | `#1A2535` | Bordes de cards, divisores | — |
| `--color-border-subtle` | `#0D1620` | Separadores dentro de cards | — |
| `--color-text-primary` | `#F0F4F8` | Headlines, body principal | 17.8:1 ✅ |
| `--color-text-secondary` | `#94A3B8` | Descripciones, subtítulos | 6.2:1 ✅ |
| `--color-text-muted` | `#64748B` | Metadata, timestamps, captions | 4.5:1 ✅ |
| `--color-accent-cyan` | `#22D3EE` | Gradient start, highlights | 8.1:1 ✅ |
| `--color-accent-blue` | `#2563EB` | Gradient end, links secundarios | 4.8:1 ✅ |
| `--color-accent-mid` | `#0EA5E9` | Botón CTA primario | 5.9:1 ✅ |
| `--color-accent-hover` | `#38BDF8` | CTA hover state | 7.1:1 ✅ |
| `--color-accent-glow` | `#22D3EE1A` | Glow difuso hero (10% opacity) | — |
| `--color-gradient-hero` | `linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)` | Logo echo, hero headline, CTA button | — |
| `--color-gradient-subtle` | `linear-gradient(135deg, #22D3EE0D 0%, #2563EB0D 100%)` | Card backgrounds activos | — |
| `--color-success` | `#10B981` | Métricas positivas, checkmarks | 5.8:1 ✅ |
| `--color-warning` | `#F59E0B` | Alertas | 6.3:1 ✅ |
| `--color-error` | `#EF4444` | Errores de formulario | 4.7:1 ✅ |

**Regla del gradiente**: `#22D3EE → #2563EB` EXCLUSIVAMENTE en: (1) botón CTA primario, (2) headline hero (text-fill gradient), (3) iconos de servicio activos, (4) separadores entre secciones críticas. Nunca como fondo de sección completa.

### Typography

| Rol | Font | Weight | Tamaño Desktop | Tamaño Mobile |
|-----|------|--------|---------------|---------------|
| H1 | Inter | 700 | 56px / 3.5rem | 36px / 2.25rem |
| H2 | Inter | 600 | 36px / 2.25rem | 28px / 1.75rem |
| H3 | Inter | 600 | 22px / 1.375rem | 18px / 1.125rem |
| H4 | Inter | 500 | 18px / 1.125rem | 16px / 1rem |
| Body Large | Inter | 400 | 18px / 1.125rem | 16px / 1rem |
| Body | Inter | 400 | 16px / 1rem | 16px / 1rem |
| Caption | Inter | 500 | 13px / 0.8125rem | 13px / 0.8125rem |
| Mono | JetBrains Mono | 400 | 14px / 0.875rem | 13px / 0.8125rem |
| CTA Label | Inter | 600 | 15px / 0.9375rem | 15px / 0.9375rem |

**Line height**: H1–H2: 1.15. H3–H4: 1.3. Body: 1.65. Caption: 1.4.
**Letter spacing**: H1: -0.02em. H2: -0.015em. Body: 0. Caption/Mono: +0.02em.

---

## 4. Section Architecture

| # | Sección | Propósito | Anti-Patrón que Resuelve | CTA |
|---|---------|---------|--------------------------|-----|
| 1 | **Hero** | Quién → para quién → qué obtienen → en cuánto tiempo. Señal de cualificación bajo el headline. | "Transformamos empresas" sin especificidad | Primario: "Solicitar diagnóstico gratuito" |
| 2 | **Logos + Resultado** | 4–6 logos de clientes previos del equipo. Cada logo con 1 línea de resultado o sector. | "+100 empresas" sin un nombre | Ninguno |
| 3 | **Qué Hacemos (3 servicios)** | Bento grid: nombre → dolor → resultado con timeframe → herramientas. Outcomes, no features. | Lista genérica sin dolor-solución | Secundario: "Ver cómo funciona" |
| 4 | **Casos de Uso por Rol** | 3 cards: Director de Ops, CEO, Responsable de Marketing. Bullets role-específicos. | One-size-fits-all messaging | Ninguno |
| 5 | **Por Qué el Piloto** | Diferenciador #1: piloto 4–8 semanas. Mecánica: diagnóstico → implementación → medición. Timeline horizontal 4 pasos. | Proceso oculto / no descrito | Primario: "Solicitar diagnóstico gratuito" |
| 6 | **Sin Lock-In** | Diferenciador #2: stack real (Make, n8n, Zapier, OpenAI). Mini-tabla vs. plataformas propietarias. | Riesgo percibido #2: dependencia | Ninguno |
| 7 | **Métricas con Contexto** | 3 resultados de proyectos previos del equipo. Formato: número → qué → sector → timeframe. | "340% de conversión" sin fuente | Ninguno |
| 8 | **Qué No Hacemos** | 4 puntos que filtran leads malos. Iconos ✗ + explicación positiva. | "AI Academy" diluyendo el mensaje | Ninguno |
| 9 | **Equipo** | 3 cards: Javier, Leandro, Juan Pablo. Foto + nombre + rol + expertise + LinkedIn. | Consultora fantasma sin caras | Ninguno |
| 10 | **FAQ (Contenido Real)** | 6 preguntas con respuestas 50–80 palabras. Accordion single-open. | FAQ titles sin contenido | Ninguno |
| 11 | **CTA Final** | Mismo wording exacto del hero. Form de 5 campos. Fondo surface con borde gradiente. | 4 variantes de CTA | Primario: "Solicitar diagnóstico gratuito" |

---

## 5. CTA Discipline

### CTA Primario
> **"Solicitar diagnóstico gratuito"**

Aparece verbatim en: Hero, §5 (Piloto), §11 (CTA Final).

### CTA Secundario
> **"Ver cómo funciona"**

Solo como link-text dentro de cada card de servicio (§3). Nunca en Hero, §11, ni footer.

### Form Fields (§11)

| Campo | Tipo | Opciones |
|-------|------|----------|
| Nombre | Text | "Tu nombre" |
| Empresa | Text | "Nombre de tu empresa" |
| Tamaño | Select | 1–10 / 11–50 / 51–200 / 201–500 / 500+ |
| País | Select | España / México / Argentina / Colombia / Chile / Perú / Otro |
| Principal desafío | Select | 5 opciones predefinidas |

---

## 6. Qualification Signal

**Wording mandatorio** (bajo el H1, antes del CTA):

> *"Para empresas B2B en España y LATAM que ya usan herramientas digitales y quieren que la IA trabaje dentro de su operación — no encima de ella."*

Body Large (18px), `--color-text-secondary`. No en badge, no enterrado.

---

## 7. Layout System

### Grid Base
```
Desktop (1280px+) : 12 columnas, gap: 24px, padding: 80px
Tablet (768–1279px) : 6 columnas, gap: 16px, padding: 40px
Mobile (<768px)   : 1 columna,  gap: 16px, padding: 20px
```

### Patrones por Sección

| Sección | Patrón Bento | Grid Spec |
|---------|-------------|-----------|
| §1 Hero | Hero + Anchor | 7-col texto / 5-col visual |
| §2 Logos | Metrics Row | 3+3+3+3 |
| §3 Servicios | Feature Bento D | 6-col / 3-col / 3-col |
| §4 Roles | Use Cases | 4-col / 4-col / 4-col |
| §5 Piloto | Process Timeline | 3+3+3+3 horizontal |
| §6 Lock-In | Feature Bento A | 8-col / 4-col |
| §7 Métricas | Metrics Row | 4-col / 4-col / 4-col |
| §8 No Hacemos | Bento C+B | 4+4+4 / 6+6 |
| §9 Equipo | Team Grid | 4-col / 4-col / 4-col |
| §10 FAQ | Full-width | 12-col columna única |
| §11 CTA Final | CTA Banner | 12-col / form 6-col centrado |

### Reglas de Ritmo Visual
1. Secciones alternan entre `--color-bg-primary` y `--color-bg-surface`.
2. Cada sección Bento: al menos 1 elemento que rompe el grid.
3. Separadores críticos (§1→§2, §5→§6): línea 1px `--color-gradient-hero`.
4. Cards: `border-radius: 12px`, `border: 1px solid --color-border`, hover: borde `--color-accent-cyan` en 0.2s.

---

## 8. Mobile Render Directives

### LCP Priority Stack (390px)

| Prioridad | Elemento | Regla |
|-----------|---------|-------|
| 1 | H1 Hero | Render inmediato. `font-display: swap`. |
| 2 | Subtítulo cualificación | Inmediato. Completa la propuesta above fold. |
| 3 | CTA button | Visible sin scroll junto al H1. |
| 4 | Gradiente de fondo | CSS-only. Cero bloqueo. Sin imagen en mobile. |
| 5 | Logo bar | `loading="lazy"`. |

### Reglas Mobile

| Regla | Especificación |
|-------|---------------|
| Tap targets | Mínimo 44×44px |
| Font floor | Body: 16px. Caption: 13px. |
| Padding de sección | `py-16` (64px) mobile vs `py-24` (96px) desktop |
| Visual del hero | Display none en mobile |
| FAQ accordion | Single-open obligatorio |

---

## 9. SEO Architecture

### H-Tag Homepage
```
H1: Aurakova — Consultoría de IA para empresas B2B en España y LATAM
  H2: Tres formas concretas de reducir costes operativos con IA
    H3: Consultoría IA Estratégica
    H3: Automatización de Procesos con IA
    H3: Marketing y Growth con IA
  H2: IA aplicada según tu rol
    H3: Para el Director de Operaciones
    H3: Para el CEO o Director General
    H3: Para el Responsable de Marketing o Digital
  H2: El método Aurakova: pilotamos antes de escalar
    H3: Semana 1–2: Diagnóstico de procesos
    H3: Semana 3–6: Implementación del piloto
    H3: Semana 7–8: Medición y decisión de escala
  H2: Por qué el 80% de los intentos de IA en empresas B2B no funcionan
  H2: Tus procesos no dependen de nosotros para funcionar
  H2: Resultados de proyectos del equipo
  H2: Lo que no hacemos — y por qué eso te beneficia
  H2: Quiénes somos
  H2: Preguntas frecuentes sobre consultoría de IA para empresas B2B
    H3: ¿Cuánto tiempo lleva implementar IA en una empresa B2B?
    H3: ¿Necesito tener experiencia previa con IA para trabajar con nosotros?
    H3: ¿Con qué herramientas trabajan y por qué eligieron esas?
    H3: ¿Qué incluye el diagnóstico gratuito?
    H3: ¿Qué pasa si el piloto no demuestra el ROI que esperábamos?
    H3: ¿Trabajan con empresas de cualquier sector?
  H2: Empieza con un diagnóstico — no con un compromiso
```

### URL Architecture
```
/                                  → Homepage
/consultoria-ia                    → Consultoría IA Estratégica
/automatizacion-procesos-ia        → Automatización de Procesos
/marketing-growth-ia               → Marketing y Growth con IA
/desarrollo-web                    → Servicio secundario (último en nav)
/ia-para-servicios-profesionales   → Landing sectorial
/ia-para-logistica-y-distribucion  → Landing sectorial
/ia-para-empresas-industriales     → Landing sectorial
/proceso                           → Cómo trabajamos
/equipo                            → Equipo y empresa
/contacto                          → Formulario standalone
```

### Schema Mandatorio — Homepage
`Organization` + `ProfessionalService` + `FAQPage` + `WebSite`
- `Organization`: array `employee` con los 3 miembros (name, jobTitle, sameAs LinkedIn).
- `ProfessionalService`: solo los 3 servicios core.
- NO inventar `aggregateRating`.

---

## 10. Anti-Pattern Blacklist

| Categoría | Patrón Prohibido | Por Qué | Directiva de Reemplazo |
|-----------|-----------------|---------|----------------------|
| **Copy** | "Transformamos empresas" | Cero especificidad | Especificar: qué proceso, qué resultado, en qué timeframe |
| **Copy** | "Resultados reales" | Irónico sin resultados concretos | Mostrar: sector + métrica + tiempo |
| **Copy** | "No vendemos humo" | Es la definición de vender humo | Demostrar con el proceso piloto |
| **Copy** | "Ecosistema integral / 360" | Frase vacía | Listar los 3 servicios por nombre |
| **Copy** | "Socios estratégicos, no proveedores" | Lo dice el 100% de las agencias | Mostrar: codo-a-codo, KPIs compartidos, piloto primero |
| **Copy** | "Líder en [mercado]" | No verificable | Los resultados construyen ese posicionamiento |
| **Métricas** | % sin fuente + sector + timeframe | Fabricación de credibilidad | Solo métricas atribuibles. Si no hay, eliminar. |
| **Métricas** | "0+ empresas" / "0+ proyectos" | Placeholder en producción | Número real o eliminar el bloque |
| **Métricas** | Logos sin contexto ni resultado | Name-dropping | Logo + 1 línea de resultado, o eliminar |
| **Estructura** | "Sobre nosotros" con historia fundacional | Nadie lee esto antes de comprar | Reemplazar con §9 Equipo |
| **Estructura** | Misión/visión/valores | Filler sin conversión | Eliminar |
| **Estructura** | "AI Academy" o formación individual | Dilución del mensaje B2B | Fuera del nav principal |
| **CTA** | Más de 2 wordings en homepage | Dilución de conversión | Uno primario + uno secundario |
| **CTA** | "Contáctanos" / "Hablemos" | Valor cero comunicado | "Solicitar diagnóstico gratuito" |
| **Navegación** | Links a páginas vacías | Destruye la confianza | Todo link con contenido mínimo viable |
| **Footer** | Más de 10 links | Abruma | Máximo 9 en 3 columnas de 3 |
| **Formulario** | Texto libre "Cuéntanos tu proyecto" | Fricción + datos no estructurados | Selects con opciones predefinidas |
| **Social proof** | Estrellas sin fuente verificable | Camaleón pattern | Omitir hasta tener reviews reales |

---

🛑 **ORCHESTRATION PAUSED:** Strategy Blueprint generado para Aurakova. Confirma con **APPROVE** para inicializar el agente de Copy Expert (02) y UI/UX Engineering.
