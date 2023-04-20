export default{

    show(){
        document.querySelector("#fullSearch").insertAdjacentHTML("beforeend", 
        `
        <div class="search search-container">
            <input type="text" class="search-input" placeholder="Search..." name="" id="search-bar">
            <a href="#" class="search-icon" id="search-button">
                <i class="material-icons">search</i>
            </a>
        </div>
        `
        )
    }
}