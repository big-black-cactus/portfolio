'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useToast } from './ui/use-toast';
import { Toaster } from './ui/toaster';
import { useLenis } from '@studio-freight/react-lenis';

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
  const lenis = useLenis(); // Access Lenis instance

  const handleEmailClick = () => {
    const email = 'artyomantonenko@gmail.com';
    navigator.clipboard.writeText(email);
    toast({
      title: 'Email copied to clipboard',
    });
  };

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 2.5, // Increase the duration for smoother and slower scroll
        easing: (t) => 1 - Math.pow(1 - t, 3), // Use custom easing function for smoothness
      });
    }
  };

  
  return (
    <motion.div
      id={id}
      ref={sectionRef}
      className="h-[100vh] bg-black relative my-auto leading-loose flex flex-col items-center justify-center px-7 sm:px-14"
      variants={sectionVariants}
      initial="hidden"
      animate={isSectionInView ? 'visible' : 'hidden'}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <Toaster />
      <motion.div
        className="text-5xl lg:text-7xl max-w-3xl pb-12 font-black mx-auto text-center leading-relaxed"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        Let&apos;s talk about the next big thing.
      </motion.div>

      <motion.div
        className="text-xl sm:text-2xl lg:text-[34px] pb-3 font-black mx-auto underline text-gray-500
          transition-all duration-500
          hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-transparent hover:bg-clip-text
          select-none break-all text-center cursor-none"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        onClick={handleEmailClick}
      >
        artyomantonenko@gmail.com
      </motion.div>

      {/* Scroll-to-Top Button */}
      <motion.button
        onClick={handleScrollToTop}
        className="absolute right-14 bottom-14 size-14 items-center justify-center border border-[#222222] bg-[#131313] text-white font-bold rounded-full transform transition-colors duration-300 hover:bg-[#181818] cursor-none shadow-2xl"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-none mx-auto'>
          <g id="Arrow / Arrow_Up_SM">
            <path id="Vector" d="M12 17V7M12 7L8 11M12 7L16 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </motion.button>


      <motion.div
        className="absolute bottom-0 w-full text-center text-xs lg:text-sm pb-6 font-black mx-auto"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        © Artyom Antonenko. All rights reserved.
      </motion.div>
    </motion.div>
  );
};
