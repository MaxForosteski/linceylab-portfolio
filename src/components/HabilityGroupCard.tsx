type HabilityGroupCardProps = {
    title: string,
    setLanguage: (language:string) => void
}

export default function HabilityGroupCard({ title, setLanguage }: HabilityGroupCardProps) {
    return (
        <button className="w-32 h-24 lg:w-42 lg:h-36 xl:w-50 xl:h-42 2xl:w-60 2xl:h-50 mr-5 bg-sky-800 hover:scale-105 trasition-all duration-300 rounded-xl" onClick={() => { setLanguage(title) }}>
            <h2 className="font-display text-white text-lg 2xl:text-2xl font-semibold">{title}</h2>
        </button>
    );
}