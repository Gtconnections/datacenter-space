"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.name?.trim()) e.name = t.contact.required;
    if (!data.email?.trim()) e.email = t.contact.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = t.contact.invalidEmail;
    if (!data.message?.trim()) e.message = t.contact.required;
    return e;
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="hline mb-24" />
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="kicker">
            <span className="h-px w-6 bg-electric-bright" />
            {t.contact.kicker}
          </span>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 max-w-md text-white/65 leading-relaxed">{t.contact.body}</p>

          <div className="mt-10 space-y-4">
            <div className="glass flex items-center gap-3 rounded-xl px-4 py-3">
              <svg className="h-5 w-5 text-electric-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a href="mailto:martin@gtconnections.com" className="text-sm text-white/80 hover:text-electric-bright">
                martin@gtconnections.com
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="name">{t.contact.name} *</label>
                <input id="name" name="name" className="field" autoComplete="name" />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="label" htmlFor="email">{t.contact.email} *</label>
                <input id="email" name="email" type="email" className="field" autoComplete="email" />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label className="label" htmlFor="company">{t.contact.company}</label>
                <input id="company" name="company" className="field" autoComplete="organization" />
              </div>
              <div>
                <label className="label" htmlFor="phone">{t.contact.phone}</label>
                <input id="phone" name="phone" type="tel" className="field" autoComplete="tel" />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="interest">{t.contact.interest}</label>
                <select id="interest" name="interest" defaultValue="" className="field">
                  <option value="" disabled>
                    {t.contact.interestPlaceholder}
                  </option>
                  {t.contact.interestOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="message">{t.contact.message} *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="field resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
            </div>

            {/* honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <button type="submit" disabled={status === "sending"} className="btn-primary mt-6 w-full disabled:opacity-60">
              {status === "sending" ? t.contact.sending : t.contact.submit}
            </button>

            {status === "success" && (
              <p className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                {t.contact.success}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {t.contact.error}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
