'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },  // Section starts hidden and offset downwards
    visible: { opacity: 1, y: 0 }, // Section transitions to visible with no offset
};

const itemVariants = {
    hidden: { opacity: 0, x: 0 },  // Items start hidden and offset to the right
    visible: { opacity: 1, x: 0 }, // Items transition to visible with no offset
};

export const Services = ({ id }: { id: string }) => {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { amount: 0.2 });

    return (
        <motion.div
            id={id}
            ref={sectionRef}
            className="min-h-screen bg-black flex flex-col lg:flex-row items-start px-7 sm:px-14 py-20"
            variants={sectionVariants}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <div className="text-2xl md:text-3xl pb-3 font-black text-left mb-24">
                Services.
            </div>
            <div className="flex flex-col">
                
                <motion.div
                    className="flex flex-col lg:flex-row"
                    variants={itemVariants}
                    initial="hidden"
                    animate={isSectionInView ? "visible" : "hidden"}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
                >
                    <div className="flex flex-col lg:ml-40">
                        <div className="text-2xl md:text-3xl font-medium">
                            UX/UI Design
                        </div>
                        <div className="text-lg md:text-xl font-medium text-gray-500 mt-4 leading-normal lg:leading-loose">
                            Crafting intuitive and engaging user experiences that enhance the usability and appeal of your digital products. We combine user-centered design principles with creative flair to produce interfaces that are not only beautiful but also functional and easy to navigate.
                        </div>
                    </div>

                    <div className="flex flex-col mt-20 lg:mt-0 lg:ml-16">
                        <div className="text-2xl md:text-3xl font-medium">
                            Frontend Development
                        </div>
                        <div className="text-lg md:text-xl font-medium text-gray-500 mt-4 leading-normal lg:leading-loose">
                            Bringing your design to life with clean, efficient code. We specialize in creating responsive, interactive, and user-friendly web interfaces that perform seamlessly across all devices. Using the latest technologies, we ensure your website looks great and functions flawlessly.
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col lg:flex-row mt-20"
                    variants={itemVariants}
                    initial="hidden"
                    animate={isSectionInView ? "visible" : "hidden"}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                >
                    <div className="flex flex-col lg:ml-40">
                        <div className="text-2xl md:text-3xl font-medium">
                            AI Development
                        </div>
                        <div className="text-lg md:text-xl font-medium text-gray-500 mt-4 leading-normal lg:leading-loose">
                            Leveraging cutting-edge machine learning and artificial intelligence technologies to create smart, automated solutions that drive efficiency and innovation. From predictive analytics to natural language processing, we develop AI applications tailored to meet your unique business needs.
                        </div>
                    </div>

                    <div className="flex flex-col mt-20 lg:mt-0 lg:ml-16">
                        <div className="text-2xl md:text-3xl font-medium">
                            Full Stack Development
                        </div>
                        <div className="text-lg md:text-xl font-medium text-gray-500 mt-4 leading-normal lg:leading-loose">
                            Offering comprehensive solutions for both frontend and backend development. We build robust, scalable, and secure web applications that cover all aspects of the development process, from database management to server-side logic, ensuring a seamless and integrated digital experience.
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
