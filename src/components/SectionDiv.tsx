import { ReactNode } from "react";

type sectionDivProps = {
    bgIsBlue: boolean,
    children?: ReactNode
    id: string
}

export default function SectionDiv({ bgIsBlue, children, id }: sectionDivProps) {
    return(
        <div id={id} className={`flex flex-col p-[10px] md:p-[20px] lg:p-[25px] xl:p-[30px] ${ bgIsBlue ? "bg-sky-600 text-white" : "bg-white text-black" }`}>
            { children }
        </div>
    );
}