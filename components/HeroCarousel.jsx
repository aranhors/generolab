"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES } from "@/lib/site";
import { TriangleLeft, TriangleRight } from "./Icons";

// Transición tomada del video de Nicolás: el grupo (foto + título + texto) sale de lado
// con ease-in (~400 ms), hay un hueco breve y la diapositiva nueva entra desde el lado
// contrario con ease-out (~850 ms hacia adelante, ~800 ms hacia atrás). Sin fundido.
const OUT_MS = 400;
const GAP_MS = 120;
const IN_MS = { next: 850, prev: 800 };
const AUTO_MS = 7000;

export default function HeroCarousel() {
  const n = SLIDES.length;
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | out | pre | in
  const [dir, setDir] = useState("next");
  const [paused, setPaused] = useState(false); // pausa elegida por la persona
  const [hold, setHold] = useState(false); // hover, foco o pestaña oculta
  const [reduced, setReduced] = useState(false);
  const [userDriven, setUserDriven] = useState(false);
  const busy = useRef(false);
  const timers = useRef([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    const vis = () => setHold(document.hidden);
    document.addEventListener("visibilitychange", vis);
    return () => {
      mq.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", vis);
      timers.current.forEach(clearTimeout);
    };
  }, []);

  const later = (fn, ms) => { timers.current.push(setTimeout(fn, ms)); };

  const go = useCallback((d, fromUser) => {
    if (busy.current) return;
    if (fromUser) setUserDriven(true);
    const next = (v) => (v + (d === "next" ? 1 : -1) + n) % n;
    if (reduced) { setI(next); return; }
    busy.current = true;
    setDir(d);
    setPhase("out");
    later(() => {
      setI(next);
      setPhase("pre");
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("in")));
      later(() => { setPhase("idle"); busy.current = false; }, IN_MS[d] + 40);
    }, OUT_MS + GAP_MS);
  }, [n, reduced]);

  useEffect(() => {
    if (reduced || paused || hold || n < 2) return undefined;
    const t = setTimeout(() => go("next", false), AUTO_MS);
    return () => clearTimeout(t);
  }, [i, reduced, paused, hold, go, n]);

  const onKey = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go("prev", true); }
    if (e.key === "ArrowRight") { e.preventDefault(); go("next", true); }
  };

  const s = SLIDES[i];
  const autoplaying = !reduced && !paused;
  return (
    <section className="hero" aria-roledescription="carrusel" aria-label="Lo más reciente" onKeyDown={onKey}>
      <h1 className="visually-hidden">GéneroLab, laboratorio de género y datos</h1>
      <div
        className="hero__board"
        data-paused={paused ? "true" : undefined}
        onMouseEnter={() => setHold(true)}
        onMouseLeave={() => setHold(false)}
        onFocus={() => setHold(true)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHold(false); }}
      >
        <div className="hero__fx" aria-hidden="true"><span /><span /></div>
        <Link href="/contacto#dona" className="pill hero__donate">Donan aquí</Link>
        <button type="button" className="hero__arrow hero__arrow--prev" onClick={() => go("prev", true)} aria-label="Destacado anterior"><TriangleLeft /></button>
        <div className="hero__viewport">
          <div
            className="hero__slide"
            data-phase={phase}
            data-dir={dir}
            style={{ "--hero-in": `${IN_MS[dir]}ms`, "--hero-out": `${OUT_MS}ms` }}
            aria-live={autoplaying && !userDriven ? "off" : "polite"}
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${n}`}
          >
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
            </div>
          </div>
        </div>
        <div className="hero__status">
          <p className="hero__count num" aria-hidden="true">{i + 1} / {n}</p>
          {!reduced && n > 1 ? (
            <button type="button" className="hero__pause" onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
              {paused ? "Reanudar" : "Pausar"}
            </button>
          ) : null}
        </div>
        <button type="button" className="hero__arrow hero__arrow--next" onClick={() => go("next", true)} aria-label="Siguiente destacado"><TriangleRight /></button>
      </div>
    </section>
  );
}
