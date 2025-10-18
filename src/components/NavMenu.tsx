import Image from "next/image";

export default function NavMenu() {
    return (
        <div className="fixed p-2 top-[0] left-[0] w-full bg-black/70 z-100 font-display flex flex-row justify-around text-white items-center">
            <a href="#hero" aria-label="Mover para seção de hero" className="flex flex-row">
                <Image
                    src={"/logo-completa.png"}
                    alt="logo completa da Lincey Lab"
                    className="rounded-xl"
                    width={40}
                    height={40}
                />
                <p className="flex justify-center items-center ml-2">Lincey Lab</p>
            </a>

            <a href="#about" aria-label="Mover para seção de sobre nós">Sobre</a>

            <a href="#projects" aria-label="Mover para seção de projetos">Projetos</a>

            <a href="#contributes" aria-label="Mover para seção de contribuições">Contribuição</a>

            <a href="#services" aria-label="Mover para seção de serviços">Serviços</a>

            <a href="#habilities" aria-label="Mover para seção de habilidades">Habilidades</a>

            <a href="#contact" aria-label="Mover para seção de contatos">Contatos</a>
        </div>
    );
}