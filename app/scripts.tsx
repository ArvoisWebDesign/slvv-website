"use client"

export function setActiveNavLink(navLinkId: string) {
    let domToggleNav = document.getElementById("toggleNav")
    let domNav = document.getElementById("nav")
    if(domToggleNav != null && domNav != null) {
        if(domToggleNav.classList.contains("hidden") == false)
            domNav.classList.add("hidden")
    }

    let domNavLinks = document.getElementsByClassName("navLink")
    for (let domNavLink of domNavLinks)
        domNavLink.classList.remove("activeNavLink")

    let navLinkToActivate = document.getElementById(navLinkId)
    if(navLinkToActivate != null)
        navLinkToActivate.classList.add("activeNavLink")
}