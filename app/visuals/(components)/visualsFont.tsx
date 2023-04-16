import Link from "next/link";

export default function VisualsFont() {
    return (
        <>
            <h2 className="font-black italic text-4xl mb-3">Font</h2>
            <Link 
                href="https://fonts.google.com/specimen/Archivo"
                target="_blank"
                className="btn mb-3">
                Archivo
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-bold text-lg">
                Aenean ultrices risus mauris, vel suscipit quam sollicitudin sed. 
            </p>
            <p className="font-black text-2xl">
                Sed eu aliquet.
            </p>
        </>
    )
}