"use client";
import { JSX } from "react";

type LanguageCardProps = {
  title: string;
  icon: JSX.Element;
};

export default function HabilityCard({ title, icon }: LanguageCardProps) {
  return (
    <div className="relative w-64 h-46 mr-5 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer group font-display">
      <div className="text-5xl text-white">
        {icon}
      </div>

      <div className="absolute text-xl inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg text-center p-2">
        {title}
      </div>
    </div>
  );
}
