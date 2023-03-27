"use client"

const mail : string = "slaanesh.records@gmail.com"

export default function Mail() {
    function handleShowMail() {
        let domMail = document.getElementById("mail")
        if(domMail != null) {
            domMail.textContent = mail
        }
    }

    return (
        <div>
            <h1 className="text-xl font-bold">Business inquiries :</h1>
            <button onClick={handleShowMail} 
                className="border border-slvv10 rounded-md 
                hover:bg-slvv10 my-2 px-4 py-2 justify-center w-fit">
                Show mail
            </button>
            <p id="mail"></p>
        </div>
    )
}