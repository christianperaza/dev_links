// get html elements
const HTML = document.documentElement
const BUTTON = document.querySelector("#buttonContainer-btn")

BUTTON.addEventListener("click", () => {
    if(document.getElementById("dark")) {
        HTML.removeAttribute("id")
    } else {
        HTML.setAttribute("id", "dark")
    }
})