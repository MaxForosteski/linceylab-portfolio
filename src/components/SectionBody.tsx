import { ReactNode } from "react";

type SectionBodyProps = {
    children?: ReactNode
}

export default function SectionBody({ children }: SectionBodyProps) {
    return(
        <div className="flex flex-row xl:mx-[70px]">
            { children }
        </div>
    );
}