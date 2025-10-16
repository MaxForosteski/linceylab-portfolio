type HabilityGroupCardProps = {
    title: string,
    setLanguage: (language:string) => void
}

export default function HabilityGroupCard({ title, setLanguage }: HabilityGroupCardProps) {
    return (
        <button className="w-64 h-46 mr-5 bg-sky-600 hover:scale-105 trasition-all duration-300 rounded-xl" onClick={() => { setLanguage(title) }}>
            <h2 className="font-display text-white text-xl font-semibold">{title}</h2>
        </button>
    );
}