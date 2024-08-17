'use client'

import { TextGenerateEffect } from "./TextGenerate";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    hidden: { opacity: 0, y: 20 },  // Start fully hidden
    visible: { opacity: 1, y: 0 }, // Animate to fully visible
};

export const About = ({ id }: { id: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className="h-screen bg-black my-auto pointer-events-none leading-loose flex flex-col items-start justify-center px-7 sm:px-14"
            variants={variants} // Apply animation variants
            initial="hidden"    // Initial hidden state
            animate={isInView ? "visible" : "hidden"} // Animate based on inView
            transition={{ duration: 1.5, ease: "easeInOut" }} // Transition settings
        >
            <div className="text-2xl lg:text-3xl pb-3 font-black text-left">
                About Me.
            </div>
            <TextGenerateEffect
                words={
                    // "I'm Artyom, a Full Stack Web Developer and UX/UI Designer with expertise in Next.js. Based in Germany, I craft seamless digital experiences and innovative web applications. I've worked on various projects and startups, excelling both independently and in teams. My strong technical skills and passion for user-centric design bring visionary ideas to life."
                    "Hi, I'm Artyom. As a Full Stack Web Developer and UX/UI Designer based in Germany, I specialize in creating seamless digital experiences using Next.js. I’m passionate about bringing innovative web applications to life, focusing on user-centric design. I've worked on various projects and startups, excelling both independently and in teams. Whether working on a startup or a larger project, I am committed to crafting solutions that resonate with users."
                }
                className="text-left"
            />
        </motion.div>
    )
}
