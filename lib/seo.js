import { SITE_NAME, SITE_URL } from "./site";

export function pageMeta({ title, description, path = "/" }) {
  const url = `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Laboratorio por los derechos de género y diversidad sexual`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: SITE_NAME,
      url: url || "/",
      title: fullTitle,
      description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "GéneroLab, laboratorio por los derechos de género y diversidad sexual" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.jpg"],
    },
  };
}
