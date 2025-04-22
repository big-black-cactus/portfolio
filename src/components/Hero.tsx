'use client';

import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import InteractiveHoverButton from './ui/interactive-hover-button';

const Shimmer = () => (
  <div className="animate-pulse w-[160px] h-[12px] bg-stone-900 rounded-sm"></div>
);

const BerlinTime = dynamic(() => import('./BerlinTime'), {
  ssr: false,
  loading: () => <Shimmer />, // Use shimmer as a placeholder
});

const StatusIndicator = dynamic(() => import('./StatusIndicatior'), { ssr: false });
const BlurIn = dynamic(() => import('./BlurIn'), { ssr: false });

export const Hero = ({ id }: { id: string }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value > 0.01) {
        // Fades out when scroll progress is > 10%
        controls.start({ opacity: 0, pointerEvents: 'none' });
      } else {
        // Fades in when scroll progress is <= 10%
        controls.start({ opacity: 1, pointerEvents: 'auto' });
      }
    });

    return () => unsubscribe(); // Clean up listener
  }, [controls, scrollYProgress]);

  return (
    <motion.div
      id={id}
      ref={sectionRef}
      className="h-[100vh] w-full relative z-10 flex flex-col items-center justify-center bg-black px-[clamp(1rem,5vw,3.5rem)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      <div className="h-screen w-screen z-30 flex flex-col items-start justify-center text-white text-center pb-4 select-none mx-auto">
        <BlurIn
          word="Turning product ideas into clean, intuitive web apps — designed with care, built to perform."
        />

        <div className='w-full flex flex-row mt-10 md:mt-14 justify-between'>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
          >
            {/* <Button className=' px-8 py-7 text-xl font-bold bg-transparent border-[3px] border-stone-800 hover:bg-stone-900/60 hover:border-stone-500 transition-colors duration-300 ease-in'>Let's Talk <ArrowRight className='ml-4' /></Button> */}
            <InteractiveHoverButton />
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
          >
            <div className='w-1/2 text-lg text-start text-stone-500'>
              Something there Something there Something there Something there Something there
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Bottom Component */}
      <motion.div
        className="w-full flex justify-between items-center bottom-0 pb-9 px-5 sm:px-14 text-white font-semibold fixed"
        animate={controls}
        initial={{ opacity: 1, pointerEvents: 'auto' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div style={{ width: '200px' }}>
          <BerlinTime />
        </div>
        <div className="fixed left-1/2 -translate-x-1/2 bottom-8 flex flex-col justify-center items-center text-stone-700">
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
            <g id="Arrow / Chevron_Down_Duo" className='text-stone-700 bg-stone-700 stroke-stone-700'>
              <path
                id="Vector"
                d="M16 13L12 17L8 13M16 7L12 11L8 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </motion.svg>
        </div>
        <div>
          <StatusIndicator />
        </div>
      </motion.div>
    </motion.div>
  );
};
