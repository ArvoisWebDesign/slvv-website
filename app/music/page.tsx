"use client"

import { useEffect } from "react";
import { setActiveNavLink } from "../scripts"
import MusicPlatforms from "./(components)/musicPlatforms"
import MusicWorkInProgress from "./(components)/musicWorkInProgress"

export default function Music() {
    useEffect(() => {
        setActiveNavLink("musicNavLink")
    })

    return (
        <div className="lg:flex lg:flex-row lg:gap-6">
            <div className="mb-6 flex flex-1">
                <MusicPlatforms />
            </div>
            <div className="mb-6 flex flex-1">
                <MusicWorkInProgress />
            </div>
        </div>
    )
}