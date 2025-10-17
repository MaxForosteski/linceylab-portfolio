import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contributes from "./Contributes";
import Services from "./Services";
import Habilities from "./Habilities";
import Contact from "./Contact";
import Typer from "@/components/Typer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-yellow-300 font-display">⚠️ Esta página está disponível apenas na versão desktop no momento.
        Em breve, traremos uma experiência completa também para dispositivos móveis.</div>
      <Header />
      <About />
      <Projects />
      <Contributes />
      <Services />
      <Habilities />
      <div className="bg-black w-full h-24 flex justify-center items-center">
        <Typer />
      </div>
      <Contact />
    </div>
  );
}
