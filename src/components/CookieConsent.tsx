"use client";

import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CookieConsentProps {
    variant?: "default" | "small";
    demo?: boolean;
    onAcceptCallback?: () => void;
    onDeclineCallback?: () => void;
}

export default function CookieConsent({
    variant = "default",
    demo = false,
    onAcceptCallback = () => {},
    onDeclineCallback = () => {}
}: CookieConsentProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(false);

    const setCookie = (name: string, value: string, days: number) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    };

    const getCookie = (name: string): string | null => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    };

    const accept = () => {
        setIsOpen(false);
        setCookie("cookieConsent", "true", 365);
        setTimeout(() => setHide(true), 700);
        onAcceptCallback();
    };

    const decline = () => {
        setIsOpen(false);
        setCookie("cookieConsent", "false", 365);
        setTimeout(() => setHide(true), 700);
        onDeclineCallback();
    };

    useEffect(() => {
        try {
            const consent = getCookie("cookieConsent");
            if (consent === "true" || consent === "false") {
                setHide(true);
            } else {
                setIsOpen(true);
            }
        } catch (e) {
            console.error("Error: ", e);
        }
    }, []);

    return (
        variant === "default" ? (
            <div className={cn("fixed z-[200] bottom-0 right-0 sm:right-10 sm:bottom-4 w-full sm:max-w-md duration-700", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>                
                <div className="dark:bg-card bg-background rounded-md m-3 border border-stone-800 shadow-xl">
                    <div className="grid gap-2">
                        <div className="border-b border-border border-stone-800 h-14 flex items-center justify-between p-4">
                            <h1 className="text-lg font-semibold">Cookies? 🍪</h1>
                            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                        </div>
                        <div className="p-4">
                            <p className="text-sm md:text-[15px] font-medium text-start">
                                This personal portfolio uses cookies to add a sprinkle of magic to your browsing experience and showcase my work at its best. Your privacy is my priority.
                                <br />
                                <br />
                                <span className="text-xs md:text-[14px]">By clicking &quot;<span className="font-medium opacity-80">Accept</span>&quot;, you&apos;re allowing the magic to happen.</span>
                                <br />
                                <a href="#" className="text-xs md:text-[14px] underline">Learn more.</a>
                            </p>
                        </div>
                        <div className="flex gap-2 p-4 py-5 border-t border-border border-stone-800 dark:bg-background/2">
                            <Button onClick={accept} className="w-full bg-white hover:bg-white/90 text-black font-semibold">Accept</Button>
                            <Button onClick={decline} className="w-full bg-stone-900 hover:bg-stone-800 font-semibold" variant="secondary">Decline</Button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={cn("fixed z-[200] bottom-0 right-0 sm:right-4 sm:bottom-4 w-full sm:max-w-md duration-700", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>                
                <div className="m-3 dark:bg-card bg-background border border-border border-stone-800 rounded-lg">
                    <div className="flex items-center justify-between p-3">
                        <h1 className="text-lg font-medium">Cookies? 🍪</h1>
                        <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                    <div className="p-3 -mt-2">
                        <p className="text-sm text-left text-muted-foreground">
                            This portfolio uses cookies to make your visit smooth and delightful. Ready for the magic? 🍪
                        </p>
                    </div>
                    <div className="p-3 flex items-center gap-2 mt-2 border-t">
                        <Button onClick={accept} className="w-full h-9 rounded-full">accept</Button>
                        <Button onClick={decline} className="w-full h-9 rounded-full" variant="outline">decline</Button>
                    </div>
                </div>
            </div>
        )
    );
}
