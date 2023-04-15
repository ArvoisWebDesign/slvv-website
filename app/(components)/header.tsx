"use client"

import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { updateNav } from "../scripts"
import Nav from "./nav"

function handleHomeClick() {
    updateNav("homeNavLink")
}

function handleToggleNav() {
    let domNav = document.getElementById("nav")
    if(domNav != null) {
        if(domNav.classList.contains("hidden"))
            domNav.classList.remove("hidden")
        else
            domNav.classList.add("hidden")
    }
}

export default function Header() {
    return (
        <header className="
            bg-slvv60 bg-opacity-50 shadow-[0_0_3rem_-1rem_#030305] text-slvv10 
            lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <button 
                className="
                    lg:hidden absolute top-0 left-0 p-3 
                    hover:bg-slvv10 hover:text-slvv60
                    animate-opacity" 
                id="toggleNav" type="button" onClick={handleToggleNav}>
                <GiHamburgerMenu />
            </button>
            <h1 className="text-center lg:text-left p-2">
                <Link 
                    href="/" 
                    className="text-4xl font-black italic"
                    onClick={handleHomeClick}>
                    SLVV
                </Link>
            </h1>
            <Nav />
        </header>
    )
}