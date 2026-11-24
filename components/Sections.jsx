import Image from "next/image";
import Link from "next/link";
import { REPORTS, POSTS, AREAS, SERVICES, CONTACT } from "@/lib/site";
import { postImage } from "./ArticleBits";
import { WhatsApp, Pin, Mail } from "./Icons";

export function ReportsGrid({ headingLevel = 2, title = "Últimos informes de derechos humanos" }) {
  const H = `h${headingLevel}`;
  return (
    <section className="section" aria-labelledby="informes">
      <div className="container">
        <H id="informes" className="bar-head tone-pink"><span>{title}</span></H>
        <div className="grid-4">
          {REPORTS.map((r) => (
            <article key={r.slug} className="report">
              <div className="report__cover">
                <Image src={r.image} alt={r.alt} width={864} height={1152} sizes="(max-width: 540px) 100vw, (max-width: 960px) 50vw, 25vw" />
              </div>
              <h3>{r.title}</h3>
              <Link href={`/informes/${r.slug}`} className="btn btn--block" aria-label={`Ver informe: ${r.title}`}>Ver informe</Link>
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
    <section className="section section--ink" aria-labelledby="blog">
      <div className="container">
        <H id="blog" className="bar-head tone-green"><span>Últimas entradas del blog</span></H>
        <div className="grid-4">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="post">
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

export function LatestPosts() {
  const items = POSTS.slice(0, 3);
  return (
    <section className="latest" aria-labelledby="ultimos">
      <div className="container">
        <h2 id="ultimos" className="bar-head tone-pink"><span>Últimos post</span></h2>
        <ul className="latest__grid">
          {items.map((p) => {
            const img = postImage(p);
            return (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="reel">
                  <Image src={img.src} alt={img.alt} width={1100} height={1100} sizes="(max-width: 40rem) 80vw, (max-width: 60rem) 45vw, 300px" />
                  <span className="reel__title">{p.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="latest__more"><Link href="/blog" className="more">Ver más…</Link></p>
      </div>
    </section>
  );
}

export function OurWork() {
  return (
    <section className="work" aria-labelledby="trabajo">
      <div className="work__text">
        <h2 id="trabajo" className="bar-head bar-head--stack tone-lilac"><span>Nuestro</span><span>trabajo</span></h2>
        <div className="work__copy">
          <p>GéneroLab es una consultora especializada en la intersección entre los estudios de género y el análisis estadístico. Nace de la convicción de que las desigualdades de género solo pueden transformarse si se miden bien: <mark>con datos rigurosos, metodologías sólidas, la inclusión de análisis interseccionales y una lectura crítica de lo que las cifras muestran y de lo que dejan por fuera.</mark></p>
          <p>Por eso combinamos la investigación social y política con herramientas cuantitativas para producir diagnósticos, indicadores, evaluaciones y estudios que sirvan a entidades públicas, organizaciones sociales y organismos de cooperación en el diseño, seguimiento y mejora de sus políticas y programas. Nuestro trabajo busca convertir la evidencia en decisiones: que el enfoque de género deje de ser un enunciado y se vuelva algo verificable, comparable y útil para quienes toman decisiones.</p>
        </div>
      </div>
      <div className="work__media">
        <Image src="/images/gl-trabajo.webp" alt="Investigadora sonriente con gafas en su escritorio, en duotono verde" width={900} height={1200} sizes="(max-width: 60rem) 100vw, 50vw" />
        <p className="work__tag">Evidencia para decidir</p>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="services wave-up" aria-labelledby="servicios">
      <div className="container">
        <h2 id="servicios" className="display-head">Nuestros servicios</h2>
        <ul className="services__grid">
          {SERVICES.map((s) => (
            <li key={s.id} className="service">
              <div className="service__img"><Image src={s.image} alt={s.alt} width={800} height={600} sizes="(max-width: 40rem) 90vw, (max-width: 60rem) 45vw, 340px" /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link href="/contacto" className="more more--deep" aria-label={`Saber más sobre ${s.title}`}>Saber más…</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContactInfo() {
  return (
    <ul className="contact-info">
      <li><WhatsApp /><p>Tel: {CONTACT.phones.map((t, i) => (<span key={t}>{i ? " / " : ""}<a href={`tel:${t.replace(/\s/g, "")}`}>{t}</a></span>))}</p></li>
      <li><Pin /><p>{CONTACT.address}</p></li>
      <li><Mail /><div>
        <p>Email<br /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        <p>Notificaciones judiciales:<br /><a href={`mailto:${CONTACT.legal}`}>{CONTACT.legal}</a></p>
        <p>Prensa:<br /><a href={`mailto:${CONTACT.press}`}>{CONTACT.press}</a></p>
      </div></li>
    </ul>
  );
}

export function ContactBlock({ headingLevel = 2, title = "Contáctanos" }) {
  const H = `h${headingLevel}`;
  return (
    <section className="contact wave-up" aria-labelledby="contactanos" id="escribenos">
      <div className="container">
        <H id="contactanos" className="display-head">{title}</H>
        <div className="contact__grid">
          <form className="contact__form" action={`mailto:${CONTACT.email}`} method="post" encType="text/plain">
            <div className="field field--full">
              <label htmlFor="c-nombre" className="visually-hidden">Nombre</label>
              <input id="c-nombre" name="nombre" className="input" placeholder="Nombre" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="c-celular" className="visually-hidden">Celular</label>
              <input id="c-celular" name="celular" type="tel" className="input" placeholder="Celular" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="c-email" className="visually-hidden">Email</label>
              <input id="c-email" name="email" type="email" className="input" placeholder="Email" autoComplete="email" required />
            </div>
            <div className="field field--full">
              <label htmlFor="c-mensaje" className="visually-hidden">Mensaje</label>
              <textarea id="c-mensaje" name="mensaje" className="input" placeholder="Mensaje" required />
            </div>
            <button type="submit" className="pill">Enviar</button>
          </form>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
