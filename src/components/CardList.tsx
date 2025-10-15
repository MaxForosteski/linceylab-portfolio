import { ReactNode } from "react";

type cardListProps = {
    children?: ReactNode
}
export default function CardList({ children }: cardListProps) {
    return(
        <div className="grid grid-cols-3 gap-6 w-full justify-items-center">
            { children }
        </div>
    );
}