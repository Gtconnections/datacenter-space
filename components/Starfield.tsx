"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; tw: number };
type Comet = { x: number; y: number; vx: number; vy: number; life: number; max: number };

/**
 * Canvas starfield with parallax drift, twinkle, scroll "warp" (stars streak
 * when you scroll fast) and occasional comets. Respects reduced-motion.
 */
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0,
      h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const count = Math.min(220, Math.floor((w * h) / 9000));
    const stars: Star[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.85 + 0.15,
      tw: Math.random() * Math.PI * 2,
    }));

    const comets: Comet[] = [];
    let lastScroll = window.scrollY;
    let warp = 0; // stretch factor from scroll velocity
    let mxTarget = 0,
      myTarget = 0,
      mx = 0,
      my = 0;
    let raf = 0;
    let frame = 0;

    const onScroll = () => {
      const dy = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      warp = Math.min(1, warp + Math.abs(dy) * 0.012);
    };
    const onMove = (e: MouseEvent) => {
      mxTarget = (e.clientX / w - 0.5) * 2;
      myTarget = (e.clientY / h - 0.5) * 2;
    };

    const spawnComet = () => {
      const fromLeft = Math.random() > 0.5;
      const y = Math.random() * h * 0.6;
      const speed = 6 + Math.random() * 6;
      comets.push({
        x: fromLeft ? -50 : w + 50,
        y,
        vx: (fromLeft ? 1 : -1) * speed,
        vy: speed * (0.25 + Math.random() * 0.25),
        life: 0,
        max: 90 + Math.random() * 40,
      });
    };

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);
      mx += (mxTarget - mx) * 0.05;
      my += (myTarget - my) * 0.05;
      warp *= 0.92; // decay

      for (const s of stars) {
        s.tw += 0.03;
        const alpha = 0.35 + Math.sin(s.tw) * 0.4;
        const px = s.x + mx * s.z * 10;
        const py = s.y + my * s.z * 10;
        const streak = warp * s.z * 24;
        if (streak > 1.2) {
          ctx.strokeStyle =
            s.z > 0.72 ? `rgba(99,179,255,${alpha})` : `rgba(219,228,245,${alpha * 0.8})`;
          ctx.lineWidth = s.z * 1.4;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px, py + streak);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(px, py, s.z * 1.5, 0, Math.PI * 2);
          ctx.fillStyle =
            s.z > 0.72 ? `rgba(99,179,255,${alpha})` : `rgba(219,228,245,${alpha * 0.8})`;
          ctx.fill();
        }
        if (!reduce) {
          s.y += s.z * 0.05 + warp * s.z * 2;
          if (s.y > h + 5) {
            s.y = -5;
            s.x = Math.random() * w;
          }
        }
      }

      // comets
      if (!reduce && frame % 260 === 0 && comets.length < 2) spawnComet();
      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += c.vx;
        c.y += c.vy;
        c.life++;
        const tailX = c.x - c.vx * 6;
        const tailY = c.y - c.vy * 6;
        const grad = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
        grad.addColorStop(0, "rgba(180,225,255,0.9)");
        grad.addColorStop(1, "rgba(99,179,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(c.x, c.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,235,255,0.95)";
        ctx.fill();
        if (c.life > c.max || c.x < -80 || c.x > w + 80 || c.y > h + 80) comets.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!reduce) window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
