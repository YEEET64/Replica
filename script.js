// ...existing code...
let time = 5;
const timerElement = document.getElementById("timer");
const circle = document.getElementById("circle");
const ding = new Audio("sounds/Ding.mp3");
ding.preload = "auto";
let dingUnlocked = false;

function unlockDing() {
  if (!dingUnlocked) {
    ding.play().then(() => {
      ding.pause();
      ding.currentTime = 0;
    }).catch(() => {});
    dingUnlocked = true;
  }
}

function updateDisplay() {
  timerElement.textContent = time;
}

function resetTimer() {
  time = 5;
  updateDisplay();
}

circle.addEventListener("click", (e) => {
  // Klicks innerhalb des Kreis-Elements lösen nur hier den Reset aus
  unlockDing();
  resetTimer();
});

circle.addEventListener("touchstart", (e) => {
  e.preventDefault(); // verhindert Doppelauslösung / Scroll
  unlockDing();
  resetTimer();
}, { passive: false });

circle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    unlockDing();
    resetTimer();
  }
});

updateDisplay();

setInterval(() => {
  if (time > 0) {
    time--;
    updateDisplay();
    if (time === 0) {
      ding.play().catch(() => {});
    }
  }
}, 1000);