"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  className,
}: {
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [scope, animate] = useAnimate();

  const words = "Hi, I'm Artyom. As a Full Stack Web Developer and UX/UI Designer based in Germany, I specialize in creating seamless digital experiences using Next.js. I'm passionate about bringing innovative web applications to life, focusing on user-centric design. I've worked on various projects and startups, excelling both independently and in teams. Whether working on a startup or a larger project, I am committed to crafting solutions that resonate with users.";

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current.children, // Animate each child (word)
        { opacity: 1 },
        { duration: 0.6, delay: stagger(0.03) } // Reduced duration and delay for faster animation
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
            className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50"
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
