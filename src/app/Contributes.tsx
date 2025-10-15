import SectionDiv from "@/components/SectionDiv";
import SectionBody from "@/components/SectionBody";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardList from "@/components/CardList";
import CtaButton from "@/components/CtaButton";

export default function Contributes() {
    return (
        <SectionDiv bgIsBlue={false}>
            <Title text="Contribuições e Manutenções" />
            <SectionBody>
                <CardList>
                    <Card 
                        title="SGF" 
                        business="Adami S.A"
                        urlImage="/sgf-logo.png" 
                        description="Sistema desenvolvido para gerenciar as operações da unidade florestal da empresa, integrando módulos web e mobile com sincronização sob demanda. A solução foi projetada para centralizar informações, otimizar o fluxo de trabalho em campo e garantir acesso confiável aos dados, mesmo em áreas com conectividade limitada."
                    />

                    <Card 
                        title="Fusion" 
                        business="Neomind"
                        urlImage="/fusion-logo.png" 
                        description="Sistema desenvolvido para gerenciar documentos e processos internos da empresa, oferecendo módulos integrados de assinatura digital, gestão de riscos e automações. A solução busca reduzir burocracias, aumentar a segurança das informações e otimizar fluxos operacionais, garantindo mais agilidade e controle nas rotinas corporativas."
                        mentions={[
                            "https://www.neomind.com.br/"
                        ]} 
                    />
                </CardList>
            </SectionBody>
            <div className="flex justify-center mt-[50px]">
                <CtaButton text="Precisa de uma solução para sua empresa? Agende agora uma reunião!" />
            </div>
        </SectionDiv>
    );
} 