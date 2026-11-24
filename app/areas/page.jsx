import { AreaBlocks } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Áreas de trabajo",
  description: "Observatorio de violencia por prejuicio, clínica legal, salud sexual, incidencia, investigación y migración: así trabaja GéneroLab.",
  path: "/areas",
});

export default function Areas() {
  return (
    <>
      <header className="page-head tone-lilac">
        <div className="container">
          <h1>Áreas de trabajo</h1>
          <p>Seis frentes conectados: cada caso alimenta una investigación.</p>
        </div>
      </header>
      <AreaBlocks headingLevel={2} long />
    </>
  );
}
