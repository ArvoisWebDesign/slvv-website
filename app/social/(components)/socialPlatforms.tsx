import Link from "next/link"
import Image from "next/image"

const socialPlatformsLinks: { key: number, platformName: string, platformLink: string, logoPath: string, logoAlt: string }[] = [
    { 
        key: 1,
        platformName: "Twitter",
        platformLink: "https://twitter.com/SLVV808",
        logoPath: "",
        logoAlt: ""
    },
    { 
        key: 2,
        platformName: "Instagram",
        platformLink: "https://www.instagram.com/slvv808",
        logoPath: "",
        logoAlt: ""
    }
]

export default function SocialPlatforms() {
    return (
        <div>
            <h1 className="text-xl font-bold">Where I express myself in plain text :</h1>
            <ul>
                {socialPlatformsLinks.map((link) => (
                    <li key={link.key}>
                        <Link 
                            href={link.platformLink} 
                            target="_blank"
                            className="flex flex-row border 
                            border-slvv10 rounded-md hover:bg-slvv10 
                            my-2 p-2 justify-center w-fit">
                            
                            {link.logoPath !== "" && link.logoAlt !== "" && 
                                <Image 
                                    src={link.logoPath} 
                                    width={32} height={32} 
                                    alt={link.logoAlt} />
                            }
                            <span className="px-2 flex items-center">{link.platformName}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}