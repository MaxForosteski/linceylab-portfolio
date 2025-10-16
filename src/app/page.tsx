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
      <Header/>
      <About/>
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
