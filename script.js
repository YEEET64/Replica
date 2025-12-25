// ...existing code...
let time = 5;
const timerElement = document.getElementById("timer");
const circle = document.getElementById("circle");

function updateDisplay() {
  timerElement.textContent = time;
}

function resetTimer() {
  time = 5;
  updateDisplay();
}

circle.addEventListener("click", (e) => {
  // Klicks innerhalb des Kreis-Elements lösen nur hier den Reset aus
  resetTimer();
});

circle.addEventListener("touchstart", (e) => {
  e.preventDefault(); // verhindert Doppelauslösung / Scroll
  resetTimer();
}, { passive: false });

circle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    resetTimer();
  }
});

updateDisplay();

setInterval(() => {
  if (time > 0) {
    time--;
    updateDisplay();
  }
}, 1000);