'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { ChevronRight } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
};

export const FAQ = ({ id }: { id: string }) => {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { amount: 0.2 });

    const faqs = [
      {
        question: "Do you offer ongoing support and updates?",
        answer: "Yes — I offer post-launch support, performance monitoring, and feature updates to ensure your SaaS continues to run smoothly as it grows."
      },
      {
        question: "What tech stack do you use for SaaS projects?",
        answer: "I typically use Next.js, Supabase or PostgreSQL, Prisma, and Stripe — but I’m flexible and can adapt to whatever stack suits your product best."
      },
      {
        question: "How do you ensure security in a SaaS app?",
        answer: "Security is a priority. I follow best practices for auth, encryption, and API protection. I can also implement 2FA, audit logging, and GDPR compliance if needed."
      },
      {
        question: "Can you integrate third-party APIs into my SaaS?",
        answer: "Absolutely — I regularly integrate services like OpenAI, Stripe, Google APIs, and custom CRMs to extend your product's functionality."
      },
      {
        question: "What happens if I need to scale my SaaS quickly?",
        answer: "I build with scalability in mind. From optimized databases to serverless functions and cloud deployment — your app will be ready to grow fast."
      },
      {
        question: "Do you work with existing codebases?",
        answer: "Yes, I can jump into an existing codebase, audit it, refactor where needed, and start building features or fixing bugs right away."
      },
      {
        question: "How do you handle project communication and updates?",
        answer: "I keep things transparent and async-friendly. You'll get regular updates via your preferred platform — Slack, Notion, Trello, or simple email check-ins."
      },
      {
        question: "Can you help me launch and deploy the app?",
        answer: "Yes — I handle the full deployment pipeline, whether it's Vercel, Railway, or custom infrastructure. I'll also help with domains, SSL, and launch support."
      }
    ];
    

    // Split into 2 columns
    const midpoint = Math.ceil(faqs.length / 2);
    const column1 = faqs.slice(0, midpoint);
    const column2 = faqs.slice(midpoint);

    return (
        <motion.div
            id={id}
            ref={sectionRef}
            className="min-h-[60vh] bg-black flex flex-col items-start justify-center px-7 sm:px-14 pb-10"
            variants={sectionVariants}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <div className="text-2xl md:text-3xl pb-3 font-black text-left mb-10">
                Frequently Asked Questions.
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-8">
                {[column1, column2].map((column, colIdx) => (
                    <Accordion
                        key={colIdx}
                        className="flex flex-col w-full divide-y divide-zinc-800"
                    >
                        {column.map((item, index) => (
                            <AccordionItem key={index} value={`item-${colIdx}-${index}`} className="py-3">
                                <AccordionTrigger className="w-full py-5 text-lg md:text-xl text-left text-zinc-50">
                                    <div className="flex items-center">
                                        <ChevronRight className="h-7 w-7 transition-transform duration-200 group-data-[expanded]:rotate-90 text-zinc-50" />
                                        <div className="ml-2 text-zinc-50">
                                            {item.question}
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="origin-left">
                                    <p className="text-md md:text-lg text-left pl-10 pr-2 pb-4 text-zinc-600 leading-7">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ))}
            </div>
        </motion.div>
    );
}
