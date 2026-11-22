import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Nosotros",
  description: "Conoce a GéneroLab: quiénes somos, nuestro manifiesto y cómo trabajamos por los derechos de las personas LGBTIQ+ y la igualdad de género.",
  path: "/nosotros",
});

export default function Nosotros() {
  return (
    <>
      <header className="page-head tone-pink">
        <div className="container">
          <h1>Derechos que salen del papel</h1>
          <p>Investigación, acompañamiento legal y trabajo comunitario en un solo laboratorio.</p>
        </div>
      </header>
      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Manifiesto</h2>
            <p>Nadie debería pagar con su cuerpo el precio de ser quien es. La violencia por prejuicio decide quién camina tranquilo, quién recibe atención y a quién escucha un juez.</p>
            <p>Por eso trabajamos como un laboratorio: escuchamos, registramos y publicamos. Y lo hacemos con las comunidades, no sobre ellas.</p>
          </div>
          <Image src="/images/blog-3.webp" alt="Equipo de GéneroLab sonriendo bajo una sombrilla frente a un muro de hiedra" width={1024} height={1024} sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div id="transparencia">
            <h2 className="section-head">Transparencia</h2>
            <ul className="list-plain">
              <li><strong>Informes de gestión</strong>Informe anual y estados financieros.</li>
              <li><strong>Financiación</strong>Cooperantes y aliados.</li>
            </ul>
          </div>
          <div id="datos">
            <h2 className="section-head">Tratamiento de datos</h2>
            <p>Tus reportes son confidenciales. Solo usamos tus datos para acompañarte o, con tu permiso y de forma anónima, para investigar. Pide consultarlos o borrarlos desde <Link href="/contacto">contacto</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
