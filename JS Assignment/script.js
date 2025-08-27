/*************************************************
 * 🚀 Part 1: JavaScript Basics (variables, conditionals)
 *************************************************/
let userStatus = "new";  // variable declaration
if (userStatus === "new") {
  console.log("Welcome to Bitours! First time here?");
} else {
  console.log("Welcome back to Bitours!");
}

/*************************************************
 * ❤️ Part 2: Functions (reusability)
 *************************************************/
// Function to greet user
function greetUser(name) {
  if (name.trim() === "") {
    return "Hello, Traveler!";
  }
  return `Hello, ${name}! Welcome to Bitours 🌍`;
}

// Function to generate a random quick link
function getRandomLink() {
  const links = ["Travel Insurance", "Visa Info", "Holiday Deals", "Top 10 Destinations"];
  const randomIndex = Math.floor(Math.random() * links.length);
  return links[randomIndex];
}

/*************************************************
 * 🔁 Part 3: Loops (for, while, forEach)
 *************************************************/
// Example 1: Looping through cards
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  console.log(`Card ${index + 1}: ${card.textContent}`);
});

// Example 2: Simple countdown (while loop)
function startCountdown(seconds) {
  let count = seconds;
  const display = document.getElementById("countdownDisplay");

  let interval = setInterval(() => {
    if (count > 0) {
      display.textContent = `Trip starts in: ${count} seconds`;
      count--;
    } else {
      display.textContent = "🎉 Your trip begins now!";
      clearInterval(interval);
    }
  }, 1000);
}

/*************************************************
 * 🌐 Part 4: DOM Manipulation
 *************************************************/
// 1. Greeting Button
document.getElementById("greetBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("name").value;
  const greetingMsg = greetUser(nameInput);
  document.getElementById("greeting").textContent = greetingMsg;
});

// 2. Add Random Link
document.getElementById("addLinkBtn").addEventListener("click", () => {
  const sidebarList = document.getElementById("quick-links");
  const newItem = document.createElement("li");
  newItem.textContent = getRandomLink();
  sidebarList.appendChild(newItem);
});

// 3. Countdown Button
document.getElementById("startCountdown").addEventListener("click", () => {
  startCountdown(60);
});
