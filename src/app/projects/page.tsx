import { Navbar } from "@/components/Navbar";
import Lenis from "@/components/SmoothScroll";
import { FAQ } from "@/components/FAQ";
import dynamic from "next/dynamic";
import CookieConsent from "@/components/CookieConsent";
import { Projects as ProjectsSection } from "@/components/Projects";


// Lazy load components for performance
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
    ssr: false,
});
const SmoothScrollHandler = dynamic(
    () => import("@/components/SmoothScrollHandler"),
    { ssr: false }
);

export default function Projects() {
    return (
        <Lenis>
            <SmoothScrollHandler />
            <main
                className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full"
            >
                <div className="w-full cursor-none">
                    <CustomCursor />
                    <Navbar />
                    <div className="pt-20 md:pt-32">
                        <ProjectsSection id="projects" />
                    </div>
                </div>
            </main>
            <CookieConsent demo={true} />
        </Lenis>
    );
}
