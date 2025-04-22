'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useToast } from './ui/use-toast';
import { Toaster } from './ui/toaster';
import { useLenis } from '@studio-freight/react-lenis';
import { ChevronUp } from 'lucide-react';
import { InteractiveGridPattern } from './magicui/intercative-grid';
import { cn } from '@/lib/utils';
import { PulsatingButton } from './magicui/pulsating-button';

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

  const email = 'artyomantonenko@gmail.com';

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: 'Email copied to clipboard!',
    });
  };

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
    // <motion.div
    //   id={id}
    //   ref={sectionRef}
    //   className="h-[60vh] bg-[#0a0a0a] relative rounded-t-2xl leading-loose flex flex-col items-center justify-center"
    //   variants={sectionVariants}
    //   initial="hidden"
    //   animate={isSectionInView ? 'visible' : 'hidden'}
    //   transition={{ duration: 1.5, ease: 'easeInOut' }}
    // >

    <motion.div
      id={id}
      ref={sectionRef}
      className="h-[90vh] bg-black relative rounded-t-2xl leading-loose flex flex-col items-start justify-center overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isSectionInView ? 'visible' : 'hidden'}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <Toaster />
      <motion.div
        className="text-[30px] md:text-3xl lg:text-6xl max-w-3xl pb-4 md:pb-14 font-black !leading-tight px-5 md:px-14"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        Let&apos;s Talk About The Next Big Thing.
      </motion.div>
      {/* 
      <div className='w-full flex items-center justify-center h-[170px] bg-[#090909] mb-8 mx-14'>
        <div className='text-stone-300 font-black text-4xl'>GET IN TOUCH</div>
      </div> */}


      <div className="flex flex-col md:flex-row items-center gap-6 px-5 md:px-14">
        {/* Email (click opens mail client) */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mt-5 md:mt-0">
          {/* Email (click opens mail client) */}
          <a
            href={`mailto:${email}`}
            className="text-lg lg:text-2xl font-black underline text-stone-600 transition-colors duration-300 hover:text-white cursor-pointer"
          >
            [ {email.toUpperCase()} ]
          </a>

          {/* Copy Email */}
          <div
            onClick={handleCopyClick}
            className="text-lg lg:text-2xl font-black underline text-stone-600 transition-colors duration-300 hover:text-white cursor-pointer"
          >
            [ COPY EMAIL ]
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <motion.button
        onClick={handleScrollToTop}
        className={cn(
          "absolute right-8 md:right-14 bottom-32 md:bottom-8",
          "flex items-center gap-2 px-5 py-5 border border-stone-800 rounded-full",
          "bg-[#0f0f0f] text-white hover:text-stone-500 hover:border-stone-800 hover:bg-[#181818]",
          "transition-all duration-300 ease-in-out group cursor-pointer"
        )}
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <ChevronUp
          className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
        />
        <span className="text-md font-semibold tracking-wide">Back to Top</span>
      </motion.button>



      {/* <motion.div
        className="absolute bottom-8 w-full text-start text-base pb-6 font-black mx-auto px-7 md:px-14"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        © 2025 Artyom Antonenko. 
      </motion.div> */}

      <motion.div
        className="absolute bottom-4 w-full text-center md:text-start text-base pb-6 font-black mx-auto px-5 md:px-14"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        © 2025 Artyom Antonenko. All rights reserved.
      </motion.div>
    </motion.div>
  );
};
