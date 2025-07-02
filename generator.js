// pick a random item from an array
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// fill each dropdown with a random option
function randomizeChoices() {
  document.querySelectorAll("select").forEach((sel) => {
    sel.selectedIndex = Math.floor(Math.random() * sel.options.length);
  });
  // clear skill input
  document.getElementById("skill").value = "";
}

// build name and story
function generateStory() {
  const species = document.getElementById("species").value;
  const element = document.getElementById("element").value;
  const personality = document.getElementById("personality").value;
  let skill = document.getElementById("skill").value.trim();

  // default talents if none provided
  const defaultTalents = [
    "cloud-surfing",
    "bubble-singing",
    "moon-dancing",
    "raindrop whispering"
  ];
  if (!skill) skill = pick(defaultTalents);

  // name parts
  const prefixes = [
    "Twinkle", "Glimmer", "Ember", "Stella",
    "Luna", "Frost", "Spark", "Moon"
  ];
  const suffixes = [
    "whiff", "gleam", "song", "wisp",
    "flare", "drift", "sparkle", "tail"
  ];
  const first = pick(prefixes);
  const second = pick(suffixes);
  const name = `${first}${second.charAt(0).toUpperCase() + second.slice(1)}`;

  // random action for backstory
  const actions = [
    "summoned a rainbow with a single sneeze",
    "taught moonbeams how to dance",
    "turned raindrops into candy crystals",
    "wherever they hopped, flowers giggled"
  ];
  const action = pick(actions);

  // assemble the story
  const story = `
    <strong>${species} ${name}</strong> was born in the heart of the <em>${element}</em> Vale.
    Known for being <em>${personality}</em> beyond compare, ${name} discovered a talent for
    <em>${skill}</em> when they ${action}.
  `;

  // display it
  document.getElementById("result").innerHTML = story;
}

// wire up the buttons
document.getElementById("randomizeBtn")
  .addEventListener("click", randomizeChoices);

document.getElementById("generateBtn")
  .addEventListener("click", generateStory);

// initialize with random choices
randomizeChoices();