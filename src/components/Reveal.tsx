import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ease } from "@/lib/constants";

type Dir = "up" | "down" | "left" | "right";

export function Reveal({
  children,
  dir = "up",
  delay = 0,
  amount = 60,
  className = "",
}: {
  children: React.ReactNode;
  dir?: Dir;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const offset =
    dir === "up" ? { y: amount } :
    dir === "down" ? { y: -amount } :
    dir === "left" ? { x: amount } :
    { x: -amount };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}