// Datos verificados del catálogo de Viajero Maya (ver CONTENIDO.md).
// Precio e incluye son los mismos para los 5 tours.
// Las taglines solo existen en el PDF para Campeche y Ciudad de México.

export interface Tour {
  slug: string;
  nombre: string;
  tagline?: string;
  foto: string;
  fotoAlt: string;
}

export const PRECIO = "$500";
export const PRECIO_DETALLE = "por persona";
export const MINIMO = "Mínimo 4 personas";

export const INCLUYE = [
  "Transporte de lujo",
  "Comida tipo buffete",
  "Entrada a zonas arqueológicas",
];

export const AMENIDADES = [
  "Guía en zonas arqueológicas",
  "Paseo a salineras",
  "Tiempo libre en playa",
  "Bebidas de cortesía",
  "Seguro de viajero",
];

export const TOURS: Tour[] = [
  {
    slug: "chiapas-magico",
    nombre: "Chiapas Mágico",
    foto: "images/chiapas-agua-azul.jpg",
    fotoAlt: "Cascadas de Agua Azul, Chiapas",
  },
  {
    slug: "campeche",
    nombre: "Campeche",
    tagline: "Una visita al Reino de la Serpiente",
    foto: "images/campeche-malecon.jpg",
    fotoAlt: "Malecón de Campeche al atardecer",
  },
  {
    slug: "ciudad-de-mexico",
    nombre: "Ciudad de México",
    tagline: "Un viaje al ombligo de la luna",
    foto: "images/cdmx-teotihuacan.jpg",
    fotoAlt: "Pirámide del Sol, Teotihuacán",
  },
  {
    slug: "oaxaca",
    nombre: "Oaxaca",
    foto: "images/oaxaca-hierve-el-agua.jpg",
    fotoAlt: "Hierve el Agua, Oaxaca",
  },
  {
    slug: "veracruz",
    nombre: "Veracruz",
    foto: "images/veracruz-tajin.jpg",
    fotoAlt: "Pirámide de los Nichos, El Tajín, Veracruz",
  },
];

// Fotos extra de cada destino para la galería (caption = nombre del tour).
export interface FotoGaleria {
  archivo: string;
  alt: string;
  tour: string;
}

export const GALERIA: FotoGaleria[] = [
  { archivo: "images/chiapas-sumidero.jpg", alt: "Cañón del Sumidero", tour: "Chiapas" },
  { archivo: "images/chiapas-san-cristobal-noche.jpg", alt: "San Cristóbal de Las Casas de noche", tour: "Chiapas" },
  { archivo: "images/chiapas-textiles.jpg", alt: "Textiles de colores", tour: "Chiapas" },
  { archivo: "images/chiapas-cueva.jpg", alt: "Interior de cueva", tour: "Chiapas" },
  { archivo: "images/campeche-edzna.jpg", alt: "Pirámide de Edzná", tour: "Campeche" },
  { archivo: "images/campeche-catedral-noche.jpg", alt: "Catedral de Campeche de noche", tour: "Campeche" },
  { archivo: "images/campeche-alberca.jpg", alt: "Patio colonial con alberca", tour: "Campeche" },
  { archivo: "images/cdmx-xochimilco.jpg", alt: "Trajinera de Xochimilco", tour: "Ciudad de México" },
  { archivo: "images/cdmx-basilica-guadalupe.jpg", alt: "Basílica de Guadalupe", tour: "Ciudad de México" },
  { archivo: "images/cdmx-zocalo-bandera.jpg", alt: "Zócalo con la bandera de México", tour: "Ciudad de México" },
  { archivo: "images/oaxaca-monte-alban.jpg", alt: "Monte Albán", tour: "Oaxaca" },
  { archivo: "images/oaxaca-alebrije.jpg", alt: "Alebrije de madera pintado", tour: "Oaxaca" },
  { archivo: "images/oaxaca-mitla.jpg", alt: "Grecas de piedra", tour: "Oaxaca" },
  { archivo: "images/oaxaca-santo-domingo.jpg", alt: "Interior de la iglesia de Santo Domingo", tour: "Oaxaca" },
  { archivo: "images/oaxaca-playa.jpg", alt: "Playa de la costa oaxaqueña", tour: "Oaxaca" },
  { archivo: "images/veracruz-san-juan-ulua.jpg", alt: "Fortaleza de San Juan de Ulúa", tour: "Veracruz" },
  { archivo: "images/veracruz-cascada.jpg", alt: "Cascada entre vegetación", tour: "Veracruz" },
  { archivo: "images/veracruz-zocalo-danzon.jpg", alt: "Zócalo de Veracruz, baile de danzón", tour: "Veracruz" },
  { archivo: "images/veracruz-casas-colores.jpg", alt: "Calle con casas de colores", tour: "Veracruz" },
  { archivo: "images/veracruz-iglesia.jpg", alt: "Iglesia blanca con atrio", tour: "Veracruz" },
];

export const CONTACTO = {
  email: "contacto@viajeromaya.com",
  oficina: "999-422-0727",
  movil: "967-140-9582",
  web: "www.viajeromaya.mx",
};

export const TRANSPORTE = {
  nombre: "B'IINEEL",
  titulo: "Transportadora Turística",
  subtitulo: "Renta de autotransporte",
  caracteristicas: [
    "Unidades equipadas",
    "Seguro de viajero",
    "Operadores capacitados",
    "Atención personalizada",
    "Servicios privados o colectivos",
  ],
  contacto: "Jonathan Barrios Rosas",
  emails: ["transtur.biiineel@gmail.com", "apheiron1283@gmail.com"],
  telefonos: ["967-140-9582", "999-422-0727"],
  web: "www.viajeromaya.com",
};
