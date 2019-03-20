

function playSounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selected every audio element with data-key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selected element with class of key
    if (!audio) return;
    audio.currentTime = 0; //rewind to start so same audio can be played after being already played
    audio.play(); //if key with no audio is pressed function will stop running
    key.classList.add("playing");

}

function removeTransition (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key"); //selected all keys (with class of .key)
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); //each key god eventlistener transitionend added
window.addEventListener("keydown", playSounds);