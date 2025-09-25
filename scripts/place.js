let date = new Date();
let year = date.getFullYear();
document.querySelector("#date").textContent = `©${year} 🌲 Moses John Godwin 🌲 Nigeria`;


const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`


let temperature = 28;  
let windSpeed = 10;    

function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

let windChill;
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
  windChill = "N/A";
}

document.querySelector("#windChill").textContent = `Wind Chill: ${windChill}`;