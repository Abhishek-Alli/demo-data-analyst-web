<div align="center">
<img width="1000" alt="JainAnalyticsHub" src="https://raw.githubusercontent.com/Abhishek-Alli/demo-data-analyst-web/main/assets/banner.png" />
</div>

# JainAnalyticsHub

Professional Data Analytics & Web Scraping Services Portfolio.

This repository contains a small, fast React + Vite TypeScript single-page site showcasing data-analytics services, portfolio items, an AI consultant integration, and data-visualization demos.

**Live preview:** (If deployed) add link here

## Key Features
- **Pages / Sections:** Home, About, Services, Portfolio, Contact, Admin
- **AI Integration:** `services/geminiService.ts` provides an integration point for a Gemini/LLM-based AI consultant (used by `AiConsultant.tsx`).
- **Data Visualizations:** `DataVizDemo.tsx` uses `recharts` for charts and demo visualizations.
- **Routing:** `react-router-dom` for client-side routes.
- **UI:** Component-driven layout with `Navbar`, `Hero`, `Footer`, and other presentational components.
- **Icons:** `lucide-react` for vector icons.

## Tech Stack
- React 19 (with TypeScript)
- Vite (dev server & build)
- Recharts (data visualizations)
- react-router-dom (routing)

## Project Structure (important files)
- `index.html`, `index.tsx`, `App.tsx` — app entry
- `components/` — UI and page components (Home, Services, Portfolio, AiConsultant, DataVizDemo, Admin, etc.)
- `services/geminiService.ts` — AI / Gemini service wrapper
- `types.ts` — shared TypeScript types
- `vite.config.ts`, `tsconfig.json` — project config

## Prerequisites
- Node.js (recommended v18+)
- npm (or use `pnpm`/`yarn` if you prefer)

## Setup & Development
Open a terminal in the project root and run:

```powershell
npm install
```



Start the dev server:

```powershell
npm run dev
```

Available NPM scripts (from `package.json`):

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — locally preview production build


## Deployment
- Build the app: `npm run build`
- Deploy the `dist/` output to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.)

## Contributing
- Create issues for bugs or feature requests.
- For code changes, open a PR against `main` with a clear description and screenshots (if applicable).

## Troubleshooting
- If you see line-ending warnings on Windows (LF ↔ CRLF), configure Git or add a `.gitattributes` file to normalize endings. See Git docs for `core.autocrlf`.

## License & Contact
- License: add a `LICENSE` file if you wish (e.g., MIT).
- Contact: add your preferred contact details (email or LinkedIn) in the `Contact` section of the site or here.

---

If you want, I can also:
- add a `.gitattributes` to normalize line endings,
- commit this README and push it for you,
- or tailor the README with screenshots and exact deployment links.
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>


## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
