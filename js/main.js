/*-------------------------------------------------
HEADER - show/hide nav
--------------------------------------------------*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/* Remove menu mobile on click */
const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))



/*-------------------------------------------------
SKILLS - accordion
--------------------------------------------------*/
const skillsContent = document.getElementsByClassName("skills-content"),
    skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
    let itemClass = this.parentNode.className

    if (itemClass === "skills-content skills-close") {
        this.parentNode.className = "skills-content skills-open"
    } else {
        this.parentNode.className = "skills-content skills-close"
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills)
})



/*-------------------------------------------------
CHANGE BACKGROUND HEADER
--------------------------------------------------*/
function scrollHeader() {
    const nav = document.getElementById("header")

    //When scroll > 80 vh, add the .scroll-header
    if (this.scrollY >= 80) {
        nav.classList.add("scroll-header")
    } else {
        nav.classList.remove("scroll-header")
    }
}
window.addEventListener("scroll", scrollHeader)



/*-------------------------------------------------
SHOW SCROLL TOP
--------------------------------------------------*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up")

    //When scroll > 560 vh, add the .scroll-header
    if (this.scrollY >= 560) {
        scrollUp.classList.add("show-scroll")
    } else {
        scrollUp.classList.remove("show-scroll")
    }
}
window.addEventListener("scroll", scrollUp)



/*-------------------------------------------------
DARK LIGHT THEME
--------------------------------------------------*/
const themeButton = document.getElementById("theme-button"),
    darkTheme = "dark-theme",
    iconTheme = "uil-sun"

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme"),
    selectedIcon = localStorage.getItem("selected-icon")

//We obtain the current theme that the interface has by validating the .dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun"

//We validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon == "uil-moon" ? "add" : "remove"](iconTheme)
}

//(De)Activate the theme manually
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})
