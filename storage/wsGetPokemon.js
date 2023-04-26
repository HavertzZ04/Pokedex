const getPokemon = async (id) =>{ 
    let flipCard =""
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await response.json();
    flipCard += `
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
    return flipCard
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

self.addEventListener("message",  async(e) => {
    const pokeData = await getPokemon(e.data)
    postMessage(pokeData);
})