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
      className="h-[80vh] bg-black relative rounded-t-2xl leading-loose flex flex-col items-start justify-center overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isSectionInView ? 'visible' : 'hidden'}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <Toaster />
      <motion.div
        className="text-2xl md:text-3xl lg:text-6xl max-w-3xl pb-4 md:pb-14 font-black !leading-tight px-14"
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


      <div className="flex flex-row items-center space-x-6 px-14">
        {/* Email (click opens mail client) */}
        <motion.a
          href={`mailto:${email}`}
          whileHover={{ color: '#ffffff' }}
          className="text-sm sm:text-md lg:text-2xl font-black underline text-stone-600 hover:text-stone-100 transition-all duration-300 break-all cursor-pointer"
        >
          [ {email.toUpperCase()} ]
        </motion.a>

        {/* Copy Email */}
        <motion.div
          onClick={handleCopyClick}
          whileHover={{ color: '#ffffff' }}
          className="text-sm sm:text-md lg:text-2xl font-black underline text-stone-600 hover:text-stone-100 transition-all duration-300 break-all cursor-pointer"
        >
          [ COPY EMAIL ]
        </motion.div>
      </div>

      {/* Scroll-to-Top Button */}
      <motion.button
        onClick={handleScrollToTop}
        // className="absolute right-6 md:right-14 bottom-16 md:bottom-14 size-10 sm:size-12 md:size-14 items-center justify-center border border-[#222222] bg-[#131313] text-white font-bold rounded-full transform transition-colors duration-300 hover:bg-[#181818] cursor-none shadow-2xl"
        className="absolute flex flex-row flex-shrink-0 right-32 md:right-28 bottom-5 md:bottom-[18px] size-10 sm:size-12 md:size-14 cursor-none hover:text-stone-700 hover:border-stone-700 duration-500 transition-colors"
        variants={textVariants}
        initial="hidden"
        animate={isSectionInView ? 'visible' : 'hidden'}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        <div className='flex flex-row flex-shrink-0 items-center space-x-3 font-semibold text-lg'>
          <ChevronUp className=' size-5' />
          <div>Back Top</div>
        </div>
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
        className="absolute bottom-4 w-full text-start text-base pb-6 font-black mx-auto px-14"
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
