const today = new Date();
const year = today.getFullYear();
document.querySelector("#currentyear").textContent = `©${year} 🌲 Moses John Godwin 🌲 Lagos, Nigeria.`;
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`;


const mainnav = document.querySelector("ul")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show")
    hambutton.classList.toggle("show")
})