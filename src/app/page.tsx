import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contributes from "./Contributes";
import Services from "./Services";
import Habilities from "./Habilities";
import Contact from "./Contact";
import Typer from "@/components/Typer";
import Nav from "./Nav";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
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
      <a 
        className="fixed bg-green-800 p-3 text-white rounded-full bottom-[15px] right-[10px] z-100 text-5xl"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Entrar em contato com Max Forosteski pelo Whatsapp"
        href="https://wa.me/5549998240607"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
