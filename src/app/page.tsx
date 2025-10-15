import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contributes from "./Contributes";
import Services from "./Services";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <About/>
      <Projects />
      <Contributes />
      <Services />
    </div>
  );
}
