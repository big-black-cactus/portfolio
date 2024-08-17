import React from "react";
import { motion } from "framer-motion";

export const StatusIndicator = () => {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <motion.div
        className="rounded-full bg-[#29EB25] h-2 w-2"
        animate={{
          boxShadow: [
            "0px 0px 0px rgba(0, 0, 0, 0.2)",   // Start with no shadow
            "0px 4px 8px rgba(0, 0, 0, 0.3)",  // Grow shadow
            "0px 0px 0px rgba(0, 0, 0, 0.2)",   // Return to no shadow
          ],
        }}
        transition={{
          duration: 2, // Duration of the shadow animation cycle
          ease: "easeInOut", // Smooth easing
          repeat: Infinity, // Repeat infinitely
          repeatType: "loop", // Loop the animation
        }}
      />
      <div>Available for work</div>
    </div>
  );
};

export default StatusIndicator;
