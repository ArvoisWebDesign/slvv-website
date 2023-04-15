import Image from "next/image"

export default function VisualsProfilePicture() {
    return (
        <>
            <h2 className="font-black italic text-4xl mb-3">Profile picture</h2>
            <Image 
                src="/pp.png"
                width={1440} height={1440}
                alt="Profile picture used in socials and music platforms"
                className="rounded-xl shadow-[0_0_3rem_-1rem_black]" priority />
        </>
    )
}