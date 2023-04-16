"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function TweeterEmbed() {
    useEffect(() => {
        const s = document.createElement("script")
        s.setAttribute("src", "https://platform.twitter.com/widgets.js")
        s.setAttribute("async", "true")
        document.head.appendChild(s)
    })

    return (
        <>
            <Link 
                href="https://twitter.com/SLVV808?ref_src=twsrc%5Etfw" 
                data-height="300" data-dnt="true" data-tweet-limit="5"
                className="twitter-timeline twitterEmbedLoading" data-theme="dark" data-chrome="transparent noborders">
                Loading timeline...
            </Link>
        </>
    )
}