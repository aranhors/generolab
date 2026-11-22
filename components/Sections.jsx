import Image from "next/image";
import Link from "next/link";
import { REPORTS, POSTS, AREAS } from "@/lib/site";
import { ResuenaLogo, LitigiaLogo } from "./Icons";

export function ToolsBand() {
  return (
    <section className="tools" aria-label="Reporta y pide asesoría">
      <div className="tool tool--lime">
        <div>
          <p className="tool__q">¿Viviste o presenciaste un hecho de <strong>violencia por tu orientación sexual o identidad de género</strong>?</p>
          <div className="tool__actions">
            <Link href="/contacto#reporta" className="btn">Soy víctima</Link>
            <Link href="/contacto#reporta" className="btn btn--light">Soy testigo</Link>
          </div>
        </div>
        <div className="tool__logo"><ResuenaLogo /></div>
      </div>
      <div className="tool tool--yellow">
        <div>
          <p className="tool__q">¿Necesitas asesoría jurídica gratuita de nuestra clínica legal <Link href="/areas#litigio">Litigia</Link>?</p>
          <div className="tool__actions">
            <Link href="/contacto#asesoria" className="btn">Solicitar asesoría</Link>
          </div>
        </div>
        <div className="tool__logo"><LitigiaLogo /></div>
      </div>
    </section>
  );
}

export function ReportsGrid({ headingLevel = 2, title = "Últimos informes de derechos humanos" }) {
  const H = `h${headingLevel}`;
  return (
    <section className="section" aria-labelledby="informes">
      <div className="container">
        <H id="informes" className="section-head">{title}</H>
        <div className="grid-4">
          {REPORTS.map((r) => (
            <article key={r.slug} id={r.slug} className="report">
              <div className="report__cover">
                <Image src={r.image} alt={r.alt} width={864} height={1152} sizes="(max-width: 540px) 100vw, (max-width: 960px) 50vw, 25vw" />
              </div>
              <h3>{r.title}</h3>
              <Link href={`/publicaciones#${r.slug}`} className="btn btn--block" aria-label={`Ver informe: ${r.title}`}>Ver informe</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogGrid({ headingLevel = 2 }) {
  const H = `h${headingLevel}`;
  return (
    <section className="section section--lime" aria-labelledby="blog">
      <div className="container">
        <H id="blog" className="section-head section-head--center">Blog</H>
        <div className="grid-4">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/publicaciones#${p.slug}`} className="post" id={p.slug}>
              {p.image ? (
                <div className="post__img"><Image src={p.image} alt={p.alt} width={1024} height={1024} sizes="(max-width: 540px) 100vw, (max-width: 960px) 50vw, 25vw" /></div>
              ) : null}
              <div className="post__body">
                <div className="post__meta"><span>{p.date}</span><span>{p.read}</span></div>
                <h3>{p.title}</h3>
                {p.image ? null : <p>{p.excerpt}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifiesto">
      <div className="container manifesto__inner">
        <div>
          <h2 id="manifiesto" className="visually-hidden">Manifiesto</h2>
          <blockquote>Nadie debería pagar con su cuerpo el precio de ser quien es.</blockquote>
        </div>
        <div>
          <p>Somos un laboratorio: investigamos, acompañamos y litigamos junto a las personas LGBTIQ+ para convertir la evidencia en derechos que se cumplen.</p>
          <Link href="/nosotros" className="btn btn--on-dark">Leer el manifiesto</Link>
        </div>
      </div>
    </section>
  );
}

export function AreaBlocks({ headingLevel = 2, long = false }) {
  const H = `h${headingLevel}`;
  return (
    <div>
      {AREAS.map((a, idx) => (
        <section key={a.id} id={a.id} className={`area tone-${a.color}${idx % 2 ? " area--flip" : ""}`} aria-labelledby={`h-${a.id}`}>
          <div className="area__media">
            <Image src={a.image} alt={a.alt} width={1152} height={864} sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
          <div className="area__text">
            <H id={`h-${a.id}`} className="area__head">{a.title}</H>
            <p>{a.text}</p>
            {long ? (
              <Link href="/contacto" className="btn btn--tone">Sumarme a esta área</Link>
            ) : (
              <Link href={`/areas#${a.id}`} className="btn btn--tone" aria-label={`Conocer más sobre ${a.title}`}>Conocer más</Link>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
