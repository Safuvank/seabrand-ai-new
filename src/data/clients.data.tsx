
//Moved static array outside the component to prevent memory reallocation
// Replace the 'svg' property with an <img /> or <Image /> tag for your real logos
export const clients = [
  {
    id: 1,
    name: "Acme Corp",
    svg: (
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    ),
  },
  {
    id: 2,
    name: "Global Tech",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2L2 22h20L12 2z"
      />
    ),
  },
  {
    id: 3,
    name: "Nexus",
    svg: (
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    ),
  },
  {
    id: 4,
    name: "Stark Ind",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 22V2M5 12H2M22 12h-3M19.07 4.93l-2.12 2.12M4.93 19.07l2.12-2.12M19.07 19.07l-2.12-2.12M4.93 4.93l2.12 2.12"
      />
    ),
  },
  {
    id: 5,
    name: "CyberDyne",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
      />
    ),
  },
  {
    id: 6,
    name: "Umbrella",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
      />
    ),
  },
  {
    id: 7,
    name: "Massive",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v8l9-11h-7z"
      />
    ),
  },
  {
    id: 8,
    name: "Aperture",
    svg: (
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="12 12"
        fill="none"
      />
    ),
  },
  {
    id: 9,
    name: "Initech",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    ),
  },
  {
    id: 10,
    name: "Soylent",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    ),
  },
  {
    id: 11,
    name: "Hooli",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    id: 12,
    name: "E-Corp",
    svg: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    ),
  },
];