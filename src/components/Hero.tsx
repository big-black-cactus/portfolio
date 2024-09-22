'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BerlinTime from './BerlinTime';
import StatusIndicator from './StatusIndicatior';
import BlurIn from './BlurIn';

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
      className="h-[100vh] w-full relative z-10 flex flex-col items-center justify-center bg-black"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 3, ease: "anticipate" }}
    >
      <div className="h-screen w-screen z-30 flex flex-col items-center justify-center text-white mx-auto px-6 sm:px-14 text-center">
        <BlurIn
          word="Transforming visionary ideas into tangible, high-performing digital products that lead the market."
        />
      </div>

      <div className="w-full flex justify-between items-center bottom-0 pb-8 px-5 sm:px-14 text-white font-semibold">
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
              y: ['0%', '30%', '0%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
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
    </motion.div>
  );
};
