let searchPokemons = async (term) => {
    let flipCard="";
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=905`);
    let data = await response.json();
    let pokemons = data.results;
    let matchingPokemons = pokemons.filter(pokemon => pokemon.name.startsWith(term));
  
    await Promise.all(matchingPokemons.map(async (pokemon) => {
      let response = await fetch(pokemon.url);
      let data = await response.json();
      flipCard += template(data);
    }));
    return flipCard;
  };
  
  const template = (data) => {
    return `
      <div class="flip-card">
        <div class="card-container">
          <div class="pokemon-block">
            <div class="img-container">
              <img class="pokeImage" src="${data.sprites.other.home.front_default}">
            </div>
            <p>${`#${data.id.toString().padStart(3, 0)}`}</p>
            <p class="name">${data.name}</p>
          </div>
        <div class="pokemon-block-back">
        ${progressBars(data.stats)}
        </div>
      </div>
    </div>
    `;
  }
  
  let progressBars = (stats) => {
    let statsContainer = `<div class="stats-container">`;
    for (let i = 0; i < 3; i++) {
      let stat = stats[i];
      let statPercent = stat.base_stat / 2 + "%";
      let statContainer = `
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
  
  self.addEventListener("message", async (e) => {
    const pokeData = await searchPokemons(e.data)
    console.log(pokeData);
    postMessage(pokeData);
  })
  