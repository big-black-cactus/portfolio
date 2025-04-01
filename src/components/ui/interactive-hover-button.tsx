// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface InteractiveHoverButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   text?: string;
// }

// const InteractiveHoverButton = React.forwardRef<
//   HTMLButtonElement,
//   InteractiveHoverButtonProps
// >(({ text = "Let's Talk", className, ...props }, ref) => {
//   return (
//     <button
//       ref={ref}
//       className={cn(
//         "group relative cursor-pointer overflow-hidden rounded-full border bg-background text-center font-semibold border-stone-800 bg-transparent px-8 py-7 text-xl font-bold transition-colors duration-300 ease-in hover:border-stone-500 hover:bg-stone-900/60",
//         className,
//       )}
//       {...props}
//     >
//       <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
//         {text}
//       </span>
//       <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
//         <span>{text}</span>
//         <ArrowRight />
//       </div>
//       <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
//     </button>
//   );
// });

// InteractiveHoverButton.displayName = "InteractiveHoverButton";

// export default InteractiveHoverButton;



import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

// const InteractiveHoverButton = React.forwardRef<
//   HTMLButtonElement,
//   InteractiveHoverButtonProps
// >(({ text = "Let's Talk", className, ...props }, ref) => {
//   return (
//     <button
//       ref={ref}
//       className={cn(
//         "group relative w-44 md:w-52 h-16 md:h-20 cursor-pointer overflow-hidden rounded-full border p-2 text-center border-stone-800 bg-transparent text-lg md:text-xl font-bold transition-colors duration-300 ease-in hover:border-stone-500 hover:bg-stone-900/60",
//         className,
//       )}
//       {...props}
//     >
//       <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
//         {text}
//       </span>
//       <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
//         <span>{text}</span>
//         <ArrowRight />
//       </div>
//       <div className="absolute left-[20%] top-[46%] h-2 w-2 scale-[1] rounded-lg bg-white transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>
//     </button>
//   );
// });

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Build your MVP", className, ...props }, ref) => {
  return (
    <a href="https://cal.com/artyom-antonenko/30min">
      <button
        ref={ref}
        className={cn(
          "group relative w-44 md:w-56 h-16 md:h-20 cursor-pointer overflow-hidden rounded-full border p-2 text-center border-stone-800 bg-transparent text-lg md:text-xl font-bold transition-colors duration-300 ease-in hover:border-stone-500 hover:bg-stone-900/60",
          className,
        )}
        {...props}
      >
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight />
        </div>
        <div className="absolute left-[11%] top-[46%] h-2 w-2 scale-[1] rounded-lg bg-white transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>
      </button>
    </a>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
