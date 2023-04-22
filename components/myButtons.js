export default{
    bug : "Bug",
    dark : "Dark",
    electric : "Electric",
    fairy : "Fairy",
    dragon : "Dragon",
    grass : "Grass",
    fire : "Fire",
    flying : "Flying",
    ice : "Ice",
    rock : "Rock",
    fighting : "Fighting",
    ghost : "Ghost",
    poison : "Poison",
    normal : "Normal",
    psychic : "Psychic",
    ground : "Ground",
    steel : "Steel",
    water : "Water",

    show(){
        document.querySelector("#container-options").insertAdjacentHTML("beforeend", 
        `
        <div class="col-12">
            <div class="col" id="row1">
                <button type="button" class="btn btn-success" id="bug">${this.bug}</button>
                <button type="button" class="btn purple" id="dark">${this.dark}</button>
                <button type="button" class="btn btn-warning" id="electric">${this.electric}</button>
                <button type="button" class="btn pink" id="fairy">${this.fairy}</button>
                <button type="button" class="btn btn-info" id="dragon">${this.dragon}</button>
                <button type="button" class="btn btn-success" id="grass">${this.grass}</button>
            </div>
            <div class="col" id="row1">
                <button type="button" class="btn orange" id="fire">${this.fire}</button>
                <button type="button" class="btn btn-info" id="flying">${this.flying}</button>
                <button type="button" class="btn btn-primary" id="ice">${this.ice}</button>
                <button type="button" class="btn gray" id="rock">${this.rock}</button>
                <button type="button" class="btn btn-danger" id="fighting">${this.fighting}</button>
                <button type="button" class="btn purple" id="ghost">${this.ghost}</button>
            </div>
            <div class="col" id="row1">
                <button type="button" class="btn purple" id="poison">${this.poison}</button>
                <button type="button" class="btn btn-danger" id="normal">${this.normal}</button>
                <button type="button" class="btn pink" id="psychic">${this.psychic}</button>
                <button type="button" class="btn brown" id="ground">${this.ground}</button>
                <button type="button" class="btn btn-success" id="steel">${this.steel}</button>
                <button type="button" class="btn btn-primary" id="water">${this.water}</button>
            </div>
        </div>
        `
        )
    }
}