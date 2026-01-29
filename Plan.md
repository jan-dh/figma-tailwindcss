# Figma TailwindCSS Plugin Modernization

## Current Task: UI Visual Refresh (shadcn-style Design)

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

---

## Phase 10: UI Visual Refresh ✅

### Goal
Transform the spacious, bold UI into a compact, minimal shadcn-inspired design.

### Changes Made

#### Typography
- [x] `.t-beta`: text-2xl font-bold → text-base font-semibold
- [x] `.t-gamma`: text-xl → text-sm font-medium
- [x] `.intro`: Added text-sm text-slate-500
- [x] Body: Added text-sm base size

#### Spacing
- [x] App layout: p-4 → p-3
- [x] Header sections: py-4 → py-3
- [x] Content sections: my-8 → my-4
- [x] Navigation buttons: mt-8 → mt-4
- [x] Grid gaps: gap-4 → gap-3

#### Form Controls
- [x] `.form-control`: height 44px → 36px, added text-sm, shadow-sm
- [x] `.button`: min-h-10 → h-8, text-sm, rounded-md
- [x] Select: height adjusted to h-8

#### Color Palette (Vibrant → Slate)
- [x] button--green: teal-500 → slate-900 (primary)
- [x] button--blue: blue-400 → slate-100/200 (secondary)
- [x] button--grey: gray-100 → transparent with border (ghost)
- [x] Text colors: gray-600/900 → slate-500/900
- [x] Borders: gray-200/300 → slate-200
- [x] Focus rings: teal-500 → slate-400

#### Components Updated
- [x] `src/ui/styles/app.css` - Core styles
- [x] `src/ui/App.tsx` - Layout padding
- [x] `src/ui/components/Preferences/Preferences.tsx`
- [x] `src/ui/components/Colors/Colors.tsx`
- [x] `src/ui/components/Colors/Color.tsx`
- [x] `src/ui/components/Colors/NewColor.tsx`
- [x] `src/ui/components/Colors/Gradient.tsx`
- [x] `src/ui/components/Type/Type.tsx`
- [x] `src/ui/components/Effects/Effects.tsx`
- [x] `src/ui/components/Effects/Shadow.tsx`
- [x] `src/ui/components/Effects/BorderRadius.tsx`
- [x] `src/ui/components/Export/Export.tsx`
- [x] `src/ui/components/Footer/Footer.tsx`

#### Leaf Component Details
- Color swatches: 42px → 32px
- Shadow/BorderRadius boxes: w-20 h-20 → w-12 h-12 (flex wrap layout)
- Footer: py-4 → py-2.5, added border-t

### Phase 10b: UI Refinements ✅

- [x] Color row actions: Replaced thick Update/X buttons with subtle icon buttons
- [x] Color inputs: Auto-save on blur instead of manual Update button
- [x] NewColor: Removed label, uses dashed border placeholder, plus icon to add
- [x] Effects grid: Changed from grid-cols-4 to flex-wrap with smaller items (w-12 h-12)
- [x] Dynamic viewport: Added resize messaging between UI and plugin (min: 200px, max: 600px)
- [x] UI width: Reduced from 740px to 420px for more compact feel

## Potential Future Improvements

### UI/UX Surfaces
1. **Navigation** - Add a step indicator/breadcrumb showing progress (1/5, 2/5, etc.)
2. **Empty states** - More helpful empty states with illustrations or better copy
3. **Loading states** - Add skeleton loaders while Figma data is being fetched
4. **Toast notifications** - Feedback when colors are updated/removed
5. **Search/filter** - Filter colors by name when there are many
6. **Keyboard shortcuts** - Enter to confirm, Escape to cancel
7. **Dark mode** - Support Figma's dark theme
8. **Undo/redo** - Allow reverting color changes

## Phase 11: GitHub Issue Fixes ✅

### Issue #53 - Option to Disable REM Conversion ✅
- [x] Added `useRem` preference to types (`src/shared/types.ts`)
- [x] Added default value in store (`src/ui/store/themeStore.ts`)
- [x] Added radio toggle in Preferences (`src/ui/components/Preferences/Preferences.tsx`)
- [x] Updated `cleanupTheme` to conditionally convert to REM or keep as px (`src/ui/helpers/helpers.ts`)
- [x] Updated Export component to pass preference

### Issue #64 - Border Radius Default Variant ✅
- [x] Added `defaultBorderRadiusIndex` state to types and store
- [x] Added `getBorderRadiusName` helper function for Tailwind naming convention (xs, sm, DEFAULT, lg, xl, 2xl, 3xl)
- [x] Updated `cleanupTheme` to generate proper border radius names
- [x] Updated BorderRadius component to be clickable for selecting DEFAULT
- [x] Updated Effects component with selection UI and instructions
- [x] Updated Tailwind 4 formatter to output `--radius` (no suffix) for DEFAULT

---

### Functional Improvements
9. **Color picker** - Inline color picker instead of hex input
10. **Drag & drop** - Reorder colors
11. **Bulk actions** - Select multiple colors for removal
12. **Preview** - Live preview of the generated CSS/config
13. **Import** - Import existing tailwind.config.js to prefill
14. **Variable support** - Support Figma variables (new feature)
15. **Copy individual values** - Click to copy a single color/shadow value
