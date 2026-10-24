import { useEffect, useState } from 'react';

/**
 * ProjectArt — real screenshots first, CSS product mockups as fallback.
 *
 * SCREENSHOTS: your images live in src/assets/ and are imported in
 * src/data/content.js (art.image / art.imageMobile). You can also drop a PNG at
 * public/images/<slug>.png — it is probed automatically when no art.image is set.
 *
 * Props:
 *  - art:    { variant, colors, image, imageMobile, alt, cropBottom } from content.js
 *  - slug:   project slug (used to auto-find /images/<slug>.png)
 *  - mode:   'color' (final UI) | 'wireframe' (grey low-fi for before/after)
 *  - bare:   full-bleed (inside device frames) vs presented on a tinted board
 *  - mobile: render the phone layout — uses art.imageMobile, else the mockup
 */

const T = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/* ============================ DESKTOP MOCKUPS ============================ */

function ClassPilotMock({ a, lite }) {
  const row = (code, name, status, fee) => {
    const s = {
      Active: { bg: '#D1FAE5', fg: '#047857' },
      Upcoming: { bg: '#DBEAFE', fg: '#1D4ED8' },
    }[status];
    const f = {
      Paid: { bg: '#DBEAFE', fg: '#1D4ED8' },
      Due: { bg: '#FEF3C7', fg: '#B45309' },
      Overdue: { bg: '#FEE2E2', fg: '#B91C1C' },
    }[fee];
    return (
      <div className="flex items-center justify-between border-t border-slate-100 px-2.5 py-[5px]">
        <span className="truncate text-[8px] font-semibold text-slate-700"><span className="font-mono text-[7px] text-slate-400">{code}</span> {name}</span>
        <span className="rounded px-1.5 py-px text-[6.5px] font-bold" style={{ background: s.bg, color: s.fg }}>{status}</span>
        <span className="rounded px-1.5 py-px text-[6.5px] font-bold" style={{ background: f.bg, color: f.fg }}>{fee}</span>
      </div>
    );
  };
  return (
    <div className="flex h-full bg-white font-sans">
      {!lite && (
        <aside className="flex w-[20%] shrink-0 flex-col gap-1 border-r border-slate-100 bg-slate-50/70 p-2">
          <div className="mb-1.5 flex items-center gap-1.5 px-1">
            <span className="h-3 w-3 rounded" style={{ background: a }} />
            <span className="text-[7.5px] font-extrabold tracking-tight text-slate-800">ClassPilot</span>
          </div>
          {['Dashboard', 'Students', 'Batches', 'Attendance', 'Fees', 'Exams'].map((n, i) => (
            <div key={n} className="rounded px-1.5 py-1 text-[7px] font-semibold" style={i === 0 ? { background: T(a, 0.12), color: a } : { color: '#64748B' }}>{n}</div>
          ))}
          <div className="mt-auto flex items-center gap-1.5 border-t border-slate-100 px-1 pt-1.5">
            <span className="grid h-4 w-4 place-items-center rounded-full text-[5px] font-bold text-white" style={{ background: a }}>FA</span>
            <span className="text-[6.5px] font-semibold text-slate-600">Fatima A.</span>
          </div>
        </aside>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
          <div>
            <p className="text-[9px] font-extrabold tracking-tight text-slate-800">Institute overview</p>
            <p className="text-[6.5px] text-slate-400">Tuesday, 14 October · 36 active batches</p>
          </div>
          <span className="rounded px-2 py-1 text-[7px] font-bold text-white" style={{ background: a }}>New admission</span>
        </header>
        <div className="grid grid-cols-3 gap-2 px-3 py-2">
          {[['Students', '1,248'], ['Batches', '36'], ['Attendance', '94%']].map(([k, v]) => (
            <div key={k} className="rounded-md border border-slate-100 bg-slate-50/60 px-2 py-1.5">
              <p className="text-[6px] font-semibold uppercase tracking-wider text-slate-400">{k}</p>
              <p className="mt-0.5 text-[10px] font-extrabold tracking-tight text-slate-800">{v}</p>
            </div>
          ))}
        </div>
        <div className="min-h-0 flex-1 px-3 pb-3">
          <div className="flex items-center justify-between pb-1 text-[6px] font-bold uppercase tracking-wider text-slate-400">
            <span>Batch</span><span>Status</span><span>Fee status</span>
          </div>
          <div className="overflow-hidden rounded-md border border-slate-100">
            {row('WD-01', 'Web Development', 'Active', 'Paid')}
            {row('DM-01', 'Digital Marketing', 'Active', 'Due')}
            {row('DS-01', 'Data Science', 'Active', 'Paid')}
            {row('GD-01', 'Graphic Design', 'Upcoming', 'Due')}
            {row('AI-01', 'AI Fundamentals', 'Upcoming', 'Overdue')}
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingMock({ a }) {
  return (
    <div className="flex h-full flex-col font-sans" style={{ background: '#0B1F3A' }}>
      <header className="flex items-center justify-between px-4 py-2">
        <span className="font-display text-[9px] font-semibold tracking-[0.2em] text-white">AL-KHAN PAINTS</span>
        <div className="flex items-center gap-2.5 text-[6.5px] font-semibold text-white/70">
          <span>Products</span><span>Brands</span><span>Bulk Orders</span><span>Contact</span>
          <span className="rounded-full px-1.5 py-0.5 text-[6px] font-bold text-[#0B1F3A]" style={{ background: a }}>WhatsApp</span>
        </div>
      </header>
      <div className="flex flex-1 flex-col justify-center px-6">
        <span className="text-[6px] font-bold uppercase tracking-[0.25em]" style={{ color: a }}>Paint retailer &amp; wholesaler — Rawalpindi</span>
        <p className="mt-2 font-display text-[16px] font-semibold leading-[1.05] text-white">Premium Paints.<br />Trusted Brands.<br /><span style={{ color: a }}>Better Bulk Buying.</span></p>
        <p className="mt-1.5 max-w-[58%] text-[6.5px] leading-relaxed text-white/60">From 2K refinishing systems to decorative, deco and enamel paints — multiple trusted brands, one place.</p>
        <div className="mt-2.5 flex gap-2">
          <span className="rounded-full bg-white px-2.5 py-1 text-[6.5px] font-bold text-[#0B1F3A]">Get Bulk Order Quote</span>
          <span className="rounded-full border border-white/30 px-2.5 py-1 text-[6.5px] font-bold text-white">Explore Paint Range</span>
        </div>
      </div>
      <div className="grid grid-cols-4 border-t border-white/10 px-4 py-1.5">
        {[['40+', 'years'], ['9', 'brands'], ['11', 'categories'], ['Bulk', 'supply']].map(([v, k]) => (
          <div key={k}>
            <p className="text-[8px] font-extrabold text-white">{v}</p>
            <p className="text-[5px] text-white/50">{k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoreMock({ a }) {
  const items = [
    ['2K Automotive Paint', 'PKR 4,850', 'New'],
    ['Industrial Primer — 4L', 'PKR 2,950', '-20%'],
    ['Interior Emulsion', 'PKR 3,200', ''],
    ['CRONO Clear Coat', 'PKR 5,400', 'New'],
  ];
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <div className="px-4 py-1 text-center text-[6px] font-bold uppercase tracking-[0.15em] text-white" style={{ background: a }}>
        Colours for a brighter tomorrow · COD available
      </div>
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-2">
        <span className="font-display text-[10px] font-semibold tracking-[0.15em] text-slate-900">AL-KHAN PAINTS</span>
        <div className="flex items-center gap-2.5 text-[6.5px] font-semibold text-slate-500">
          <span>Home</span><span>Shop</span><span>Brands</span><span>2K Paints</span>
          <span className="relative text-slate-800">Cart<span className="absolute -right-2 -top-1 grid h-2.5 w-2.5 place-items-center rounded-full text-[5px] text-white" style={{ background: a }}>2</span></span>
        </div>
      </header>
      <div className="flex items-center gap-1.5 px-3 pt-2 text-[6px] font-bold uppercase tracking-wider">
        {['Automotive', 'Industrial', 'Decorative'].map((c, i) => (
          <span key={c} className="rounded-full px-1.5 py-0.5" style={i === 0 ? { background: a, color: '#fff' } : { background: '#F1F5F9', color: '#64748B' }}>{c}</span>
        ))}
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-4 gap-2 p-3">
        {items.map(([name, price, badge]) => (
          <div key={name} className="flex flex-col">
            <div className="relative h-full min-h-0 rounded-sm" style={{ background: `linear-gradient(150deg, ${T(a, 0.18)}, ${T(a, 0.05)})` }}>
              {badge && <span className="absolute left-1 top-1 rounded-sm px-1 py-px text-[5.5px] font-bold text-white" style={{ background: badge === 'New' ? a : '#DC2626' }}>{badge}</span>}
            </div>
            <p className="mt-1 truncate text-[7px] font-semibold text-slate-700">{name}</p>
            <p className="text-[7px] font-bold" style={{ color: a }}>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatbotMock({ a }) {
  const bubble = (who, text) => (
    <div className={`flex ${who === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className="max-w-[75%] rounded-lg px-2 py-1.5 text-[7.5px] leading-relaxed" style={who === 'user' ? { background: a, color: '#fff' } : { background: '#F1F5F9', color: '#334155' }}>{text}</div>
    </div>
  );
  return (
    <div className="flex h-full bg-slate-50 font-sans">
      <div className="hidden flex-1 flex-col justify-end gap-1.5 p-4 sm:flex">
        <div className="h-2 w-2/5 rounded bg-slate-200" />
        <div className="h-1.5 w-1/3 rounded bg-slate-100" />
        <div className="h-16 w-full rounded-md bg-white ring-1 ring-slate-100" />
        <p className="text-[6px] text-slate-300">— ask anything, anywhere —</p>
      </div>
      <div className="flex w-full flex-col border-l border-slate-100 bg-white sm:w-[46%]">
        <header className="flex items-center gap-1.5 border-b border-slate-100 px-2.5 py-1.5">
          <span className="h-3.5 w-3.5 rounded-full" style={{ background: a }} />
          <div>
            <p className="text-[7.5px] font-bold text-slate-800">Gemini Chat Assistant</p>
            <p className="flex items-center gap-1 text-[6px] text-slate-400"><span className="h-1 w-1 rounded-full bg-emerald-500" />Online now</p>
          </div>
        </header>
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 p-2.5">
          {bubble('bot', 'Hi! What would you like to know today?')}
          {bubble('user', 'How do I become a professional app developer?')}
          {bubble('bot', 'Great goal. Start with one language — Dart or JavaScript — then build 3 small apps and publish them. After that, learn state management and APIs.')}
          {bubble('user', 'And game development?')}
          <div className="flex gap-1 pt-0.5">
            {['Learning path', 'Best resources'].map((q) => (
              <span key={q} className="rounded-full border px-1.5 py-0.5 text-[6px] font-semibold" style={{ borderColor: T(a, 0.35), color: a }}>{q}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5 border-t border-slate-100 px-2.5 py-1.5">
          <span className="flex-1 text-[6.5px] text-slate-300">Ask me anything…</span>
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full text-[6px] text-white" style={{ background: a }}>→</span>
        </div>
      </div>
    </div>
  );
}

function TouristoMock({ a }) {
  const exp = (title, guide, price, rating) => (
    <div className="flex gap-1.5 rounded-md border border-slate-100 p-1.5">
      <div className="w-[28%] shrink-0 rounded-sm" style={{ background: `linear-gradient(140deg, ${T(a, 0.35)}, ${T(a, 0.1)})` }} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[7.5px] font-bold text-slate-800">{title}</p>
        <p className="text-[6px] text-slate-400">{guide} · <span style={{ color: a }}>Verified</span></p>
        <div className="mt-0.5 flex items-center justify-between">
          <span className="text-[6.5px] font-extrabold text-slate-700">{price}</span>
          <span className="text-[6px] font-bold text-amber-500">★ {rating}</span>
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <header className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <span className="grid h-4 w-4 place-items-center rounded text-[7px] font-extrabold text-white" style={{ background: a }}>T</span>
        <span className="font-display text-[9px] font-semibold italic text-slate-800">Touristo</span>
        <div className="flex flex-1 items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-[6.5px] text-slate-400">
          <span className="font-semibold text-slate-600">Search destinations, packages, or experiences</span>
        </div>
        <span className="rounded-full px-2 py-0.5 text-[6.5px] font-bold" style={{ background: T(a, 0.1), color: a }}>✦ AI Planner</span>
        <span className="rounded px-1.5 py-0.5 text-[6px] font-extrabold text-white" style={{ background: '#D64545' }}>SOS</span>
      </header>
      <div className="flex min-h-0 flex-1 gap-2 p-3">
        <div className="flex w-[30%] shrink-0 flex-col gap-1.5">
          <p className="text-[6px] font-bold uppercase tracking-wider text-slate-400">Your AI plan</p>
          {[['Day 1', 'Attabad Lake · Eagle’s Nest'], ['Day 2', 'Baltit Fort · local food walk'], ['Day 3', 'Passu Cones · glacier trek']].map(([d, t], i) => (
            <div key={d} className="rounded-md border p-1.5" style={i === 0 ? { borderColor: T(a, 0.4), background: T(a, 0.05) } : { borderColor: '#F1F5F9' }}>
              <p className="text-[6px] font-bold" style={{ color: a }}>{d}</p>
              <p className="text-[6.5px] leading-tight text-slate-600">{t}</p>
            </div>
          ))}
          <div className="mt-auto rounded-md bg-slate-50 p-1.5">
            <div className="flex justify-between text-[6px] font-semibold text-slate-500"><span>Budget</span><span>PKR 42k / 50k</span></div>
            <div className="mt-1 h-1 rounded-full bg-slate-200"><div className="h-full w-[84%] rounded-full" style={{ background: a }} /></div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <p className="text-[6px] font-bold uppercase tracking-wider text-slate-400">Popular destinations · trusted operators</p>
          {exp('Hunza · Skardu 5-day journey', 'North Routes Co.', 'PKR 42,000', '4.9')}
          {exp('Fairy Meadows trek', 'Balti Guides', 'PKR 18,500', '4.8')}
          {exp('Swat & Malam Jabba', 'Khyber Tours', 'PKR 24,900', '4.7')}
          {exp('Lahore heritage walk', 'Walled City Walks', 'PKR 3,100', '5.0')}
        </div>
      </div>
    </div>
  );
}

/* ============================ MOBILE MOCKUPS ============================= */

function mobileShell(a, title, children) {
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <header className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
        <span className="text-[8px] font-extrabold tracking-tight text-slate-800">{title}</span>
        <span className="h-3 w-3 rounded-full" style={{ background: a }} />
      </header>
      <div className="flex min-h-0 flex-1 flex-col gap-1.5 p-2.5">{children}</div>
    </div>
  );
}

function ClassPilotMobile({ a }) {
  const chip = (name, on) => (
    <div className="flex items-center justify-between rounded-md border px-2 py-1.5" style={on ? { borderColor: T(a, 0.3), background: T(a, 0.06) } : { borderColor: '#FEE2E2', background: '#FEF2F2' }}>
      <span className="text-[8px] font-semibold text-slate-700">{name}</span>
      <span className="rounded-full px-1.5 py-0.5 text-[6px] font-bold text-white" style={{ background: on ? a : '#DC2626' }}>{on ? 'Present' : 'Absent'}</span>
    </div>
  );
  return mobileShell(a, 'WD-01 · Web Development', (
    <>
      <p className="text-[6.5px] text-slate-400">Attendance · tap to toggle · saved automatically</p>
      {chip('Ali Hassan', true)}{chip('Fatima Noor', true)}{chip('Zain Ahmed', false)}{chip('Ayesha Malik', true)}{chip('Usman Tariq', true)}
      <span className="mt-auto rounded-md py-1.5 text-center text-[8px] font-bold text-white" style={{ background: a }}>Save · 34 present</span>
    </>
  ));
}

function LandingMobile({ a }) {
  return (
    <div className="flex h-full flex-col font-sans" style={{ background: '#0B1F3A' }}>
      <div className="flex items-center justify-between px-3 py-2">
        <span className="font-display text-[8px] font-semibold tracking-[0.15em] text-white">AL-KHAN PAINTS</span>
        <span className="rounded-full px-1.5 py-0.5 text-[5.5px] font-bold text-[#0B1F3A]" style={{ background: a }}>WhatsApp</span>
      </div>
      <div className="flex flex-1 flex-col justify-center px-3.5">
        <span className="text-[5.5px] font-bold uppercase tracking-[0.25em]" style={{ color: a }}>Paint retailer — Rawalpindi</span>
        <p className="mt-1.5 font-display text-[14px] font-semibold leading-[1.08] text-white">Premium Paints.<br />Trusted Brands.<br /><span style={{ color: a }}>Better Bulk Buying.</span></p>
        <p className="mt-1.5 text-[6.5px] leading-relaxed text-white/60">2K refinishing, decorative, deco and enamel paints — multiple trusted brands in one place.</p>
        <span className="mt-2.5 w-full rounded-full bg-white py-1.5 text-center text-[7px] font-bold text-[#0B1F3A]">Get Bulk Order Quote</span>
        <span className="mt-1.5 w-full rounded-full border border-white/30 py-1.5 text-center text-[7px] font-bold text-white">Explore Paint Range</span>
      </div>
      <div className="grid grid-cols-4 border-t border-white/10 px-3 py-1.5">
        {[['40+', 'years'], ['9', 'brands'], ['11', 'cats'], ['Bulk', 'supply']].map(([v, k]) => (
          <div key={k}>
            <p className="text-[7px] font-extrabold text-white">{v}</p>
            <p className="text-[4.5px] text-white/50">{k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoreMobile({ a }) {
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <div className="py-1 text-center text-[5.5px] font-bold uppercase tracking-[0.15em] text-white" style={{ background: a }}>Colours for a brighter tomorrow</div>
      <div className="border-b border-slate-100 px-3 py-1.5 text-center font-display text-[8px] font-semibold tracking-[0.15em] text-slate-900">AL-KHAN PAINTS</div>
      <div className="mx-2.5 mt-2 aspect-square rounded-md" style={{ background: `linear-gradient(150deg, ${T(a, 0.25)}, ${T(a, 0.06)})` }} />
      <div className="px-3">
        <p className="mt-2 text-[8.5px] font-bold text-slate-800">2K Automotive Paint — 1L</p>
        <p className="text-[8.5px] font-extrabold" style={{ color: a }}>PKR 4,850</p>
        <p className="mt-0.5 text-[6px] text-slate-400">Colours: White · Black · Silver · Custom mix</p>
        <span className="mt-2 block rounded-md py-1.5 text-center text-[8px] font-bold text-white" style={{ background: a }}>Add to cart</span>
        <span className="mt-1.5 block rounded-md border py-1.5 text-center text-[8px] font-bold" style={{ borderColor: T(a, 0.4), color: a }}>Order on WhatsApp</span>
      </div>
    </div>
  );
}

function ChatbotMobile({ a }) {
  const bubble = (who, text) => (
    <div className={`flex ${who === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className="max-w-[80%] rounded-lg px-2 py-1.5 text-[8px] leading-relaxed" style={who === 'user' ? { background: a, color: '#fff' } : { background: '#F1F5F9', color: '#334155' }}>{text}</div>
    </div>
  );
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <header className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
        <span className="h-3.5 w-3.5 rounded-full" style={{ background: a }} />
        <div><p className="text-[8px] font-bold text-slate-800">Gemini Chat Assistant</p><p className="text-[6px] text-slate-400">● Online now</p></div>
      </header>
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 p-2.5">
        {bubble('bot', 'Hi! What would you like to know?')}
        {bubble('user', 'How do I become a professional app developer?')}
        {bubble('bot', 'Start with one language, build 3 small apps, then learn state management and APIs.')}
        {bubble('user', 'And game development?')}
      </div>
      <div className="flex items-center gap-1.5 border-t border-slate-100 px-2.5 py-2">
        <span className="flex-1 text-[7px] text-slate-300">Ask me anything…</span>
        <span className="grid h-4 w-4 place-items-center rounded-full text-[7px] text-white" style={{ background: a }}>→</span>
      </div>
    </div>
  );
}

function TouristoMobile({ a }) {
  const nav = (icon, label, accent) => (
    <div className="flex flex-col items-center gap-0.5" style={accent ? { color: a } : { color: '#94A3B8' }}>
      <span className="text-[7px] leading-none">{icon}</span>
      <span className="text-[5px] font-semibold">{label}</span>
    </div>
  );
  return (
    <div className="flex h-full flex-col bg-white font-sans">
      <header className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="grid h-4 w-4 place-items-center rounded text-[7px] font-extrabold text-white" style={{ background: a }}>T</span>
          <div className="leading-none">
            <p className="text-[8px] font-extrabold tracking-tight text-slate-800">Touristo</p>
            <p className="text-[4.5px] font-bold uppercase tracking-[0.2em] text-slate-400">Explore Pakistan</p>
          </div>
        </div>
        <span className="rounded-full px-1.5 py-0.5 text-[5.5px] font-bold" style={{ background: T(a, 0.1), color: a }}>Sign in</span>
      </header>
      <div className="relative mx-2.5 overflow-hidden rounded-md px-2.5 py-3" style={{ background: `linear-gradient(150deg, ${a}, ${T(a, 0.65)})` }}>
        <p className="font-display text-[10px] font-semibold leading-tight text-white">Discover Pakistan,<br /><em className="not-italic text-amber-300">your way</em></p>
        <p className="mt-0.5 text-[5.5px] text-white/80">Curated journeys, guided by trusted local experts</p>
        <div className="mt-1.5 flex items-center gap-1 rounded-full bg-white px-2 py-1">
          <span className="text-[6px] text-slate-400">Search destinations, packages…</span>
        </div>
      </div>
      <div className="flex gap-1 px-2.5 pt-2">
        {['Destinations', 'Packages', 'Experiences', 'Guides'].map((c, i) => (
          <span key={c} className="rounded-full px-1.5 py-0.5 text-[5.5px] font-semibold" style={i === 0 ? { background: a, color: '#fff' } : { background: '#F1F5F9', color: '#64748B' }}>{c}</span>
        ))}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-1.5 px-2.5 pt-2">
        <p className="text-[6px] font-bold uppercase tracking-wider text-slate-400">Popular destinations</p>
        {[['Hunza · Skardu', 'North'], ['Fairy Meadows', 'Baltistan'], ['Swat Valley', 'KPK']].map(([t, r]) => (
          <div key={t} className="flex gap-1.5 rounded-md border border-slate-100 p-1.5">
            <div className="w-[28%] rounded-sm" style={{ background: `linear-gradient(140deg, ${T(a, 0.35)}, ${T(a, 0.1)})` }} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[7px] font-bold text-slate-800">{t}</p>
              <p className="text-[5.5px] text-slate-400">{r} · <span style={{ color: a }}>Verified guides</span></p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around border-t border-slate-100 px-1 py-1.5">
        {nav('⌂', 'Home', true)}
        {nav('⌕', 'Search')}
        {nav('✦', 'AI Planner')}
        <div className="flex flex-col items-center gap-0.5 text-[#D64545]">
          <span className="rounded px-1 py-px text-[5.5px] font-extrabold leading-none text-white" style={{ background: '#D64545' }}>SOS</span>
          <span className="text-[5px] font-semibold">SOS</span>
        </div>
        {nav('◐', 'Profile')}
      </div>
    </div>
  );
}

/* ============================== WIREFRAME =============================== */

function Wireframe({ mobile }) {
  const box = (className, label) => (
    <div className={`relative rounded-sm bg-slate-200/70 ${className}`}>
      {label && <span className="absolute -top-1 left-1 bg-slate-100 px-0.5 font-mono text-[5px] font-bold uppercase text-slate-400">{label}</span>}
    </div>
  );
  if (mobile) {
    return (
      <div className="flex h-full flex-col gap-1.5 bg-white p-3">
        {box('h-3 w-1/2', 'logo')}
        {box('mt-1 aspect-[4/3] w-full', 'hero img')}
        {box('h-3 w-3/4', 'h1')}
        {box('h-1.5 w-full', 'body')}
        {box('h-1.5 w-2/3', 'body')}
        {box('h-4 w-1/2', 'cta')}
        {box('h-6 w-full', 'list')}
        {box('h-6 w-full', 'list')}
      </div>
    );
  }
  return (
    <div className="flex h-full gap-2 bg-white p-3">
      <div className="flex w-[20%] shrink-0 flex-col gap-1.5">
        {box('h-3 w-3/4', 'logo')}
        {box('h-2 w-full')} {box('h-2 w-full')} {box('h-2 w-full')}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {box('h-4 w-full', 'topbar')}
        {box('mt-1 h-6 w-full', 'stats ×3')}
        <div className="grid min-h-0 flex-1 grid-cols-3 gap-1.5">
          {box('h-full w-full', 'table')}
          {box('h-full w-full', 'chart')}
          {box('h-full w-full', 'panel')}
        </div>
      </div>
    </div>
  );
}

/* ================================ SHELL ================================= */

const desktopMocks = {
  dashboard: ClassPilotMock,
  landing: LandingMock,
  store: StoreMock,
  chat: ChatbotMock,
  marketplace: TouristoMock,
};

const mobileMocks = {
  dashboard: ClassPilotMobile,
  landing: LandingMobile,
  store: StoreMobile,
  chat: ChatbotMobile,
  marketplace: TouristoMobile,
};

export default function ProjectArt({ art, slug, mode = 'color', bare = false, mobile = false, rounded = 'rounded-lg', className = '' }) {
  const [imgFailed, setImgFailed] = useState(false);

  // Phone frames prefer a real mobile screenshot; desktop prefers the wide one.
  // With no real image set, fall back to probing /images/<slug>.png.
  const src = mobile ? art?.imageMobile || '' : art?.image || (slug ? `/images/${slug}.png` : '');

  useEffect(() => setImgFailed(false), [src]);

  const accent = art?.colors?.[0] || '#0F7A5A';
  const tint = art?.colors?.[1] || '#DCEBE3';

  // Real screenshot wins (src/assets via content.js, or public/images/<slug>.png)
  if (mode === 'color' && src && !imgFailed) {
    // Crop-less presentation: the WHOLE screenshot stays visible (object-contain),
    // framed on a tinted board like a Figma canvas. Wide landing-page shots are
    // never sliced through the middle anymore.
    const img = (
      <img
        src={src}
        alt={art?.alt || ''}
        loading="lazy"
        decoding="async"
        onError={() => setImgFailed(true)}
        className="h-full w-full object-contain"
      />
    );

    // Device frames & hero: edge-to-edge on plain white
    if (bare || mobile) {
      return (
        <div className={`flex h-full w-full items-center justify-center overflow-hidden bg-white ${rounded} ${className}`}>
          {img}
        </div>
      );
    }

    // Presented on a soft tinted board — the way case-study shots sit in Figma
    return (
      <div
        className={`relative h-full w-full overflow-hidden ${rounded} ${className}`}
        style={{ background: `linear-gradient(160deg, ${tint} 0%, ${T(accent, 0.06)} 100%)` }}
      >
        <div className="paper-grain absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative flex h-full w-full items-center p-4 sm:p-6 lg:p-8">
          <div className="h-full w-full overflow-hidden rounded-md bg-white shadow-lift ring-1 ring-black/5">
            {img}
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'wireframe') {
    return (
      <div className={`h-full w-full overflow-hidden bg-slate-100 dark:bg-[#121614] ${rounded} ${className}`}>
        <Wireframe mobile={mobile} />
      </div>
    );
  }

  const Mock = (mobile ? mobileMocks : desktopMocks)[art?.variant] || ClassPilotMock;

  if (bare) {
    return (
      <div className={`h-full w-full overflow-hidden bg-white ${rounded} ${className}`}>
        <Mock a={accent} />
      </div>
    );
  }

  // Presented on a soft tinted board — the way case-study shots sit in Figma
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${rounded} ${className}`}
      style={{ background: `linear-gradient(160deg, ${tint} 0%, ${T(accent, 0.06)} 100%)` }}
    >
      <div className="paper-grain absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative h-full w-full p-4 sm:p-6 lg:p-8">
        <div className="h-full w-full overflow-hidden rounded-md bg-white shadow-lift ring-1 ring-black/5">
          <Mock a={accent} />
        </div>
      </div>
    </div>
  );
}
