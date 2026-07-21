# Create Vite React App "plantiva" with TypeScript and Tailwind CSS

This plan details the steps to initialize a new Vite project called "plantiva" using TypeScript, configure react-router-dom for navigation, integrate Tailwind CSS, set up components/pages directories, and verify the app runs on localhost.

## User Review Required

We need to confirm the preferred version of Tailwind CSS.

## Open Questions

> [!IMPORTANT]
> **Which version of Tailwind CSS would you like to use?**
> - **Option 1 (Recommended): Tailwind CSS v4**. This is the latest version. It uses a modern, CSS-first configuration (no separate `tailwind.config.js` or `postcss.config.js` files are required; setup is fully done in the CSS file).
> - **Option 2: Tailwind CSS v3**. The traditional version which uses a `tailwind.config.js` file for custom themes and utility extensions.

Please specify your preference (e.g. Tailwind v4 or Tailwind v3) when approving this plan.

## Proposed Changes

### Project Initialization

We will initialize the Vite React TypeScript application in a subdirectory named `plantiva` inside the workspace root `c:\Users\krmta\OneDrive\Desktop\PLANTIVA21`.

#### [NEW] [package.json](file:///c:/Users/krmta/OneDrive/Desktop/PLANTIVA21/plantiva/package.json)
Initialize using the Vite scaffolding:
```bash
npx -y create-vite@latest plantiva --template react-ts --no-interactive
```

---

### Dependency Installation

We will navigate into the `plantiva` directory and install:
1. `react-router-dom` (for routing)
2. `lucide-react` (for icons)
3. Tailwind CSS dependencies. Depending on the version chosen:
   - **Tailwind v4**: `@tailwindcss/vite` and `tailwindcss`
   - **Tailwind v3**: `tailwindcss`, `postcss`, `autoprefixer`

---

### Configuration Updates

#### [MODIFY] [vite.config.ts](file:///c:/Users/krmta/OneDrive/Desktop/PLANTIVA21/plantiva/vite.config.ts)
If Tailwind v4 is chosen, we will update Vite configuration to use the `@tailwindcss/vite` plugin.
If Tailwind v3 is chosen, we will initialize `tailwind.config.js` and `postcss.config.js`.

#### [MODIFY] [index.css](file:///c:/Users/krmta/OneDrive/Desktop/PLANTIVA21/plantiva/src/index.css)
Configure Tailwind directives:
- For Tailwind v4: `@import "tailwindcss";`
- For Tailwind v3: `@tailwind base; @tailwind components; @tailwind utilities;`

---

### Folder Structure Setup

We will create the required directory structure:
- [NEW] `src/pages`
- [NEW] `src/components`

We will add placeholder page files and component files:
- [NEW] `src/pages/Home.tsx`
- [NEW] `src/pages/About.tsx`
- [NEW] `src/components/Navbar.tsx`

#### [MODIFY] [App.tsx](file:///c:/Users/krmta/OneDrive/Desktop/PLANTIVA21/plantiva/src/App.tsx)
Set up `react-router-dom` router structure with our custom components and routes.

#### [MODIFY] [main.tsx](file:///c:/Users/krmta/OneDrive/Desktop/PLANTIVA21/plantiva/src/main.tsx)
Verify routing integration if needed, or keep it standard.

---

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure the TypeScript and build processes complete without errors.

### Manual Verification
- Start the dev server: `npm run dev`
- Capture/query local output to verify it launches on `http://localhost:5173` (or alternative port if occupied).
- Use the browser subagent or verify CLI output to confirm local server starts correctly.
