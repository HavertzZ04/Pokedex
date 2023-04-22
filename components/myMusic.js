export default{
    audio : "music/song.mp3", //remember to complete the rute ".mp3"
    play : "images/play-button.png",
    stop : "images/pause-button.png",
    restart : "images/repeat-once.png",


    show(){
        document.querySelector("#container-options").insertAdjacentHTML("beforeend", 
        `
        <div class="col">
            <audio src=${this.audio} loop autoplay></audio>
            <button id="playBtn">
                <img src=${this.play} alt="">
            </button>
            <button id="stopBtn">
                <img src=${this.stop} alt="">
            </button>
            <button id="restartBtn">
                <img src=${this.restart} alt="">
            </button>
        </div>
        `
        )
    }
}