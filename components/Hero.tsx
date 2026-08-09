"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-blue [background-size:60px_60px] [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]" />

      <div className="container-x grid items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-28">
        {/* Copy */}
        <div>
          <span className="kicker">
            <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-electric-bright shadow-neon" />
            {t.hero.badge}
          </span>
          <h1 className="heading mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            {t.hero.title}
            <br />
            <span className="gradient-text neon-text">{t.hero.titleAccent}</span>
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

        {/* Image */}
        <div className="relative">
          <div className="animate-floaty">
            <div className="relative overflow-hidden rounded-3xl border border-electric/25 shadow-neon">
              <Image
                src="/images/orbital.jpg"
                alt="Space DC — orbital data center"
                width={1456}
                height={1092}
                priority
                className="h-auto w-full object-cover"
              />
              {/* scanline sweep */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 h-24 animate-scan bg-gradient-to-b from-transparent via-electric/10 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
          {/* floating tag */}
          <div className="glass absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
            <span className="h-2.5 w-2.5 animate-pulseGlow rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <div>
              <div className="text-xs font-semibold text-white">System status</div>
              <div className="text-[11px] text-white/50">Online · Solar 100%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
