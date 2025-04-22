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
      staggerChildren: 0.05,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 20, color: '#777' },
  visible: {
    opacity: 1,
    y: 0,
    color: '#7e7e7e',
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const heading = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
};

function TextRevealByWord({ text, isInView }: { text: string, isInView: boolean }) {
  const words = text.split(' ');
  return (
    <motion.div
      // className="flex flex-wrap text-2xl font-bold text-white/20 px-7 sm:px-14 md:text-3xl lg:text-4xl lg:!pt-20 !leading-[1.3]"
      className="flex flex-wrap text-[clamp(1.5rem,2.75vw,3rem)] font-bold text-white/40  lg:!pt-28 !leading-[1.3]"
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block whitespace-nowrap mr-3">
          {w}
        </motion.span>
      ))}
    </motion.div>
  );
}

export const About = ({ id }: { id: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div
      ref={ref}
      // className="z-10 flex min-h-screen items-center justify-center bg-black px-4"
      className="z-10 flex min-h-[80vh] items-center justify-center bg-black px-5 md:px-14 mx-auto"
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
        {/* <motion.div
          className='text-2xl font-semibold px-7 sm:px-14 underline text-stone-400'
          variants={heading}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          #about-me
        </motion.div> */}
        <TextRevealByWord
          text="Hey there, I&apos;m Artyom — a Full Stack Web Developer & UX/UI Designer crafting standout digital experiences from the heart of Germany. With Next.js as my playground, I build sleek, high-performing web apps that don't just look good — they feel right. I turn ideas into beautiful, functional products, blending code and design with a user-first mindset. From fast-moving startups to complex team projects, I bring passion, precision, and a touch of magic to every pixel and line of code."
          isInView={isInView}
        />

      </motion.div>
    </div>
  );
};
