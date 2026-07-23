import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import KineticText from "@/components/KineticText";

const PORTRAIT =
  "https://images.unsplash.com/photo-1748015879337-ef95556c3749?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MHx8fHwxNzg0NzU4MzkyfDA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);

  const springX = useSpring(0, { stiffness: 60, damping: 20 });
  const springY = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const nx = (e.clientX - cx) / cx;
      const ny = (e.clientY - cy) / cy;
      mouseRef.current = { x: nx, y: ny };
      setMouse({ x: nx, y: ny });
      springX.set(nx * 30);
      springY.set(ny * 30);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [springX, springY]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-ink"
      data-testid="hero-section"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#F3F3F3 1px, transparent 1px), linear-gradient(90deg, #F3F3F3 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ y: yBlob, x: springX, rotate: mouse.x * 8 }}
        className="absolute -right-24 top-20 w-[520px] h-[520px] bg-signal-red hidden md:block"
        aria-hidden
      />

      <motion.div
        style={{ x: useTransform(springX, (v) => v * -0.6), y: useTransform(springY, (v) => v * -0.6) }}
        className="absolute left-0 bottom-24 h-1 md:h-2 w-1/2 bg-signal-yellow"
        aria-hidden
      />

      <motion.div
        style={{ y: yPortrait, x: useTransform(springX, (v) => v * -0.4) }}
        className="hidden md:block absolute right-8 lg:right-20 top-40 w-[280px] lg:w-[360px] h-[380px] lg:h-[480px] z-10"
      >
        <div className="relative w-full h-full border border-bone/30">
          <div className="absolute inset-0 bg-signal-yellow mix-blend-multiply z-20" />
          <img
            src={PORTRAIT}
            alt="Clara Nascimento"
            className="w-full h-full object-cover grayscale contrast-125"
            data-testid="hero-portrait"
          />
          <div className="absolute -top-3 -left-3 bg-ink border border-signal-red text-signal-red font-mono text-[10px] tracking-widest px-2 py-1 z-30">
            [ SUBJECT_01 ]
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-24 md:top-28 left-6 md:left-10 right-6 md:right-10 flex items-center justify-between text-mute font-mono text-[11px] tracking-widest z-20"
      >
        <span data-testid="meta-index">INDEX / 001 — DESIGNER INICIANTE</span>
      </motion.div>

      <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-28 px-6 md:px-10 z-30">
        <div className="max-w-[1200px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-mono text-xs md:text-sm tracking-[0.35em] text-signal-yellow mb-6"
            data-testid="hero-eyebrow"
          >
            <span className="text-mute">/</span> PORTFOLIO 2026
          </motion.p>

          <KineticText
            as="h1"
            testId="hero-title"
            className="font-display uppercase text-bone text-[19vw] md:text-[15vw] lg:text-[13.5vw] leading-[0.82]"
            lines={["CLARA"]}
            delay={0.5}
          />
          <KineticText
            as="h1"
            testId="hero-title-2"
            className="font-display uppercase text-signal-yellow text-[19vw] md:text-[15vw] lg:text-[13.5vw] leading-[0.82]"
            lines={["NASCIMENTO."]}
            delay={0.8}
          />
        </div>

        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-10 md:mt-16 flex items-center justify-between text-mute font-mono text-[11px] tracking-widest"
        >
          <div className="flex items-center gap-2">
            <ArrowDownRight className="w-4 h-4 text-signal-yellow" />
            <span data-testid="hero-scroll-cue">ARRASTE / SCROLL — DESÇA COMIGO</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>GRÁFICO</span>
            <span className="w-6 h-px bg-mute" />
            <span>PRODUTO</span>
            <span className="w-6 h-px bg-mute" />
            <span>UI / UX</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
