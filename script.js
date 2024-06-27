document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const seekBar = document.getElementById("seekBar");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "⏸️"; // Símbolo de Pause
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "&#9654;"; // Símbolo de Play
        }
    });

    audio.addEventListener("timeupdate", function() {
        const value = (audio.currentTime / audio.duration) * 100;
        seekBar.value = value;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", function() {
        durationDisplay.textContent = formatTime(audio.duration);
    });

    seekBar.addEventListener("input", function() {
        const time = (seekBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    prevBtn.addEventListener("click", function() {
        audio.currentTime = 0;
    });

    nextBtn.addEventListener("click", function() {
        audio.currentTime = audio.duration;
    });
});
