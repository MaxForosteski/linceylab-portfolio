import SectionDiv from "@/components/SectionDiv";
import SectionBody from "@/components/SectionBody";
import Title from "@/components/Title";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export default function Contact() {
    return (
        <SectionDiv bgIsBlue={true}>
            <Title text="Contatos" />
            <SectionBody>
                <div className="flex flex-col w-full items-center">
                    <div className="flex mt-20 w-full justify-center items-center">
                        <p className="text-center text-2xl font-display">Pronto para levar o seu negócio para o próximo nível? Vamos conversar sobre como aplicar tecnologia de forma inteligente no seu negócio.</p>
                    </div>
                    <div className="w-full mt-40 mb-20 pl-[10%] pr-[10%] flex justify-between">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=max.forosteski.dev@gmail.com" target="_blank"><SiGmail className="text-8xl" /></a>
                        <a href="https://github.com/MaxForosteski" target="_blank"><FaGithub className="text-8xl" /></a>
                        <a href="https://wa.me/5549998240607" target="_blank"><FaWhatsapp className="text-8xl" /></a>
                        <a href="https://www.linkedin.com/in/maxforosteski/" target="_blank"><FaLinkedin className="text-8xl" /></a>
                        <a href=""><IoLogoInstagram className="text-8xl" /></a>
                    </div>
                </div>
            </SectionBody>
        </SectionDiv>
    );
}