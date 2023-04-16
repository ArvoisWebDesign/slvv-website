import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"

import "./globals.css"
import Header from "./(components)/header"
import Footer from "./(components)/footer"
import { Archivo } from "next/font/google"

const archivo = Archivo({
    subsets: ["latin"],
    display: "swap"
})

export const metadata:Metadata = {
    title: "SLVV Website",
    description: "Artist landing page",
    referrer: "origin-when-cross-origin",
    keywords: ["SLVV", "Music", "Artist", "Compositor", "Wave", "Trap", "Techno", "Alternative"],
    authors: [{ name: "ArvoisWebdesign", url: "https://github.com/ArvoisWebDesign" }],
    creator: "ArvoisWebdesign",
    publisher: "ArvoisWebdesign",
    icons: {
        icon: "./public/icon-32x32.png",
        shortcut: "./public/icon-128x128.png",
        apple: "./public/icon-128x128.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "./public/icon-128x128.png"
        }
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    openGraph: {
        title: "SLVV Website",
        description: "Artist landing page",
        publishedTime: new Date().toDateString(),
        authors: ["ArvoisWebdesign"]
    },
    twitter: {
        card: "summary_large_image",
        title: "SLVV Website",
        description: "Artist landing page",
        creator: "@slvv808",
        images: ["https://slvv.vercel.app/opengraph-image.png"]
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={archivo.className}>
            <body className="bg-slvvBackground bg-cover bg-fixed bg-center text-slvv30 text-md 
                grid grid-rows-[min-content_auto_min-content_0px] min-h-screen">
                <Header />
                
                <main className="p-6 lg:w-2/3 lg:mx-auto">
                    {children}
                </main>
                
                <Footer />

                <Analytics />
            </body>
        </html>
    )
}
