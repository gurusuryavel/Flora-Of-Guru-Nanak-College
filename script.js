const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Stop Audio';
    } else {
        audio.pause();
        audio.currentTime = 0;
        playButton.textContent = 'Play Audio';
    }
}