export function logic(){
  let pokemonContainer = document.querySelector(".pokemon-container");

  let ws = new Worker("./storage/wsGetPokemon.js")
  
  let getPokemons = (offset, limit) => {
    for (let i = offset; i <= offset + limit; i++) {
      ws.postMessage(i)
    }
  }
  pokemonContainer.innerHTML = ""
  ws.addEventListener("message",(e) =>{
    pokemonContainer.insertAdjacentHTML("beforeend", e.data)
  })

  // Pagination
  let previous = document.querySelector("#previous");
  let next = document.querySelector("#next");
  let offset = 1;
  let limit = 11;
  
  previous.addEventListener("click", () => {
    if (offset != 1) {
      offset -= 12;
      removeChildNodes(pokemonContainer);
      getPokemons(offset, limit);
    }
  });
  
  next.addEventListener("click", () => {
    offset += 12;
    removeChildNodes(pokemonContainer);
    getPokemons(offset, limit);
  });
  
  let removeChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  getPokemons(offset, limit);
  
  //Search Bar
  let searchInput = document.querySelector("#search-bar");
  const ws2 = new Worker("./storage/wsSearchBar.js")
  
  searchInput.addEventListener("input", (event) => {
    let searchTerm = event.target.value.toLowerCase();
    removeChildNodes(pokemonContainer);
    if (searchTerm.length > 0) {
      ws2.postMessage(searchTerm)
    } else {
      getPokemons(offset, limit);
    }
  });
  
  ws2.addEventListener("message",(e) =>{
    pokemonContainer.insertAdjacentHTML("beforeend", e.data)
  })
}

  