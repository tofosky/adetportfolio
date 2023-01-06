let header = document.querySelector("header")
let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    navbar.classList.toggle("active")
}



//dark mode//

let darkMode = document.getElementById("darkmode")

darkMode.onclick = () => {
    if (darkMode.classList.contains("bx-moon")) {
        darkMode.classList.replace("bx-moon", "bx-sun")
        document.body.classList.add("active")
    } 
    else {
        darkMode.classList.replace("bx-sun", "bx-moon")
        document.body.classList.remove("active")
    }
}