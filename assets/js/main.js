const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
         
             <li class="pokemon">
                    <span class="number">#001</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">

                        <ol class="types">
                             <li class="type">grass</li>
                             <li class="type">poison</li>
                        </ol>
                     
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                         alt="${pokemon.name}">
                     </div>
            </li>
          `
         
}
const pokemonOl = document.getElementById('pokemonList') // aqui eu pego objeto e coloco numa variavel
// pokemonOl.innerHTML += '<li>Teste</li>'  aqui eu pego lista  e somando mais um item a lista

// código de consumo de api
pokeApi.getPokemons().then((pokemons) => {
        const listItens = []
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItemnspush(convertPokemonToLi(pokemon))
            //console.log(convertPokemonToLi(pokemon))
            //pokemonOl.innerHTML += convertPokemonToLi(pokemon)
        }
        console.log(listItens)
    })
    .catch((error) => console.error) 
    


