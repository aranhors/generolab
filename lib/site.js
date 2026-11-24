// URL pública de producción en Vercel. Se puede sobrescribir con NEXT_PUBLIC_SITE_URL
// (por ejemplo, cuando el sitio tenga dominio propio).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://generolab.vercel.app").replace(/\/$/, "");

export const SITE_NAME = "GéneroLab";
export const SITE_DESCRIPTION =
  "GéneroLab es una organización sin ánimo de lucro que investiga, acompaña y litiga por los derechos de las personas LGBTIQ+ y por la igualdad de género.";

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotrxs" },
  { href: "/areas", label: "Áreas" },
  { href: "/publicaciones", label: "Publicaciones" },
  { href: "/contacto", label: "Contacto" },
];

export const SLIDES = [
  {
    id: "podcast",
    tag: "Podcast",
    title: ["Voces en", "tránsito"],
    text: ["Ya está al aire ", "el primer episodio,", " «Salud sin prejuicios»: médicas y lideresas trans hablan de lo que pasa en urgencias."],
    image: "/images/gl-hero.webp",
    alt: "Retrato de archivo en duotono verde de una investigadora con vestido oscuro de cuello alto",
    action: { href: "/publicaciones#podcast", label: "Escuchar el episodio" },
  },
  {
    id: "directorio",
    tag: "Directorio",
    title: ["Salud", "diversa"],
    text: ["Buscamos profesionales que atienden ", "sin prejuicios", " a personas LGBTIQ+. Recomienda uno o encuentra el más cercano."],
    image: "/images/gl-hero-2.webp",
    alt: "Collage en duotono verde con dos promotoras de salud caminando entre cultivos hacia las montañas",
    action: { href: "/areas#salud", label: "Explorar el directorio" },
  },
  {
    id: "informe",
    tag: "Nuevo informe",
    title: ["Barrer la", "impunidad"],
    text: ["Qué pasó con las denuncias por violencia contra personas trans y ", "por qué casi ninguna", " llega a juicio."],
    image: "/images/gl-hero-3.webp",
    alt: "Ilustración en duotono verde de una escoba barriendo una mancha de tinta con forma de continente",
    action: { href: "/informes/barrer-la-impunidad", label: "Leer el informe" },
  },
];

// Datos de contacto tomados del diseño final de Nicolás Fajardo (PDF "WareFrame - GéneroLab").
export const CONTACT = {
  phones: ["+57 1 608 36 05", "+57 1 232 78 58"],
  address: "Carrera 65 # 100 - 15 Bogotá, Colombia",
  email: "info@generolab.org",
  legal: "notificaciones@generolab.org",
  press: "press@generolab.org",
};

export const NETWORKS = [
  ["Instagram", "https://www.instagram.com/"],
  ["X", "https://x.com/"],
  ["Facebook", "https://www.facebook.com/"],
  ["TikTok", "https://www.tiktok.com/"],
  ["LinkedIn", "https://www.linkedin.com/"],
  ["YouTube", "https://www.youtube.com/"],
];

export const SERVICES = [
  {
    id: "protocolos",
    title: "Aplicación de protocolos",
    text: "Acompañamos a entidades y organizaciones a poner en marcha protocolos de prevención y atención de violencias basadas en género.",
    image: "/images/gl-serv-protocolos.webp",
    alt: "Facilitadora en duotono rosa sostiene un cuaderno y explica frente a una biblioteca",
  },
  {
    id: "media",
    title: "Le sacamos la media",
    text: "Diseñamos indicadores, encuestas y análisis estadísticos con enfoque de género para medir lo que hoy no se ve.",
    image: "/images/gl-serv-media.webp",
    alt: "Figuras sobre plataformas escalonadas junto a un gráfico de barras ascendente, en duotono rosa",
  },
  {
    id: "cartografias",
    title: "Cartografías corporales",
    text: "Talleres participativos que leen en el cuerpo y en el territorio las experiencias de violencia y de cuidado.",
    image: "/images/gl-serv-cartografias.webp",
    alt: "Mapa corporal dibujado a tinta con un helecho y una hoja prensados encima, en duotono rosa",
  },
];

export const REPORTS = [
  {
    slug: "manos-arriba",
    title: "Manos arriba, derechos al frente",
    summary: "Seguimiento a la protesta social de colectivos diversos y a la respuesta de las autoridades.",
    image: "/images/informe-1.webp",
    alt: "Portada en verde y azul con una multitud de manos alzadas frente a un edificio de gobierno",
  },
  {
    slug: "barrer-la-impunidad",
    title: "Barrer la impunidad",
    summary: "Qué pasa con las denuncias por violencia contra personas trans y por qué no avanzan.",
    image: "/images/informe-2.webp",
    alt: "Portada con una escoba de cerdas arcoíris barriendo una mancha de tinta",
  },
  {
    slug: "lo-que-el-vidrio-no-calla",
    title: "Lo que el vidrio no calla",
    summary: "Testimonios sobre agresiones en espacios públicos y la huella que dejan.",
    image: "/images/informe-3.webp",
    alt: "Portada en blanco y negro con un vidrio quebrado y una mancha magenta en el centro",
  },
  {
    slug: "ondas-de-odio",
    title: "Ondas de odio",
    summary: "Cómo circula el discurso de odio contra personas LGBTIQ+ en redes sociales.",
    image: "/images/informe-4.webp",
    alt: "Portada amarilla con ondas concéntricas alrededor de un rostro difuminado",
  },
];

