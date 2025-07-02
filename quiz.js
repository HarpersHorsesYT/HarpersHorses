function getResult() {
  const choice = document.getElementById("answer").value;
  let message = "";

  switch (choice) {
    case "unicorn":
      message = "🦄 You're a magical Unicorn—gentle, creative and sparkly!";
      break;
    case "dragon":
      message = "🐉 You're a fierce Dragon—bold, powerful, and a bit fiery!";
      break;
    case "pegasus":
      message = "🪽 You're a graceful Pegasus—loyal and free-spirited!";
      break;
    case "phoenix":
      message = "🔥 You're a legendary Phoenix—full of resilience and rebirth!";
      break;
    case "griffin":
      message = "🦅 You're a noble Griffin—wise, regal, and fiercely protective!";
      break;
    case "sylph":
      message = "🦋 You're a Prismwing Sylph—delicate, dreamy, and full of color!";
      break;
    case "seahorn":
      message = "🐚 You're a Starlace Seahorn—peaceful and glowing with mystery!";
      break;
    case "fuzzlefox":
      message = "🦊 You're a Frostbit Fuzzlefox—clever, playful, and unpredictably cool!";
      break;
    default:
      message = "Hmm… I couldn't quite match you. Are you a new magical species?";
  }

  document.getElementById("result").textContent = message;
}