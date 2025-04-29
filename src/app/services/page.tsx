import { Navbar } from "@/components/Navbar";
import Lenis from "@/components/SmoothScroll";
import { FAQ } from "@/components/FAQ";
import dynamic from "next/dynamic";
import CookieConsent from "@/components/CookieConsent";
import { Services as ServicesSection } from "@/components/Services";


// Lazy load components for performance
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
    ssr: false,
});
const SmoothScrollHandler = dynamic(
    () => import("@/components/SmoothScrollHandler"),
    { ssr: false }
);

export default function Services() {
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
                        <ServicesSection id="services" />
                    </div>
                </div>
            </main>
            <CookieConsent demo={true} />
        </Lenis>
    );
}
