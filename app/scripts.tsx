"use client"

export function setActiveNavLink(navLinkId: string) {
    let domNavLinks = document.getElementsByClassName("navLink")

    for (let domNavLink of domNavLinks) {
        domNavLink.classList.remove("activeNavLink")
    }

    let navLinkToActivate = document.getElementById(navLinkId)
    if(navLinkToActivate != null) {
        navLinkToActivate.classList.add("activeNavLink")
    }
}