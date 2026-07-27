import { motion } from "framer-motion";

const carousels = [
  {
    title: "CARDS DE WHATSAPP",
    description:
      "Materiais de comunicação para WhatsApp, enviados tanto em comunidades quanto no particular de corretores e imobiliárias selecionadas. Conteúdo ágil, direto e estratégico para nutrir relacionamento e gerar ação.",
    direction: "ltr",
    speed: "40s",
    images: [
      "/images/carrossel-whatsapp/Frame_1.png",
      "/images/carrossel-whatsapp/Group_12.png",
      "/images/carrossel-whatsapp/Group_59.png",
      "/images/Group_53.png",
      "/images/carrossel-whatsapp/Group_18.png",
      "/images/carrossel-whatsapp/Group_115.png",
      "/images/carrossel-whatsapp/casa_jobim.png",
      "/images/carrossel-whatsapp/agenda_1_(v1_-_3_divisorias).png",
      "/images/carrossel-whatsapp/Group_5.png",
      "/images/carrossel-outros/Frame_23.png",
      "/images/carrossel-instagram/Frame_16.png",
      "/images/carrossel-whatsapp/Group_51.png",
      "/images/carrossel-whatsapp/Group_48.png",
      "/images/carrossel-whatsapp/confirmacao-atlan-3-2.png",
      "/images/carrossel-whatsapp/Group_58.png",
      "/images/carrossel-whatsapp/Group_6.png",
    ],
  },
  {
    title: "INSTAGRAM",
    description:
      "Conteúdo para posts e feed de Instagram, abrangendo assuntos variados. Peças que traduzem sofisticação e diferenciais em uma linguagem visual clara, pensada para engajar e comunicar valor.",
    direction: "rtl",
    speed: "45s",
    images: [
      "/images/Instagram_story_-_33.png",
      "/images/Instagram_story_-_7.png",
      "/images/carrossel-instagram/Instagram_post_-_14.png",
      "/images/carrossel-instagram/Instagram_post_-_6.png",
      "/images/carrossel-instagram/Instagram_story_-_1.png",
      "/images/carrossel-instagram/Instagram_story_-_40.png",
      "/images/carrossel-instagram/Instagram_story_-_41.png",
      "/images/carrossel-instagram/Instagram_story_-_5.png",
    ],
  },
];

function Carousel({ carousel }) {
  const items = [...carousel.images, ...carousel.images];
  const trackClass =
    carousel.direction === "ltr" ? "carousel-track-ltr" : "carousel-track-rtl";

  return (
    <div className="mb-20 md:mb-28">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display uppercase text-3xl md:text-5xl text-bone mb-8 md:mb-10 text-center"
      >
        {carousel.title}
      </motion.h3>

      <div className="relative overflow-hidden">
        <div
          className={trackClass}
          style={{ "--carousel-speed": carousel.speed }}
        >
          {items.map((src, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[78vw] sm:w-[46vw] md:w-[34vw] lg:w-[26vw] mx-2 md:mx-3 flex items-center"
            >
              <img
                src={src}
                alt={`${carousel.title} ${idx + 1}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-sm text-bone/70 max-w-[52ch] mt-8 md:mt-10 leading-relaxed text-center mx-auto"
      >
        {carousel.description}
      </motion.p>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="relative bg-ink pt-24 md:pt-36 pb-24 md:pb-36 border-t border-bone/10"
      data-testid="projects-section"
    >
      <div className="px-6 md:px-10 mb-20 md:mb-28 flex items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 font-mono text-[11px] tracking-widest text-mute mb-8">
            <span className="inline-block w-8 h-px bg-signal-red" />
            <span>[ SEÇÃO 03 ] — TRABALHOS SELECIONADOS</span>
          </div>
          <h2 className="font-display uppercase text-[14vw] md:text-[9.5vw] leading-[0.9]">
            <span className="text-bone">SELE</span>
            <span className="text-signal-red">Ç</span>
            <span className="text-bone">ÃO</span>
          </h2>
        </div>
        <p className="hidden md:block font-mono text-[11px] tracking-widest text-mute text-right max-w-[280px] pb-4">
          TRÊS FRENTES DE<br />COMUNICAÇÃO QUE NÃO PÁRAM.
        </p>
      </div>

      <div className="px-6 md:px-10">
        {carousels.map((c) => (
          <Carousel key={c.title} carousel={c} />
        ))}
      </div>
    </section>
  );
}
