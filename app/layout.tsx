import "./globals.css"
import Header from "./(components)/header"
import Nav from "./(components)/nav"
import Footer from "./(components)/footer"
import { Archivo } from "next/font/google"

const archivo = Archivo({
    subsets: ["latin"],
    display: "swap",
})

export const metadata = {
    title: "SLVV Website",
    description: "SLVV Website - made by SLVV using NEXTJS 😎",
}

// yes i could put that directly in nav.tsx but i want to try the props system so cry about it
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
        pageName: "Visuals",
        href: "/visuals",
        navLinkId: "visualsNavLink"
    },
    { 
        key: 4,
        pageName: "Social",
        href: "/social",
        navLinkId: "socialNavLink"
    }
]

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={archivo.className}>
            <body className="bg-slvvBackground bg-cover bg-center text-slvv30 text-md">
                <div className="bg-slvv30 text-slvv10 grid grid-cols-1 lg:grid-cols-3">
                    <div className="text-center lg:text-left p-2">
                        <Header />
                    </div>
                    <Nav navLinks={navLinks} />
                </div>
                
                <main className="">
                    <div className="min-h-screen p-6 lg:w-2/3 lg:mx-auto">
                        {children}
                    </div>
                </main>
                
                <Footer />
            </body>
        </html>
    )
}
