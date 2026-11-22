export function LogoMark(props) {
  return (
    <svg viewBox="0 0 40 48" aria-hidden="true" focusable="false" {...props}>
      <path d="M14 3h12v3h-2v11.5l11.3 19.6A6 6 0 0 1 30.1 46H9.9a6 6 0 0 1-5.2-8.9L16 17.5V6h-2z" fill="currentColor" />
      <path d="M20 41.5s-7-4.2-7-9a3.8 3.8 0 0 1 7-2.1 3.8 3.8 0 0 1 7 2.1c0 4.8-7 9-7 9z" fill="var(--color-pink)" />
      <circle cx="17" cy="24" r="1.6" fill="var(--color-paper)" />
      <circle cx="23" cy="21" r="1.1" fill="var(--color-paper)" />
    </svg>
  );
}

export function ArrowUp() {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 20V4M5 11l7-7 7 7" /></svg>);
}
export function ArrowDown() {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 4v16M5 13l7 7 7-7" /></svg>);
}

export function ResuenaLogo() {
  return (
    <svg viewBox="0 0 200 84" role="img" aria-label="Resuena, plataforma de reporte">
      <path d="M8 10h184l-8 52H86l-22 18 4-18H0z" fill="var(--color-ink)" />
      <text x="96" y="50" textAnchor="middle" fill="var(--color-lime)" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic", fontSize: "34px" }}>RESUENA</text>
    </svg>
  );
}

export function LitigiaLogo() {
  return (
    <svg viewBox="0 0 160 120" role="img" aria-label="Litigia, clínica legal">
      <g fill="var(--color-ink)">
        <rect x="52" y="4" width="56" height="40" />
        <path d="M80 14c-12 0-20 10-20 10s8 10 20 10 20-10 20-10-8-10-20-10z" fill="var(--color-yellow)" />
        <circle cx="80" cy="24" r="6" />
      </g>
      <text x="80" y="78" textAnchor="middle" fill="var(--color-ink)" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "28px" }}>LITI_</text>
      <text x="80" y="108" textAnchor="middle" fill="var(--color-ink)" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "28px" }}>GIA</text>
    </svg>
  );
}

const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
export const Social = {
  X: () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path {...s} d="M4 4l16 16M20 4L4 20" /></svg>),
  Instagram: () => (<svg viewBox="0 0 24 24" aria-hidden="true"><rect {...s} x="3.5" y="3.5" width="17" height="17" rx="5" /><circle {...s} cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" /></svg>),
  Facebook: () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" /></svg>),
  TikTok: () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path {...s} d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.3 5 4.5" /></svg>),
  LinkedIn: () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 9h3v11H5zM6.5 3.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM10 9h2.9v1.5c.4-.8 1.5-1.7 3.1-1.7 3.2 0 3.8 2.1 3.8 4.8V20h-3v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H10z" /></svg>),
  YouTube: () => (<svg viewBox="0 0 24 24" aria-hidden="true"><rect {...s} x="2.5" y="5.5" width="19" height="13" rx="3.5" /><path fill="currentColor" d="M10 9.2v5.6l4.8-2.8z" /></svg>),
};
