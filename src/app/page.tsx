"use client"
"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

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
    <main 
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden" 
    >
      <div className="w-full">
        <Navbar />
        <Hero id="hero" />
        <About id="about" />
        <Projects id="projects" />
        <Services id="services" />
        <Contact id="contact" />
      </div>
    </main>
  );
}
