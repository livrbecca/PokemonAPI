import Card from "./Components/Card";
import { useState, useEffect } from "react";
import {
  getAllPokemonWithSmallData,
  getFullPokemonDetails,
} from "./Utils/Functions";

import { FullLengthPokemonData, ResultsArray } from "./Utils/Interfaces";
import Navbar from "./Components/Navbar";
import "./style.css";

function App() {
  // useState
  const [pokemonData, setPokemonData] = useState<FullLengthPokemonData[]>([]); // an empty array
  const [nextUrl, setNextUrl] = useState<string>("");
  const [previousUrl, setPreviousUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  let initialUrl: string = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function fetchData() {
      // res stores the result of calling the getAllPokemonWithSmallData function with the url as an argument
      let res = await getAllPokemonWithSmallData(initialUrl); // eventual result/promise
      console.log("res in first data fetch", res);
      setNextUrl(res.next);
      setPreviousUrl(res.previous);
      await getFullLengthPokemonData(res.results); // getting multiple url's
      console.log("res.results from full length function", res.results);
      setLoading(false); // false bc data is back from api
    }
    fetchData();
  }, [initialUrl]);

  // pagination
  async function handleNext() {
    setLoading(true);
    let data = await getAllPokemonWithSmallData(nextUrl); // got this from res.next, no longer an empty string, gives small data
    await getFullLengthPokemonData(data.results); // can access results, which includes url with full length data
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }

  async function handlePrevious() {
    if (!previousUrl) return;
    setLoading(true);
    let data = await getAllPokemonWithSmallData(previousUrl);
    await getFullLengthPokemonData(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }

  // function that fetches the data within the api under 'results.url'
  const getFullLengthPokemonData = async function (
    resResultsArray: ResultsArray[]
  ) {
    let fullLengthPokemonData = await Promise.all(
      resResultsArray.map(async (pokemon: ResultsArray) => {
        let pokemonRecord = await getFullPokemonDetails(pokemon.url);
        return pokemonRecord;
      })
    ); // takes in an array of promises and is going to return that array once all the promises have resolved
    console.log("full length pokemon data", fullLengthPokemonData);
    setPokemonData(fullLengthPokemonData);
  };
  console.log("pokemon data state", pokemonData);
  return (
    <div className="App">
      <Navbar />
      <div className="btn">
        <button onClick={handlePrevious}> Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      {loading ? (
        <h1>Loading Pokemon....Gotta catch them all!</h1>
      ) : (
        <>
          <div className="grid-container">
            {pokemonData.map((pokemon, key) => {
              return <Card key={key} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
      {/* <div className="btn">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div> */}
    </div>
  );
}

export default App;
