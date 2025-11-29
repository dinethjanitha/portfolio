# 🌐 Cyber Scrollytelling Portfolio

A high-performance, immersive personal portfolio website featuring a "Cyberpunk/Tech" aesthetic. Built with **Next.js 16** and **Framer Motion**, it utilizes a "Scrollytelling" architecture where the user's scroll progress drives complex animations, transitions, and layout changes around a central fixed focal point.

![Tech Stack](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![Tech Stack](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![Tech Stack](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat&logo=tailwindcss)
![Tech Stack](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=flat&logo=framer)

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 📂 Project Structure

The project follows a modular component architecture to ensure maintainability and separation of concerns.

```
app/
├── components/
│   ├── ScrollyTellingPortfolio.tsx  # 🏗️ Main Container & Scroll Logic
│   ├── sections/                    # 🧩 Individual Scroll Sections
│   │   ├── CyberBackground.tsx      #    - Grid & Scanline Effects
│   │   ├── CyberProfile.tsx         #    - Central Rotating Profile Hub
│   │   ├── IntroSection.tsx         #    - "Initializing System" Hero Text
│   │   ├── SkillsSection.tsx        #    - Radial Connecting Arrows
│   │   ├── ExperienceSection.tsx    #    - Data Log History Cards
│   │   ├── ProjectsSection.tsx      #    - Holographic Project Cards
│   │   ├── ContactSection.tsx       #    - Final "Establish Connection" View
│   │   └── CyberFooter.tsx          #    - Fixed Bottom Status Bar
│   └── ui/
│       └── CyberUI.tsx              # 🎨 Shared UI (Buttons, Glitch Text)
├── page.tsx                         # 📄 Entry Point
└── globals.css                      # 💅 Global Styles & Tailwind Directives
```

---

## 🧠 Core Concepts & Coding Points

### 1. The "Scrollytelling" Architecture
Instead of a traditional long page where elements scroll *past* the viewport, this portfolio uses a **Fixed Stage** approach.

*   **Container**: A `div` with `h-[500vh]` creates a long scrollable area.
*   **Stage**: A `fixed inset-0` container holds all visual elements. It does not move.
*   **Logic**: We track the scroll progress (0% to 100%) of the container and map that value to animations on the fixed stage.

### 2. Animation Logic (`useScroll` & `useTransform`)
We use Framer Motion's hooks to map scroll position to CSS properties.

```typescript
// Example from ScrollyTellingPortfolio.tsx
const { scrollYProgress } = useScroll({ target: containerRef });
const smoothProgress = useSpring(scrollYProgress, { ... });

// Passing progress down to components
<IntroSection progress={smoothProgress} />
```

### 3. Section Visibility Ranges
Each section is assigned a specific "time slot" in the scroll timeline.

| Section | Scroll Range | Behavior |
| :--- | :--- | :--- |
| **Intro** | 0% - 15% | Starts visible, fades out & moves up. |
| **Profile** | 0% - 15% | Moves from bottom (`30vh`) to center (`0vh`). |
| **Skills** | 15% - 45% | Radial nodes fade in, lines draw from profile ring. |
| **Experience** | 35% - 55% | Cards slide in from bottom, fade out to top. |
| **Projects** | 55% - 75% | Holographic cards scale up and fade in. |
| **Contact** | 80% - 100% | Final panel slides up from bottom. |

### 4. The "Sticky" vs "Fixed" Fix
Initially, `position: sticky` was used, but it caused issues with overflow and mobile scrolling.
*   **Solution**: Switched to `position: fixed` for the content layer.
*   **Result**: The background and profile stay perfectly locked to the viewport while the user scrolls the invisible `500vh` container.

### 5. Responsive Radial Skills
The `SkillsSection` calculates geometry dynamically to ensure lines connect perfectly to the profile image, regardless of screen size.

```typescript
// SkillsSection.tsx
const [dimensions, setDimensions] = useState({ radius: 145, distance: 200 });

// Adjusts radius based on mobile vs desktop profile image size
useEffect(() => {
  const isDesktop = window.innerWidth >= 768;
  setDimensions({
    radius: isDesktop ? 185 : 150, // Matches profile ring border
    distance: isDesktop ? 260 : 190
  });
}, []);
```

---

## 🎨 Design System (Cyber Theme)

*   **Colors**:
    *   Primary: Cyan (`#06b6d4`)
    *   Secondary: Fuchsia (`#d946ef`)
    *   Background: Black (`#000000`) with Slate (`#0f172a`) accents.
*   **Effects**:
    *   **Glow**: `drop-shadow` and `box-shadow` with cyan/fuchsia colors.
    *   **Glitch**: Custom CSS animations on text hover.
    *   **Scanlines**: SVG overlay with `mix-blend-overlay`.
    *   **Grid**: CSS radial gradients masking a linear gradient grid.

---

## 🛠️ Setup & Installation

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

---

## 📝 Customization Guide

1.  **Profile Image**: Replace `public/profile.png` with your own image.
2.  **Skills**: Edit the `SkillNode` list in `app/components/sections/SkillsSection.tsx`.
3.  **Experience/Projects**: Update the data arrays in `ExperienceSection.tsx` and `ProjectsSection.tsx`.
4.  **Social Links**: Update `href` attributes in `ContactSection.tsx`.
