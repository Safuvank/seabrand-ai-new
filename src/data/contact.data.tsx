import { Phone, MessageCircle, MapPin } from "lucide-react";

export const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Moved animation variants outside the component
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
  },
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const items = [
  {
    icon: Phone,
    title: "Call us",
    content: "+91 811 392 5507",
    href: "tel:+918113925507",
  },
  {
    icon: MessageCircle,
    title: "Email",
    content: "curator@seabrand.in",
    href: "mailto:curator@seabrand.in",
  },
  { icon: MapPin, title: "Visit us", content: "SeaBrand AI, Kerala, India" },
];
