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
                className="relative flex justify-center w-105 h-130 bg-black rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                    backgroundImage: `url(${urlImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <span className="w-full flex items-end justify-center p-10">
                    <h2 className="text-4xl text-white text-center font-semibold font-display">
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
                        className="bg-white rounded-2xl max-w-3xl w-[100%] p-6 relative shadow-2xl p-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>
                        <div className="flex flex-row">
                            <Image
                                src={urlImage}
                                alt={title}
                                className="rounded-lg w-40 bg-black mb-4 object-contain p-5"
                                width={500}
                                height={500}
                            />


                            <div className="pl-10">
                                <h2 className="text-3xl font-display text-black font-bold mb-2">{title}</h2>
                                <h3 className="text-2xl font-display font-light text-black mb-5 mt-3">{business}</h3>
                                <p className="text-gray-700 font-sans mb-4 text-black text-justify">{description}</p>
                                <p className="text-black font-display">
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
                                    <div className="mt-4 font-display">
                                        <h3 className="text-lg text-black font-semibold mb-2">Menções:</h3>
                                        <ul className="list-disc pl-5 text-gray-600 ">
                                            {mentions.map((link, i) => (
                                                <li key={i}>
                                                    <a href={link} target="_blank" className="hover:underline">
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
