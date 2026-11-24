import { ReportsGrid, BlogGrid } from "@/components/Sections";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Publicaciones",
  description: "Informes de derechos humanos, artículos del blog y episodios del podcast Voces en Tránsito de GéneroLab.",
  path: "/publicaciones",
});

export default function Publicaciones() {
  return (
    <>
      <header className="page-head tone-green">
        <div className="container">
          <h1>Publicaciones</h1>
          <p>Informes, guías y conversaciones para entender y transformar la violencia por prejuicio.</p>
          <div className="head-links">
            <Link href="/informes" className="btn">Todos los informes</Link>
            <Link href="/blog" className="btn btn--ghost">Todo el blog</Link>
          </div>
        </div>
      </header>
      <ReportsGrid title="Informes de derechos humanos" />
      <BlogGrid />
      <section id="podcast" className="section">
        <div className="container split">
          <div>
            <h2 className="section-head">Podcast Voces en Tránsito</h2>
            <p>Conversaciones con personas que viven, estudian y transforman las violencias de género. El primer episodio, «Salud sin prejuicios», ya está disponible; muy pronto enlazaremos aquí las plataformas de escucha.</p>
          </div>
        </div>
      </section>
    </>
  );
}
