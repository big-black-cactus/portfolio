// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import React from "react";

// export const Navbar = React.memo(() => {
//   return (
//     <motion.nav
//       className="w-full fixed top-0 left-0 z-40 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white py-8"
//       initial={{ opacity: 0 }} // Start with opacity at 0
//       animate={{ opacity: 1 }} // Fade to full opacity
//       transition={{ duration: 3, ease: "easeInOut" }} // Control animation duration and easing
//     >
//       <div className="mx-auto relative flex items-center px-5 md:px-14">
//         <Image
//           alt="Antonenko"
//           src="/avatar.png"
//           width={44}
//           height={44}
//           className="rounded-full shadow-lg"
//           loading="lazy" // Lazy load the image
//           priority={false}
//         />
//         <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-base">
//           {['Home', 'Projects', 'Services'].map((item, index) => (
//             <motion.div
//               key={index}
//               className="relative group"
//               whileHover="hover"
//               initial="rest"
//               animate="rest"
//               variants={{
//                 rest: { scale: 1, rotate: 0, color: "#9CA3AF" }, // Default gray-500 color
//                 hover: {
//                   scale: 1.1,
//                   rotate: 3,
//                   color: "#FFFFFF",
//                   transition: {
//                     duration: 0.6,
//                     ease: "easeInOut"
//                   }
//                 },
//               }}
//             >
//               <Link
//                 href={`#${item.toLowerCase()}`}
//                 className="cursor-none text-stone-700 hover:text-white transition-colors duration-1000"
//                 scroll={false}
//               >
//                 {item}
//               </Link>
//               <motion.div
//                 className="absolute bottom-0 left-0 h-0.5 bg-white"
//                 variants={{
//                   hover: {
//                     width: '100%',
//                     transition: {
//                       duration: 0.6,
//                       ease: 'easeInOut'
//                     }
//                   },
//                   rest: { width: 0 },
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//         <div className="flex items-center space-x-6 ml-auto">
//           <Image
//             src={"/Menu_Duo_LG.svg"}
//             alt={`icon-Menu_Duo_LG`}
//             width={28}
//             height={28}
//             className="flex md:hidden cursor-pointer"
//             loading="lazy"
//           />
//           <a
//             // href="mailto:artyomantonenko@gmail.com"
//             // href="https://calendly.com/artyomantonenko/30min"
//             href="https://cal.com/artyom-antonenko/30min"
//             className="cursor-none hidden md:flex z-50 px-0 text-white hover:text-gray-500 text-base font-semibold underline transition-colors duration-300"
//           >
//             Book a call
//           </a>
//         </div>
//       </div>
//     </motion.nav>
//   );
// });

// Navbar.displayName = "Navbar"; // Set the display name


'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, Menu } from 'lucide-react';

export const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Projects', 'Services'] as const;

  const overlayVariants: Variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <>
      <motion.nav
        className="w-full fixed top-0 left-0 z-40 bg-black bg-opacity-50 backdrop-blur-lg text-white py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      >
        <div className="mx-auto relative flex items-center px-5 md:px-14">
          <Image
            alt="Antonenko"
            src="/avatar.png"
            width={44}
            height={44}
            className="rounded-full shadow-lg"
            loading="lazy"
          />

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-base">
            {navItems.map((item) => (
              <motion.div
                key={item}
                className="relative group"
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { scale: 1, rotate: 0, color: '#9CA3AF' },
                  hover: {
                    scale: 1.1,
                    rotate: 3,
                    color: '#FFFFFF',
                    transition: { duration: 0.6, ease: 'easeInOut' },
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
                      transition: { duration: 0.6, ease: 'easeInOut' },
                    },
                    rest: { width: 0 },
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-6 ml-auto">
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex md:hidden p-2 text-white focus:outline-none"
            >
              {/* {isOpen ? <X size={28} /> : <Menu size={28} />} */}
              <Menu size={28} />
            </button>
            <a
              href="https://cal.com/artyom-antonenko/30min"
              className="cursor-none hidden md:flex z-50 text-white hover:text-gray-500 text-base font-semibold underline transition-colors duration-300"
            >
              Book a call
            </a>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center px-8"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* ← Close button added here */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2 focus:outline-none"
            >
              <X size={28} />
            </button>

            <motion.ul
              className="space-y-6 text-2xl text-center"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <Link
                    href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                    scroll={false}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 cursor-pointer hover:underline"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <a
                  href="https://cal.com/artyom-antonenko/30min"
                  className="block py-2 underline"
                  onClick={() => setIsOpen(false)}
                >
                  Book a call
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = 'Navbar';
