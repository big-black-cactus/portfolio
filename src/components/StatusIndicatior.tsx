import React from "react";
import { motion } from "framer-motion";

export const StatusIndicator = () => {
  return (
    <div className="hidden md:flex items-center space-x-3">
      {/* <motion.div
        className="animate-ping rounded-full bg-[#29EB25] h-2 w-2"

        transition={{
          duration: 2, // Duration of the shadow animation cycle
          ease: "easeInOut", // Smooth easing
          repeat: Infinity, // Repeat infinitely
          repeatType: "loop", // Loop the animation
        }}
      /> */}
      <div className="flex justify-center">
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#29EB25] opacity-75"
          ></span>
          <span
            className="relative inline-flex h-2 w-2 rounded-full bg-[#29EB25]"
          ></span>
        </span>
      </div>
      <div>Available for work</div>
    </div>
  );
};

export default StatusIndicator;
