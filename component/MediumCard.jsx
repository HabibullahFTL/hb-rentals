import Image from "next/image"

export const MediumCard = ({ title, img }) => {
    return (
        <div className="hover:scale-105 transform transition duration-300 ease-out cursor-pointer">
            <div className="relative h-80 w-80 rounded-lg">
                <Image src={img} className="rounded-lg" layout="fill" alt={title} />
            </div>
            <h3 className="text-2xl">{title}</h3>
        </div>
    )
}
