'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },  // Start hidden and offset downwards
    visible: { opacity: 1, y: 0 }, // Animate to visible with no offset
};

export const TechStack = ({ id }: { id: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className="min-h-screen bg-black flex flex-col items-start justify-center px-5 sm:px-14 py-20"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <div className="text-3xl pb-3 font-black text-left mb-24">
                {'{Tech Stack.}'}
            </div>
        </motion.div>
    )
}
