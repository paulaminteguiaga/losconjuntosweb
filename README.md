# Los Conjuntos — Sitio web

Sitio promocional de la banda. Construido con [Astro](https://astro.build) + Tailwind CSS.

## Comandos

```bash
npm run dev      # servidor local en http://localhost:4321
npm run build    # build de producción (genera /dist)
npm run preview  # previsualizar el build
```

## Cómo editar el contenido

**Todo el contenido editable está en un solo archivo: `src/config.ts`**

---

### Activar el día del lanzamiento

```ts
export const launched = false; // ← cambiar a true
```

Cuando `launched = true`, la página de inicio muestra el video de YouTube como fondo en lugar del countdown.

---

### Video del lanzamiento (fondo + botón "Miralo ahora")

```ts
export const youtubeUrl = "https://www.youtube.com/watch?v=ID_DEL_VIDEO";
export const youtubeStart = 920;    // segundo desde donde arranca el clip
export const youtubeDuration = 30000; // milisegundos antes de reiniciar (30s = 30000)
```

El `youtubeId` se extrae automáticamente de `youtubeUrl`, no hace falta cambiarlo.

---

### Redes sociales

Aparecen en el nav de ambas páginas y en la sección Banda.

```ts
export const socials = [
  { name: "Instagram", url: "https://www.instagram.com/theconjuntos/", icon: "..." },
  { name: "Spotify",   url: "https://open.spotify.com/...",             icon: "..." },
  { name: "YouTube",   url: "https://www.youtube.com/@losconjuntos",    icon: "..." },
  { name: "TikTok",    url: "https://vt.tiktok.com/...",                icon: "..." },
];
```

Solo hace falta cambiar el campo `url` de cada red.

---

### Perros del carrusel

Se agrega un perro por semana. Las imágenes van en `public/perros/`.

```ts
export const dogs = [
  { label: "ROSE",    src: "/perros/@susanakorenhof.png" },  // ← activo
  { label: "ALBERTA", src: "/perros/@alvarosalazar7.png" },  // ← activo
  // { label: "BECCA", src: "/perros/@paulaaminteguiaga.png" }, // ← descomentar para activar
  { label: null, src: null }, // ← slot vacío (muestra "...")
];
```

Para activar un perro nuevo: descomentar la línea correspondiente (o agregar una nueva) y eliminar un slot vacío `{ label: null, src: null }`.

---

### Reels (sección "Camino a Ciudad de Perros")

```ts
export const reels = [
  { youtube: "ChRgtvzgpLc" }, // ← ID del video de YouTube Shorts
  { youtube: "mUBa5voVd48" },
];
```

El ID es la parte final de la URL: `youtube.com/shorts/ESTE_ES_EL_ID`.

Para agregar un reel nuevo: subir el video a YouTube como Short y agregar `{ youtube: "ID" }` al array.

---

### Discografía

Aparece en la sección Música del sitio principal. Las imágenes van en `public/discos/`.

```ts
export const releases = [
  {
    title: "Venturas",
    type: "Album",
    image: "/discos/venturas-album.png",
    spotify: "https://open.spotify.com/album/...",
  },
  // Para agregar un lanzamiento nuevo: copiar el bloque de arriba y completar los datos.
  // Para mostrar Ciudad de Perros: descomentar el bloque al final del array en config.ts
];
```

---

## Estructura del proyecto

```
src/
├── config.ts        ← todo el contenido editable está acá
├── pages/
│   ├── index.astro       ← carga lanzamiento.astro directamente
│   ├── lanzamiento.astro ← página de countdown / lanzamiento
│   └── sitio.astro       ← sitio principal de la banda
├── layouts/
│   └── Layout.astro      ← HTML base con loader animado
public/
├── perros/          ← imágenes de los perros del carrusel
├── discos/          ← arte de tapa de los lanzamientos
└── frames-tomate/   ← hero.mp4 para el hero animado del sitio
```

## Pasar de lanzamiento a sitio

Cuando el lanzamiento ya no sea relevante, en `src/pages/index.astro` cambiar:

```astro
import Lanzamiento from "./lanzamiento.astro";
```

por:

```astro
import Sitio from "./sitio.astro";
```
