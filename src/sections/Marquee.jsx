import Marquee from "react-fast-marquee";

const Item = ({ children, invert }) => (
  <span
    className={`font-display uppercase text-[14vw] md:text-[11vw] leading-none px-8 ${
      invert ? "text-signal-yellow" : "text-bone"
    }`}
  >
    {children}
  </span>
);

const Star = () => (
  <svg viewBox="0 0 100 100" className="w-[9vw] md:w-[7vw] h-[9vw] md:h-[7vw] mx-8" aria-hidden>
    <path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z" fill="#FF2A00" />
  </svg>
);

export default function EditorialMarquee() {
  return (
    <section
      className="relative bg-ink border-y-2 border-signal-yellow py-6 md:py-10 overflow-hidden"
      data-testid="marquee-section"
      aria-label="editorial marquee"
    >
      <Marquee gradient={false} speed={40} pauseOnHover autoFill direction="left">
        <Item>MULTIDISCIPLINARY DESIGNER</Item>
        <Star />
        <Item invert>VISUAL TERRORIST</Item>
        <Star />
        <Item>EXPERIMENTALIST</Item>
        <Star />
      </Marquee>
    </section>
  );
}
