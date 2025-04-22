import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import Lenis from "@/components/SmoothScroll";
// import CustomCursor from "@/components/CustomCursor";
import { FAQ } from "@/components/FAQ";
// import { SmoothScrollHandler } from "@/components/SmoothScrollHandler";
import dynamic from "next/dynamic";
import CookieConsent from "@/components/CookieConsent";


// Lazy load components for performance
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});
const SmoothScrollHandler = dynamic(
  () => import("@/components/SmoothScrollHandler"),
  { ssr: false }
);

export default function Home() {
  return (
    <Lenis>
      <SmoothScrollHandler />
      <main 
        className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full" 
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
      <CookieConsent demo={true}  />
    </Lenis>
  );
}
