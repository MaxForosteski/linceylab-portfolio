import { ReactNode } from "react";

type sectionDivProps = {
    bgIsBlue: boolean,
    children?: ReactNode
}

export default function SectionDiv({ bgIsBlue, children }: sectionDivProps) {
    return(
        <div className={`flex flex-col p-[50px] ${ bgIsBlue ? "bg-sky-600 text-white" : "bg-white text-black" }`}>
            { children }
        </div>
    );
}