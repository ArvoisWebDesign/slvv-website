"use client"

export function updateNav(navLinkId:string) {
    // hide nav on load if the toggler is shown
    let domToggleNav = document.getElementById("toggleNav")
    let domNav = document.getElementById("nav")
    if(domToggleNav != null && domNav != null) {
        if(domToggleNav.classList.contains("hidden") == false)
            domNav.classList.add("hidden")
        else
            domNav.classList.remove("hidden")
    }

    // set active class to the nav link of the current page
    let domNavLinks = document.getElementsByClassName("navLink")
    let navLinkToActivate = document.getElementById(navLinkId)
    if(navLinkToActivate != null) {
        if(navLinkToActivate.classList.contains("activeNavLink") == false)
            navLinkToActivate.classList.add("activeNavLink")

        for (let domNavLink of domNavLinks) {
            let domNavLinkId = domNavLink.getAttribute("id")
            let domNavLinkToActivateId = navLinkToActivate.getAttribute("id")
            if(domNavLinkId != domNavLinkToActivateId)
                domNavLink.classList.remove("activeNavLink")
        }
    }
}