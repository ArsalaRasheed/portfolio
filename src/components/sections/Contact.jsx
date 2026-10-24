import { useState } from 'react';
import { site } from '../../data/site.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button.jsx';

const initialForm = { name: '', email: '', projectType: '', message: '' };

export default function Contact() {
  const { contact } = site;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [sending, setSending] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ state: 'idle', message: '' });

    const subject = `Project enquiry: ${form.projectType || 'General'} — ${form.name}`;
    const body = `Hi Hina,\n\n${form.message}\n\n— ${form.name}\n${form.email}\nProject type: ${form.projectType || 'Not specified'}`;

    try {
      if (contact.formEndpoint) {
        // Real form backend (Formspree, Web3Forms, Netlify Forms…)
        const res = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus({ state: 'success', message: 'Thanks! Your message is on its way — I reply within 24 hours.' });
        setForm(initialForm);
      } else {
        // No backend configured → open the visitor’s email client
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus({
          state: 'success',
          message: 'Your email app should have opened with the message ready to send. If it didn’t, just email me directly.',
        });
      }
    } catch {
      setStatus({
        state: 'error',
        message: 'Something went wrong. Please email me directly at ' + contact.email,
      });
    } finally {
      setSending(false);
    }
  };

  const field =
    'w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-600/30';

  return (
    <section id="contact" className="section scroll-mt-24 border-t border-border bg-surface">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ---------- Left: details ---------- */}
          <div>
            <SectionHeading number="08" eyebrow={contact.eyebrow} title={contact.title} description={contact.subtitle} />

            <Reveal delay={0.1} className="mt-8">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                {contact.availability.badge}
              </div>
              <p className="mt-3 text-sm text-muted">{contact.availability.note}</p>
            </Reveal>

            <Reveal delay={0.16} className="mt-8">
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-4 rounded-lg border border-border bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400 hover:shadow-lift"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-600/10 text-accent-700 dark:text-accent-300">
                      <Icon name="mail" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Email</span>
                      <span className="block truncate text-sm font-bold group-hover:text-accent-700 dark:group-hover:text-accent-300">
                        {contact.email}
                      </span>
                    </span>
                    <Icon name="arrow-up-right" className="ml-auto h-4 w-4 text-muted" />
                  </a>
                </li>
                <li>
                  {/* TODO: replace with your real LinkedIn URL (src/data/site.js) */}
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-border bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400 hover:shadow-lift"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-600/10 text-accent-700 dark:text-accent-300">
                      <Icon name="linkedin" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">LinkedIn</span>
                      <span className="block truncate text-sm font-bold group-hover:text-accent-700 dark:group-hover:text-accent-300">
                        Connect on LinkedIn
                      </span>
                    </span>
                    <Icon name="arrow-up-right" className="ml-auto h-4 w-4 text-muted" />
                  </a>
                </li>
                <li>
                  {/* TODO: replace with your real WhatsApp number (src/data/site.js) */}
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-border bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400 hover:shadow-lift"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon name="whatsapp" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">WhatsApp</span>
                      <span className="block truncate text-sm font-bold group-hover:text-accent-700 dark:group-hover:text-accent-300">
                        {contact.whatsappLabel}
                      </span>
                    </span>
                    <Icon name="arrow-up-right" className="ml-auto h-4 w-4 text-muted" />
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* ---------- Right: form ---------- */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-bg p-6 sm:p-8" noValidate={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Jane Doe"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@business.com"
                    className={field}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="projectType" className="mb-1.5 block text-sm font-bold">
                  What do you need?
                </label>
                <select id="projectType" name="projectType" value={form.projectType} onChange={update} className={field}>
                  <option value="">Choose a service…</option>
                  {contact.projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={update}
                  placeholder="What does your business do? What do you need the website or store to achieve?"
                  className={`${field} resize-y`}
                />
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full" disabled={sending} iconAfter="send">
                {sending ? 'Sending…' : 'Send message'}
              </Button>

              <p aria-live="polite" className="mt-4 text-center text-sm">
                {status.message && (
                  <span
                    className={
                      status.state === 'error'
                        ? 'font-medium text-red-600 dark:text-red-400'
                        : 'font-medium text-emerald-600 dark:text-emerald-400'
                    }
                  >
                    {status.message}
                  </span>
                )}
                {!status.message && <span className="text-muted">I usually reply within 24 hours.</span>}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
