export function music() {
    const audio = document.querySelector("audio");
    const playButton = document.querySelector("#playBtn");
    const pauseButton = document.querySelector("#stopBtn");
    const restartButton = document.querySelector("#restartBtn");
  
    playButton.addEventListener('click', function() {
      audio.play();
    });
  
    pauseButton.addEventListener('click', function() {
      audio.pause();
    });
  
    restartButton.addEventListener('click', function() {
      audio.currentTime = 0;
      audio.play();
    });
}