//const offset = 0
//const limit = 10
//const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
         
             <li class="pokemon">
                    <span class="number">#${pokemon.order}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">

                        <ol class="types">
                             ${convertPokemonTypesToLi(pokemon.types).join('')}
                        </ol>
                     
                        <img src="${pokemon.sprites.other.dream_world.front_default}"
                         alt="${pokemon.name}">
                     </div>
            </li>
          `
         
}
const pokemonOl = document.getElementById('pokemonList') // aqui eu pego objeto e coloco numa variavel
// pokemonOl.innerHTML += '<li>Teste</li>'  aqui eu pego lista  e somando mais um item a lista

// código de consumo de api
pokeApi.getPokemons().then((pokemons = []) => {

    //const newList = pokemons.map(convertPokemonToLi).join('')
        //return convertPokemonToLi(pokemon)
    
   // const newHtml = newList.join('')

    pokemonOl.innerHTML += pokemons.map(convertPokemonToLi).join('')
        // const listItens = []
        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItens.push(convertPokemonToLi(pokemon))
        //     //console.log(convertPokemonToLi(pokemon))
        //     //pokemonOl.innerHTML += convertPokemonToLi(pokemon)
        // }
       //console.log(listItens)
    })
    .catch((error) => console.error) 
    


