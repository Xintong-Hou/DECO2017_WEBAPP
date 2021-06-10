//Player the music
var buttomPlay = document.getElementById("play");
buttomPlay.onclick = function() {
    if(audio.paused) {
        audio.play();
    }
}

//Stop the music
var buttomStop = document.getElementById("stop");
buttomStop.onclick = function() {
    if(audio.played) {
        audio.pause();
    }
}

