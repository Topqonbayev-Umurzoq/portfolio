# 🚀 Getting Started - Cosmic Spaceship Portfolio

## Quick Start Guide

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages:
- React & React DOM
- Three.js (3D graphics)
- React Three Fiber (React wrapper for Three.js)
- Framer Motion (animations)
- GSAP (timeline animations)
- Tailwind CSS (styling)
- Vite (build tool)

### Step 2: Start Development Server
```bash
npm run dev
```

The portfolio will automatically open in your browser at `http://localhost:5173`

You should see:
1. A loading screen with "INITIALIZING SYSTEM..."
2. After ~3 seconds, the spaceship cockpit interface
3. The hero section with your name and mission statement

### Step 3: Navigation

**Mouse & Keyboard Controls:**
- 🖱️ **Scroll up/down** - Navigate between sections
- ⌨️ **Arrow Up/Down** - Navigate between sections
- ⌨️ **Press 1-5** - Jump directly to any section
- 🎯 **Mouse movement** - Subtle camera parallax effect
- 🔊 **Sound toggle** (bottom right) - Enable/disable UI sounds

**Available Sections:**
1. Hero - Welcome screen
2. About - Timeline and mission
3. Skills - Tech arsenal
4. Projects - Completed missions (click to expand)
5. Contact - Communication channels

### Step 4: Customize Your Portfolio

#### Update Personal Information
Edit `src/components/sections/Contact.jsx`:
```jsx
const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'your-email@gmail.com',
    link: 'mailto:your-email@gmail.com',
    // ... other properties
  },
  // ... other contacts
]
```

#### Add Your Projects
Edit `src/components/sections/Projects.jsx`:
```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    emoji: '🚀',
    description: 'Project description',
    tech: ['React', 'Three.js'],
    // ... other properties
  },
  // ... more projects
]
```

#### Change Colors
Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  cosmic: {
    dark: '#05070d',    // Background
    blue: '#00eaff',    // Primary
    purple: '#7a5cff',  // Secondary
    glow: '#00d4ff',    // Accent
  }
}
```

### Step 5: Build for Production
```bash
npm run build
```

Creates optimized files in the `dist/` folder.

### Step 6: Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx                    # Main app component
├── main.jsx                   # Entry point
├── index.css                  # Global styles
├── App.css                    # App-specific styles
├── components/
│   ├── CustomCursor.jsx       # Glowing cursor
│   ├── LoadingScreen.jsx      # Initialization animation
│   ├── HUDBottomPanel.jsx     # Spaceship control panel
│   ├── SpaceBackground.jsx    # 3D galaxy
│   └── sections/
│       ├── Hero.jsx           # Welcome screen
│       ├── About.jsx          # Timeline section
│       ├── Skills.jsx         # Tech stack
│       ├── Projects.jsx       # Portfolio projects
│       └── Contact.jsx        # Contact info
└── hooks/
    ├── useMousePosition.js    # Track mouse movement
    └── useSoundManager.js     # Manage UI sounds
```

## Features to Explore

✅ **3D Background** - Dynamic starfield with asteroids
✅ **Smooth Animations** - GSAP + Framer Motion
✅ **Glassmorphism UI** - Modern frosted glass design
✅ **Sound System** - Web Audio API beeps
✅ **Custom Cursor** - Glowing interactive cursor
✅ **HUD Interface** - Spaceship control panel
✅ **Modal Details** - Click projects to see more
✅ **Responsive Design** - Works on all devices

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will use the next available port.

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clear cache and try again
rm -rf dist
npm run build
```

### Performance Issues
- Reduce the number of asteroids in SpaceBackground.jsx
- Disable sound effects with the toggle button
- Close other browser tabs

## Deployment

### Deploy to Netlify
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Vercel
1. Import project from GitHub
2. Vercel auto-detects Vite configuration
3. Deploy!

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Update `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then run: `npm run deploy`

## Next Steps

1. ✅ Replace contact information with yours
2. ✅ Add your real projects
3. ✅ Customize colors to match your brand
4. ✅ Add project links and descriptions
5. ✅ Test on different devices
6. ✅ Deploy to your hosting service

## Useful Links

- [React Docs](https://react.dev)
- [Three.js Docs](https://threejs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [GSAP](https://gsap.com)

## Need Help?

Check the documentation files or inspect the component code for implementation details.

---

**Happy coding! 🚀✨**
