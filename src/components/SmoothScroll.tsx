"use client";
import React, { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis options={{ lerp: 0.02, duration: 1, }} root>
      {children}
    </ReactLenis>
  );
};

export default Lenis;