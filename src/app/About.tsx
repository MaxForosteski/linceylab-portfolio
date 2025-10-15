import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import Title from "@/components/Title";
import SectionDiv from "@/components/SectionDiv";
import SectionBody from "@/components/SectionBody";

export default function About() {
    return (
        <SectionDiv bgIsBlue={false}>
            <Title text="Sobre mim" />
            <SectionBody>
                <Image
                    src={"/foto-perfil.jpg"}
                    alt="Foto de perfil"
                    width={400}
                    height={400}
                    style={{borderRadius: 100 + '%'}}
                />

                <p className="flex p-[100px] items-center text-4xl text-justify font-sans">
                    Meu nome é Max Forosteski, sou desenvolvedor de software e há mais de 4 anos ajudo empresas a crescer e se destacar com tecnologia.
                    Acredito que uma solução bem planejada e orientada à estratégia é capaz de transformar qualquer negócio.
                    Para mim, entender profundamente os processos e alinhar esse conhecimento à tecnologia certa é o que torna possível resolver desafios reais de forma inteligente e duradoura.
                </p>
            </SectionBody>
            <div className="flex justify-center mt-[50px]">
                <CtaButton text="Deseja automatizar tarefas do dia a dia? Entre em contato agora mesmo!" />
            </div>
        </SectionDiv>
    );
}