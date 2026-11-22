import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/lib/site";
import { POST_DETAILS } from "@/lib/posts";
import { pageMeta, articleJsonLd } from "@/lib/seo";
import { ArticleBody, PostCards, JsonLd, otherPosts } from "@/components/ArticleBits";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

function find(slug) {
  const p = POSTS.find((x) => x.slug === slug);
  return p ? { ...p, ...POST_DETAILS[slug] } : null;
}

const longDate = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = find(slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.lede, path: `/blog/${slug}`, image: p.image, imageAlt: p.alt, type: "article", published: p.published, author: p.author });
}

export default async function Post({ params }) {
  const { slug } = await params;
  const p = find(slug);
  if (!p) notFound();
  return (
    <>
      <JsonLd data={articleJsonLd({ title: p.title, description: p.lede, path: `/blog/${slug}`, image: p.image, published: p.published, author: p.author, section: "Blog" })} />
      <header className="post-head">
        <div className="container post-head__inner">
          <div className="post-head__text">
            <p className="crumb"><Link href="/blog">Todo el blog</Link></p>
            <h1>{p.title}</h1>
            <p className="byline">{p.author}, {p.role}</p>
            <p className="meta-row">
              <span><time dateTime={p.published}>{longDate(p.published)}</time></span>
              <span>{p.read}</span>
            </p>
            <p className="lede">{p.lede}</p>
          </div>
          <div className="post-head__img">
            <Image src={p.image} alt={p.alt} width={1100} height={1100} priority sizes="(max-width: 960px) 100vw, 520px" />
          </div>
        </div>
      </header>

      <article className="section">
        <div className="container article-wrap">
          <ArticleBody sections={p.sections} />
          <p className="article-cta">¿Tienes preguntas sobre este tema? <Link href="/contacto">Escríbenos</Link> y te respondemos.</p>
        </div>
      </article>

      <section className="section section--lime" aria-labelledby="relacionados">
        <div className="container">
          <h2 id="relacionados" className="section-head">Artículos relacionados</h2>
          <PostCards items={otherPosts(slug)} />
        </div>
      </section>
    </>
  );
}
