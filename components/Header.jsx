"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAV } from "@/lib/site";
import { LogoMark } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const menu = useRef(null);
  useEffect(() => { if (menu.current) menu.current.open = false; }, [pathname]);
  const isCurrent = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="GéneroLab, ir al inicio">
          <LogoMark />
          <span className="brand__word">GéneroLab.</span>
        </Link>
        <nav className="nav-desktop" aria-label="Principal">
          <ul className="nav-list">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="nav-link" aria-current={isCurrent(n.href) ? "page" : undefined}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="menu" ref={menu}>
          <summary aria-label="Abrir menú">Menú</summary>
          <nav className="menu__panel" aria-label="Principal móvil">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} aria-current={isCurrent(n.href) ? "page" : undefined}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
