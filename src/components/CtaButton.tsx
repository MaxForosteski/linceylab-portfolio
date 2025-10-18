import { FaWhatsapp } from "react-icons/fa";

type CtaButtonProps = {
    text: string
}

export default function CtaButton({ text }: CtaButtonProps) {
    return (
        <a 
            href="https://wa.me/5549998240607"
            target="_blank"
            className="flex max-w-[90vw] bg-green-800 hover:bg-green-900 text-white font-bold px-2 py-3 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-6 lg:py-3 xl:px-6 xl:py-3 2xl:px-6 2xl:py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Entrar em contato com Max Forosteski pelo Whatsapp"
        >
            <div className="flex justify-center items-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl"><FaWhatsapp /></div>
            <p className="font-display flex justify-center text-center items-center ml-[5px] sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg">{text}</p>
        </a>
    );
}