export function logic(){
  let pokemonContainer = document.querySelector(".pokemon-container");

  async function getPokemon(id) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let data = await response.json();
      createPokemon(data);
  }

  let createPokemon = (pokemon) => {
    let flipCard = 
    `
    <div class="flip-card">
        <div class="card-container">
          <div class="pokemon-block">
            <div class="img-container">
              <img class="pokeImage" src="${pokemon.sprites.other.home.front_default}">
            </div>
            <p>${`#${pokemon.id.toString().padStart(3, 0)}`}</p>
            <p class="name">${pokemon.name}</p>
          </div>
        <div class="pokemon-block-back">
          ${progressBars(pokemon.stats)}
        </div>
      </div>
    </div>
    `;
    pokemonContainer.insertAdjacentHTML("beforeend", flipCard);
  }

  let progressBars = (stats) => {
    let statsContainer = `<div class="stats-container">`;
  
    for (let i = 0; i < 3; i++) {
      let stat = stats[i];
      let statPercent = stat.base_stat / 2 + "%";
      let statContainer = 
      `
      <div class="stat-container">
        <p>${stat.stat.name}</p>
        <div class="progress">
          <div class="progress-bar" aria-valuenow="${stat.base_stat}" aria-valuemin="0" aria-valuemax="255" style="width: ${statPercent}">
            ${stat.base_stat}
          </div>
        </div>
      </div>
      `;
      statsContainer += statContainer;
    }
    statsContainer += `</div>`;
    return statsContainer;
  }

  //Pagination ->>>>>>>>
    let getPokemons = (offset, limit) => {
      for(let i = offset; i <= offset + limit; i++){
          getPokemon(i)
      }
    }

    let previous = document.querySelector("#previous");
    let next = document.querySelector("#next");
    let offset = 1;
    let limit = 19;

    previous.addEventListener("click", () => {
        if (offset != 1){
            offset -= 20;
            removeChildNodes(pokemonContainer);
            getPokemons(offset, limit);
        }
    });
    next.addEventListener("click", () => {
        offset += 20;
        removeChildNodes(pokemonContainer);
        getPokemons(offset, limit);
    });

    let removeChildNodes = (parent) => {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
    getPokemons(offset, limit);

}