import { SITE_NAME, SITE_URL } from "./site";

export function pageMeta({ title, description, path = "/", image, imageAlt, type = "website", published, author }) {
  const img = image || "/og.jpg";
  const alt = imageAlt || "GéneroLab, laboratorio por los derechos de género y diversidad sexual";
  const url = `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Laboratorio por los derechos de género y diversidad sexual`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      ...(published ? { publishedTime: published, authors: author ? [author] : undefined } : {}),
      locale: "es_CO",
      siteName: SITE_NAME,
      url: url || "/",
      title: fullTitle,
      description,
      images: [image ? { url: img, alt } : { url: img, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [img],
    },
  };
}

export function articleJsonLd({ title, description, path, image, published, author, section }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [`${SITE_URL}${image}`],
    datePublished: published,
    dateModified: published,
    inLanguage: "es",
    articleSection: section,
    mainEntityOfPage: `${SITE_URL}${path}`,
    author: { "@type": "Organization", name: author || SITE_NAME },
    publisher: { "@type": "NGO", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` } },
  };
}
