'use client';

import { TextGenerateEffect } from "./TextGenerate";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and offset downwards
  visible: { opacity: 1, y: 0 }, // Transition to visible with no offset
};

const textVariants = {
  hidden: { opacity: 0, scale: 1 }, // Text starts smaller and hidden
  visible: { opacity: 1, scale: 1 }, // Text scales up to full size and visible
};

export const Contact = ({ id }: { id: string }) => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.2 });

  const { toast } = useToast();

  const handleEmailClick = () => {
    const email = "artyomantonenko@gmail.com";
    navigator.clipboard.writeText(email);
    toast({
      title: "Email copied to clipboard",
    });
  };

  return (
    <motion.div
      ref={sectionRef}
      className="h-screen bg-black my-auto leading-loose flex flex-col items-center justify-center px-7 sm:px-14"
      variants={sectionVariants}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <Toaster />
      <motion.div
        className="text-3xl lg:text-5xl pb-6 font-black mx-auto text-center"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        Let's talk about the next big thing.
      </motion.div>

      <motion.div
        className="text-2xl lg:text-3xl pb-3 font-black mx-auto underline text-gray-500 cursor-pointer
          transition-all duration-500
          hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-transparent hover:bg-clip-text
          select-none"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        onClick={handleEmailClick}
      >
        artyomantonenko@gmail.com
      </motion.div>

      <motion.div
        className="absolute bottom-0 w-full text-center text-sm pb-10 font-black mx-auto"
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
