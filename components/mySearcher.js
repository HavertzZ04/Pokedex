export default{
    placeHolder :"Search...",
    img : "images/logo.png",

    show(){
        document.querySelector("#container-options").insertAdjacentHTML("beforeend", 
        `
        <img src=${this.img} class="img-fluid" id="title" alt="" >
        <input type="text" class="search text-center col-lg-6 col-md-6 col-xl-6 col-sm-12" placeholder=${this.placeHolder} name="" id="search-bar">
        `
        )
    }
}