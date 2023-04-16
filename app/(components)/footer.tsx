import Link from "next/link"

export default function Footer() {
    return (
        <footer className="text-sm text-center p-6
            bg-slvv60 bg-opacity-50 shadow-[0_0_3rem_-1rem_#030305]
            grid grid-cols-2 animate-opacity">
            <ul>
                <li className="font-bold">By SLVV aka Arvois Webdesign</li>
                <li>(Yes i'm a dev too)</li>
                <li>
                    <Link 
                        href={"https://github.com/ArvoisWebDesign/slvv-website"}
                        target="_blank"
                        className="underline text-slvv10">
                        Open source code
                    </Link>
                </li>
            </ul>
            <ul>
                <li className="font-bold">Tech stack</li>
                <li>NextJS 13.X</li>
                <li>TailwindCSS</li>
            </ul>
        </footer>
    )
}