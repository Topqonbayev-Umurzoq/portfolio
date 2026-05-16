# ⬡ UMURZOQ.DEV — Futuristic Portfolio

A cinematic, space-themed futuristic portfolio website built with React + Vite.

## 🚀 Features

- **Starfield background** — animated 3D star warp with click-to-supernova
- **Custom cursor** — glowing trailing cursor with hover reactions
- **Hero section** — animated timeline, mission display, cinematic entry
- **About planet** — holographic info cards with glow effects
- **Skills planet** — interactive orbital canvas with floating tech nodes
- **Projects** — cyberpunk cards with cinematic detail modals
- **Contact** — radar pulse + holographic communication panels
- **Sound system** — ambient space audio + hover/click sounds
- **Scroll detection** — section-aware navigation
- **Framer Motion** — smooth page and element animations

## 📁 Folder Structure

```
src/
├── components/
│   ├── Cursor.jsx         # Custom glowing cursor
│   ├── Nav.jsx            # Top navigation bar
│   ├── SectionIndicator.jsx  # Right-side dot nav
│   └── Starfield.jsx      # Animated star background
├── hooks/
│   └── useSound.js        # Web Audio API sound system
├── pages/
│   ├── Hero.jsx           # Landing section
│   ├── About.jsx          # About planet
│   ├── Skills.jsx         # Skills orbit canvas
│   ├── Projects.jsx       # Projects + modal
│   └── Contact.jsx        # Contact + radar
├── App.jsx                # Main app + routing
├── main.jsx               # Entry point
└── index.css              # Global styles + animations
```

## ⚙️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Utility styling |
| Framer Motion | Animations |
| Canvas API | Starfield, orbit, radar |

## 🛠️ Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173

# 4. Build for production
npm run build
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `src/index.css`
- **Projects**: Edit the `projects` array in `src/pages/Projects.jsx`
- **Skills**: Edit the `skills` array in `src/pages/Skills.jsx`
- **Contact info**: Edit the `contacts` array in `src/pages/Contact.jsx`
- **Personal info**: Update name, mission in `src/pages/Hero.jsx`

## 🔮 Secret interactions

- Click anywhere on the starfield → **Supernova explosion**
- Sound toggle → **Ambient space music**
- Click project cards → **Cinematic detail modal**

## 📦 Deploy

```bash
npm run build
# Upload /dist folder to Vercel, Netlify, or GitHub Pages
```

---
Built with 💙 by Umurzoq Topqonbayev
