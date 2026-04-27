# KIN Functional Beverages

A premium, cinematic scrolling landing page designed to deliver an immersive, fluid, and high-performance brand experience for KIN Functional Beverages.

---

## Technical Stack & Libraries

This project utilizes modern web rendering techniques to deliver fluid animations and a sophisticated aesthetic.

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS Variables
- **Scroll Engine**: Lenis (Provides smooth momentum scrolling)
- **Animations**: Framer Motion (Scroll-linked parallax, transforms, and fades)

---

## Design System & Typography

The application employs a meticulously crafted cream theme to evoke a premium, botanical aesthetic.

### Typography Hierarchy

1. **Syne** (Weight 800)
   - Usage: Massive statement headings and brand marks.
   - Purpose: High visual impact and modern editorial edge.
2. **Playfair Display** (Italic, Weights 400, 600)
   - Usage: Elegant serif accents, supporting taglines, and quotes.
   - Purpose: Adds a sophisticated, organic contrast to the brutalist sans-serifs.
3. **Space Grotesk** (Weights 300, 400, 500, 700)
   - Usage: Subheadings, numeric indicators, and technical details.
   - Purpose: Provides a structural, modern feel for technical botanical information.
4. **Inter** (Various weights)
   - Usage: Primary body text and functional UI elements.
   - Purpose: Impeccable legibility and neutral geometric balance.

### Color Palette

- **Background**: `var(--color-bg)` - `#F2F3EC` (Premium cream/bone)
- **Primary Text**: `var(--color-text)` - `#0C0C0C` (Deep near-black)
- **Surface**: `var(--color-surface)` - `#E6EDE4` (Subtle sage green surface)
- **Primary Accent**: `var(--color-primary)` - `#1F3D2B` (Dark forest green)
- **Muted Text**: `var(--color-text-muted)` - `#6B705C` (Soft moss green)

---

## Architecture Diagram

```mermaid
graph TD
    A[main.jsx] --> B[App.jsx]
    B --> C[Home.jsx]
    
    C --> D[Navbar.jsx]
    C --> E[HeroSection.jsx]
    C --> F[ProductSection.jsx]
    C --> G[ParallaxSection.jsx]
    C --> H[GridSection.jsx]
    C --> I[CTASection.jsx]
    C --> J[Footer.jsx]
    
    subgraph Core Features
        D
        E
        F
        G
        H
        I
        J
    end
    
    subgraph Utilities & Hooks
        K[useParallax.js] -.-> G
        K -.-> F
        L[index.css] -.-> Core Features
    end
```

---

## Project Structure

```text
kin/
├── public/
│   └── images/             # Product photography and parallax assets
├── src/
│   ├── components/         # Reusable UI elements
│   │   └── Navbar.jsx      # Sticky top navigation
│   ├── hooks/
│   │   └── useParallax.js  # Custom scroll-linked parallax hook
│   ├── sections/           # Modular page sections
│   │   ├── HeroSection.jsx
│   │   ├── ProductSection.jsx
│   │   ├── ParallaxSection.jsx
│   │   ├── GridSection.jsx
│   │   ├── CTASection.jsx
│   │   └── Footer.jsx
│   ├── pages/              
│   │   └── Home.jsx        # Orchestrates the page layout and Lenis setup
│   ├── index.css           # Global design tokens and Tailwind imports
│   ├── App.jsx             # Application root component
│   └── main.jsx            # React entry point
```

---

## Local Development

To run this project locally:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```
