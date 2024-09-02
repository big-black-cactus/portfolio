"use client";

import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradient";
import { Button } from "./ui/button";
import { BackgroundBeams } from "./BackgorundBeams";
import { Navbar } from "./Navbar";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BerlinTime from "./BerlinTime";
import StatusIndicator from "./StatusIndicatior";

const variants = {
  hidden: { opacity: 0, y: 0 }, // Start hidden and offset downwards
  visible: { opacity: 1, y: 0 }, // Animate to visible with no offset
};

export const Hero = ({ id }: { id: string }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 }); // Trigger when 10% is visible

  return (
    <motion.div
      id={id}
      ref={sectionRef}
      className="h-[100vh] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased"
        //   bg-dot-white/[0.15]
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      {/* <Navbar /> */}
      <div className="h-screen w-screen z-30 flex flex-col items-center justify-center text-white mx-auto px-6 sm:px-14 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 4 }}
        >
          {/* <p className="max-w-3xl bg-clip-text text-transparent drop-shadow-2xl font-black bg-gradient-to-b from-white/100 to-white/50 pointer-events-none text-2xl md:text-4xl lg:text-5xl lg:leading-[52px]"> */}
          <p className="max-w-full uppercase text-start bg-clip-text text-transparent drop-shadow-2xl font-[1000] bg-gradient-to-b from-white/100 to-white/50 pointer-events-none text-5xl lg:text-6xl leading-[42px] md:leading-[54px] lg:leading-[68px]">
            Transforming visionary ideas into tangible, high-performing digital products that lead the market.
            
          </p>
        </motion.div>

      </div>

      <div className="w-full flex justify-between items-center bottom-0 pb-8 px-5 sm:px-14 text-white font-semibold">
        {/* Scroll Down */}
        <BerlinTime />
        <div className="flex flex-col justify-center items-center text-gray-500 mx-auto">
          Scroll Down
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              y: ["0%", "20%", "0%"], // Bounce from initial position to 20% above and back to start
            }}
            transition={{
              duration: 2, // Duration of the animation
              ease: "easeInOut", // Easing function
              repeat: Infinity, // Repeat the animation infinitely
              repeatType: "loop", // Loop the animation
            }}
          >
            <g id="Arrow / Chevron_Down_Duo">
              <path
                id="Vector"
                d="M16 13L12 17L8 13M16 7L12 11L8 7"
                stroke="#6b7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </motion.svg>
        </div>

        <StatusIndicator />
      </div>
      {/* <Arrow_Right_MD /> */}
      {/* <BackgroundBeams /> */}
    </motion.div>
  );
};
