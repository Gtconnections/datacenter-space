"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";
import Tilt from "@/components/Tilt";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-blue [background-size:60px_60px] [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]" />

      <div className="container-x grid items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-28">
        {/* Copy */}
        <div style={{ transform: "translateY(calc(var(--syn) * -14px))" }}>
          <span className="kicker">
            <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-electric-bright shadow-neon" />
            {t.hero.badge}
          </span>
          <h1 className="heading mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            {t.hero.title}
            <br />
            <span className="gradient-anim neon-text">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#vision" className="btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* mini stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              { v: t.hero.stat1Value, l: t.hero.stat1Label },
              { v: t.hero.stat2Value, l: t.hero.stat2Label },
              { v: t.hero.stat3Value, l: t.hero.stat3Label },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-xl font-semibold text-electric-bright sm:text-2xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating orbital data center (frameless, transparent PNG) */}
        <div className="relative" style={{ transform: "translateY(calc(var(--syn) * 12px))" }}>
          {/* soft glow behind so it reads as floating */}
          <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
            <div className="h-[68%] w-[68%] rounded-full bg-electric/25 blur-3xl animate-breathe" />
          </div>
          <Tilt max={8} className="animate-floaty2">
            <Image
              src="/images/orbital.png"
              alt="Space DC — orbital data center"
              width={1448}
              height={1086}
              priority
              className="h-auto w-full drop-shadow-[0_0_70px_rgba(63,224,255,0.4)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
