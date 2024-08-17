import Image from 'next/image';
import React from 'react';

interface ProjectProps {
  name: string;
  description: string;
  iconList?: string[];
  image: string;
  tags?: string[];
  pictureOnLeft?: boolean;
  shadowColor?: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, image, tags, iconList = [], pictureOnLeft = false, shadowColor = 'rgba(0, 0, 0, 0.5)' }) => {
  return (
    <div className='w-full flex flex-col md:flex-row items-start justify-between mb-28'>
      <div className={`w-full md:w-1/3 flex justify-start ${pictureOnLeft ? 'md:order-1' : 'md:order-2'} order-1`}>
        <Image
          alt={name}
          src={image}
          width={400}
          height={400}
          className="rounded-lg w-full h-auto"
          style={{ objectFit: 'cover', boxShadow: `0 8px 16px ${shadowColor}` }}
        />
      </div>
      <div className={`w-full lg:w-2/3 flex flex-col ${pictureOnLeft ? 'lg:order-2 md:pl-16' : 'lg:order-1 lg:pr-16'} order-2 mt-4 lg:mt-0`}>
        <div className='font-bold text-xl lg:text-2xl mt-4 md:mt-0'>{name}</div>
        <div className='mt-6 md:mt-8 font-medium text-lg lg:text-xl text-gray-500 leading-7 lg:leading-9'>
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
