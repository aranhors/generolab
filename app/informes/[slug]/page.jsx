import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REPORTS } from "@/lib/site";
import { REPORT_DETAILS } from "@/lib/reports";
import { pageMeta, articleJsonLd } from "@/lib/seo";
import { ArticleBody, ReportCards, JsonLd, otherReports } from "@/components/ArticleBits";

const TONES = { "manos-arriba": "aqua", "barrer-la-impunidad": "pink", "lo-que-el-vidrio-no-calla": "lilac", "ondas-de-odio": "yellow" };

export function generateStaticParams() {
  return REPORTS.map((r) => ({ slug: r.slug }));
}

function find(slug) {
  const r = REPORTS.find((x) => x.slug === slug);
  return r ? { ...r, ...REPORT_DETAILS[slug] } : null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const r = find(slug);
  if (!r) return {};
  return pageMeta({ title: `${r.title}: informe`, description: r.lede, path: `/informes/${slug}`, image: r.image, imageAlt: r.alt, type: "article", published: r.published, author: "GéneroLab" });
}

export default async function Informe({ params }) {
  const { slug } = await params;
  const r = find(slug);
  if (!r) notFound();
  return (
    <>
      <JsonLd data={articleJsonLd({ title: r.title, description: r.lede, path: `/informes/${slug}`, image: r.image, published: r.published, section: "Informes" })} />
      <header className={`report-head tone-${TONES[slug]}`}>
        <div className="container report-head__inner">
          <div className="report-head__text">
            <p className="crumb"><Link href="/informes">Todos los informes</Link></p>
            <h1>{r.title}</h1>
            <p className="meta-row"><span>{r.kind}</span><span><time dateTime={r.published}>{r.dateLabel}</time></span></p>
            <p className="lede">{r.lede}</p>
            <div className="download">
              <button type="button" className="btn" disabled aria-describedby={`dl-${slug}`}>Descargar PDF</button>
              <p id={`dl-${slug}`} className="download__note">El PDF estará disponible muy pronto.</p>
            </div>
          </div>
          <div className="report-head__cover">
            <Image src={r.image} alt={r.alt} width={825} height={1100} priority sizes="(max-width: 960px) 70vw, 380px" />
          </div>
        </div>
      </header>

      <section className="findings" aria-labelledby="hallazgos">
        <div className="container">
          <h2 id="hallazgos" className="section-head">Hallazgos clave</h2>
          <p className="findings__note"><strong>Datos de ejemplo.</strong> Estas cifras son ilustrativas y se reemplazarán por los resultados reales del informe.</p>
          <dl className="findings__grid">
            {r.findings.map((f) => (
              <div key={f.label} className="finding">
                <dt className="finding__value num">{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <article className="section">
        <div className="container article-wrap">
          <ArticleBody sections={r.sections} />
        </div>
      </article>

      <section className="section section--paper2" aria-labelledby="otros">
        <div className="container">
          <h2 id="otros" className="section-head">Otros informes</h2>
          <ReportCards items={otherReports(slug)} />
        </div>
      </section>
    </>
  );
}
