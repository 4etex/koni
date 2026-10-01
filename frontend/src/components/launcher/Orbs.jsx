import { useEffect, useRef } from "react";

const W = 1280;
const H = 800;

const ORBS = [
  { size: 520, color: "rgba(56, 160, 255, .5)" },
  { size: 440, color: "rgba(59, 130, 246, .5)" },
  { size: 480, color: "rgba(30, 110, 220, .5)" },
  { size: 400, color: "rgba(96, 165, 250, .4)" },
];

const rand = (min, max) => min + Math.random() * (max - min);

export const Orbs = () => {
  const refs = useRef([]);

  useEffect(() => {
    const state = ORBS.map(({ size }) => {
      const a = rand(0, Math.PI * 2);
      const s = rand(90, 140);
      return { x: rand(0, W - size), y: rand(0, H - size), vx: Math.cos(a) * s, vy: Math.sin(a) * s, size };
    });

    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      state.forEach((o, i) => {
        o.x += o.vx * dt;
        o.y += o.vy * dt;
        if (o.x <= 0) { o.x = 0; o.vx = Math.abs(o.vx); }
        if (o.x >= W - o.size) { o.x = W - o.size; o.vx = -Math.abs(o.vx); }
        if (o.y <= 0) { o.y = 0; o.vy = Math.abs(o.vy); }
        if (o.y >= H - o.size) { o.y = H - o.size; o.vy = -Math.abs(o.vy); }
        const el = refs.current[i];
        if (el) el.style.transform = `translate3d(${o.x}px, ${o.y}px, 0)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return ORBS.map(({ size, color }, i) => (
    <div
      key={i}
      ref={(el) => (refs.current[i] = el)}
      className="orb"
      style={{ width: size, height: size, background: color }}
      aria-hidden="true"
    />
  ));
};
