import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "SOL & OSSO",
    kind: "Identidade Visual • Direção de Arte",
    year: "2024",
    tag: "GRÁFICO",
    tone: "yellow",
    image:
      "https://images.unsplash.com/photo-1619632973808-4acf8041df42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHx2aWJyYW50JTIweWVsbG93JTIwcmVkJTIwcG9zdGVyJTIwZGVzaWduJTIwdHlwb2dyYXBoeXxlbnwwfHx8fDE3ODQ3NTg0MDR8MA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "Sistema de identidade tipográfica para restaurante autoral em São Paulo. Vermelho sangue, cardápio como cartaz.",
  },
  {
    n: "02",
    title: "OBJETO / 03",
    kind: "Design de Produto • Iluminação",
    year: "2023",
    tag: "PRODUTO",
    tone: "red",
    image:
      "https://images.unsplash.com/photo-1775938327973-96783de0967d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwcm9kdWN0JTIwZGVzaWduJTIwaW5kdXN0cmlhbHxlbnwwfHx8fDE3ODQ3NTgzOTJ8MA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "Luminária monolítica de metal dobrado. Feita para durar mais que quem a comprou. Edição limitada de 30 peças.",
  },
  {
    n: "03",
    title: "COLETIVA OS",
    kind: "Produto Digital • UI / UX",
    year: "2025",
    tag: "UI / UX",
    tone: "yellow",
    image:
      "https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    excerpt:
      "Plataforma para organizações coletivas de trabalho criativo. Interface brutalista, fluxos escondidos até que a mão os revele.",
  },
];

function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const isLeft = i % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end mb-24 md:mb-40`}
      data-testid={`project-${project.n}`}
    >
      <div
        className={`md:col-span-4 ${isLeft ? "md:order-2 md:col-start-9" : "md:order-1 md:col-start-1"} order-2 flex flex-col gap-5`}
      >
        <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-mute">
          <span>[ {project.n} / 03 ]</span>
          <span className="text-signal-yellow">{project.tag}</span>
        </div>
        <h3
          className="font-display uppercase text-5xl md:text-6xl text-bone leading-[0.9]"
          data-testid={`project-title-${project.n}`}
        >
          {project.title}
        </h3>
        <p className="font-mono text-sm text-bone/70 max-w-[38ch]">{project.excerpt}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="font-mono text-[11px] tracking-widest text-mute">
            <p>{project.kind}</p>
            <p className="mt-1 text-bone/80">{project.year}</p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-bone/40 px-4 py-3 hover:bg-signal-yellow hover:text-ink hover:border-signal-yellow transition-colors duration-300"
            data-testid={`project-cta-${project.n}`}
          >
            <span className="font-mono text-[11px] tracking-widest">VER CASO</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>
      </div>

      <motion.div
        style={{ scale }}
        className={`md:col-span-8 ${isLeft ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-5"} order-1`}
      >
        <div
          onMouseMove={onMove}
          className="spotlight-frame relative border border-bone/20 aspect-[4/3] md:aspect-[16/11] overflow-hidden group"
        >
          <motion.img
            style={{ y }}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-[115%] object-cover grayscale contrast-125 group-hover:grayscale-0 transition-[filter] duration-700"
          />
          <div
            className={`absolute inset-0 mix-blend-multiply pointer-events-none ${
              project.tone === "yellow" ? "bg-signal-yellow" : "bg-signal-red"
            } opacity-90 group-hover:opacity-0 transition-opacity duration-700`}
          />
          <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-ink bg-bone px-2 py-1 z-10">
            {project.n}
          </span>
          <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-widest text-bone/90 z-10">
            /* HOVER */
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="relative bg-ink pt-24 md:pt-36 pb-12 md:pb-24 border-t border-bone/10"
      data-testid="projects-section"
    >
      <div className="px-6 md:px-10 mb-16 md:mb-24 flex items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 font-mono text-[11px] tracking-widest text-mute mb-8">
            <span className="inline-block w-8 h-px bg-signal-red" />
            <span>[ SEÇÃO 03 ] — TRABALHOS SELECIONADOS</span>
          </div>
          <h2 className="font-display uppercase text-[14vw] md:text-[9.5vw] leading-[0.9]">
            <span className="text-bone">SELE</span>
            <span className="text-signal-red">Ç</span>
            <span className="text-bone">ÃO</span>{" "}
            <span className="text-outline-yellow">/26</span>
          </h2>
        </div>
        <p className="hidden md:block font-mono text-[11px] tracking-widest text-mute text-right max-w-[280px] pb-4">
          TRÊS PEÇAS DE UM CATÁLOGO<br />QUE NÃO PÁRA DE CRESCER.
        </p>
      </div>

      <div className="px-6 md:px-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.n} project={p} i={i} />
        ))}
      </div>
    </section>
  );
}
