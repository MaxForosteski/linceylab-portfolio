"use client"

import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import Typer from "@/components/Typer";
import CtaButton from "@/components/CtaButton";

export default function Header() {
    return (
        <>
            <HeaderBackground />
            <div className="fixed inset-0 z-0 bg-blue-700 opacity-50"></div>

            <div className="fixed inset-0 z-10 flex flex-col justify-between h-screen">
                <div className="flex justify-center pt-[5%]">  
                    <Image
                        src={'/logo-completa.png'}
                        alt="Logo Lincey Lab completa"
                        width={500}
                        height={500}
                        style={{borderRadius : 100 + "px"}}
                    />
                </div>
                <div className="flex items-center justify-center h-full">
                    <Typer />
                </div>

                <div className="flex justify-center pb-16">
                    <CtaButton text="Solicite seu orçamento agora mesmo" />    
                </div>
            </div>
        </>
    );
}