import { motion } from "framer-motion";

const links = [
  { label: "INDEX", href: "#hero" },
  { label: "MANIFESTO", href: "#manifesto" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between mix-blend-difference"
      data-testid="site-nav"
    >
      <a
        href="#hero"
        className="font-mono text-xs md:text-sm tracking-widest text-bone hover:text-signal-yellow transition-colors duration-300"
        data-testid="nav-logo"
      >
/ PORTFOLIO 2026
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-xs tracking-widest text-bone/80 hover:text-signal-yellow transition-colors duration-300"
            data-testid={`nav-${l.label.toLowerCase()}`}
          >
            → {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="font-mono text-xs tracking-widest text-bone md:hidden"
        data-testid="nav-mobile-contact"
      >
        → CONTACT
      </a>
    </motion.header>
  );
}
