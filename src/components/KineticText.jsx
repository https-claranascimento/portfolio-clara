import { motion } from "framer-motion";

export const KineticText = ({
  lines = [],
  as = "h1",
  className = "",
  delay = 0,
  stagger = 0.09,
  testId,
}) => {
  const Tag = motion[as] || motion.h1;

  return (
    <Tag
      className={className}
      data-testid={testId}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {lines.map((line, i) => (
        <span key={i} className="kinetic-line">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", rotate: 4 },
              visible: {
                y: "0%",
                rotate: 0,
                transition: { type: "spring", stiffness: 90, damping: 16, mass: 0.9 },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default KineticText;
