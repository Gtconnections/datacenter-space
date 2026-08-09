"use client";

import Image from "next/image";

/**
 * Fixed, full-viewport cosmic backdrop: rotating aurora, two parallax nebula
 * layers and drifting planets. Everything is pointer-events-none and sits
 * behind the content. Parallax = wrapper reads --mx/--my/--sy; float = child.
 */
export default function CosmicBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* deep base tint */}
      <div className="absolute inset-0 bg-space-void" />

      {/* rotating aurora core */}
      <div
        className="absolute left-1/2 top-[-30%] h-[90vmax] w-[90vmax] -translate-x-1/2 rounded-full opacity-20 blur-3xl animate-aurora"
        style={{
          background:
            "conic-gradient(from 0deg, #2f7bff, #3fe0ff, #9d5bff, #2f7bff, #3fe0ff, #2f7bff)",
        }}
      />

      {/* nebula layer 1 (parallax wrapper -> drifting child) */}
      <div
        className="absolute inset-0"
        style={{
          transform:
            "translate3d(calc(var(--mx) * -8px), calc(var(--my) * -8px + var(--sy) * 0.02px), 0)",
        }}
      >
        <div className="absolute inset-0 animate-drift opacity-50">
          <Image src="/images/nebula-1.jpg" alt="" fill sizes="100vw" priority className="object-cover" />
        </div>
      </div>

      {/* nebula layer 2 (screen blend, opposite parallax) */}
      <div
        className="absolute inset-0"
        style={{
          transform:
            "translate3d(calc(var(--mx) * 12px), calc(var(--my) * 10px - var(--sy) * 0.03px), 0)",
        }}
      >
        <div className="absolute inset-0 mix-blend-screen opacity-30 animate-hue">
          <Image src="/images/nebula-2.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
      </div>

      {/* drifting planet — top right */}
      <div
        className="absolute right-[-8%] top-[6%]"
        style={{
          transform:
            "translate3d(calc(var(--mx) * -24px), calc(var(--my) * -20px + var(--sy) * 0.06px), 0)",
        }}
      >
        <div className="animate-floaty2">
          <Image
            src="/images/planet-blue.png"
            alt=""
            width={520}
            height={520}
            className="w-[30vw] max-w-[460px] opacity-90 drop-shadow-[0_0_60px_rgba(63,224,255,0.3)]"
          />
        </div>
      </div>

      {/* drifting planet — bottom left */}
      <div
        className="absolute left-[-10%] bottom-[4%]"
        style={{
          transform:
            "translate3d(calc(var(--mx) * 26px), calc(var(--my) * 20px - var(--sy) * 0.08px), 0)",
        }}
      >
        <div className="animate-floaty3">
          <Image
            src="/images/planet-violet.png"
            alt=""
            width={380}
            height={380}
            className="w-[22vw] max-w-[340px] opacity-85 drop-shadow-[0_0_60px_rgba(157,91,255,0.3)]"
          />
        </div>
      </div>

      {/* vignette so content stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_40%,transparent_35%,rgba(3,6,15,0.55)_80%,rgba(3,6,15,0.9)_100%)]" />
    </div>
  );
}
