import { POSTS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { PostCards } from "@/components/ArticleBits";

export const metadata = pageMeta({
  title: "Blog",
  description: "Guías, noticias y crónicas de GéneroLab sobre salud, justicia y derechos de las personas LGBTIQ+.",
  path: "/blog",
});

export default function Blog() {
  return (
    <>
      <header className="page-head tone-lime">
        <div className="container">
          <h1>Blog</h1>
          <p>Guías prácticas, noticias del litigio y crónicas desde los territorios.</p>
        </div>
      </header>
      <section className="section" aria-label="Artículos">
        <div className="container">
          <h2 className="visually-hidden">Artículos</h2>
          <PostCards items={POSTS} columns={4} />
        </div>
      </section>
    </>
  );
}
