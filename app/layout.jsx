import { IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-plex-mono", display: "swap" });
const serif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-plex-serif", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  ...pageMeta({ description: SITE_DESCRIPTION, path: "/" }),
  keywords: ["GéneroLab", "ONG", "derechos LGBTIQ+", "género", "diversidad sexual", "salud", "litigio estratégico", "investigación"],
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#fdf6f2" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/og.jpg`,
  description: SITE_DESCRIPTION,
  inLanguage: "es",
  knowsAbout: ["Derechos LGBTIQ+", "Igualdad de género", "Salud sexual", "Litigio estratégico", "Migración"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${mono.variable} ${serif.variable}`}>
      <body>
        <a href="#contenido" className="skip">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
