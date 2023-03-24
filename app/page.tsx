"use client"

import { useEffect } from "react"
import { setActiveNavLink } from "./scripts"
import AboutMe from "./(components)/aboutMe"
import AboutWebsite from "./(components)/aboutWebsite"

export default function Home() {
    useEffect(() => {
        setActiveNavLink("homeNavLink")
    })

    return (
        <div className="lg:flex lg:flex-row lg:gap-6">
            <div className="mb-6 flex flex-1">
                <AboutMe />
            </div>
            
            <div className="mb-6 flex flex-1">
                <AboutWebsite />
            </div>
        </div>
    )
}