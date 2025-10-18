"use client";
import { JSX } from "react";

type LanguageCardProps = {
  title: string;
  icon: JSX.Element;
};

export default function HabilityCard({ title, icon }: LanguageCardProps) {
  return (
    <div className="relative w-28 h-22 md:w-38 md:h-32 lg:w-42 lg:h-36 xl:w-50 xl:h-42 2xl:w-60 2xl:h-50 mr-3 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer group font-display">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center text-5xl 2xl:text-6xl text-white">
          {icon}
        </div>
        <div className="text-sm xl:text-lg 2xl:text-2xl mt-2 text-center text-white flex justify-center ">
          {title}
        </div>
      </div>


      <div className="absolute text-xl inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg text-center p-2">
        {title}
      </div>
    </div>
  );
}
