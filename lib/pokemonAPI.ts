// put all api call logic here so we can grab them and use elsewhere

const POKEMON_API = "https://pokeapi.co/api/v2/";

interface listOfData {
    count: number
    next: string
    previous: boolean
    results: Array<{ name: string, url: string }>
}

interface singlePokeData {
    abilities: []
    base_experience: number
    forms: []
    game_indices: []
    height: number
    held_items: []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: []
    name: string
    order: number
    past_types: []
    species: {}
    sprites: {}
    stats: []
    types: []
    weight: number
}

// get the original 151 Pokemon
export async function getPokemonList() {
    const response = await fetch(`${POKEMON_API}pokemon?limit=151&offset=0`)

    const data: listOfData = await response.json();
    return data.results;
}

// get content for a specific Pokemon
export async function getPokemon(name: string) {
    const response = await fetch(`${POKEMON_API}pokemon/${name}`)

    const data: singlePokeData = await response.json();
    return data
}