import Image from "next/image";
import Link from "next/link";
import { REPORTS, POSTS } from "@/lib/site";
import { POST_DETAILS } from "@/lib/posts";

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ArticleBody({ sections }) {
  return (
    <div className="article-body">
      {sections.map((s, i) => (
        <section key={i} aria-label={s.title || undefined}>
          {s.title ? <h2>{s.title}</h2> : null}
          {s.body.map((p, j) => (<p key={j}>{p}</p>))}
        </section>
      ))}
    </div>
  );
}

export function ReportCards({ items, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <div className="grid-3">
      {items.map((r) => (
        <article key={r.slug} className="report">
          <div className="report__cover">
            <Image src={r.image} alt={r.alt} width={825} height={1100} sizes="(max-width: 540px) 100vw, (max-width: 960px) 50vw, 25vw" />
          </div>
          <H className="report__title">{r.title}</H>
          <Link href={`/informes/${r.slug}`} className="btn btn--block" aria-label={`Ver informe: ${r.title}`}>Ver informe</Link>
        </article>
      ))}
    </div>
  );
}

export function postImage(p) {
  const d = POST_DETAILS[p.slug];
  return { src: p.image || d.image, alt: p.alt || d.alt };
}

export function PostCards({ items, headingLevel = 3, columns = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <div className={`grid-${columns}`}>
      {items.map((p) => {
        const img = postImage(p);
        return (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="post post--framed">
            <div className="post__img"><Image src={img.src} alt={img.alt} width={1100} height={1100} sizes="(max-width: 540px) 100vw, (max-width: 960px) 50vw, 33vw" /></div>
            <div className="post__body">
              <div className="post__meta"><span>{p.date}</span><span>{p.read}</span></div>
              <H className="post__title">{p.title}</H>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export const otherReports = (slug) => REPORTS.filter((r) => r.slug !== slug);
export const otherPosts = (slug) => POSTS.filter((p) => p.slug !== slug);
