import Link from "next/link";
import { Social } from "./Icons";

const NETWORKS = [
  ["X", "https://x.com/"],
  ["Instagram", "https://www.instagram.com/"],
  ["Facebook", "https://www.facebook.com/"],
  ["TikTok", "https://www.tiktok.com/"],
  ["LinkedIn", "https://www.linkedin.com/"],
  ["YouTube", "https://www.youtube.com/"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <h2>Suscríbete a nuestra lista de noticias</h2>
          <form className="news" action="mailto:hola@generolab.org" method="post" encType="text/plain">
            <div className="news__label"><label htmlFor="news-email">Tu correo electrónico</label></div>
            <input id="news-email" name="email" type="email" required autoComplete="email" className="input" />
            <button type="submit" className="btn btn--on-dark">Suscribirme</button>
          </form>
        </div>
        <div>
          <p className="footer-label">Síguenos</p>
          <ul className="social">
            {NETWORKS.map(([name, url]) => {
              const Icon = Social[name];
              return (<li key={name}><a href={url} aria-label={`GéneroLab en ${name}`} rel="noopener"><Icon /></a></li>);
            })}
          </ul>
          <ul className="footer-links">
            <li><Link href="/contacto#dona">Dona para apoyar nuestro trabajo</Link></li>
            <li><Link href="/nosotros#transparencia">Política de transparencia</Link></li>
            <li><Link href="/nosotros#datos">Tratamiento de datos</Link></li>
          </ul>
          <p className="footer-note">© 2026 GéneroLab. Fotografías generadas con IA de carácter ilustrativo.</p>
        </div>
      </div>
    </footer>
  );
}
