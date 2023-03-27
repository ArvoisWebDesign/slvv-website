import Image from "next/image"

export default function VisualsProfilePicture() {
    return (
        <div>
            <h1 className="text-xl font-bold">Profile picture :</h1>
            <Image 
                src="/pp.png"
                width={1440} height={1440}
                alt="Profile picture used in socials and music platforms"
                className="border border-slvv30" />
        </div>
    )
}