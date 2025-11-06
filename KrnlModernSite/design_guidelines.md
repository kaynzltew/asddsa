# KRNL Website Design Guidelines

## Design Approach
**Reference-Based: Gaming/Tech Hybrid**
Drawing inspiration from Discord, Riot Games, and modern gaming platforms, combined with Linear's clean interface approach. Dark-themed, LED-accented gaming aesthetic that feels professional and cutting-edge.

## Core Design Principles
1. **Cyber Gaming Aesthetic**: Neon accents, gradient overlays, subtle glow effects
2. **Performance-Focused**: Clear hierarchy emphasizing features and download actions
3. **Professional Edge**: Elevated gaming look - sophisticated, not juvenile
4. **Minimal Friction**: Single-page experience with smooth scroll navigation

---

## Typography System

**Primary Font**: "Inter" or "Sora" (Google Fonts) - clean, modern, tech-forward
**Accent Font**: "Rajdhani" or "Orbitron" for headers - gaming aesthetic

**Hierarchy**:
- Hero Headline: 4xl-6xl, bold (700-800), tight tracking
- Section Headers: 3xl-4xl, semibold (600)
- Feature Titles: xl-2xl, medium (500)
- Body Text: base-lg, regular (400), increased line-height (1.7)
- Button Text: base-lg, semibold (600), uppercase with letter-spacing

---

## Layout System

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24 for consistency
- Section padding: py-16 md:py-24
- Component spacing: gap-6 to gap-12
- Container: max-w-7xl with px-4 md:px-8

**Grid Strategy**:
- Hero: Single column, centered content
- Features: 3-column grid (lg:grid-cols-3, md:grid-cols-2, mobile: 1)
- Downloads: 3-column platform cards
- Updates: 2-column cards with thumbnail + content

---

## Component Library

### Navigation
- Fixed header with blur backdrop (backdrop-blur-lg)
- Logo left, language switcher + download CTA right
- Hamburger menu for mobile
- Glow effect on scroll

### Hero Section
**Layout**: Full viewport height (min-h-screen) with centered content
**Background**: Animated gradient mesh or particle system effect (dark base with neon purple/cyan/green accents)
**Content**:
- Large KRNL logo/wordmark with subtle neon glow
- Powerful tagline: "Level 8 Roblox Script Executor"
- Feature badges: "100% Free" "Cross-Platform" "High Stability"
- Primary download button (gradient, glowing border)
- Platform icons below (Windows/Android/iOS)

**Image**: No hero image - use animated background with neon gradient particles/mesh instead

### Feature Cards
Glass-morphism cards with:
- Icon with neon glow effect (lime/cyan/purple rotation)
- Feature title
- 2-3 line description
- Hover: Lift effect with enhanced glow

**Key Features to Showcase**:
- Script Execution Engine
- 98% UNC Support
- Built-in Script Library
- Cross-Platform Support
- Anti-Crash Stability
- Level 8 Capabilities

### Download Section
**Platform Cards**: 3 distinct cards for Windows/Android/iOS
- Large platform icon
- System requirements text
- Gradient download button with glow
- Version number display

### Updates/News Section
**Layout**: 2-column grid of update cards
**Card Structure**:
- Screenshot/feature image thumbnail (16:9)
- "NEW UPDATE" badge with pulsing glow
- Title + date
- Brief description
- "Read More" link

### Screenshot Gallery
Masonry grid layout (2-3 columns) with lightbox interaction
- KRNL interface screenshots
- Dark overlay on hover with "View" icon
- Modal viewer for full-size

### Language Switcher
Dropdown in header:
- Flag icons + language names
- English (default), Turkish, German, French, Spanish
- Smooth fade transition on selection

### Footer
**Layout**: 3-column split
- Left: KRNL logo + tagline
- Center: Quick links (Features, Downloads, Updates)
- Right: Social links, language switcher duplicate
- Bottom: Legal disclaimer about Roblox ToS awareness

---

## Visual Treatment

**Color Strategy** (described for context, not implementation):
- Base: Deep dark grays/blacks
- Accents: Neon green (primary), cyan (secondary), purple (tertiary)
- Gradients: Multi-color neon gradients for buttons/cards
- Glow effects: Subtle box-shadow with accent colors

**Effects**:
- Subtle backdrop blur on cards/navigation
- Neon glow on interactive elements (buttons, cards on hover)
- Gradient borders on cards
- Smooth transitions (300ms ease)
- Minimal animations - subtle float/glow pulse only

**Borders**: 
- 1px borders with gradient overlays
- Rounded corners: xl (12px) for cards, lg (8px) for buttons

---

## Images

### Required Images:
1. **KRNL Interface Screenshots** (4-6 images for gallery):
   - Script executor UI
   - Built-in script library view
   - Execution in progress
   - Settings panel
   
2. **Platform Icons**: Windows logo, Android logo, iOS logo (use Font Awesome brands)

3. **Feature Icons**: Use Heroicons or custom gaming-style icons for:
   - Code/terminal icon
   - Shield (stability)
   - Lightning bolt (speed)
   - Layers (compatibility)
   - Download cloud
   - Mobile device

**Note**: No large hero image - use animated background gradient/particle effect instead

---

## Accessibility & Polish

- High contrast text on dark backgrounds
- Focus states with neon outline glow
- Semantic HTML throughout
- Smooth scroll navigation between sections
- Loading states for download buttons
- Clear error messaging
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

---

## Page Structure (Single Page)

1. **Hero** - Full viewport with animated background
2. **Features Grid** - 6 key features in 3x2 grid
3. **Platform Downloads** - 3-column platform cards
4. **Updates/News** - 4 recent updates in 2x2 grid
5. **Screenshot Gallery** - Masonry grid showcase
6. **Footer** - 3-column with links and language options

**Total Sections**: 6 comprehensive sections creating a complete, professional experience