# KIN — Functional Soda Landing Page

> A premium, cinematic scrollytelling landing page built for modern web browsers. Designed to deliver an immersive, fluid, and high-performance brand experience for KIN Functional Beverages.

---

## 🚀 Tech Stack & Libraries Used

This project leans on modern web rendering techniques to deliver 60FPS fluid animations alongside standard React components.

- **Framework**: React 19 + Vite (for lightning-fast HMR and building)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Modules
- **Scroll Engine**: [Lenis](https://lenis.studiofreight.com/) (Buttery smooth scrolling taking over the main wrapper)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll-linked fades, text staggering, and transforms)
- **Rendering**: HTML5 `<canvas>` (For the 210-frame high-res 3D sequence sequence)

---

## 🎨 Design System & Typography

The site uses a meticulously crafted dark theme to evoke a "premium aesthetic".

### Font Styles Used
1. **Primary Font: `Inter`** (Weights 300, 400, 500, 600, 700, 800, 900)
   - *Usage*: Main body text, descriptions, refined UI labels, and standard headers.
   - *Why*: It offers impeccable legibility and a sleek, neutral geometric look.
2. **Accent Font: `Space Grotesk`** (Weights 300, 700)
   - *Usage*: Impactful CTA headings, the "PURE INTENT" split-gate section, and highly stylized uppercase typography.
   - *Why*: Adds a slightly brutalist, futuristic, and editorial edge to the branding.

### Color Palette
- **Void (Background)**: `#050505` (Deep, rich near-black to make lighting pop)
- **Sage (Primary Accent)**: `#7ea87a` (Organic green for the brand's botanical themes)
- **Sage Glow**: `rgba(126, 168, 122, 0.5)` (Used for radial glows and progress dots)
- **Gold (Secondary Accent)**: `#c9a96e` (Premium accents)
- **White Translucency**: `white/90`, `white/60`, `white/30`, `white/10` (For glassmorphism and subtle borders)

---

## ✨ Core Features & Mechanics

### 1. Canvas Image Sequence Animation (`HeroCanvas.jsx`)
Instead of playing a video (which can stutter on scroll), the site preloads 210 high-resolution `.jpg` frames. Using a custom React `requestAnimationFrame` loop combined with **LERP** (Linear Interpolation), it draws these frames to a sticky `<canvas>` tied exactly to the user's scroll position. 

### 2. Lenis Smooth Scrolling
Native scrolling can feel robotic. **Lenis** is integrated into the `HeroCanvas` wrapper to provide butter-smooth momentum scrolling. It's perfectly synced with the canvas render loop, meaning the images scrub back and forth with zero jitter.

### 3. Nested "Split Gate" Animation (`FinalCTA.jsx`)
A cinematic "Enter the Void" section featuring two gate images that physically slide apart as you scroll down. It utilizes `data-lenis-prevent="true"` so that Lenis allows the nested container to control its own scrolling native timeline flawlessly.

---

## 📂 Project Structure

```text
kin/
├── public/                 # Static assets
│   ├── images/             # Product shots, UI images
│   └── sequence/           # 210 frame sequence images (frame_0001.jpg -> frame_0210.jpg)
│
├── src/
│   ├── components/         # Reusable Micro-components
│   │   ├── BeatText.jsx        # Scroll-linked fading typography
│   │   ├── GlowPulse.jsx       # Breathing background glow
│   │   └── Navbar.jsx          # Glassmorphic top navigation
│   │
│   ├── sections/           # Large Page Sections
│   │   ├── HeroCanvas.jsx      # The main scroll engine & canvas
│   │   ├── StorySection.jsx    # "A new era of functional soda"
│   │   ├── Ingredients.jsx     # Botanical focus cards
│   │   └── FinalCTA.jsx        # The interactive Split Gate scroll
│   │
│   ├── pages/              
│   │   └── Home.jsx            # Assembles all sections sequentially
│   │
│   ├── utils/              
│   │   └── constants.js        # Hardcoded lengths, scroll heights, and beat intervals
│   │
│   ├── index.css           # Global Tailwind imports + Custom scrollbar & font utilities
│   └── main.jsx            # React root
```

---

## ⚙️ Local Development

To run this project locally on your machine:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Dev Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

> **Note on Assets**: Because the scrolling animation relies on the 210 images located in `/public/sequence/`, make sure those assets are properly uploaded before attempting to run or deploy the site.
