"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAV } from "@/lib/site";
import SocialLinks from "./SocialLinks";

export default function Header() {
  const pathname = usePathname();
  const menu = useRef(null);
  useEffect(() => { if (menu.current) menu.current.open = false; }, [pathname]);
  const isCurrent = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <nav className="nav-desktop" aria-label="Principal">
          <ul className="nav-list">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="nav-link" aria-current={isCurrent(n.href) ? "page" : undefined}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/" className="brand" aria-label="GéneroLab, ir al inicio">GéneroLab</Link>
        <div className="site-header__social"><SocialLinks /></div>
        <details className="menu" ref={menu}>
          <summary aria-label="Abrir menú">Menú</summary>
          <div className="menu__panel">
            <nav aria-label="Principal móvil">
              <ul>
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} aria-current={isCurrent(n.href) ? "page" : undefined}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <SocialLinks />
          </div>
        </details>
      </div>
    </header>
  );
}
