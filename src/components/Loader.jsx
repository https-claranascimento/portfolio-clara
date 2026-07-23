import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    const total = 1600;
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - startedAt) / total);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else {
        setTimeout(() => {
          setGone(true);
          onDone?.();
        }, 350);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[80] bg-ink flex flex-col"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          data-testid="site-loader"
        >
          <div className="flex-1 flex items-end justify-between p-6 md:p-10">
            <span className="font-mono text-[11px] tracking-widest text-mute">
              LOADING PORTFOLIO / CLARA_NASCIMENTO
            </span>
            <span className="font-mono text-[11px] tracking-widest text-signal-yellow">
              {String(count).padStart(3, "0")} / 100
            </span>
          </div>
          <div className="w-full h-[6px] bg-bone/10">
            <motion.div
              className="h-full bg-signal-yellow"
              style={{ width: `${count}%` }}
            />
          </div>
          <div className="flex-1 flex items-start justify-between p-6 md:p-10">
            <span className="font-display uppercase text-signal-red text-4xl md:text-6xl">▲</span>
            <span className="font-mono text-[11px] tracking-widest text-mute text-right">
              PREPARE-SE.<br />O SILÊNCIO ACABOU.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
