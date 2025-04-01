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
        "question": "Do you offer ongoing support and updates?",
        "answer": "Yes — I provide post-launch support, performance monitoring, and feature updates to keep your app running smoothly as it grows."
      },
      {
        "question": "What tech stack do you use for SaaS projects?",
        "answer": "My go-to stack includes Next.js, Supabase or PostgreSQL, Prisma, Stripe, and Tailwind — but I'm flexible and can work with your preferred tools."
      },
      {
        "question": "How do you ensure security in a SaaS app?",
        "answer": "Security is baked into the process. I follow best practices for authentication, data encryption, API protection, and can also implement 2FA, audit logging, and GDPR-compliant features."
      },
      {
        "question": "Can you integrate third-party APIs into my SaaS?",
        "answer": "Absolutely. I regularly integrate APIs like OpenAI, Stripe, Google, Clerk, and custom CRMs to extend your product’s functionality."
      },
      {
        "question": "How do you handle communication during the project?",
        "answer": "I keep things async and transparent. You’ll get regular updates via Slack, Notion, Trello, or email — whatever works best for you."
      },
      {
        "question": "Can you help me launch and deploy the app?",
        "answer": "Yes — I handle full deployment on platforms like Vercel, Railway, or custom setups. I’ll help with domains, SSL, CI/CD, and everything needed to go live."
      },
      {
        "question": "What’s your typical development process?",
        "answer": "I follow a lean, agile workflow — starting with strategy and wireframes, then moving into design, development, and iterative feedback until launch."
      },
      {
        "question": "Do you help with MVPs?",
        "answer": "Definitely. I specialize in building lean MVPs that are fast, functional, and ready to validate your idea with real users."
      },
      {
        "question": "What are your payment terms?",
        "answer": "Typically, I work with a milestone-based payment structure — starting with a deposit, followed by payments tied to key project phases."
      },
      {
        "question": "Will I own the final product and code?",
        "answer": "Yes — once the project is complete and paid in full, you’ll have full ownership of the code and all associated assets."
      }
    ]
    
    

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
