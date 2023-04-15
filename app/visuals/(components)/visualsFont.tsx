import Link from "next/link";

export default function VisualsFont() {
    return (
        <>
            <h2 className="font-black italic text-4xl mb-3">Font</h2>
            <Link 
                href="https://fonts.google.com/specimen/Archivo"
                target="_blank"
                className="btn">
                Archivo
            </Link>
        </>
    )
}