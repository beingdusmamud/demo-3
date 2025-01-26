// Countdown Timer Logic
function updateCountdown() {
  const launchDate = new Date("2025-03-01T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = launchDate - now;

  document.getElementById("days").textContent = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  )
    .toString()
    .padStart(2, "0");

  document.getElementById("hours").textContent = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");

  document.getElementById("minutes").textContent = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  )
    .toString()
    .padStart(2, "0");

  document.getElementById("seconds").textContent = Math.floor(
    (distance % (1000 * 60)) / 1000
  )
    .toString()
    .padStart(2, "0");
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Newsletter Form Handler
document.getElementById("notifyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  alert(`Thank you❤️! We'll notify ${email} when we launch.`);
  this.reset();
});
