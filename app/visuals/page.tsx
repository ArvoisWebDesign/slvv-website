"use client"

import { useEffect } from "react"
import { setActiveNavLink } from "../scripts"
import VisualsColors from "./(components)/visualsColors"
import VisualsFont from "./(components)/visualsFont"
import VisualsBanner from "./(components)/visualsBanner"
import VisualsProfilePicture from "./(components)/visualsProfilePicture"

export default function Visuals() {
    useEffect(() => {
        setActiveNavLink("visualsNavLink")
    })

    return (
        <div>
            <div className="flex flex-row gap-6">
                <div className="mb-6 flex flex-1">
                    <VisualsColors />
                </div>
                <div className="mb-6 flex flex-1">
                    <VisualsFont />
                </div>
            </div>
            
            <div className="mb-6">
                <VisualsBanner />
            </div>
            <div className="mb-6">
                <VisualsProfilePicture />
            </div>
        </div>
    )
}