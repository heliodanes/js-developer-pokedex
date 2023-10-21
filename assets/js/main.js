const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0;

function loadPokemonItens(offset, limit){

pokeAPI.getPokemons(offset, limit).then((pokemons = [])=> {   
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <ol class="infos">
            <span class="weight">Peso: ${(pokemon.weight*0.1).toFixed(2)} Kg </span>

            <span class="height">Altura: ${pokemon.height/0.1} cm </span>
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">                
        </div>
        </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {offset += limit 
        loadPokemonItens(offset, limit)})
