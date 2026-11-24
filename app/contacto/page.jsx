import { pageMeta } from "@/lib/seo";
import { ContactInfo } from "@/components/Sections";

export const metadata = pageMeta({
  title: "Contacto",
  description: "Reporta un hecho de violencia, solicita asesoría jurídica gratuita o escribe al equipo de GéneroLab.",
  path: "/contacto",
});

export default function Contacto() {
  return (
    <>
      <header className="page-head tone-green">
        <div className="container">
          <h1>Contacto</h1>
          <p>Reporta, pide asesoría o escríbenos. Leemos cada mensaje.</p>
        </div>
      </header>
      <section className="section">
        <div className="container split">
          <div id="reporta">
            <h2 className="section-head">Reporta un hecho</h2>
            <form className="form" action="mailto:info@generolab.org" method="post" encType="text/plain">
              <div className="field">
                <label htmlFor="rol">Soy</label>
                <select id="rol" name="rol" className="input">
                  <option>Víctima</option>
                  <option>Testigo</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="relato">¿Qué pasó, cuándo y dónde?</label>
                <textarea id="relato" name="relato" className="input" required />
                <p className="form__hint">Puedes hacerlo de forma anónima.</p>
              </div>
              <button type="submit" className="btn">Enviar reporte</button>
            </form>
          </div>
          <div id="asesoria">
            <h2 className="section-head">Solicita asesoría</h2>
            <form className="form" action="mailto:info@generolab.org" method="post" encType="text/plain">
              <div className="field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" className="input" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="correo">Correo electrónico</label>
                <input id="correo" name="correo" type="email" className="input" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="caso">Cuéntanos tu caso</label>
                <textarea id="caso" name="caso" className="input" required />
                <p className="form__hint">La asesoría de Litigia es gratuita y confidencial.</p>
              </div>
              <button type="submit" className="btn">Solicitar asesoría</button>
            </form>
          </div>
        </div>
      </section>
      <section className="section section--green wave-up" aria-labelledby="datos-contacto">
        <div className="container split">
          <div>
            <h2 id="datos-contacto" className="section-head">Escríbenos o llámanos</h2>
            <ContactInfo />
          </div>
          <div id="dona">
            <h2 className="section-head">Dona</h2>
            <p>Tu aporte sostiene la clínica legal, el observatorio y las brigadas de salud. Muy pronto habilitaremos aquí las donaciones en línea; mientras tanto, escríbenos y te contamos cómo apoyar.</p>
          </div>
        </div>
      </section>
    </>
  );
}
