import SectionDiv from "@/components/SectionDiv";
import SectionBody from "@/components/SectionBody";
import Title from "@/components/Title";
import ServiceCard from "@/components/ServiceCard";
import CardList from "@/components/CardList";
import CtaButton from "@/components/CtaButton";

export default function Services() {
    return (
        <SectionDiv bgIsBlue={true} id="services">
            <Title text="Serviços Prestados"/>
            <SectionBody>
                <CardList>
                    <ServiceCard 
                        title="Desenvolvimento de Sistemas Web Personalizados"
                        description="Crio sistemas web completos planejados para atender exatamente às necessidades do seu negócio. Soluções seguras, escaláveis e com foco em performance, usabilidade e resultados reais."
                        urlImage="/configuracoes-da-web.png"
                    />
                    <ServiceCard 
                        title="Criação de Landing Pages Otimizadas"
                        description="Páginas criadas com foco total em conversão e SEO local, ideais para empresas que desejam fortalecer sua presença digital e atrair novos clientes. Design estratégico, carregamento rápido e estrutura pensada para gerar resultados."
                        urlImage="/www.png"
                    />
                    <ServiceCard 
                        title="Integração de Sistemas e APIs"
                        description="Conecto plataformas, ERPs e CRMs, automatizando fluxos e garantindo que os dados circulem de forma inteligente entre os sistemas da sua empresa. Menos retrabalho, mais produtividade e controle total das operações."
                        urlImage="/integracao-do-sistema.png"
                    />
                    <ServiceCard 
                        title="Modernização e Manutenção de Sistemas Legados"
                        description="Atualizo e reestruturo sistemas antigos, trazendo segurança, escalabilidade e novas funcionalidades sem interromper o que já funciona. A modernização certa prolonga a vida útil da sua aplicação e reduz custos a longo prazo."
                        urlImage="/sistema-legado.png"
                    />
                    <ServiceCard 
                        title="Automação de Processos Internos"
                        description="Desenvolvo soluções sob medida que eliminam tarefas manuais e otimizam fluxos operacionais. Ganhe agilidade, precisão e tempo para focar no que realmente importa: o crescimento do seu negócio."
                        urlImage="/engenharia.png"
                    />
                </CardList>
            </SectionBody>
            <div className="flex justify-center my-[50px]">
                <CtaButton text="Deseja acelerar seus processos com Inteligencia Artificial? Entre em contato!"/>
            </div>
        </SectionDiv>
    );
}