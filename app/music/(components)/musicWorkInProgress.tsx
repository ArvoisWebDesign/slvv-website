import Link from "next/link"
import Image from "next/image"

export default function MusicWorkInProgress() {
    return (
        <div>
            <h1 className="text-xl font-bold">Last "work in progress" track :</h1>
            <Link 
                href="https://soundcloud.com/slvv808/vision-wip" 
                target="_blank"
                className="flex flex-row border 
                border-slvv10 rounded-md hover:bg-slvv10 
                my-2 p-2 justify-center w-fit">
                <Image 
                    src="/logo-soundcloud-white.png"
                    width={32} height={32} 
                    alt="Logo Soundcloud" />
                <span className="px-2 flex items-center">VISION</span>
            </Link>
            <p>
                This one is a "dark trap" inspired track with a cool Migos acapella and a drone/full reverb melo.
                Additionnal note: i lost the project file so i can master it further so it will probably drop like that soon!
            </p>
        </div>
    )
}