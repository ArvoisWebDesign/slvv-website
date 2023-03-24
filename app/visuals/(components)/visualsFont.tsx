import Link from "next/link";

export default function VisualsFont() {
    return (
        <div>
            <h1 className="text-xl font-bold mb-2">Font :</h1>
            <Link 
                href="https://fonts.google.com/specimen/Archivo"
                target="_blank"
                className="border border-slvv10 rounded-md hover:bg-slvv10 
                my-2 p-2 justify-center w-fit">
                Archivo
            </Link>
            <p className="text-2xl mt-2">
                <span>SLVV</span>&nbsp;
                <span className="font-black">SLVV</span>&nbsp;
                <span className="font-black italic">SLVV</span>&nbsp;
            </p>
        </div>
    )
}