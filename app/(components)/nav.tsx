"use client"

import Link from "next/link"
import { useEffect } from "react"
import { updateNav } from "../scripts"

const navLinks: { key: number, pageName: string, href: string, navLinkId: string }[] = [
    { 
        key: 1,
        pageName: "Home",
        href: "/",
        navLinkId: "homeNavLink"
    },
    { 
        key: 2,
        pageName: "Music",
        href: "/music",
        navLinkId: "musicNavLink"
    },
    { 
        key: 3,
        pageName: "Social",
        href: "/social",
        navLinkId: "socialNavLink"
    },
    { 
        key: 4,
        pageName: "Visuals",
        href: "/visuals",
        navLinkId: "visualsNavLink"
    },
    { 
        key: 5,
        pageName: "About",
        href: "/about",
        navLinkId: "aboutNavLink"
    }
]

async function handleNavLinkClick(event: any) {
    console.log("nav click")
    console.log("id nav link clicked : " + event.target.id)
    await updateNav(event.target.id)
}

export default function Nav() {
    useEffect(() => {
        console.log("useeffect")
        console.log(window)
        console.log(window.location)
        console.log(window.location.pathname)
        // set the active navLink style on page load
        let domNavLinks = document.getElementsByClassName("navLink")
        for (let domNavLink of domNavLinks) {
            if(domNavLink.getAttribute("href") != null) {
                if(domNavLink.getAttribute("href") === window.location.pathname) {
                    let id:string | null = domNavLink.getAttribute("id")
                    if(id != null) {
                        console.log("useeffect - update nav id : " + id)
                        updateNav(id)
                    }
                }
            }
        }
    })

    return (
        <>
            <nav className="hidden lg:flex lg:flex-row h-100 animate-opacity" id="nav">
                {navLinks.map((link) => (
                    <Link 
                        key={link.key} 
                        href={link.href} 
                        className={"navLinkId-" + link.key 
                            + " navLink flex flex-1 items-center justify-center" 
                            + " text-xl font-bold py-2 px-4 min-w-max"
                            + " hover:bg-slvv10 hover:text-slvv60"}
                        id={link.navLinkId}
                        onClick={handleNavLinkClick}>
                        {link.pageName}
                    </Link>
                ))}
            </nav>
        </>
    )
}