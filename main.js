// Highlight active navigation link
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Page-specific logic
const path = window.location.pathname;

// Homepage: Show welcome alert
if (path.includes("index.html") || path === "/") {
  window.addEventListener("load", () => {
    alert("Welcome to Buscor Transport Services! 🚍");
  });
}

// Services page: Fare calculator
if (path.includes("services.html")) {
  window.calculateFare = function () {
    const distance = parseFloat(document.getElementById("distance").value);
    const rate = 1.5;
    const fare = (distance * rate).toFixed(2);
    document.getElementById("fare-result").innerText = `Estimated Fare: R${fare}`;
  };
}

// Enquiry page: Form validation
if (path.includes("enquiry.html")) {
  document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (!name || !email) {
      alert("Please fill in your name and email.");
      e.preventDefault();
    }
  });
}
