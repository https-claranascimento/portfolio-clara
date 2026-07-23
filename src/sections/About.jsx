import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    n: "01",
    title: "O DESIGN",
    color: "text-signal-yellow",
    body:
      "Design não é apenas decoração. É pensamento externalizado. Cada cor, cada peso, cada centímetro de espaço em branco carrega uma escolha.",
  },
  {
    n: "02",
    title: "O MÉTODO",
    color: "text-signal-red",
    body:
      "Estudar e elaborar antes de desenhar. Rascunho antes de renderizar. Errar faz parte da construção do projeto — até que o produto tome forma.",
  },
  {
    n: "03",
    title: "O CAMPO",
    color: "text-signal-yellow",
    body:
      "Meu trabalho é focado no design gráfico, transformando conceitos e ideias em algo palpável, visual e que transmita a ideia.",
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yNum = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative bg-ink py-32 md:py-44 border-t border-bone/10"
      data-testid="about-section"
    >
      <div className="px-6 md:px-10 mb-20 md:mb-28 flex items-start justify-between gap-6">
        <div className="flex items-center gap-4 font-mono text-[11px] tracking-widest text-mute">
          <span className="inline-block w-8 h-px bg-signal-yellow" />
          <span>[ SEÇÃO 02 ] — MANIFESTO</span>
        </div>
      </div>

      <div className="px-6 md:px-10 mb-24 md:mb-36">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display uppercase text-[11vw] md:text-[8.5vw] leading-[0.9] max-w-[1400px]"
          data-testid="about-tagline"
        >
          EU NÃO <span className="text-outline-yellow">DECORO</span>.
          <br />
          EU <span className="text-signal-red">CONSTRUO</span>.
        </motion.h2>
      </div>

      <div className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 gap-x-6">
        {chapters.map((c, i) => {
          const spans = [
            "md:col-start-1 md:col-span-6",
            "md:col-start-8 md:col-span-5 md:mt-24",
            "md:col-start-2 md:col-span-5",
          ];
          return (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`relative ${spans[i]}`}
              data-testid={`manifesto-chapter-${c.n}`}
            >
              <motion.div style={{ y: yNum }} className="mb-4">
                <span className={`font-display ${c.color} text-[22vw] md:text-[13vw] leading-none block`}>
                  {c.n}
                </span>
              </motion.div>
              <h3 className="font-display uppercase text-4xl md:text-5xl text-bone mb-5">
                — {c.title}
              </h3>
              <p className="font-mono text-sm md:text-[15px] leading-relaxed text-bone/75 max-w-[42ch]">
                {c.body}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
