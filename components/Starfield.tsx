"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight animated starfield rendered on a canvas.
 * Subtle parallax drift + occasional twinkle. Respects reduced-motion.
 */
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let raf = 0;

    const count = Math.min(160, Math.floor((w * h) / 12000));
    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2,
      tw: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.tw += 0.02;
        const alpha = 0.4 + Math.sin(s.tw) * 0.35;
        const size = s.z * 1.6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
        ctx.fillStyle =
          s.z > 0.75
            ? `rgba(99,179,255,${alpha})`
            : `rgba(219,228,245,${alpha * 0.8})`;
        ctx.fill();
        if (!reduce) {
          s.y += s.z * 0.06;
          if (s.y > h) {
            s.y = 0;
            s.x = Math.random() * w;
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
