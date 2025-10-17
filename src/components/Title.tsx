type titleProps = {
    text: string
}

export default function Title({ text }: titleProps) {
    return (
        <h1 className="flex justify-center w-full text-4xl md:text-5xl xl:justify-start font-display font-medium pb-[50px]">{text}</h1>
    );
}