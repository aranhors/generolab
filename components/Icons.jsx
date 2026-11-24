
export function TriangleLeft() {
  return (<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12 20 3v18z" fill="currentColor" /></svg>);
}
export function TriangleRight() {
  return (<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 12 4 3v18z" fill="currentColor" /></svg>);
}
export function WhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
    </svg>
  );
}
export function Pin() {
  return (<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>);
}
export function Mail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M6.5 8.5h11v7h-11z" fill="var(--color-paper)" />
      <path d="m6.5 8.5 5.5 4.2 5.5-4.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
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
