import { SmallPokemonData, FullLengthPokemonData } from "./Interfaces";

export async function getAllPokemonWithSmallData(url: string): Promise<SmallPokemonData> {
  const response = await fetch(url);
  const jsonBody: SmallPokemonData = await response.json();
  // jsonBody retuns an OBJECT
  return jsonBody;
}

// function that will make a fetch to the pokemon API

export async function getFullPokemonDetails(url: string) {
  const response = await fetch(url);
  const body: FullLengthPokemonData = await response.json();
  return body;
}


