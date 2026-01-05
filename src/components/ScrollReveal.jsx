import { motion } from "framer-motion";

export const ScrollReveal = ({
  children,
  width = "fit-content",
  delay = 0,
}) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: delay,
          type: "spring",
          bounce: 0.3,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className={
        fullWidth
          ? "w-full" //turbo
          : ""
      }
    >
      {children}
    </motion.div>
  );
};
