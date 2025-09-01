function showMessage() {
  const messages = [
    "Hello, Arpitha! 🌟 You clicked the button!",
    "Surprise! 🎉 Keep smiling, Arpitha!",
    "You’re awesome, Arpitha! 🚀",
    "Have a magical day, Arpitha! ✨",
    "Stay creative, Arpitha! 🎨"
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").textContent = randomMsg;
}