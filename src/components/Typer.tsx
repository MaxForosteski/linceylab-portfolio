"use client"

import { ReactTyped } from "react-typed";

export default function Typer() {
    return (
        <div className="font-display text-white font-bold p-5 max-w-[90vw]">
            &gt;
            <ReactTyped
                strings={[
                    "Desenvolvendo software que impulsiona negócios.",
                    "Automatizando processos e integrando sistemas com propósito.",
                    "Transformo ideias em soluções digitais reais.",
                    "Do planejamento à entrega: cada detalhe importa."
                ]}
                typeSpeed={5}
                backSpeed={10}
                backDelay={5000}
                loop
                showCursor
                cursorChar="|"
            />
        </div>
    );
}