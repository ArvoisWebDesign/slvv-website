"use client"

import { useEffect } from "react"
import { setActiveNavLink } from "../scripts"
import SocialPlatforms from "./(components)/socialPlatforms"

export default function Social() {
    useEffect(() => {
        setActiveNavLink("socialNavLink")
    })
    
    return (
        <div className="lg:flex lg:flex-row lg:gap-6">
            <div className="mb-6 flex flex-1">
                <SocialPlatforms />
            </div>
        </div>
    )
}