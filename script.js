const audio = document.getElementById('audioTrack');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.classList.add('playing'); // Activa la animación del escudo
    } else {
        audio.pause();
        playBtn.classList.remove('playing'); // Detiene la animación del escudo
    }
});

audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percentage + '%';
});
