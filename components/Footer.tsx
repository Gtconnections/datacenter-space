"use client";

import { useLang } from "@/components/LanguageProvider";
import Logo from "@/components/Logo";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const links = [
    { href: "#vision", label: t.nav.vision },
    { href: "#tech", label: t.nav.tech },
    { href: "#how", label: t.nav.how },
    { href: "#token", label: t.nav.token },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-space-void/60 py-14">
      <div className="container-x">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-lg font-semibold tracking-wide text-white">
                SPACE<span className="text-electric-bright"> DC</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">{t.footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/70">
                {t.footer.nav}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-white/50 transition hover:text-electric-bright">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/70">
                {t.footer.contact}
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="mailto:martin@gtconnections.com"
                    className="text-sm text-white/50 transition hover:text-electric-bright"
                  >
                    martin@gtconnections.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} Space DC. {t.footer.rights}
          </p>
          <p className="text-xs text-white/30">Powering the future in orbit.</p>
        </div>
      </div>
    </footer>
  );
}
