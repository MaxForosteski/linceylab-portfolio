import HamburguerMenu from "@/components/HamburguerMenu";
import NavMenu from "@/components/NavMenu";

export default function Nav() {
    return (
        <div>
            <div className="md:hidden">
                <HamburguerMenu />
            </div>
            <div className="hidden md:flex">
                <NavMenu />
            </div>
        </div>
    );
}