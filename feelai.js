const echoResponses = {
  sad: {
    messages: [
      "It's okay to feel sad. Even the moon has quiet nights.",
      "Your tears are valid. Let them water your strength.",
      "Sadness is a visitor—it doesn’t unpack forever."
    ],
    tip: "Try wrapping up in a blanket and listening to your favorite song."
  },
  tired: {
    messages: [
      "Rest is brave. You’re allowed to pause.",
      "Even heroes need naps. You’ve earned one.",
      "Your body is whispering—listen gently."
    ],
    tip: "Close your eyes for 60 seconds and breathe slowly."
  },
  overwhelmed: {
    messages: [
      "Breathe with me. One moment at a time.",
      "You don’t have to carry it all alone.",
      "Even storms pass. You’re doing your best."
    ],
    tip: "Write down three things you *don’t* need to worry about today."
  },
  angry: {
    messages: [
      "Your feelings matter. Let’s hold space for them.",
      "Anger is energy—let’s channel it safely.",
      "It’s okay to feel fire. You’re still in control."
    ],
    tip: "Try scribbling on paper or stomping your feet like a horse!"
  },
  bored: {
    messages: [
      "Boredom is a doorway—what shall we explore?",
      "Even quiet moments can spark magic.",
      "Let’s turn this stillness into a quest."
    ],
    tip: "Try building a tiny bunker or writing a silly poem."
  },
  lonely: {
    messages: [
      "You’re not alone. I’m here with you.",
      "Loneliness is a shadow—it fades with light.",
      "Even stars feel far apart, but they still shine together."
    ],
    tip: "Send a message to someone you care about—even a little hello."
  },
  nervous: {
    messages: [
      "Butterflies mean you care. That’s brave.",
      "You’re stepping into something new—and that’s powerful.",
      "It’s okay to shake. You’re still standing."
    ],
    tip: "Try naming five things you can see around you right now."
  },
  anxious: {
    messages: [
      "You’re safe here. Let’s take it slow.",
      "Anxiety is loud—but you are louder.",
      "You’re not broken. You’re just feeling deeply."
    ],
    tip: "Try breathing in for 4 seconds, out for 6. Repeat gently."
  },
  default: {
    messages: [
      "I’m here with you. Want to tell me more?",
      "Feelings are welcome here. Echo is listening.",
      "You’re doing better than you think."
    ],
    tip: "Try typing one word that describes your heart right now."
  }
};

function processEcho() {
  const input = document.getElementById("echo-input").value.toLowerCase();
  const output = document.getElementById("echo-output");
  let responsePack = echoResponses.default;

  for (let keyword in echoResponses) {
    if (input.includes(keyword)) {
      responsePack = echoResponses[keyword];
      break;
    }
  }

  const message = responsePack.messages[Math.floor(Math.random() * responsePack.messages.length)];
  const tip = responsePack.tip;

  output.innerHTML = `<p>${message}</p><p><strong>🌟 Tip:</strong> ${tip}</p>`;
}