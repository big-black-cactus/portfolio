import Image from 'next/image';
import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { useMousePosition } from '@/hooks/useMousePosition';
import { ArrowRight } from 'lucide-react';

interface ProjectProps {
  name: string;
  description: string;
  iconList?: string[];
  logo: string;
  image: string;
  tags?: string[];
  projectLink: string;
  pictureOnLeft?: boolean;
  shadowColor?: string;
  index: number; // <-- Add this line
  isUnavailable?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  index,
  name,
  description,
  logo,
  image,
  tags,
  projectLink,
  iconList = [],
  pictureOnLeft = false,
  shadowColor = 'rgba(0, 0, 0, 0.5)',
  isUnavailable = false,
}) => {

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
    <>
      <div className='w-full flex flex-col md:flex-row items-start justify-between mb-6 lg:mb-12'>
        {/* <div className={`w-full md:w-5/12 flex justify-center ${pictureOnLeft ? 'md:order-1' : 'md:order-2'} order-1 relative group`}> */}
        <div className={`w-full md:w-7/12 flex justify-center relative group`}>
          <motion.div
            ref={divRef}
            className="relative rounded-lg overflow-hidden w-full h-auto cursor-none border border-stone-700"
            initial={{ opacity: 1 }}
          >
            {/* <Link href={projectLink} className='cursor-none' style={{ boxShadow: `0 8px 16px ${shadowColor}` }}>
              <Image
                ref={imgRef}  // Assign imgRef to the Image component
                alt={name}
                src={image}
                width={1000}
                height={1000}
                className="w-full h-full object-cover cursor-none"
                style={{ boxShadow: `0 8px 16px ${shadowColor}` }}
              />


              <div
                ref={infoRef}
                style={{
                  transform: "translate(var(--x), var(--y))",
                }}
                className="flex flex-row items-center pointer-events-none absolute left-0 top-0 z-50 rounded-md bg-black/70 px-4 py-2 text-sm font-bold text-white opacity-0 transition-opacity transform transition-transform ease-out duration-300 group-hover:opacity-100 space-x-1.5 backdrop-blur-sm cursor-none"
              >
                <span className='font-black text-[15px]'>VIEW PROJECT</span>

                <ArrowRight className='h-5 w-5 text-white' />
              </div>

            </Link> */}

            {isUnavailable ? (
              <div
                className=""
                style={{ boxShadow: `0 8px 16px ${shadowColor}` }}
              >
                <Image
                  ref={imgRef}
                  alt={name}
                  src={image}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  style={{ boxShadow: `0 8px 16px ${shadowColor}` }}
                />
                <div
                  ref={infoRef}
                  style={{
                    transform: "translate(var(--x), var(--y))",
                  }}
                  className="flex flex-row items-center pointer-events-none absolute left-0 top-0 z-50 rounded-md bg-black/70 px-4 py-2 text-sm font-bold text-white opacity-0 transition-opacity transform transition-transform ease-out duration-300 group-hover:opacity-100 space-x-1.5 backdrop-blur-sm"
                >
                  <span className="font-black text-[15px] ">IN PROGRESS</span>
                </div>
              </div>
            ) : (
              <Link
                href={projectLink}
                className="cursor-none"
                style={{ boxShadow: `0 8px 16px ${shadowColor}` }}
              >
                <Image
                  ref={imgRef}
                  alt={name}
                  src={image}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover cursor-none"
                  style={{ boxShadow: `0 8px 16px ${shadowColor}` }}
                />
                <div
                  ref={infoRef}
                  style={{
                    transform: "translate(var(--x), var(--y))",
                  }}
                  className="flex flex-row items-center pointer-events-none absolute left-0 top-0 z-50 rounded-md bg-black/70 px-4 py-2 text-sm font-bold text-white opacity-0 transition-opacity transform transition-transform ease-out duration-300 group-hover:opacity-100 space-x-1.5 backdrop-blur-sm cursor-none"
                >
                  <span className="font-black text-[15px]">VIEW PROJECT</span>
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </Link>
            )}
          </motion.div>
        </div>
        {/* <div className={`w-full lg:w-7/12 flex flex-col ${pictureOnLeft ? 'lg:order-2 md:pl-16' : 'lg:order-1 lg:pr-16'} order-2 mt-4 lg:mt-0`}> */}
        <div className={`w-full lg:w-6/12 flex flex-col lg:order-2 md:pl-10 mt-4 lg:mt-0`}>
          {/* <div className='font-bold text-xl lg:text-2xl mt-4 md:mt-0'>{name}</div> */}
          <div className='w-full flex flex-row items-center justify-between'>
            <div className='flex flex-row w-full items-center'>
              {/* <div className='size-8 rounded-md flex flex-center items-center bg-gray-900 mr-4'></div> */}
              <div className='w-8 h-8 mr-4 rounded-md overflow-hidden'>
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  width={32}
                  height={32}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='font-bold text-lg lg:text-[18px] mt-4 md:mt-0'>{name}</div>
            </div>

            <div className='font-bold text-lg lg:text-lg mt-4 md:mt-0'>
              {String(index).padStart(2, '0')}
            </div>
          </div>
          {/* <div className='mt-4 md:mt-6 font-medium text-lg lg:text-xl text-stone-600 leading-7 lg:leading-9'> */}
          <div className='mt-4 md:mt-6 font-medium text-md lg:text-lg text-stone-600 leading-7 lg:leading-[34px]'>
            {description}
          </div>
          {/* <div className='flex flex-row mt-6 space-x-3.5'>
            {iconList.map((icon, index) => (
              <div key={index} className='bg-[#090909] border border-[#272727] rounded-md w-full lg:w-14 h-11 flex items-center justify-center'>
                <Image src={icon} alt={`icon-${index}`} width={24} height={24} />
              </div>
            ))}
          </div> */}

          <div className='flex flex-row mt-6 space-x-3.5'>
            {iconList.map((icon, index) => (
              <div
                key={index}
                className='bg-[#090909] border border-[#272727] rounded-md w-full lg:w-14 h-11 flex items-center justify-center'
              >
                <Image
                  src={icon}
                  alt={`icon-${index}`}
                  width={24}
                  height={24}
                  // className='filter grayscale'
                  className='filter grayscale brightness-100 contrast-200'
                />
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="w-full h-[1px] bg-stone-900"></div></>
  );
}

export default Project;
