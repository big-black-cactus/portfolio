"use client";

import { useEffect } from "react";

export default function SmoothScrollHandler() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbarHeight = 72; // Adjust this based on your layout
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

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}
