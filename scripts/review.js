
const today = new Date();
const year = today.getFullYear();
document.querySelector("#date").textContent = `©${year} 🌲 Moses John Godwin🌲 Lagos Nigeria`

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`;


// 1️⃣ Find the HTML element that will display the number of visits
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the saved number of visits from localStorage.
// localStorage stores key–value pairs in the browser (it stays even if you close the tab)
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ If the user has visited before, show the count.
// If this is the first visit, show a welcome message.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first review 🥳 Welcome!`;
}

// 4️⃣ Increase the count by one
numVisits++;

// 5️⃣ Save the new number back to localStorage
localStorage.setItem("numVisits-ls", numVisits);