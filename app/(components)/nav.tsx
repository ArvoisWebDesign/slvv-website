import Link from "next/link"

export default function Nav(
    { 
        navLinks,
    } : {
        navLinks : { key: number, pageName: string, href: string, navLinkId: string }[]
    }) {

    return (
        <nav className="flex flex-row">
            {navLinks.map((link) => (
                <Link 
                    key={link.key} 
                    href={link.href} 
                    className="navLink flex flex-1
                    items-center justify-center text-xl font-bold
                    hover:bg-slvv10 hover:text-slvv30"
                    id={link.navLinkId}>
                    {link.pageName}
                </Link>
            ))}
        </nav>
    )
}