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
                <div className=" flex flex-col lg:flex-row justify-center items-center">
                    <div className="flex justify-center items-center">
                        <div className="relative w-[280px] h-[280px] rounded-3xl xl:w-[400px] xl:h-[400px] lg:rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/foto-perfil.jpg"
                                alt="Foto de perfil"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="555px"
                                priority
                            />
                        </div>
                    </div>

                    <p className="flex w-[100%] mt-[3rem] px-5 items-center justify-center text-md lg:pl-20 lg:text-xl xl:text-xl text-justify font-sans">
                        Meu nome é Max Forosteski, sou desenvolvedor de software e há mais de 4 anos ajudo empresas a crescer e se destacar com tecnologia.
                        Acredito que uma solução bem planejada e orientada à estratégia é capaz de transformar qualquer negócio.
                        Para mim, entender profundamente os processos e alinhar esse conhecimento à tecnologia certa é o que torna possível resolver desafios reais de forma inteligente e duradoura.
                    </p>
                </div>
            </SectionBody>

            <div className="flex justify-center my-[50px]">
                <CtaButton text="Deseja automatizar tarefas do dia a dia? Entre em contato agora mesmo!" />
            </div>
        </SectionDiv>
    );
}
