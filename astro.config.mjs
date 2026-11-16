// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// GitHub Pages publica el sitio en https://xkoderx.github.io/viajero-maya/
// Sin `base`, Astro genera rutas desde la raíz (/_astro/...) y los estilos
// e imágenes dan 404. Con `base`, todo sale con /viajero-maya/ delante.
export default defineConfig({
  site: 'https://xkoderx.github.io',
  base: '/viajero-maya',
  vite: {
    plugins: [tailwindcss()]
  }
});
