import Image from "next/image"

export default function VisualsBanner() {
    return (
        <div>
            <h1 className="text-xl font-bold">Banner :</h1>
            <Image 
                src="/banner.png"
                width={2560} height={1440}
                alt="Banner used in socials and music platforms"
                className="border border-slvv30" />
        </div>
    )
}