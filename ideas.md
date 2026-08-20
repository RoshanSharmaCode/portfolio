# Roshan Sharma Portfolio — Design Direction

## Three possible approaches

### Theme Name: Editorial Systems
Very dark product-studio portfolio with strong typographic hierarchy, asymmetrical case-study layouts, and a bright utility accent. It feels like a precise engineering notebook made presentation-ready.

Probability: 0.07

### Theme Name: Monochrome Terminal
A quieter black-and-white interface built around command-line rhythm, monospace labels, and utility-panel navigation. It is direct and technical, with almost no decorative color.

Probability: 0.03

### Theme Name: Soft Infrastructure
A light, warm interface with blueprint-like diagrams, pale blue-gray surfaces, and restrained green signals. It frames engineering as calm, thoughtful infrastructure work.

Probability: 0.09

## Selected approach: Editorial Systems

### Design Movement
Contemporary editorial product design with influences from Swiss typography, software observability dashboards, and printed technical manuals.

### Core Principles
1. Make technical work legible through strong hierarchy and modular visual language.
2. Use asymmetry and offset alignment to suggest momentum without visual noise.
3. Keep decoration functional: every accent line, node, and label should point to structure or intent.
4. Favor calm, fast motion and high contrast over spectacle.

### Color Philosophy
Charcoal establishes a serious workbench. Warm parchment keeps long-form reading humane and prevents the dark mode from feeling synthetic. Acid-lime is reserved for signals, links, active states, and forward motion so it reads as a meaningful system event rather than a generic brand color. Steel blue-gray provides secondary technical context.

### Layout Paradigm
Use a narrow, sticky reading rail alongside wide section fields. Hero content begins offset from the rail; projects alternate media and text to create a case-study cadence. Avoid symmetrical centered blocks wherever the content can benefit from a clear left edge or an intentional hang.

### Signature Elements
- Small uppercase system labels paired with lime index numbers.
- Thin route lines and node markers that connect sections like an API trace.
- Project cards with a dark inset preview window and a single lime interaction state.

### Interaction Philosophy
Interactions should feel like a system responding to a request: immediate, quiet, and informative. Hover states expose only useful links; active navigation shows location; mobile navigation is a compact command surface.

### Animation
Use Framer Motion for 180–260ms reveals, subtle upward transitions, and project image scale on hover. Stagger related items by 40–60ms. Never animate layout dimensions or use continuous glow. Respect reduced-motion preferences.

### Typography System
Use Space Grotesk for display and navigation, IBM Plex Mono for system labels, tags, and metadata, and Inter for long-form reading. Headings use tight tracking and strong weight; body text stays relaxed and readable; monospace is always uppercase or compact when acting as a label.

### Brand Essence
Roshan Sharma builds resilient interfaces and full-stack systems for teams that care about how products work. Personality: **precise, curious, dependable**.

### Brand Voice
Headlines are concise and specific. CTAs are direct and useful. Microcopy explains state honestly instead of pretending a backend exists.

Example lines:
- “Interfaces with a working backend.”
- “A few systems I’ve shipped and studied closely.”

### Wordmark & Logo
Use the generated symbol as a compact two-bracket route mark: an abstract path moving through a node. Pair it with a custom text lockup where “ROSHAN” is set in Space Grotesk and “SHARMA” is tracked in IBM Plex Mono.

### Signature Brand Color
Acid Lime — `#D6F36A` — used only for active system states, selected paths, and calls to action.

## Style Decisions
- Dark-first; no light-mode toggle is necessary for the first release.
- Generated visuals are used only in hero and project previews; no repeated image reuse.
- Honest empty states are preferred over fabricated GitHub counts, metrics, reviews, or testimonials.
- Contact form is a visible email-service placeholder until a backend is connected.
- All sections use semantic landmarks and visible focus states.
