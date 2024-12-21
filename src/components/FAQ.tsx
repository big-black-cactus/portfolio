'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { ChevronRight } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },  // Section starts hidden and offset downwards
    visible: { opacity: 1, y: 0 }, // Section transitions to visible with no offset
};

const itemVariants = {
    hidden: { opacity: 0, x: 0 },  // Items start hidden and offset to the right
    visible: { opacity: 1, x: 0 }, // Items transition to visible with no offset
};




export const FAQ = ({ id }: { id: string }) => {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { amount: 0.2 });

    const faqs = [
        {
            question: "What is the primary benefit of using our SaaS?",
            answer: "Our platform simplifies your workflow by automating key tasks and integrating seamlessly with your existing tools."
        },
        {
            question: "How does the pricing structure work?",
            answer: "We offer flexible pricing plans based on your usage, with a free trial period to test all the features before committing."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 14-day free trial with access to all premium features, so you can explore the full potential of our platform."
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Absolutely! You can cancel your subscription anytime, and there are no hidden fees or penalties."
        },
        {
            question: "What kind of support do you offer?",
            answer: "We provide 24/7 customer support through live chat, email, and phone, with a dedicated account manager for premium customers."
        }
    ];    


    return (
        <motion.div
            id={id}
            ref={sectionRef}
            className="min-h-screen bg-black flex flex-col lg:flex-col items-start justify-center my-auto px-7 sm:px-14 py-20"
            variants={sectionVariants}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <div className="text-2xl md:text-3xl pb-3 font-black text-left mb-10 lg:mb-10 lg:pt-3">
                General Questions.
            </div>

            <Accordion
        className='flex w-full ml-0 flex-col divide-y divide-zinc-800'
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        variants={{
          expanded: {
            opacity: 1,
            scale: 1,
          },
          collapsed: {
            opacity: 0,
            scale: 0.7,
          },
        }}
      >
        {faqs.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="py-3">
            <AccordionTrigger className="w-full py-5 text-xl md:text-2xl text-left text-zinc-50">
                <div className="flex items-center">
                <ChevronRight className="h-7 w-7 transition-transform duration-200 group-data-[expanded]:rotate-90 text-zinc-50" />
                <div className="ml-2 text-zinc-50">
                    {item.question}
                </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
                <p className="text-lg md:text-xl text-left pl-10 pr-2 pb-4 text-zinc-600 leading-7">
                {item.answer}
                </p>
            </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>


        </motion.div>
    );
}
