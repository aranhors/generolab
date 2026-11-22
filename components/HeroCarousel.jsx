"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SLIDES } from "@/lib/site";
import { ArrowUp, ArrowDown } from "./Icons";

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const go = (d) => setI((v) => (v + d + n) % n);
  const s = SLIDES[i];
  return (
    <section className="hero" aria-roledescription="carrusel" aria-label="Destacados">
      <div className="hero__collage">
        <Image src="/images/hero-collage.webp" alt="" width={864} height={1152} priority sizes="(max-width: 960px) 100vw, 31vw" />
        <div className="hero__cover">
          <Image key={s.id} src={s.image} alt={s.alt} width={600} height={600} priority={i === 0} sizes="(max-width: 960px) 44vw, 23vw" />
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__slide" aria-live="polite">
          {i === 0 ? <h1>{s.kicker}</h1> : <h2>{s.kicker}</h2>}
          <p>{s.text}</p>
          <div className="hero__actions">
            {s.actions.map((a) => (
              <Link key={a.href} href={a.href} className={a.ghost ? "btn btn--ghost" : "btn"}>{a.label}</Link>
            ))}
          </div>
        </div>
        <div className="hero__controls">
          <button type="button" className="icon-btn" onClick={() => go(-1)} aria-label="Destacado anterior"><ArrowUp /></button>
          <span className="hero__dots" aria-hidden="true">{i + 1}/{n}</span>
          <button type="button" className="icon-btn" onClick={() => go(1)} aria-label="Siguiente destacado"><ArrowDown /></button>
        </div>
      </div>
      <Link href="/contacto#dona" className="sticker" aria-label="Apoya a GéneroLab con una donación">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs><path id="ring" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" /></defs>
          <g className="sticker__ring">
            <text style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700 }} fill="currentColor"><textPath href="#ring">apoya / dona / apoya / dona / apoya / dona /</textPath></text>
          </g>
          <path d="M50 66s-14-8.4-14-18a7.6 7.6 0 0 1 14-4.2A7.6 7.6 0 0 1 64 48c0 9.6-14 18-14 18z" fill="var(--color-pink)" />
        </svg>
      </Link>
    </section>
  );
}
