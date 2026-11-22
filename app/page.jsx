import HeroCarousel from "@/components/HeroCarousel";
import { ToolsBand, ReportsGrid, BlogGrid, Manifesto, AreaBlocks } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata = pageMeta({ description: SITE_DESCRIPTION, path: "/" });

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ToolsBand />
      <ReportsGrid />
      <Manifesto />
      <BlogGrid />
      <h2 className="visually-hidden">Áreas de trabajo</h2>
      <AreaBlocks headingLevel={3} />
    </>
  );
}
