const today = new Date();
const year = today.getFullYear();
document.querySelector("#currentyear").textContent = `©${year} 🌲 Moses John Godwin 🌲 Lagos, Nigeria.`;
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent =`Last Modified: ${lastModified}`;