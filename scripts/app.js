window.addEventListener("keydown", playSound);

function playSound(e) {
    var keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.sounds[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

const sounds = document.querySelectorAll(".sounds");
sounds.forEach(sound => sound.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}