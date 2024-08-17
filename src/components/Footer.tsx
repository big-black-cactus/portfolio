'use client'

import { TextGenerateEffect } from "./TextGenerate";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { Button } from "./ui/button";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and offset downwards
  visible: { opacity: 1, y: 0 }, // Transition to visible with no offset
};

const textVariants = {
  hidden: { opacity: 0, scale: 1 }, // Text starts smaller and hidden
  visible: { opacity: 1, scale: 1 }, // Text scales up to full size and visible
};

export const Footer = ({ id }: { id: string }) => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.2 });

  return (
    <motion.div
      ref={sectionRef}
      className="bg-black my-auto leading-loose flex flex-col items-center justify-center px-7 sm:px-14"
      variants={sectionVariants}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        className="text-sm pb-10 font-black mx-auto"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        © Artyom Antonenko. All rights reserved.
      </motion.div>
    </motion.div>
  );
};
