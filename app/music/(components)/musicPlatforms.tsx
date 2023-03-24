import Link from "next/link"
import Image from "next/image"

const musicPlatformsLinks: { key: number, platformName: string, platformLink: string, logoPath: string, logoAlt: string }[] = [
    { 
        key: 1,
        platformName: "Soundcloud",
        platformLink: "https://soundcloud.com/slvv808/tracks",
        logoPath: "/logo-soundcloud-white.png",
        logoAlt: "Logo Soundcloud"
    },
    { 
        key: 2,
        platformName: "Spotify",
        platformLink: "https://open.spotify.com/artist/5HnKnIrc6G2vBKxmAXoLXp?si=pUGp2R85Qei4NMBTz4sAyA",
        logoPath: "/logo-spotify-white.png",
        logoAlt: "Logo Spotify"
    }
]

export default function MusicPlatforms() {
    return (
        <div>
            <h1 className="text-xl font-bold">Listen to my stuff on your favorite platform :</h1>
            <ul>
                {musicPlatformsLinks.map((link) => (
                    <li key={link.key}>
                        <Link 
                            href={link.platformLink} 
                            target="_blank"
                            className="flex flex-row border 
                            border-slvv10 rounded-md hover:bg-slvv10 
                            my-2 p-2 justify-center w-fit">
                            <Image 
                                src={link.logoPath} 
                                width={32} height={32} 
                                alt={link.logoAlt} />
                            <span className="px-2 flex items-center">{link.platformName}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}