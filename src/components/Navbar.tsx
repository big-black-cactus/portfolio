"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-40 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white py-8 "
      initial={{ opacity: 0 }} // Start with opacity at 0
      animate={{ opacity: 1 }} // Fade to full opacity
      transition={{ duration: 3, ease: "easeInOut" }} // Control animation duration and easing
    >
      <div className="mx-auto relative flex items-center px-7 sm:px-14">
        <Image
          alt="Antonenko"
          src="/avatar.jpg"
          width={40}
          height={40}
          className="rounded-full shadow-lg"
        />
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-base ">
          <Link href="#hero" className="text-gray-500 cursor-hidden">
            Home
          </Link>
          <Link href="#projects" className="text-gray-500 cursor-hidden">
            Work
          </Link>
          <Link href="#services" className="text-gray-500 cursor-hidden">
            Service
          </Link>
        </div>
        <div className="flex items-center space-x-6 ml-auto">
          <Image
            src={"/Menu_Duo_LG.svg"}
            alt={`icon-Menu_Duo_LG`}
            width={28}
            height={28}
            className="flex md:hidden cursor-pointer"
          />
          {/* <Button
            className="hidden md:flex z-50 px-0 text-white hover:text-gray-500 text-base font-semibold underline cursor-pointer"
            variant={"link"}
          >
            Get In Touch
          </Button> */}
          <a
            href="mailto:artyomantonenko@gmail.com"
            className="hidden md:flex z-50 px-0 text-white hover:text-gray-500 text-base font-semibold underline cursor-pointer transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
