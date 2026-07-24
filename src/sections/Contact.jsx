import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const EMAIL = "nascimentoclaralmeida@gmail.com";
const PHONE = "(11) 93749-9903";
const WHATSAPP = "5511937499903";

const socials = [
  { label: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
];

export default function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <section
      id="contact"
      className="relative bg-ink pt-24 md:pt-36 border-t border-bone/10 overflow-hidden"
      data-testid="contact-section"
    >
      <div className="px-6 md:px-10 mb-10 md:mb-14 flex items-center gap-4 font-mono text-[11px] tracking-widest text-mute">
        <span className="inline-block w-8 h-px bg-signal-yellow" />
        <span>[ SEÇÃO 04 ] — CONTATO</span>
      </div>

      <a
        href={`mailto:${EMAIL}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative block group px-6 md:px-10 pb-4 md:pb-10"
        data-testid="contact-huge-cta"
      >
        <motion.span
          initial={false}
          animate={{ scaleY: hover ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-0 bottom-0 origin-bottom bg-signal-red -z-0"
        />
        <div className="relative z-10 flex items-start justify-between gap-6 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`font-display uppercase text-[22vw] md:text-[17vw] leading-[0.82] transition-colors duration-500 ${
              hover ? "text-ink" : "text-signal-yellow"
            }`}
          >
            LET&apos;S
            <br />
            TALK<span className="text-signal-red">.</span>
          </motion.h2>
          <div className="pt-6 md:pt-10 flex flex-col items-end gap-3">
            <ArrowUpRight
              className={`w-16 h-16 md:w-24 md:h-24 transition-transform duration-500 ${
                hover ? "text-ink rotate-45" : "text-bone"
              }`}
              strokeWidth={1}
            />
            <span className={`font-mono text-[11px] tracking-widest ${hover ? "text-ink" : "text-mute"}`}>
              {PHONE}
            </span>
          </div>
        </div>
      </a>

      <footer className="border-t border-bone/15 mt-4 md:mt-6 px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="font-mono text-[11px] tracking-widest text-mute">
          <p>CURITIBA, BRASIL</p>
          <p className="mt-1">OPEN FOR COMMISSIONS</p>
        </div>
        <ul className="flex items-center gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="font-mono text-[11px] tracking-widest text-bone/80 hover:text-signal-yellow inline-flex items-center gap-2 transition-colors duration-300"
                data-testid={`social-${s.label.toLowerCase()}`}
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="font-mono text-[11px] tracking-widest text-mute flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="hover:text-signal-yellow transition-colors duration-300 inline-flex items-center gap-2"
            data-testid="social-whatsapp"
          >
            <MessageCircle className="w-4 h-4" />
            {PHONE}
          </a>

        </div>
      </footer>
    </section>
  );
}
