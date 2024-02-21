import Image from "next/image";
import React from "react";

interface ImageProps {
  img: string;
  title: string;
  contents: string;
}

const SkillCard = ({ img, title, contents }: ImageProps) => {
  return (
    <div className=" border-amber-400 border-4 rounded-2xl flex flex-col items-center p-3 sm:p-4 md:p-5  hover:scale-105 transition-all duration-300 ease-in-out max-h-80 w-full text-white ">
      <Image
        src={`/images/${img}`}
        alt=""
        height={50}
        width={50}
        className="sm:mb-2 lg:mb-3 w-5 h-5 sm:w-[50px] sm:h-[50px]"
      />
      <span className=" sm:font-bold sm:text-lg sm:mb-2 lg:mb-3">{title}</span>
      <span className=" sm:font-bold sm:text-lg">{contents}</span>
    </div>
  );
};

export default SkillCard;
