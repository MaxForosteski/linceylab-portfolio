import { FaWhatsapp } from "react-icons/fa";

type CtaButtonProps = {
    text: string
}

export default function CtaButton({ text }: CtaButtonProps) {
    return (
        <a className="flex bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex justify-center items-center text-4xl"><FaWhatsapp /></div>
            <p className="font-display flex justify-center items-center ml-[5px]">{text}</p>
        </a>
    );
}