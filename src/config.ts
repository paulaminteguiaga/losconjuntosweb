// ═══════════════════════════════════════════════════════════════
//  CONFIGURACIÓN GENERAL — Los Conjuntos
//  Acá van todos los contenidos editables del sitio.
// ═══════════════════════════════════════════════════════════════


// ── CONFIGURACIÓN LANZAMIENTO ─────────────────────────────────────────────────
// Cambiar a `true` el día del lanzamiento.
export const launched = false;

// ── COUNTDOWN ─────────────────────────────────────────────────
// Fecha y hora del countdown (formato ISO, con zona horaria Argentina -03:00)
export const LAUNCH_DATE = new Date("2026-05-01T20:00:00-03:00");

// ── LANZAMIENTO ─────────────────────────────────────────────────
// URL completa del video de YouTube (Live Session)
export const youtubeUrl = "https://www.youtube.com/watch?v=Q8Hji_hJcHQ";
export const youtubeId = youtubeUrl.split("v=")[1];
// Segundo del video desde donde arranca el fondo (cuando launched = true)
export const youtubeStart = 920;
// Milisegundos que corre el clip antes de reiniciar (30000 = 30 segundos)
export const youtubeDuration = 30000;

// ── LOS PERROS DE LA CIUDAD ──────────────────────────────────────────
// Cada semana se agrega un perro nuevo.
// Para agregar: { label: "NOMBRE", src: "/perros/@handle.png" }
// Para un slot vacío (próximo): { label: null, src: null }
export const dogs = [
  { label: "ROSE",      src: "/perros/@susanakorenhof.png" },
  { label: "ALBERTA", src: "/perros/@alvarosalazar7.png" },
  { label: "BECCA",    src: "/perros/@paulaaminteguiaga.png" },
  { label: "DIEGUITO", src: "/perros/@susanakorenhof2.png" },
  { label: "NEO",  src: "/perros/@inugami_yokai.png" },
  { label: "MALU",      src: "/perros/@jeremiagzl.png" },
  { label: "???",      src: "/perros/@nahuetulian.png" },
  { label: "KURT",      src: "/perros/@soffia.rv.png" },
  { label: "DUKE", src: "/perros/@brendamorend.jpg" },
  { label: "PANCHITO", src: "/perros/@luca.mottin.jpg" },
  { label: "FRESITA", src: "/perros/@rosasanchezraverta@luca.mottin.jpg" },
  { label: "AIRELAI", src: "/perros/@sil.mele.jpg" },
];

// ── CAMINO A CIUDAD DE PERROS ────────────────────────────
// Para agregar un reel de YouTube: { youtube: "ID_DEL_VIDEO" }
// Para un video local: { src: "/REELS/nombre.mp4" }
// El ID de YouTube es la parte final de la URL: youtube.com/shorts/ESTE_ES_EL_ID
export const reels = [
  { youtube: "ChRgtvzgpLc" },
  { youtube: "mUBa5voVd48" },
  { youtube: "8rXdB0trg10" },
  { youtube: "BzjVXIyTysY" },
  { youtube: "i1rN3oCSt5U" },
];


// ── CONFIGURACIÓN SITIO ─────────────────────────────────────────────────

// ── REDES SOCIALES ───────────────────────────────────────────────
// Aparecen en el nav de ambas páginas y en la sección Banda del sitio.
export const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/theconjuntos/",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3mTkZGDhS9Chis4tqJRCUF?si=VP5hWoOhSmab4cxVZJ8pGg",
    icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@losconjuntos",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "TikTok",
    url: "https://vt.tiktok.com/ZSHtQ1BYJ/",
    icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

// ── DISCOGRAFÍA ──────────────────────────────────────────────────
// Aparece en la sección Música del sitio principal.
export const releases = [
  {
    title: "Venturas",
    type: "Album",
    image: "/discos/venturas-album.png",
    spotify: "https://open.spotify.com/album/5U1LIIV4elhW3mnKHx88UP?si=PWKtKy8xThCRrR_n3JAMzg",
  },
  {
    title: "Los Conjuntos",
    type: "Single",
    image: "/discos/los-conjuntos-single.png",
    spotify: "https://open.spotify.com/album/16iFziDEQqjDNB9N8XoXqW?si=2DJcoDX0TmaJUJ-eNcQUXw",
  },
  {
    title: "Problemas",
    type: "Single",
    image: "/discos/problemas-single.png",
    spotify: "https://open.spotify.com/album/2fH9dHYw7YZNvb6h77mACI?si=yCgWgJbXQzeXZ8K4OylFWw",
  },
  // {
  //   title: "Ciudad de Perros",
  //   type: "Live Session",
  //   image: "/discos/ciudad-de-perros.png",
  //   spotify: "https://open.spotify.com/album/2fH9dHYw7YZNvb6h77mACI?si=yCgWgJbXQzeXZ8K4OylFWw",
  // },
];
