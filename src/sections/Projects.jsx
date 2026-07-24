import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "ANUNCIO LIVE GT PREMIUM WEEK",
    kind: "Identidade Visual • Direção de Arte",
    year: "2026",
    tag: "CAMPANHA",
    images: ["/images/Group_310.png"],
    excerpt:
      "Identidade visual para campanha de conteúdo e relacionamento com corretores. Formas modulares, cores vibrantes e linguagem direta para comunicar ritmo, movimento e oportunidade.",
  },
  {
    n: "02",
    title: "STORIES DE INSTAGRAM",
    kind: "Social Media • Comunicação Comercial",
    year: "2026",
    tag: "SOCIAL MEDIA",
    images: ["/images/Instagram_story_-_33.png", "/images/Instagram_story_-_7.png"],
    excerpt:
      "Conteúdo de relacionamento e comunicação comercial para aproximar corretores do produto, traduzindo sofisticação, oportunidade e diferenciais em uma linguagem clara e estratégica.",
  },
  {
    n: "03",
    title: "CASACOR",
    kind: "Campanha de Incentivo • Ativação de Marca",
    year: "2026",
    tag: "CAMPANHA",
    images: ["/images/Group_53.png"],
    excerpt:
      "Campanha de incentivo criada para transformar visita, produção de conteúdo e engajamento em uma experiência de marca com potencial de mobilização.",
  },
];

function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  const isLeft = i % 2 === 0;
  const isDual = project.images.length === 2;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end mb-24 md:mb-40"
      data-testid={`project-${project.n}`}
    >
      {/* Text block */}
      <div
        className={`md:col-span-4 ${
          isLeft ? "md:order-2 md:col-start-9" : "md:order-1 md:col-start-1"
        } order-2 flex flex-col gap-5`}
      >
        <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-mute">
          <span>[ {project.n} / 03 ]</span>
          <span className="text-signal-yellow">{project.tag}</span>
        </div>
        <h3
          className="font-display uppercase text-4xl md:text-5xl text-bone leading-[0.95]"
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

      {/* Image block */}
      <motion.div
        style={{ scale }}
        className={`md:col-span-8 ${
          isLeft ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-5"
        } order-1`}
      >
        {isDual ? (
          <div className="flex gap-3 md:gap-4">
            {project.images.map((src, idx) => (
              <motion.div
                key={idx}
                style={{ y: idx === 0 ? y : undefined }}
                className="flex-1 relative border border-bone/20 overflow-hidden group aspect-[9/16] bg-ink"
              >
                <img
                  src={src}
                  alt={`${project.title} ${idx + 1}`}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                {idx === 0 && (
                  <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-ink bg-bone px-2 py-1 z-10">
                    {project.n}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative border border-bone/20 overflow-hidden group aspect-[4/3] md:aspect-[16/11] bg-ink">
            <img
              src={project.images[0]}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-ink bg-bone px-2 py-1 z-10">
              {project.n}
            </span>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-widest text-bone/90 z-10">
              /* HOVER */
            </span>
          </div>
        )}
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
