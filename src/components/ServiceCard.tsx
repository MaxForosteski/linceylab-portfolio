import Image from "next/image";

type ServiceCardProps = {
    title: string,
    description: string,
    urlImage: string
}
export default function ServiceCard({ title, description, urlImage}: ServiceCardProps ) {
    return(
        <div className="flex justify-center items-center flex-col bg-white text-black p-5 rounded-xl">
            <Image 
                src={urlImage}
                alt={title}
                width={200}
                height={200}
                className="rounded-lg bg-gray-200 p-5 mb-5"
            />
            <h2 className="text-2xl text-center font-bold font-display">{title}</h2>
            <p className="text-justify mt-5 p-3 font-sans">{description}</p>
        </div>
    );
}