// import.meta.env.BASE_URL es "/viajero-maya" (sin barra final) cuando hay
// `base` en astro.config.mjs, y "/" en dev. Normalizado con barra final
// para poder concatenar rutas de public/ sin romperlas.
export const BASE: string = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
