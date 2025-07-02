const magicalCreatures = [
  "🦄 Unicorn of Stardust",
  "🐚 Starlace Seahorn",
  "🐉 Emberwhirl Dragonette",
  "🦊 Frostbit Fuzzlefox",
  "🪶 Glimmering Griffowl",
  "🦋 Prismwing Sylph",
  "🐇 Moonblink Hare"
];

// Wait for page to load
window.addEventListener("DOMContentLoaded", () => {
  const floaty = document.getElementById("creatureFloat");
  const chosen = magicalCreatures[Math.floor(Math.random() * magicalCreatures.length)];
  floaty.textContent = `✨ Your magical companion is: ${chosen}`;

  // Random position anywhere on screen (within 80% boundaries for safety)
  const randX = Math.random() * 80; // %
  const randY = Math.random() * 80; // %

  floaty.style.top = `${randY}vh`;
  floaty.style.left = `${randX}vw`;
});