export const POSTS = [
  {
    slug: "cambio-de-nombre",
    date: "12 nov",
    read: "4 min de lectura",
    title: "Guía: cómo corregir tu nombre en tu documento",
    excerpt: "Qué necesitas, dónde se hace el trámite y qué hacer si te lo niegan.",
  },
  {
    slug: "brigadas-rurales",
    date: "3 nov",
    read: "4 min de lectura",
    title: "Brigadas de salud rural diversa",
    excerpt: "Promotoras comunitarias recorren veredas con pruebas y escucha.",
    image: "/images/blog-1.webp",
    alt: "Collage de papel con dos promotoras de salud caminando por un sendero rural",
  },
  {
    slug: "tutela-hospital",
    date: "28 oct",
    read: "4 min de lectura",
    title: "Tutela por discriminación en un hospital",
    excerpt: "Una usuaria trans fue maltratada y se le negó atención.",
    image: "/images/blog-2.webp",
    alt: "Retrato en semitono de una mujer sonriente sobre fondo naranja",
  },
  {
    slug: "nueva-cohorte",
    date: "15 oct",
    read: "4 min de lectura",
    title: "Llega la nueva cohorte de investigación",
    excerpt: "Jóvenes que investigan desde sus territorios.",
    image: "/images/blog-3.webp",
    alt: "Grupo de jóvenes sonriendo bajo una sombrilla frente a un muro cubierto de hiedra",
  },
];

export const AREAS = [
  {
    id: "observatorio",
    color: "pink",
    title: "Observatorio de violencia por prejuicio",
    text: "Registramos y verificamos hechos de violencia contra personas LGBTIQ+ a través de Resuena, nuestra plataforma de reporte. Con esos datos investigamos patrones, publicamos alertas y llevamos evidencia a quienes toman decisiones.",
    image: "/images/area-observatorio.webp",
    alt: "Grupo numeroso de activistas sentados en las escaleras de un edificio de columnas, saludando con las manos en alto",
  },
  {
    id: "litigio",
    color: "green",
    title: "Clínica legal y litigio estratégico",
    text: "Litigia, nuestra clínica jurídica itinerante, brinda asesoría legal gratuita, crea herramientas para acercar la justicia a los barrios y lleva casos estratégicos que pueden cambiar las reglas para todas las personas.",
    image: "/images/area-litigio.webp",
    alt: "Personas sonrientes sostienen pancartas rosada y amarilla en una plaza de barrio",
  },
  {
    id: "salud",
    color: "lilac",
    title: "Salud sexual y bienestar",
    text: "Trabajamos por una salud sin prejuicios: jornadas comunitarias, formación a personal médico y un directorio de servicios amigables construido con recomendaciones de la propia comunidad.",
    image: "/images/area-genero.webp",
    alt: "Dos artistas drag con batas blancas reparten folletos de salud sexual a un público que ríe",
  },
  {
    id: "participacion",
    color: "pink",
    title: "Participación e incidencia",
    text: "Abrimos espacios de debate entre la ciudadanía y las candidaturas, combatimos la desinformación y llevamos las agendas de género y diversidad a quienes legislan y gobiernan.",
    image: "/images/area-participacion.webp",
    alt: "Panel de siete personas sentadas en un escenario con iluminación violeta frente al público",
  },
  {
    id: "investigacion",
    color: "green",
    title: "Investigación y datos abiertos",
    text: "Nuestro laboratorio produce investigación participativa con y desde las comunidades. Publicamos metodologías y datos abiertos para que otras organizaciones puedan usarlos.",
    image: "/images/area-salud.webp",
    alt: "Equipo de investigación de nueve personas posando en una terraza con un muro de hiedra",
  },
  {
    id: "migracion",
    color: "lilac",
    title: "Migración y diversidad",
    text: "Acompañamos a personas migrantes LGBTIQ+ para que conozcan sus derechos, documentamos las barreras que enfrentan en salud, educación y justicia, y tejemos rutas de apoyo con otras organizaciones.",
    image: "/images/area-migracion.webp",
    alt: "Mujer migrante habla al micrófono en un conversatorio junto a otras tres panelistas",
  },
];
