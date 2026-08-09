"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";

/* ---------- shared icons ---------- */
const iconClass = "h-6 w-6";
const Icons = {
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" strokeLinecap="round" />
    </svg>
  ),
  snow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass}>
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" strokeLinecap="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" strokeLinecap="round" />
    </svg>
  ),
  panel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass}>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M3 8h18M3 12h18M9 4v12M15 4v12M12 16v4M8 20h8" strokeLinecap="round" />
    </svg>
  ),
  signal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass}>
      <path d="M5 12a7 7 0 0 1 14 0M8.5 12a3.5 3.5 0 0 1 7 0" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 13.5V21" strokeLinecap="round" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClass}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9zM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" strokeLinecap="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function SectionHeader({
  kicker,
  title,
  body,
  center = false,
}: {
  kicker: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="kicker">
        <span className="h-px w-6 bg-electric-bright" />
        {kicker}
      </span>
      <h2 className="heading mt-4 text-3xl sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-white/65 leading-relaxed">{body}</p>}
    </div>
  );
}

/* ================= VISION ================= */
export function Vision() {
  const { t } = useLang();
  const points = [
    { icon: Icons.sun, title: t.vision.point1Title, body: t.vision.point1Body },
    { icon: Icons.snow, title: t.vision.point2Title, body: t.vision.point2Body },
    { icon: Icons.globe, title: t.vision.point3Title, body: t.vision.point3Body },
  ];
  return (
    <section id="vision" className="relative py-24">
      {/* floating planet accent */}
      <div
        className="pointer-events-none absolute -right-16 top-10 -z-0 hidden lg:block"
        style={{ transform: "translateY(calc(var(--syn) * -45px))" }}
      >
        <div className="animate-floaty3 opacity-60">
          <Image
            src="/images/planet-violet.png"
            alt=""
            width={240}
            height={240}
            className="drop-shadow-[0_0_50px_rgba(157,91,255,0.35)]"
          />
        </div>
      </div>

      <div className="container-x relative">
        <Reveal>
          <SectionHeader kicker={t.vision.kicker} title={t.vision.title} body={t.vision.body} />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <Tilt max={9}>
                <div className="card h-full">
                  <div className="mb-4 inline-flex rounded-xl border border-electric/30 bg-electric/10 p-3 text-electric-bright shadow-neon animate-breathe">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TECH ================= */
export function Tech() {
  const { t } = useLang();
  const feats = [
    { icon: Icons.server, title: t.tech.f1Title, body: t.tech.f1Body },
    { icon: Icons.panel, title: t.tech.f2Title, body: t.tech.f2Body },
    { icon: Icons.signal, title: t.tech.f3Title, body: t.tech.f3Body },
    { icon: Icons.cpu, title: t.tech.f4Title, body: t.tech.f4Body },
  ];
  return (
    <section id="tech" className="relative py-24">
      <div className="hline mb-24" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          {/* glow + rotating ring behind image */}
          <div className="pointer-events-none absolute -inset-6 -z-0 rounded-full bg-electric/20 blur-3xl animate-breathe" />
          <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
            <div className="animate-spin-rev h-[120%] w-[120%] rounded-full border border-cyan-neon/10" />
          </div>
          <Tilt max={9} className="animate-floaty3">
            <div className="relative overflow-hidden rounded-3xl border border-electric/25 shadow-neon">
              <Image
                src="/images/helios.jpg"
                alt="Space DC — terawatt-class orbital facility"
                width={1500}
                height={1000}
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-space-void/60 to-transparent" />
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 h-24 animate-scan bg-gradient-to-b from-transparent via-cyan-neon/10 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </Tilt>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeader kicker={t.tech.kicker} title={t.tech.title} body={t.tech.body} />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {feats.map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-electric/30 bg-electric/10 text-electric-bright">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-white">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= HOW IT WORKS ================= */
export function How() {
  const { t } = useLang();
  const steps = [
    { title: t.how.step1Title, body: t.how.step1Body },
    { title: t.how.step2Title, body: t.how.step2Body },
    { title: t.how.step3Title, body: t.how.step3Body },
    { title: t.how.step4Title, body: t.how.step4Body },
  ];
  return (
    <section id="how" className="relative py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeader center kicker={t.how.kicker} title={t.how.title} />
        </Reveal>
        <div className="relative mt-16">
          {/* connecting line + traveling light */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent lg:block">
            <span className="animate-travel absolute -top-[3px] h-1.5 w-1.5 rounded-full bg-cyan-neon shadow-neon-cyan" />
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="relative text-center lg:text-left">
                  <div className="mx-auto lg:mx-0 flex h-12 w-12 items-center justify-center rounded-full border border-electric/40 bg-space-void font-display text-lg font-semibold text-electric-bright shadow-neon animate-breathe">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TOKENIZATION ================= */
export function Tokenization() {
  const { t } = useLang();
  const points = [t.token.point1, t.token.point2, t.token.point3];
  return (
    <section id="token" className="relative py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-electric/20 bg-space-panel/50 p-8 sm:p-12 lg:p-16">
          {/* nebula texture inside the panel */}
          <div className="pointer-events-none absolute inset-0 -z-0 opacity-40 mix-blend-screen">
            <Image src="/images/nebula-2.jpg" alt="" fill sizes="100vw" className="animate-hue object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-grid-blue [background-size:40px_40px] opacity-40 [mask-image:radial-gradient(60%_60%_at_80%_20%,black,transparent)]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-electric/20 blur-3xl animate-breathe" />
          {/* planet accent (kept fully inside the panel so it never looks cut) */}
          <div className="pointer-events-none absolute bottom-6 right-6 hidden opacity-70 md:block">
            <div className="animate-floaty2">
              <Image
                src="/images/planet-blue.png"
                alt=""
                width={150}
                height={150}
                className="drop-shadow-[0_0_50px_rgba(63,224,255,0.4)]"
              />
            </div>
          </div>
          <div className="relative max-w-2xl">
            <Reveal>
              <SectionHeader kicker={t.token.kicker} title={t.token.title} body={t.token.body} />
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-8 space-y-3">
                {points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/75">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-electric/20 text-electric-bright">
                      {Icons.check}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STATS ================= */
export function Stats() {
  const { t } = useLang();
  const stats = [
    { v: t.stats.s1Value, l: t.stats.s1Label },
    { v: t.stats.s2Value, l: t.stats.s2Label },
    { v: t.stats.s3Value, l: t.stats.s3Label },
    { v: t.stats.s4Value, l: t.stats.s4Label },
  ];
  return (
    <section className="relative py-20">
      <div className="container-x">
        <Reveal>
          <h2 className="heading text-center text-2xl sm:text-3xl">{t.stats.title}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <Tilt max={12}>
                <div className="glass group rounded-2xl p-6 text-center transition duration-300 hover:border-electric-bright/60 hover:shadow-neon">
                  <div className="gradient-anim font-display text-4xl font-bold transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                    {s.v}
                  </div>
                  <div className="mt-2 text-xs text-white/55 sm:text-sm">{s.l}</div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
