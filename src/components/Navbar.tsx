"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Navbar = React.memo(() => {
  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-40 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white py-8"
      initial={{ opacity: 0 }} // Start with opacity at 0
      animate={{ opacity: 1 }} // Fade to full opacity
      transition={{ duration: 3, ease: "easeInOut" }} // Control animation duration and easing
    >
      <div className="mx-auto relative flex items-center px-7 sm:px-14">
        <Image
          alt="Antonenko"
          src="/avatar.jpg"
          width={44}
          height={44}
          className="rounded-full shadow-lg"
          loading="lazy" // Lazy load the image
          priority={false}
        />
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-base">
          {['Home', 'Projects', 'Services'].map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{
                rest: { scale: 1, rotate: 0, color: "#9CA3AF" }, // Default gray-500 color
                hover: {
                  scale: 1.1,
                  rotate: 3,
                  color: "#FFFFFF",
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                },
              }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="cursor-none text-stone-700 hover:text-white transition-colors duration-1000"
                scroll={false}
              >
                {item}
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-white"
                variants={{
                  hover: {
                    width: '100%',
                    transition: {
                      duration: 0.6,
                      ease: 'easeInOut'
                    }
                  },
                  rest: { width: 0 },
                }}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center space-x-6 ml-auto">
          <Image
            src={"/Menu_Duo_LG.svg"}
            alt={`icon-Menu_Duo_LG`}
            width={28}
            height={28}
            className="flex md:hidden cursor-pointer"
            loading="lazy"
          />
          <a
            href="mailto:artyomantonenko@gmail.com"
            className="cursor-none hidden md:flex z-50 px-0 text-white hover:text-gray-500 text-base font-semibold underline transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
});

Navbar.displayName = "Navbar"; // Set the display name
