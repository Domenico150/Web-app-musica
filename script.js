const audio = document.getElementById("audio");

const playButton = document.getElementById("play");

const pauseButton = document.getElementById("pause");

const stopButton = document.getElementById("stop");

const seekBar = document.getElementById("seek-bar");

const volumeBar = document.getElementById("volume-bar");

const fileInput = document.getElementById("fileInput");

const currentTimeDisplay = document.getElementById("current-time");

const totalTimeDisplay = document.getElementById("total-time");

playButton.addEventListener("click", () => {

    audio.play();

});

pauseButton.addEventListener("click", () => {

    audio.pause();

});

stopButton.addEventListener("click", () => {

    audio.pause();

    audio.currentTime = 0;

});

audio.addEventListener("timeupdate", () => {

    seekBar.value = (audio.currentTime / audio.duration) * 100;

    currentTimeDisplay.textContent = formatTime(audio.currentTime);

    totalTimeDisplay.textContent = formatTime(audio.duration);

});

seekBar.addEventListener("input", () => {

    audio.currentTime = (seekBar.value / 100) * audio.duration;

});

volumeBar.addEventListener("input", () => {

    audio.volume = volumeBar.value;

});

fileInput.addEventListener("change", (event) => {

    const file = event.target.files[0];

    if (file) {

        const fileURL = URL.createObjectURL(file);

        audio.src = fileURL;

        audio.play();

    }

});

function formatTime(seconds) {

    const minutes = Math.floor(seconds / 60);

    const sec = Math.floor(seconds % 60);

    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;

}