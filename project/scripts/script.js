// ================================
// Nigeria Project - script.js
// Beginner-friendly + Fully Commented
// ================================

// --------------------
// DARK MODE TOGGLE
// --------------------

// Select the toggle button (make sure it exists on all pages)
const themeToggle = document.querySelector('#theme-toggle');

// Check saved theme from localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme (if any)
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeToggle) themeToggle.textContent = "☀️ Light Mode";
} else {
  if (themeToggle) themeToggle.textContent = "🌙 Dark Mode";
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = "🌙 Dark Mode";
  }
}

// Add event listener (only if button exists)
if (themeToggle) {
  themeToggle.addEventListener('click', toggleDarkMode);
}

// --------------------
// MOTIVATIONAL QUOTES (Home Page)
// --------------------
const quotes = [
  "Nigeria is full of opportunities — rise and take yours!",
  "Believe in yourself; every big idea starts small.",
  "Unity and strength make our nation greater.",
  "Innovation begins when you decide to take action.",
  "Your dreams can inspire change — start today!"
];

// Function to show a random quote
function showRandomQuote() {
  const quoteBox = document.querySelector('#quote');
  if (quoteBox) {
    const random = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[random];
  }
}

// Run quote function when page loads
document.addEventListener('DOMContentLoaded', showRandomQuote);

// --------------------
// DYNAMIC LEARN PAGE CONTENT
// --------------------
const courses = [
  { title: "Web Development", description: "Learn HTML, CSS, and JavaScript to build websites." },
  { title: "Graphic Design", description: "Master Canva and CorelDRAW to create amazing visuals." },
  { title: "Cybersecurity Basics", description: "Understand how to protect systems and networks." },
  { title: "Digital Marketing", description: "Grow businesses online using social media and SEO." }
];

// Function to load courses dynamically
function loadCourses() {
  const container = document.querySelector('#course-list');
  if (container) {
    courses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
      container.appendChild(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', loadCourses);

// --------------------
// DYNAMIC OPPORTUNITIES PAGE CONTENT
// --------------------
const opportunities = [
  { name: "Tech Internship", location: "Lagos", type: "Internship" },
  { name: "Youth Innovation Grant", location: "Abuja", type: "Grant" },
  { name: "Coding Bootcamp", location: "Online", type: "Training" },
  { name: "Startup Funding Challenge", location: "Port Harcourt", type: "Competition" }
];

// Function to display opportunities
function loadOpportunities() {
  const container = document.querySelector('#opportunity-list');
  if (container) {
    opportunities.forEach(opportunity => {
      const item = document.createElement('div');
      item.className = 'opportunity-item';
      item.innerHTML = `
        <h4>${opportunity.name}</h4>
        <p>📍 ${opportunity.location}</p>
        <p>Type: ${opportunity.type}</p>
      `;
      container.appendChild(item);
    });
  }
}

document.addEventListener('DOMContentLoaded', loadOpportunities);

// --------------------
// CONTACT FORM VALIDATION
// --------------------
const contactForm = document.querySelector('#contact-form');

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Stop page reload

  // Get input values
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  // Validation check
  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Save data to localStorage
  const formData = { name, email, message };
  localStorage.setItem('contactData', JSON.stringify(formData));

  alert("Thank you for reaching out! Your message has been saved.");
  contactForm.reset();
}

// Add event listener (only if form exists)
if (contactForm) {
  contactForm.addEventListener('submit', handleFormSubmit);
}
