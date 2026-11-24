import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="site-footer wave-up">
      <div className="container">
        <div className="site-footer__top">
          <div className="follow">
            <p className="follow__label">Síguenos en:</p>
            <SocialLinks />
          </div>
          <Link href="/contacto#dona" className="pill pill--ghost">Donan aquí</Link>
        </div>
        <div className="site-footer__legal">
          <p>
            <Link href="/nosotros#datos">Política y Tratamiento de Datos</Link>
            <span aria-hidden="true"> | </span>
            <Link href="/nosotros#transparencia">Transparencia</Link>
          </p>
          <p>GéneroLab © 2026 <span aria-hidden="true">|</span> Todos los derechos reservados. Desarrollo y Mantenimiento: Nico Company</p>
          <p className="site-footer__note">Las fotografías del sitio son imágenes generadas con IA, de carácter ilustrativo.</p>
        </div>
      </div>
    </footer>
  );
}
