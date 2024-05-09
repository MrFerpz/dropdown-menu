import "./style.css";

let menuItems = document.querySelector(".menu-items")
let toggleBtn = document.querySelector(".open-toggle")

toggleBtn.addEventListener("click", () => {
    if (menuItems.style.display === "none") {
        return menuItems.style.display = "block"
    } else {
        return menuItems.style.display = "none"
    }
})