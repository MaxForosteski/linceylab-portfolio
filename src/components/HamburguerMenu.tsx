"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function HamburguerMenu() {
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (open && panelRef.current && !panelRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        function handleEsc(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [open]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div className="relative">
            <button
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
                className="fixed top-[5px] left-[5px] z-50 inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-neutral-900 text-white"
            >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                        className={`transition-transform duration-200 ${open ? "transform rotate-45 translate-y-[2px]" : ""}`}
                        d="M4 6h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        className={`transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
                        d="M4 12h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        className={`transition-transform duration-200 ${open ? "transform -rotate-45 -translate-y-[2px]" : ""}`}
                        d="M4 18h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            <div
                className={`fixed inset-0 bg-black/40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                aria-hidden={!open}
                onClick={() => setOpen(false)}
            />

            <nav
                id="mobile-menu"
                ref={panelRef}
                className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-white shadow-2xl z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
                aria-hidden={!open}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <a className="flex flex-row" href="#hero" aria-label="Mover para seção de hero" onClick={() => setOpen(false)} >
                        <Image
                            src={"/logo-completa.png"}
                            alt="Logo completa da Lincey Lab"
                            className="rounded-xl"
                            width={50}
                            height={50}
                        />
                        <p className="text-lg font-display font-semibold ml-3 flex justify-center items-center">Lincey Lab</p>
                    </a>
                    <button
                        aria-label="Fechar menu"
                        onClick={() => setOpen(false)}
                        className="p-2 text-xl text-red-500 font-bold rounded-md hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        ✕
                    </button>
                </div>

                <ul className="p-4 space-y-1 font-display">
                    <>
                        <li>
                            <a className="block px-4 py-2 rounded hover:bg-neutral-100" href="#about" aria-label="Mover para seção de sobre nós" onClick={() => setOpen(false)}>
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 rounded hover:bg-neutral-100" href="#projects" aria-label="Mover para seção de projetos" onClick={() => setOpen(false)}>
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 rounded hover:bg-neutral-100" href="#contributes" aria-label="Mover para seção de contribuições" onClick={() => setOpen(false)}>
                                Contribuições
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 rounded hover:bg-neutral-100" href="#services" aria-label="Mover para seção de serviços" onClick={() => setOpen(false)}>
                                Serviços
                            </a>
                        </li>

                        <li>
                            <a className="block px-4 py-2 rounded hover:bg-neutral-100" href="#habilities" aria-label="Mover para seção de habilidades" onClick={() => setOpen(false)}>
                                Habilidades
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 rounded hover:bg-neutral-100" href="#contact" aria-label="Mover para seção de contato" onClick={() => setOpen(false)}>
                                Contato
                            </a>
                        </li>
                    </>
                </ul>
            </nav>
        </div>
    );
}
