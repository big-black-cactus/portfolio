// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { TextEffect } from './ui/text-effect';
// import TextRevealByWord from './magicui/text-reveal';

// const variants = {
//   hidden: { opacity: 0, y: 20 },  // Start fully hidden
//   visible: { opacity: 1, y: 0 },  // Animate to fully visible
// };

// export const About = ({ id }: { id: string }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   return (

//     <div className="z-10 flex min-h-[16rem] items-center justify-center bg-black">
//       <TextRevealByWord text="Hi, I&apos;m Artyom. As a Full Stack Web Developer and UX/UI Designer based in Germany, I specialize in creating seamless digital experiences using Next.js. I&apos;m passionate about bringing innovative web applications to life, focusing on user-centric design. I&apos;ve worked on various projects and startups, excelling both independently and in teams. Whether working on a startup or a larger project, I am committed to crafting solutions that resonate with users." />
//     </div>
//   );
// };
 
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 20, color: '#555' },
  visible: {
    opacity: 1,
    y: 0,
    color: '#999',
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

function TextRevealByWord({ text }: { text: string }) {
  const words = text.split(' ');
  return (
    <motion.div
      className="flex flex-wrap text-2xl font-bold text-white/20 px-7 sm:px-14 md:text-3xl lg:text-4xl lg:!pt-32 !leading-[1.3]"
      variants={container}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="mr-3">
          {w}
        </motion.span>
      ))}
    </motion.div>
  );
}

export const About = ({ id }: { id: string }) => {
  const ref = useRef(null);
  // Set once: false so that the inView status toggles when the element leaves the viewport
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div 
      ref={ref}
      className="z-10 flex min-h-screen items-center justify-center bg-black px-4"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {},
          },
        }}
      >
        <TextRevealByWord text="Hi, I&apos;m Artyom. As a Full Stack Web Developer and UX/UI Designer based in Germany, I specialize in creating seamless digital experiences using Next.js. I&apos;m passionate about bringing innovative web applications to life, focusing on user-centric design. I&apos;ve worked on various projects and startups, excelling both independently and in teams. Whether working on a startup or a larger project, I am committed to crafting solutions that resonate with users." />
      </motion.div>
    </div>
  );
};
