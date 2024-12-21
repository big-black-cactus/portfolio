"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1.5 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display max-w-full uppercase text-start  drop-shadow-2xl font-[1000] bg-clip-text text-transparent bg-gradient-to-b from-white/100 to-white/50 pointer-events-none text-4xl md:text-5xl lg:text-7xl leading-snug md:leading-[1.7] tracking-[-0.02em]",
        // "font-display max-w-full uppercase text-start  drop-shadow-2xl font-[1000] bg-clip-text bg-clip-text text-transparent bg-gradient-to-b from-[#63A714] to-[#63A714]/50 pointer-events-none text-4xl md:text-5xl lg:text-7xl leading-[1.7] tracking-[-0.02em]",
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
