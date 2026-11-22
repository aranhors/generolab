# Imágenes de GéneroLab

Todas las fotografías e ilustraciones del sitio son **imágenes generadas con IA** como versiones alternas de las composiciones del sitio de referencia (temblores.org). No muestran a personas reales. Se guardan en `assets/bundles/*.txt` (líneas `ruta<TAB>base64`) y `scripts/decode-assets.mjs` las restaura en `public/images/` antes de cada build. Para reemplazar una, sustituye el `.webp` y actualiza su línea en el bundle correspondiente con `base64 -w 0 public/images/<archivo>`.

| Archivo | Tamaño | Uso | Prompt |
| --- | --- | --- | --- |
| hero-collage.webp | 825×1100 | Panel izquierdo del carrusel | Collage gráfico rojo coral y rosa con retícula blanca, estallido naranja y silueta negra de colibrí, estilo serigrafía, sin texto |
| hero-podcast.webp | 1100×1100 | Portada del podcast (slide 1) | Dos personas latinoamericanas conversando frente a micrófonos, serigrafía pop magenta, púrpura y amarillo, sol a rayas, sin texto |
| informe-1.webp | 825×1100 | Informe «Manos arriba, derechos al frente» | Duotono verde y azul: multitud con manos alzadas frente a edificio colonial de gobierno, mano en semitono, sin texto |
| informe-2.webp | 825×1100 | Informe «Barrer la impunidad» / slide 3 | Mano con escoba de cerdas arcoíris barriendo una mancha de tinta con forma de Suramérica, gouache, sin texto |
| informe-3.webp | 825×1100 | Informe «Lo que el vidrio no calla» | Vidrio quebrado blanco y negro con salpicadura magenta en el centro, sin texto |
| informe-4.webp | 825×1100 | Informe «Ondas de odio» | Fondo amarillo con ondas concéntricas y rostro difuminado de perfil, sin texto |
| blog-1.webp | 1100×1100 | Blog «Brigadas de salud rural diversa» / slide 2 | Collage de papel: paisaje andino, promotoras de salud con maletines entre cultivos, avioneta |
| blog-2.webp | 1100×1100 | Blog «Tutela por discriminación en un hospital» | Retrato en semitono de mujer trans latinoamericana sonriente sobre fondo naranja, tira verde |
| blog-3.webp | 1100×1100 | Blog «Nueva cohorte» y página Nosotros | Grupo de ocho jóvenes activistas bajo sombrilla, muro de hiedra, foto documental 35 mm |
| area-observatorio.webp | 1100×825 | Área Observatorio | ~40 activistas en escalinata de edificio neoclásico con columnas saludando, foto documental |
| area-litigio.webp | 1100×825 | Área Clínica legal | Grupo en plaza de barrio con pancartas rosada y amarilla sin texto, casas de colores |
| area-genero.webp | 1100×825 | Área Salud sexual | Feria nocturna de salud sexual: artistas drag con batas blancas reparten folletos, luces colgantes |
| area-participacion.webp | 1100×825 | Área Participación | Panel de siete personas en escenario con luz violeta y pantalla lila, público en silueta |
| area-salud.webp | 1100×825 | Área Investigación | Equipo de nueve personas en terraza con muro de hiedra, sombrilla y sillas naranjas |
| area-migracion.webp | 1100×825 | Área Migración | Mujer migrante habla al micrófono en conversatorio con otras tres panelistas, luz rosa |
| ../og.jpg | 1200×630 | Imagen para redes (Open Graph/Twitter) | Compuesta a partir de hero-collage + logotipo |
