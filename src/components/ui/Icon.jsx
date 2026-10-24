/**
 * Minimal inline icon set (stroke-based, 24px grid).
 * Usage: <Icon name="arrow-right" className="h-5 w-5" />
 * Add new icons by extending the paths map below.
 */

const paths = {
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  'arrow-left': 'M19 12H5m6-6-6 6 6 6',
  'chevron-down': 'm6 9 6 6 6-6',
  'chevron-right': 'm9 6 6 6-6 6',
  sun: 'M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.42-1.42M4.92 19.08l1.42-1.42m0-11.32L4.92 4.92m14.14 14.14-1.42-1.42M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  moon: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  x: 'M6 6l12 12M18 6 6 18',
  check: 'm4.5 12.75 5 5 10-11.5',
  'external-link': 'M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  mail: 'M4 6h16v12H4V6Zm0 1 8 6 8-6',
  linkedin: 'M6.5 10.5V18M6.5 7v.01M10.5 18v-4.5a3 3 0 0 1 6 0V18',
  whatsapp:
    'M12 3a9 9 0 0 0-7.79 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm-3 8.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.45 1-1v-.8l-2-.75-.8.9a5.4 5.4 0 0 1-2.35-2.35l.9-.8-.75-2h-.8c-.55 0-1 .4-1 1Z',
  code: 'm8 7-5 5 5 5m8-10 5 5-5 5',
  pencil: 'M4 20h4L19 9l-4-4L4 16v4Zm9-13 4 4',
  layers: 'M4 4h9v9H4V4Zm7 7h9v9h-9v-9Z',
  sparkles: 'M12 3.5 13.9 8l4.6 1.9-4.6 1.9L12 16.3l-1.9-4.5L5.5 9.9 10.1 8 12 3.5ZM18.5 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z',
  bag: 'M6 7h12l1 13H5L6 7Zm3 0V5a3 3 0 0 1 6 0v2',
  chat: 'M4 5h16v10H9l-5 4V5Z',
  mobile: 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 16h2',
  layout: 'M4 4h16v5H4V4Zm0 9h7v7H4v-7Zm9 0h7v7h-7v-7Z',
  magnifier: 'M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm5 11 4 4',
  beaker: 'M9 3v6l-4.5 8A3 3 0 0 0 7.2 21h9.6a3 3 0 0 0 2.7-4.2L15 9V3M9 3h6M7.5 14h9',
  rocket: 'M12 3c3 2.2 4.8 5.6 4.8 9L14.4 14.5h-4.8L7.2 12c0-3.4 1.8-6.8 4.8-9Zm-2.3 12h4.6v1.8a2.6 2.6 0 0 1-4.6 0V15ZM12 9.2a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z',
  star: 'M12 3.6l2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 17l-5.25 2.75 1-5.85L3.5 9.75l5.9-.85L12 3.6Z',
  quote: 'M6.5 17c3 0 5-2 5-5V6.5h-5V11h2.5c0 1.7-.8 2.5-2.5 2.5V17Zm9 0c3 0 5-2 5-5V6.5h-5V11h2.5c0 1.7-.8 2.5-2.5 2.5V17Z',
  clock: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 4v4l3 2',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-7 9c0-3.3 3.1-6 7-6s7 2.7 7 6M17 5.3a3.5 3.5 0 0 1 0 6.4M22 20c0-2.6-1.6-4.8-4-5.6',
  chart: 'M4 20V10m6 10V4m6 16v-7m4 7H2',
  bolt: 'M13 3 5 14h6l-1 7 8-11h-6l1-7Z',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c2.5 2.6 4 5.7 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.7-4-9s1.5-6.4 4-9Z',
  pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  target: 'M6 3v18m0-18h12l-2.5 4L18 11H6',
  lightbulb: 'M9.5 18h5m-4.5 3h4M12 3a6 6 0 0 0-3.4 10.9c.6.45 1 1.15 1 1.9h4.8c0-.75.4-1.45 1-1.9A6 6 0 0 0 12 3Z',
  filter: 'M4 5h16l-6 7v6l-4 2v-8L4 5Z',
  heart: 'M12 20s-7-4.5-7-9.5A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 3.5C19 15.5 12 20 12 20Z',
  send: 'M4 12 20 4l-4 16-4.5-6.5L4 12Zm7.5 1.5L20 4',
  download: 'M12 4v11m0 0 4-4m-4 4-4-4M5 19h14',
  refresh: 'M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6M17 3v4h-4M7 21v-4h4',
  flag: 'M6 21V4m0 0h12l-2.5 4L18 12H6',
};

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.7 }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
