import SectionDiv from "@/components/SectionDiv";
import Title from "@/components/Title";
import SectionBody from "@/components/SectionBody";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import CardList from "@/components/CardList";

export default function Projects() {
    return (
        <SectionDiv bgIsBlue={true}>
            <Title text="Projetos" />
            <SectionBody>
                <CardList>
                    <Card 
                        title="Sadraque Auto Center - Landing Page" 
                        business="Sadraque Auto Center"
                        urlImage="/Sadraque-logo.png" 
                        description="Landing page desenvolvida com o objetivo de fortalecer a presença digital e atrair novos clientes locais. O projeto foi planejado para transmitir credibilidade, modernizar a imagem da oficina e facilitar o contato com os clientes por meio de uma estrutura leve, responsiva e otimizada para buscas locais."
                        mainLink="https://sadraqueautocenter.vercel.app/"
                    />

                    <Card 
                        title="PMS" 
                        business="Adami S.A"
                        urlImage="/pms-logo.png" 
                        description="Sistema responsável por gerenciar todo o fluxo operacional da unidade de produção de papel. Desde o controle de matérias-primas até o acompanhamento das bobinas finalizadas. O projeto teve como foco otimizar processos industriais, aumentar a rastreabilidade e reduzir falhas operacionais, garantindo maior eficiência e controle na linha de produção."
                        mentions={[
                            "https://universo.adami.com.br/noticia/26402/",
                            "https://portalpackaging.com.br/adami-implementa-novo-sistema-para-gestao-da-producao-de-papel/"
                        ]}
                    />

                    <Card 
                        title="IVM" 
                        business="Adami S.A"
                        urlImage="/ivm-logo.png" 
                        description="Aplicativo móvel desenvolvido para otimizar o controle e o registro de uso dos veículos corporativos pelos colaboradores. O sistema foi projetado para simplificar o processo de registro, aumentar a precisão das informações e reduzir o tempo gasto em tarefas administrativas relacionadas à frota."
                    />

                    <Card 
                        title="Portal do Conhecimento" 
                        business="Adami S.A"
                        urlImage="/pdc-logo.png" 
                        description="Aplicação web inteligente desenvolvida para acelerar o acesso a informações internas da empresa. Utiliza Inteligência Artificial para responder dúvidas sobre documentos, processos e dados corporativos, reduzindo significativamente o tempo de busca e aumentando a produtividade das equipes."
                    />
                </CardList>
            </SectionBody>
            <div className="flex justify-center mt-[50px]">
                <CtaButton text="Deseja tirar aquele projeto do papel, faça agora seu orçamento gratuito!" />
            </div>
        </SectionDiv>
    );
}