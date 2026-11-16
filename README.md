# Viajero Maya

Sitio web de la agencia de tours **Viajero Maya**, construido con Astro 5 +
Tailwind CSS v4. Una sola página en español con los 5 tour-circuitos del
catálogo, lo que incluye cada tour, la transportadora B'IINEEL y el contacto.

## Contenido

Todo el contenido (tours, precios, incluye, amenidades y contactos) viene del
catálogo PDF de la agencia — ver `CONTENIDO.md`. Las fotos se extrajeron del
mismo PDF — ver `images/MAPA.md`. No hay contenido inventado: sin
testimonios, sin itinerarios ni duraciones que el catálogo no indique.

## Diseño

Adaptación a Astro del diseño de la plantilla gratuita **Beyond** (ThemeWagon,
Bootstrap 4) con la paleta del catálogo: turquesa, arena y naranja.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:4321/viajero-maya/
npm run build   # genera dist/
```

## Publicación

GitHub Pages (método manual): `npm run build`, copiar `dist/` a `docs/` en
`main` y publicar desde ahí. El sitio usa `site` + `base: '/viajero-maya'`
en `astro.config.mjs` y un `public/.nojekyll` vacío.
