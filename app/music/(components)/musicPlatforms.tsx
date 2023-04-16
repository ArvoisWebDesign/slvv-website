import Link from "next/link"
import Image from "next/image"

const musicPlatformsLinks: { key: number, platformName: string, platformLink: string, logoPath: string, logoAlt: string }[] = [
    { 
        key: 1,
        platformName: "Soundcloud",
        platformLink: "https://soundcloud.com/slvv808/tracks",
        logoPath: "/logo-soundcloud.png",
        logoAlt: "Logo Soundcloud"
    },
    { 
        key: 2,
        platformName: "Spotify",
        platformLink: "https://open.spotify.com/artist/5HnKnIrc6G2vBKxmAXoLXp?si=pUGp2R85Qei4NMBTz4sAyA",
        logoPath: "/logo-spotify.png",
        logoAlt: "Logo Spotify"
    }
]

export default function MusicPlatforms() {
    return (
        <>
            <h2 className="font-black italic text-4xl mb-3">Music platforms</h2>
            <div className="flex flex-row flex-wrap gap-6">
                {musicPlatformsLinks.map((link) => (
                    <Link 
                        href={link.platformLink} 
                        target="_blank"
                        key={link.key}
                        className="btn">
                        <Image 
                            src={link.logoPath} 
                            width={32} height={32} 
                            sizes="128"
                            alt={link.logoAlt} />

                        <span>{link.platformName}</span>
                    </Link>
                ))}
            </div>
        </>
    )
}