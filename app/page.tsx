import { PokemonGrid } from '@/components/PokemonGrid';
import { getPokemonList } from '@/lib/pokemonAPI'
import Image from 'next/image'

export default async function Home() {
  // This server component will load in data
  const pokeList = await getPokemonList();
  // We will then pass in that data to a client component
  console.log(pokeList)
  //Text("use client") input will filter Pokemon card under it, we need useState for this


  return (
    <PokemonGrid pokemonList={pokeList} />
  )
}
