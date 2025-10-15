type titleProps = {
    text: string
}

export default function Title({ text }: titleProps) {
    return (
        <h1 className="text-6xl font-display font-medium pb-[50px]">{text}</h1>
    );
}