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
        <>
            <h2 className="font-black italic text-4xl mb-3">Business inquiries</h2>
            <button onClick={handleShowMail} 
                className="btn">
                Show mail
            </button>
            <p id="mail"></p>
        </>
    )
}