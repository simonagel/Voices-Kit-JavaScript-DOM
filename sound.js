function eventWindowLoaded() {
    for (i = 65; i < 91; i++) {
      var audioElement = document.createElement("audio");
      audioElement.setAttribute('data-key', `${i}`);
      audioElement.setAttribute('src', `sounds/${i}.wav`);
      document.body.appendChild(audioElement);
    }
  }  

  window.addEventListener('keydown', playSound);

  function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   key.classList.add('playing'); 
   if(!audio) return; //stop the function from running all together
   audio.currentTime = 0; //rewind to the start
   audio.play();
  }

  function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  window.addEventListener('load', eventWindowLoaded, false);

  const allKeys = document.querySelectorAll('.key');
  allKeys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);