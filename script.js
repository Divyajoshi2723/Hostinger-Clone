// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");

hamburger.onclick = function(){
 navBar.classList.toggle("active");
}

/* Dropdown mobile */

const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(drop => {
 drop.onclick = function(){
  drop.classList.toggle("active");
 }
})



// Dynamic countdown


// Set your target date & time here
const targetDate = new Date("March 30, 2026 23:59:59").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {

  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    countdownElement.innerHTML = "00d 00h 00m 00s";
    clearInterval(interval);
    return;
  }

  // Time calculations
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  // Format with leading zero
  countdownElement.innerHTML =
    `${days.toString().padStart(2, '0')}d ` +
    `${hours.toString().padStart(2, '0')}h ` +
    `${minutes.toString().padStart(2, '0')}m ` +
    `${seconds.toString().padStart(2, '0')}s`;
}

// Run immediately when page loads
updateCountdown();

// Update every 1 second
const interval = setInterval(updateCountdown, 1000);

// Mobile Dropdown Toggle

const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach(dropdown => {
  dropdown.addEventListener("click", function (e) {

    // Only for mobile
    if (window.innerWidth <= 992) {
      e.preventDefault();

      const menu = this.nextElementSibling;

      // Close other dropdowns
      document.querySelectorAll(".dropdown-menu").forEach(item => {
        if (item !== menu) {
          item.style.display = "none";
        }
      });

      // Toggle current
      if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
    }

  });
});

// Search button click
document.querySelector(".search-box button")
    .addEventListener("click", function () {
        const domain = document.querySelector(".search-box input").value;

        if (domain.trim() === "") {
            alert("Please enter a domain name.");
        } else {
            alert("Searching availability for: " + domain);
        }
    });

    // Simple auto scroll slider
const wrapper = document.querySelector(".testimonial-wrapper");

setInterval(() => {
    wrapper.scrollBy({ left: 370, behavior: "smooth" });
}, 4000);


// Accordion functionality
document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const allItems = item.parentElement.querySelectorAll(".accordion-item");

    allItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector("span").textContent = "+";
      }
    });

    item.classList.toggle("active");
    const symbol = button.querySelector("span");
    symbol.textContent = item.classList.contains("active") ? "-" : "+";
  });
});

function choosePlan(plan){

alert("You selected " + plan + " plan");

}