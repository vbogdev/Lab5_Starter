// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  const selector = document.getElementById("horn-select");
  const imag1 = document.querySelector("img[alt='No image selected']");
  const imag2 = document.querySelector("img[alt='Volume level 2']");
  const audio = document.querySelector("audio");
  const vol = document.getElementById("volume");
  const but = document.querySelector("button");


  selector.addEventListener("change", change_selction);
  vol.addEventListener("input", change_volume);
  but.addEventListener("click", play_sound);


  
  function change_selction(){
    if(selector.value === "air-horn"){
      imag1.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (selector.value === "car-horn"){
      imag1.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (selector.value === "party-horn"){
      imag1.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  }

  function change_volume(){
    var new_vol = vol.value / 100;
    audio.volume = new_vol;
    if(vol.value == 0){
      imag2.src = "assets/icons/volume-level-0.svg";
    } else if ((vol.value < 33) && (vol.value > 0)){
      imag2.src = "assets/icons/volume-level-1.svg";
    } else if ((vol.value < 67) && (vol.value > 32)){
      imag2.src = "assets/icons/volume-level-2.svg";
    } else {
      imag2.src = "assets/icons/volume-level-3.svg";
    }
  }

  function play_sound(){
    audio.play();
    if(selector.value === "party-horn"){
      jsConfetti.addConfetti();
    }
  }

  
  
}