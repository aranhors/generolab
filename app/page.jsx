import HeroCarousel from "@/components/HeroCarousel";
import { LatestPosts, OurWork, Services, ContactBlock } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata = pageMeta({ description: SITE_DESCRIPTION, path: "/" });

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <LatestPosts />
      <OurWork />
      <Services />
      <ContactBlock />
    </>
  );
}
