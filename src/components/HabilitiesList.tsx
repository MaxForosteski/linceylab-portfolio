"use client";
import { useState, useEffect, JSX } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import HabilityCard from "./HabilityCard";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

type HabilitiesListProps = {
    category: string;
};

export default function HabilitiesList({ category }: HabilitiesListProps) {
    const [habilitiesList, setHabilitiesList] = useState<{ title: string; icon: JSX.Element }[]>([]);

    useEffect(() => {
        switch (category) {
            case "Linguagens":
                setHabilitiesList([
                    { title: "Javascript", icon: <IoLogoJavascript /> },
                    { title: "Typescript", icon: <SiTypescript /> },
                    { title: "Node.js", icon: <FaNodeJs /> },
                    { title: "Python", icon: <FaPython /> },
                    { title: "Java", icon: <FaJava /> },
                    { title: "PHP", icon: <FaPhp /> },
                    { title: "ASP", icon: <FaCode /> },
                    { title: "Go", icon: <FaGolang /> }
                ]);
                break;
            case "Frontend":
                setHabilitiesList([
                    { title: "Next.js", icon: <RiNextjsFill /> },
                    { title: "React", icon: <FaReact /> },
                    { title: "Three.js", icon: <FaCode /> },
                    { title: "Angular", icon:<FaAngular /> },
                    { title: "Styled Components", icon: <SiStyledcomponents />},
                    { title: "Tailwind CSS", icon: <RiTailwindCssFill />}
                ]);
                break;
            case "Ferramentas":
                setHabilitiesList([
                    { title: "Git", icon: <FaGitAlt /> },
                    { title: "IA", icon: <LuBrainCircuit /> },
                    { title: "Docker", icon: <FaDocker /> },
                    { title: "Postman", icon: <SiPostman /> },
                    { title: "Linux", icon: <FaLinux />}
                ]);
                break;
            case "Databases":
                setHabilitiesList([
                    { title: "PostgreSQL", icon: <SiPostgresql /> },
                    { title: "Oracle", icon: <SiOracle /> },
                    { title: "SQLServer", icon: <FaMicrosoft /> },
                    { title: "MySQl", icon: <GrMysql /> },
                    { title: "Redis", icon: <DiRedis /> }
                ]);
                break;
            case "Infra":
                setHabilitiesList([
                    { title: "AWS", icon: <FaAws /> },
                    { title: "Nginx", icon: <SiNginx /> },
                    { title: "Vercel", icon: <IoLogoVercel />}
                ]);
                break;
            default:
                setHabilitiesList([]);
        }
    }, [category]);

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5 justify-items-center 2xl:flex 2xl:flex-row 2xl:justify-start">
            {habilitiesList.map((hability, index) => (
                <HabilityCard key={index} title={hability.title} icon={hability.icon} />
            ))}
        </div>
    );
}
