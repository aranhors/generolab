# GéneroLab

Sitio web de GéneroLab, laboratorio por los derechos de género y diversidad sexual. Next.js (App Router) con CSS propio, listo para Vercel sin configuración.

- `npm install && npm run dev` para desarrollo; `npm run build` para producción.
- Textos y datos en `lib/site.js`; SEO en `lib/seo.js`, `app/sitemap.js`, `app/robots.js`.
- La URL del sitio sale de `NEXT_PUBLIC_SITE_URL` o de la URL de producción de Vercel.
- Imágenes: ver `public/images/IMAGES.md`.
- Diseño revisado con la skill Hallmark (`sloplint`); el sello y las excepciones están al inicio de `app/globals.css`.
