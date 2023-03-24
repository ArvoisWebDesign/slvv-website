"use client"

import Link from "next/link"
import { useEffect } from "react"
import { setActiveNavLink } from "../scripts"

export default function Header() {
    function handleHomeClick() {
        useEffect(() => {
            setActiveNavLink("homeNavLink")
        })
    }

    return (
        <header>
            <Link 
                href="/" 
                className="text-6xl font-black italic"
                onClick={handleHomeClick}>
                SLVV
            </Link>
        </header>
        
    )
}