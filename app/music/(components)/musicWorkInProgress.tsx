import Link from "next/link"
import Image from "next/image"

export default function MusicWorkInProgress() {
    return (
        <>
            <h2 className="font-black italic text-4xl mb-3">Work in progress</h2>
            <Link 
                href="https://soundcloud.com/slvv808/vision-wip" 
                target="_blank"
                className="btn mb-3">
                <Image 
                    src="/logo-soundcloud.png"
                    width={32} height={32} 
                    sizes="128"
                    alt="Logo Soundcloud" />
                <span>VISION</span>
            </Link>
            <p>
                This one is a "dark trap" inspired track with a cool Migos acapella and a drone/full reverb melo.
                Additionnal note: i lost the project file so i can master it further so it will probably drop like that soon!
            </p>
        </>
    )
}