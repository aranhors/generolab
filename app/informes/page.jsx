import Image from "next/image";
import Link from "next/link";
import { REPORTS } from "@/lib/site";
import { REPORT_DETAILS } from "@/lib/reports";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Informes",
  description: "Informes de derechos humanos de GéneroLab sobre violencia por prejuicio, protesta, acceso a la justicia y discurso de odio contra personas LGBTIQ+.",
  path: "/informes",
});

export default function Informes() {
  return (
    <>
      <header className="page-head tone-green">
        <div className="container">
          <h1>Informes</h1>
          <p>Investigación con y desde las comunidades para exigir cambios concretos.</p>
        </div>
      </header>
      <section className="section" aria-label="Lista de informes">
        <div className="container index-list">
          <h2 className="visually-hidden">Lista de informes</h2>
          {REPORTS.map((r) => {
            const d = REPORT_DETAILS[r.slug];
            return (
              <article key={r.slug} className="index-item">
                <Link href={`/informes/${r.slug}`} className="index-item__media" tabIndex={-1} aria-hidden="true">
                  <Image src={r.image} alt="" width={825} height={1100} sizes="(max-width: 960px) 40vw, 220px" />
                </Link>
                <div className="index-item__text">
                  <h3>{r.title}</h3>
                  <p className="meta-row"><span>{d.kind}</span><span>{d.dateLabel}</span></p>
                  <p>{r.summary}</p>
                  <Link href={`/informes/${r.slug}`} className="btn" aria-label={`Ver informe: ${r.title}`}>Ver informe</Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
