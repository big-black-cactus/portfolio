'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TextEffect } from './ui/text-effect';
import TextRevealByWord from './magicui/text-reveal';

const variants = {
  hidden: { opacity: 0, y: 20 },  // Start fully hidden
  visible: { opacity: 1, y: 0 },  // Animate to fully visible
};

export const About = ({ id }: { id: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    // <motion.div
    //   id={id}
    //   ref={ref}
    //   className="h-[100vh] bg-black my-auto pointer-events-none leading-loose flex flex-col items-start justify-center px-7 sm:px-14"
    //   variants={variants} // Apply animation variants
    //   initial="hidden"    // Initial hidden state
    //   animate={isInView ? "visible" : "hidden"} // Animate based on inView
    //   transition={{ duration: 1.5, ease: "easeInOut" }} // Transition settings
    // >
    //   <div className="text-2xl lg:text-3xl pb-3 font-black text-left">
    //     About Me.
    //   </div>

    //   {isInView && (
    //     <TextEffect 
    //       per='char' 
    //       preset='blur' 
    //       className={`mt-4 text-2xl lg:text-3xl font-semibold tracking-wide leading-normal ${
    //         isInView ? 'text-white/30' : 'text-white/0'
    //       }`}
    //       variants={{
    //         container: {
    //           hidden: { opacity: 0 },
    //           visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
    //         },
    //         item: {
    //           hidden: { opacity: 0, filter: 'blur(12px)' },
    //           visible: { opacity: 1, filter: 'blur(0px)' },
    //         }
    //       }}
    //       as="p"
    //     >
    //       Hi, I&apos;m Artyom. As a Full Stack Web Developer and UX/UI Designer based in Germany, I specialize in creating seamless digital experiences using Next.js. I&apos;m passionate about bringing innovative web applications to life, focusing on user-centric design. I&apos;ve worked on various projects and startups, excelling both independently and in teams. Whether working on a startup or a larger project, I am committed to crafting solutions that resonate with users.
    //     </TextEffect>
    //   )}
    // </motion.div>



    <div className="z-10 flex min-h-[16rem] items-center justify-center bg-black">
      <TextRevealByWord text="Hi, I&apos;m Artyom. As a Full Stack Web Developer and UX/UI Designer based in Germany, I specialize in creating seamless digital experiences using Next.js. I&apos;m passionate about bringing innovative web applications to life, focusing on user-centric design. I&apos;ve worked on various projects and startups, excelling both independently and in teams. Whether working on a startup or a larger project, I am committed to crafting solutions that resonate with users." />
    </div>
  );
};
 