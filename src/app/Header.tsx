"use client"

import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import Typer from "@/components/Typer";
import CtaButton from "@/components/CtaButton";

export default function Header() {
    return (
        <div className="relative h-[93vh] sm:h-[91vh] md:h-[91vh] lg:h-[91vh] xl:h-[92vh] 2xl:h-[95vh]" id="hero">
            <HeaderBackground />
            <div className="absolute inset-0 z-0 bg-blue-700 opacity-50"></div>

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-center pt-[20px] xl:pt-[40px] 2xl:pt-[50px]">  
                    <Image
                        src={'/logo-completa.png'}
                        alt="Logo Lincey Lab completa"
                        width={500}
                        height={500}
                        className="rounded-4xl w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[270px] md:h-[270px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[350px] 2xl:h-[350px] "
                        priority
                        fetchPriority="high"
                    />
                </div>
                <div className="flex items-center justify-center flex-1 text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    <Typer />
                </div>

                <div className="flex justify-center pb-16">
                    <CtaButton text="Solicite seu orçamento agora mesmo" />    
                </div>
            </div>
        </div>
    );
}