import Link from "next/link"
import Image from "next/image"

const socialPlatformsLinks: { key: number, platformName: string, platformLink: string, logoPath: string, logoAlt: string }[] = [
    { 
        key: 1,
        platformName: "Twitter",
        platformLink: "https://twitter.com/SLVV808",
        logoPath: "/logo-twitter.png",
        logoAlt: "Logo twitter"
    },
    { 
        key: 2,
        platformName: "Instagram",
        platformLink: "https://www.instagram.com/slvv808",
        logoPath: "/logo-instagram.png",
        logoAlt: "Logo instagram"
    }
]

export default function SocialPlatforms() {
    return (
        <>
            <h2 className="font-black italic text-4xl mb-3">Social platforms</h2>
            <div className="flex flex-row flex-wrap gap-6">
                {socialPlatformsLinks.map((link) => (
                    <Link 
                        href={link.platformLink} 
                        target="_blank"
                        key={link.key}
                        className="btn">
                        
                        {link.logoPath !== "" && link.logoAlt !== "" && 
                            <Image 
                                src={link.logoPath} 
                                width={32} height={32} 
                                sizes="128"
                                alt={link.logoAlt} />
                        }

                        <span>{link.platformName}</span>
                    </Link>
                ))}
            </div>
        </>
    )
}