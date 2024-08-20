'use client'

import { motion, useInView } from "framer-motion";
import Project from "./Project";
import { useRef } from "react";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },  // Start section hidden and offset downwards
    visible: { opacity: 1, y: 0 }, // Transition to visible with no vertical offset
};

const projectVariants = {
    hidden: { opacity: 0, y: 20 }, // Start projects hidden and slightly offset downwards
    visible: { opacity: 1, y: 0 }, // Transition to visible with no vertical offset
};

export const Projects = ({ id }: { id: string }) => {
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { amount: 0.1 });

    const project1Ref = useRef(null);
    const project2Ref = useRef(null);

    const project1InView = useInView(project1Ref, { amount: 0.2 });
    const project2InView = useInView(project2Ref, { amount: 0.2 });

    return (
        <motion.div
            id={id}
            ref={sectionRef}
            className="min-h-screen bg-black flex flex-col items-start justify-center px-7 sm:px-14 py-20"
            variants={sectionVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            transition={{ duration: 2, ease: "easeInOut" }}
        >
            <div className="text-2xl lg:text-3xl pb-3 font-black text-left mb-10 lg:mb-24">
                My Projects.
            </div>

            <motion.div
                ref={project1Ref}
                className="mb-20"
                variants={projectVariants}
                initial="hidden"
                animate={project1InView ? "visible" : "hidden"}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }} // Slight delay for staggering effect
            >
                <Project 
                    name="Sales AI"
                    description="The web application is designed to streamline and automate the lead generation process on LinkedIn. Users can add their products or services to the platform, where a trained bot will assist in crafting personalized messages. By simply entering a LinkedIn profile URL, users receive several tailored message variations specifically designed for the targeted individual. This innovative tool not only saves time but also enhances the effectiveness of outreach by leveraging personalized communication strategies."
                    image="/SalesAI.jpg"
                    shadowColor="#4E1CDB"
                    iconList={["/postgresql.svg", "/nextjs.svg", "/openai.svg", "/postman.svg", "/js.svg"]}
                />
            </motion.div>

            <motion.div
                ref={project2Ref}
                className="mb-20"
                variants={projectVariants}
                initial="hidden"
                animate={project2InView ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} // Staggered delay for cascading effect
            >
                <Project 
                    name="Pilser"
                    description="The web application helps organizations and companies assess physical security, risk management, safety, quality control, and cyber security. Users can leverage premade professional templates, customize existing templates, or create their own to suit specific needs. Beyond assessments, the platform also offers powerful tools for analytics and task management. These features enable users to gain valuable insights from their data, track progress, assign tasks, and ensure that all aspects of their operations are running smoothly and efficiently."
                    image="/Pilser.jpg"
                    pictureOnLeft={true}
                    shadowColor="#1063FF"
                    iconList={["/supabase.svg", "/nextjs.svg", "/prisma.svg", "/pwa.svg", "/typescript.svg"]}
                />
            </motion.div>
        </motion.div>
    );
}
