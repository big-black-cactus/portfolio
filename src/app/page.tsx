"use client"

import { motion, AnimatePresence } from "framer-motion";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { useRef } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   MotionValue
// } from "framer-motion";

export default function Home() {

  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  return (
    <main 
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden " 
    >
      {/* <div className="w-full">
          <Navbar />
          <Hero id={1}/>
          <About id={2} />
          <Projects id={3} />
          <TechStack id={4} />
          <Services id={5} />
          <Contact id={6}/>
          <Footer id={7} />
      </div> */}
      <div className="w-full">
        <Navbar />
        <Hero id="hero" />
        <About id="about" />
        <Projects id="projects" />
        {/* <TechStack id="techstack" /> */}
        <Services id="services" />
        <Contact id="contact" />
      </div>
    </main>
  );
}
