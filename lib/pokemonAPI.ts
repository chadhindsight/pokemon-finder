// put all api call logic here so we can grab them and use elsewhere

const POKEMON_API = "https://pokeapi.co/api/v2/";

interface responseData {
    count: number
    next: string
    previous: boolean
    results: Array<{ name: string, url: string }>
}
// get the original 151 Pokemon
export async function getPokemonList() {
    const response = await fetch(`${POKEMON_API}pokemon?limit=151&offset=0`)

    const data: responseData = await response.json();
    return data.results;
}

// get content for a specific Pokemon