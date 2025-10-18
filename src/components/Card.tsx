"use client"

import { useState } from "react";
import Image from "next/image";

type CardProps = {
    title: string;
    business: string;
    urlImage: string;
    description: string;
    mainLink?: string;
    mentions?: string[];
};

export default function Card({ title, urlImage, description, mainLink, mentions, business }: CardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="relative flex justify-center w-[75%] sm:w-[60%] md:w-[80%] lg:w-[100%] 2xl:w-110 h-100 2xl:w-105 2xl:h-130 bg-black rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                    backgroundImage: `url(${urlImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <span className="w-full flex items-end justify-center p-10">
                    <h2 className="text-2xl text-white text-center font-semibold font-display">
                        {title}
                    </h2>
                </span>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-4xl h-[100%] w-[100%] sm:h-auto p-1 sm:w-[90%] lg:w-[80%] xl:p-4  relative shadow-2xl overflow-x-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="fixed sm:absolute text-red-500 text-3xl top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>
                        <div className="flex flex-col xl:flex-row xl:h-[100%]">
                            <Image
                                src={urlImage}
                                alt={title}
                                className="rounded-lg w-[100%] h-[200px] xl:h-[100%] xl:w-[40%] 2xl:w-[25%] xl:h-auto bg-black mb-4 object-contain p-5"
                                width={500}
                                height={500}
                            />


                            <div className="p-2">
                                <h2 className="text-3xl lg:text-3xl font-display text-black font-bold mb-1">{title}</h2>
                                <h3 className="text-md lg:text-xl font-display font-light text-black mb-2">{business}</h3>
                                <p className="text-gray-700 lg:text-lg font-sans mb-4 text-black text-justify">{description}</p>
                                <p className="text-black text-sm font-display break-all lg:text-lg">
                                    Link:
                                    {mainLink ? (<a
                                        href={mainLink}
                                        target="_blank"
                                        className="text-blue-600 font-semibold hover:underline mb-4 block"
                                    >
                                        {mainLink}
                                    </a>) : "(Detalhes técnicos e código mantidos sob confidencialidade contratual.)"}
                                </p>


                                {mentions && mentions.length > 0 && (
                                    <div className="mt-4 font-display break-all">
                                        <h3 className="text-xl text-black font-semibold mb-2">Menções:</h3>
                                        <ul className="list-disc pl-5 text-gray-600 ">
                                            {mentions.map((link, i) => (
                                                <li key={i}>
                                                    <a href={link} target="_blank" className="hover:underline xl:text-lg">
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
