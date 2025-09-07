// criando objeto
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokemonDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokemonDetail.id
    pokemon.name = pokemonDetail.name

    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    const statusName = pokemonDetail.stats.map((statsBase_stat) => statsBase_stat.stat.name)
    const statusBase = pokemonDetail.stats.map((statsBase_stat) => statsBase_stat)
    const [type] = types
    const [statName] = statusName
    const [statBase] = statusBase

    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default
    pokemon.statName = statName
    pokemon.statusName = statusName
    pokemon.statBase = statBase
    pokemon.statusBase = statusBase
   

    
    return pokemon
    
}

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then((convertPokeApiDetailToPokemon))
}
// criando aero funtion
pokeApi.getPokemons = (offset = 0,limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json() )
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => pokemonsDetails)
        //.catch((erro) => console.error(console.error))

}
