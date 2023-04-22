export default {
    link : "https://github.com/HavertzZ04",
    name : "by: HavertzZ",
    img : "images/github.png",

    show(){
        document.querySelector("footer").insertAdjacentHTML("beforeend",
        `
        <a href=${this.link} target="_blank">${this.name}</a>
        <img src=${this.img} alt="">
        `
        )
    }
}