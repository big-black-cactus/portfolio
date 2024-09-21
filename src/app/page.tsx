"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import Lenis from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { FAQ } from "@/components/FAQ";



export default function Home() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbarHeight = 72; // Adjust this value according to your navbar height
          const offsetPosition = targetElement.offsetTop - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", handleScroll);
    });

    // Cleanup function to remove event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <Lenis>
      <main 
        className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden" 
      >
        <div className="w-full cursor-none">
          <CustomCursor />
          <Navbar />
          <Hero id="home" />
          <About id="about" />
          <Projects id="projects" />
          <Services id="services" />
          <FAQ id="faq" />
          <Contact id="contact" />
        </div>
      </main>
    </Lenis>
  );
}
