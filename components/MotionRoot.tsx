"use client";

import { useEffect } from "react";

/**
 * Global motion driver: writes smoothed mouse + scroll values to CSS custom
 * properties on <html> so any element can parallax with pure CSS (no React
 * re-renders). Respects prefers-reduced-motion.
 */
export default function MotionRoot() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      tmx = (t.clientX / window.innerWidth) * 2 - 1;
      tmy = (t.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight || 1;
      root.style.setProperty("--sy", String(window.scrollY));
      root.style.setProperty("--syn", (window.scrollY / max).toFixed(4));
    };

    const loop = () => {
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;
      root.style.setProperty("--mx", mx.toFixed(4));
      root.style.setProperty("--my", my.toFixed(4));
      raf = requestAnimationFrame(loop);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!reduce) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("touchmove", onTouch, { passive: true });
      loop();
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
