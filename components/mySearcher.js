export default{
    placeHolder :"Search...",
    img : "images/search.png",

    show(){
        document.querySelector("#container-options").insertAdjacentHTML("beforeend", 
        `
        <div class="search search-container col-12 searchForm">
            <input type="text" class="search-input text-center" placeholder=${this.placeHolder} name="" id="search-bar">
            <button type="submit" class="search-icon" id="searchInput">
                <img src=${this.img} id="ball" alt="">
            </button>
        </div>
        `
        )
    }
}