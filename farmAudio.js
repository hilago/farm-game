

let makeSound = function(){

 let audiofile = document.getElementById("audiofile");
  
  let playAudioFile = function() {
    if (audiofile) {
      audiofile.play();
    }
  }

  let animEL = document.getElementById("an");
  
  animEL.addEventListener("touchstart", playAudioFile);
  animEL.addEventListener("click", playAudioFile);
  
  
}