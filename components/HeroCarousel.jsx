"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SLIDES } from "@/lib/site";
import { TriangleLeft, TriangleRight } from "./Icons";

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const go = (d) => setI((v) => (v + d + n) % n);
  const s = SLIDES[i];
  return (
    <section className="hero" aria-roledescription="carrusel" aria-label="Lo más reciente">
      <h1 className="visually-hidden">GéneroLab, laboratorio de género y datos</h1>
      <div className="hero__board">
        <Link href="/contacto#dona" className="pill hero__donate">Donan aquí</Link>
        <button type="button" className="hero__arrow hero__arrow--prev" onClick={() => go(-1)} aria-label="Destacado anterior"><TriangleLeft /></button>
        <div className="hero__slide" aria-live="polite">
          <div className="hero__media">
            <Image key={s.id} src={s.image} alt={s.alt} width={720} height={960} priority={i === 0} sizes="(max-width: 60rem) 60vw, 300px" />
            <p className="hero__tag">{s.tag}</p>
          </div>
          <div className="hero__text">
            <h2 className="hero__title">
              <span>{s.title[0]}</span>
              <span>{s.title[1]}</span>
            </h2>
            <p className="hero__lede">{s.text[0]}<mark>{s.text[1]}</mark>{s.text[2]}</p>
            <Link href={s.action.href} className="more">{s.action.label}</Link>
            <p className="hero__count num" aria-hidden="true">{i + 1} / {n}</p>
          </div>
        </div>
        <button type="button" className="hero__arrow hero__arrow--next" onClick={() => go(1)} aria-label="Siguiente destacado"><TriangleRight /></button>
      </div>
    </section>
  );
}
