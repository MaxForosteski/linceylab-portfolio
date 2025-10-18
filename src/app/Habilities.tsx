"use client"

import SectionDiv from "@/components/SectionDiv";
import SectionBody from "@/components/SectionBody";
import Title from "@/components/Title";
import { useState } from "react";
import HabilityGroupCard from "@/components/HabilityGroupCard";
import HabilitiesList from "@/components/HabilitiesList";
import CtaButton from "@/components/CtaButton";
import DropdownHabilities from "@/components/DropdownHabilities";

export default function Habilities() {
    const [hability, setHability] = useState<string>("Linguagens");

    return (
        <SectionDiv bgIsBlue={false} id="habilities">
            <Title text="Habilidades" />
            <SectionBody>
                <div className="flex flex-col">
                    <div className="flex flex-row w-full md:hidden">
                        <DropdownHabilities actualOption={hability} SetHabilitygroup={setHability}/>
                    </div>
                    <div className="hidden md:flex md:flex-row md:justify-start w-full">
                        <HabilityGroupCard title="Linguagens" setLanguage={setHability} />
                        <HabilityGroupCard title="Frontend" setLanguage={setHability} />
                        <HabilityGroupCard title="Ferramentas" setLanguage={setHability} />
                        <HabilityGroupCard title="Databases" setLanguage={setHability} />
                        <HabilityGroupCard title="Infra" setLanguage={setHability} />
                    </div>
                    <div className="mt-10 w-full">
                        <HabilitiesList category={hability} />
                    </div>
                </div>
            </SectionBody>
            <div className="flex justify-center my-[50px]">
                <CtaButton text="Procurando um Programador/Engenheiro de software? Entre em contato!" />
            </div>
        </SectionDiv>
    );
}