// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const select = document.getElementById("voice-select");
  const but = document.querySelector("button");
  const text_area = document.getElementById("text-to-speak");
  var voices = [];
  
  but.addEventListener("click", play_sound);

  synth.onvoiceschanged = () => {
    voices = synth.getVoices();

    for(let i = 0; i < voices.length; i++){
      const selection_option = document.createElement("option");
      selection_option.textContent = voices[i].name;
      selection_option.setAttribute("lang", voices[i].lang);
      selection_option.setAttribute("name", voices[i].name);
      select.appendChild(selection_option);
    }
  }

  function play_sound(){
    var text = text_area.value;
    var language = select.options[select.selectedIndex].getAttribute("lang");
    var name = select.options[select.selectedIndex].getAttribute("name");
    let utterance = new SpeechSynthesisUtterance(text);
    for(let i = 0; i < voices.length; i++){
      if((voices[i].name === name) && voices[i].lang === language){
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance);
  }

  const imag = document.querySelector("img");
  window.setInterval(update_image, 50);

  function update_image(){
    if(synth.speaking){
      imag.src = "assets/images/smiling-open.png";
    } else {
      imag.src = "assets/images/smiling.png";
    }
  }
  
}