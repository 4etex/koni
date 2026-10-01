import { useEffect, useRef } from "react";

const W = 1280;
const H = 800;

const ORBS = [
  { size: 520, color: "rgba(56, 160, 255, .5)", cx: 0.2, cy: 0.25, rx: 260, ry: 200, speed: 0.55, dir: 1, phase: 0 },
  { size: 440, color: "rgba(59, 130, 246, .5)", cx: 0.8, cy: 0.25, rx: 240, ry: 220, speed: 0.45, dir: -1, phase: 1.6 },
  { size: 480, color: "rgba(30, 110, 220, .5)", cx: 0.25, cy: 0.78, rx: 280, ry: 180, speed: 0.5, dir: -1, phase: 3.1 },
  { size: 400, color: "rgba(96, 165, 250, .4)", cx: 0.78, cy: 0.75, rx: 250, ry: 210, speed: 0.6, dir: 1, phase: 4.7 },
  { size: 460, color: "rgba(37, 99, 235, .45)", cx: 0.5, cy: 0.5, rx: 320, ry: 160, speed: 0.4, dir: 1, phase: 2.3 },
];

export const Orbs = () => {
  const refs = useRef([]);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = (now - start) / 1000;
      ORBS.forEach((o, i) => {
        const a = o.phase + t * o.speed * o.dir;
        const x = o.cx * W + Math.cos(a) * o.rx - o.size / 2;
        const y = o.cy * H + Math.sin(a) * o.ry - o.size / 2;
        const el = refs.current[i];
        if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
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
