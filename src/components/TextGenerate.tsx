"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [scope, animate] = useAnimate();

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current.children, // Animate each child (word)
        { opacity: 1 },
        { duration: 1, delay: stagger(0.05) }
      );
    }
  }, [isInView, animate, scope]);

  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0 }}
            className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/30"
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={ref}>
      <div className="mt-4">
        <div className="text-xl lg:text-2xl font-semibold tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
