"use client";

import { useRef, ReactNode } from "react";

/**
 * 3D tilt-on-hover following the cursor. Writes --rx/--ry consumed by .tilt.
 */
export default function Tilt({
  children,
  className = "",
  max = 12,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${(px * 2 * max).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(py * -2 * max).toFixed(2)}deg`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={`tilt ${className}`}>
      {children}
    </div>
  );
}
