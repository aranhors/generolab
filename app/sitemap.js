import { SITE_URL, REPORTS, POSTS } from "@/lib/site";
import { REPORT_DETAILS } from "@/lib/reports";
import { POST_DETAILS } from "@/lib/posts";

export default function sitemap() {
  const now = new Date();
  const pages = ["", "/nosotros", "/areas", "/publicaciones", "/informes", "/blog", "/contacto"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
  const reports = REPORTS.map((r) => ({ url: `${SITE_URL}/informes/${r.slug}`, lastModified: new Date(REPORT_DETAILS[r.slug].published), changeFrequency: "yearly", priority: 0.8 }));
  const posts = POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(POST_DETAILS[p.slug].published), changeFrequency: "yearly", priority: 0.6 }));
  return [...pages, ...reports, ...posts];
}
