export default{
    previous : "Previous",
    next : "Next",

    show(){
        document.querySelector("#pagination").insertAdjacentHTML("beforeend", 
        `
        <ul class="pagination justify-content-center">
            <li class="page-item" id="previous">
                <a class="page-link" href="#" aria-label="${this.previous}">Previous</a>
            </li>
            <li class="page-item" id="next">
                <a class="page-link" href="#" aria-label="Next">${this.next}</a>
            </li>
        </ul>
        `
        )
    }
}