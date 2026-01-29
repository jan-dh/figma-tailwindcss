# Figma TailwindCSS Plugin Modernization

## Current Task: Full Migration to Bun/Vite/React 18/Tailwind 4

### Status: Complete

## Phases

### Phase 1: Project Setup ✅
- [x] Create Plan.md
- [x] Initialize with Bun
- [x] Install dependencies (React 18, Zustand, Vite, Tailwind 4, etc.)
- [x] Create new project structure

### Phase 2: Vite Configuration ✅
- [x] Create `vite.config.ts` for UI build (with vite-plugin-singlefile)
- [x] Create `vite.config.code.ts` for Figma sandbox code (IIFE output)
- [x] Update package.json scripts

### Phase 3: React 18 Migration ✅
- [x] Create new entry point (`src/ui/main.tsx`) with createRoot
- [x] Update to React 18 createRoot API
- [x] Migrate to React Router v6 (Routes/Route pattern)

### Phase 4: State Management (reactn → Zustand) ✅
- [x] Create Zustand store (`src/ui/store/themeStore.ts`)
- [x] Define types in `src/shared/types.ts`

### Phase 5: Component Migration ✅
- [x] Migrate shared types
- [x] Migrate helper functions (colorFormatter, helpers, customHooks)
- [x] Migrate leaf components (Footer, Color, Shadow, FontSize, etc.)
- [x] Migrate feature components (Colors, Type, Effects, Export, Preferences)
- [x] Migrate App with React Router v6

### Phase 6: Tailwind 4 for Plugin UI ✅
- [x] Create new CSS setup with @theme directive
- [x] Removed old postcss.config.cjs and tailwind.config.cjs

### Phase 7: Export Logic ✅
- [x] TW4 output: `@theme {}` CSS format
- [x] TW3 output: `module.exports = { theme: { extend: {} } }` JS format
- [x] Updated prism-react-renderer to v2

### Phase 8: Figma Code Migration ✅
- [x] Migrate `src/js/code.js` → `src/code/index.ts`
- [x] Migrate Figma helpers to TypeScript (paintStyles, textStyles, effectStyles, nodeStyles)

### Phase 9: Verification ✅
- [x] Build completes without errors
- [x] dist/code.js is valid IIFE (5KB)
- [x] dist/ui.html has inlined CSS/JS (292KB - well under 5MB limit)
- [ ] Test in Figma (manual verification needed)

## Build Output

```
dist/
├── code.js    (5.15 KB)  - Figma sandbox code
└── ui.html    (292.81 KB) - UI with inlined CSS/JS
```

## New Project Structure

```
src/
├── code/                    # Figma sandbox (no DOM)
│   ├── index.ts
│   └── figma/
│       ├── helpers.ts
│       ├── paintStyles.ts
│       ├── textStyles.ts
│       ├── effectStyles.ts
│       └── nodeStyles.ts
├── ui/                      # React UI
│   ├── main.tsx
│   ├── App.tsx
│   ├── store/
│   │   └── themeStore.ts
│   ├── components/
│   │   ├── Colors/
│   │   ├── Effects/
│   │   ├── Export/
│   │   ├── Footer/
│   │   ├── Preferences/
│   │   └── Type/
│   ├── helpers/
│   │   ├── colorFormatter.ts
│   │   ├── customHooks.ts
│   │   ├── helpers.ts
│   │   └── randomMessages.ts
│   ├── icons/
│   └── styles/
│       └── app.css
└── shared/
    └── types.ts
```

## Key Changes from Original

| Aspect | Before | After |
|--------|--------|-------|
| Build Tool | Webpack | Vite + Bun |
| React | 16.14.0 | 18.3.1 |
| Router | react-router-dom 5 | react-router-dom 6 |
| State | reactn | Zustand |
| Tailwind | 3.x (PostCSS) | 4.x (@tailwindcss/vite) |
| Syntax Highlighter | prism-react-renderer 1 | prism-react-renderer 2 |
| Language | JavaScript | TypeScript |

## Scripts

```bash
bun run dev          # Vite dev server for UI
bun run dev:code     # Watch mode for Figma sandbox code
bun run build        # Build both UI and code
bun run build:ui     # Build only UI
bun run build:code   # Build only Figma code
```
