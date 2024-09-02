import Image from 'next/image';
import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { useMousePosition } from '@/hooks/useMousePosition';

interface ProjectProps {
  name: string;
  description: string;
  iconList?: string[];
  image: string;
  tags?: string[];
  projectLink: string;
  pictureOnLeft?: boolean;
  shadowColor?: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, image, tags, projectLink, iconList = [], pictureOnLeft = false, shadowColor = 'rgba(0, 0, 0, 0.5)' }) => {
  const divRef = useRef<HTMLDivElement>(null);  // Ref for div
  const imgRef = useRef<HTMLImageElement>(null);  // Ref for Image
  const infoRef = useRef<HTMLDivElement>(null);  // Ref for info div

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    const offsetX = (infoRef.current?.offsetWidth || 0) / 2;
    const offsetY = (infoRef.current?.offsetHeight || 0) / 2;
    infoRef.current?.style.setProperty("--x", `${x - offsetX}px`);
    infoRef.current?.style.setProperty("--y", `${y - offsetY}px`);
  }, []);

  useMousePosition(divRef, update);

  return (
    <div className='w-full flex flex-col md:flex-row items-start justify-between mb-10 lg:mb-28'>
      <div className={`w-full md:w-1/3 flex justify-start ${pictureOnLeft ? 'md:order-1' : 'md:order-2'} order-1 relative group`}>
        <motion.div
          ref={divRef}
          className="relative rounded-lg overflow-hidden w-full h-auto"
          initial={{ opacity: 1 }}
        >
          <Link href={projectLink}>
            <Image
              ref={imgRef}  // Assign imgRef to the Image component
              alt={name}
              src={image}
              width={400}
              height={400}
              className="w-full h-full object-cover"
              style={{ boxShadow: `0 8px 16px ${shadowColor}` }}
            />

            {/* Cursor tracker with smooth transition */}
            <div
              ref={infoRef}
              style={{
                transform: "translate(var(--x), var(--y))",
              }}
              className="flex flex-row items-center pointer-events-none absolute left-0 top-0 z-50 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-white opacity-0 transition-opacity transform transition-transform ease-out duration-300 group-hover:opacity-100 space-x-1.5"
            >
              <span className='font-black text-base'>Visit Link</span>
              <Image src="/Arrow_Up_Right_SM.svg" alt="visit-link" width={32} height={32} />
            </div>

          </Link>
        </motion.div>
      </div>
      <div className={`w-full lg:w-2/3 flex flex-col ${pictureOnLeft ? 'lg:order-2 md:pl-16' : 'lg:order-1 lg:pr-16'} order-2 mt-4 lg:mt-0`}>
        <div className='font-bold text-xl lg:text-2xl mt-4 md:mt-0'>{name}</div>
        <div className='mt-4 md:mt-8 font-medium text-lg lg:text-xl text-gray-500 leading-7 lg:leading-9'>
          {description}
        </div>
        <div className='flex flex-row mt-6 space-x-3.5'>
          {iconList.map((icon, index) => (
            <div key={index} className='bg-[#0E0E0E] border border-[#303030] rounded-md w-full lg:w-14 h-11 flex items-center justify-center'>
              <Image src={icon} alt={`icon-${index}`} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
