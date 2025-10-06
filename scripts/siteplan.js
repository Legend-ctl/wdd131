const today = new Date();
const year = today.getFullYear();
document.querySelector("#date").textContent = `©${year} Nigerian Culture and Heritage | Site Plan by Moses John`

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`;