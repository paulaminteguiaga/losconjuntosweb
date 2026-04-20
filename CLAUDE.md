# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Production build (also catches TypeScript/Astro errors)
npm run preview   # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

Static promotional website for **Los Conjuntos** (indie rock band, La Plata, Argentina), built with **Astro 5** + **Tailwind CSS 3**. No backend — purely static HTML/CSS/JS output.

### Pages (file-based routing)

- **`/`** (`index.astro`) — redirects to `/lanzamiento`
- **`/lanzamiento`** (`lanzamiento.astro`) — countdown page to a live session ("Ciudad de Perros", May 1 2026). Contains a `launched` boolean flag; when `true`, swaps the countdown for a YouTube link. Also shows an Instagram reels gallery.
- **`/sitio`** (`sitio.astro`) — main band website: animated hero (10-frame carousel cycling at 3 FPS via JS), discography cards linking to Spotify, upcoming shows section, band info, and social links.

Shared HTML shell lives in `src/layouts/Layout.astro` (includes the Archivo Google Font).

### Styling conventions

Custom Tailwind tokens defined in `tailwind.config.mjs`:
- `brand-dark` (`#0A0A0A`) — page background
- `brand-gray` (`#1A1A1A`) — secondary background
- `brand-red` (`#1a9e1a`) — accent (green despite the name)
- `brand-logo` (`#806f65`) — logo/tan color

Responsive font sizes use `clamp()` via arbitrary Tailwind values (e.g., `text-[clamp(2rem,6vw,5rem)]`).

### Static assets (`public/`)

- `REELS/` — looped autoplay video files for the reels gallery
- `discos/` — album artwork images
- `frames-tomate/` — 10 numbered frames for the hero animation (preloaded in JS)
- `foto-banda.png` — band photo
