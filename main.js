const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const greetings = [
  `I'm good how are you?`,
  `What a lovely day!`,
];
const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voices activated");
};

// recognition.onspeechend=function(){

// }

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  // console.log(transcript);
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Please say how are you";
  if (message.includes("how are you")) {
    const finaltext = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finaltext;
  }

  speech.volume = 1;
//   speech.rate = 1;
  speech.pitch = 1;

  console.log(speech);
  console.log(message);
  window.speechSynthesis.speak(speech);
}
