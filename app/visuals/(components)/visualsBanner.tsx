import Image from "next/image"

export default function VisualsBanner() {
    return (
        <>
            <h2 className="font-black italic text-4xl mb-3">Banner</h2>
            <Image 
                src="/banner.png"
                width={2560} height={1440}
                alt="Banner used in socials and music platforms"
                className="rounded-xl shadow-[0_0_3rem_-1rem_#030305]" />
        </>
    )
}