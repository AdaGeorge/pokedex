import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import Navbar from "../Navbar/Navbar";
import CardPokemon from "./CardPokemon/CardPokemon";
import Paginacion from "../Paginacion";
import usePaginationLogic from "../../hooks.js/usePaginationLogic";
import Footer from "../Footer";

const PokedexHome = () => {
  const nameUser = useSelector((state) => state.nameUser);

  const [pokemons, setPokemons] = useState();
  const [pokeSearch, setPokeSearch] = useState();
  const [filteredPokemon, setFilteredPokemon] = useState();
  const [typeList, setTypeList] = useState();
  const [changeType, setChangeType] = useState("All Pokemons");
  const [currentPage, setCurrentPage] = useState(1);

  let paginationResponse;
  if (pokemons !== undefined) {
    paginationResponse = usePaginationLogic(currentPage, pokemons);
  }

  useEffect(() => {
    if (changeType === "All Pokemons") {
      const URL_POKEMONS =
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154";
      axios
        .get(URL_POKEMONS)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    } else {
      const URL_POKEMONS_TYPE = `https://pokeapi.co/api/v2/type/${changeType}/`;
      axios
        .get(URL_POKEMONS_TYPE)
        .then((res) => {
          const array = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(array);
        })
        .catch((err) => console.log(err));
    }
  }, [changeType]);

  useEffect(() => {
    if (pokeSearch) {
      setFilteredPokemon(
        paginationResponse.arrayPokemons.filter((pokemon) =>
          pokemon.name.includes(pokeSearch.toLowerCase())
        )
      );
    }
  }, [pokeSearch]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type/";
    axios
      .get(URL)
      .then((res) => setTypeList(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(filteredPokemon)
  return (
    <div className="pokedex-screen">
      <Navbar />

      <h2 className="greetings">{`Hi ${nameUser} welcome to Pokedex`}</h2>

      <div className="input-container-pokedex">
        <h2>Look for your favorite Pokemon here</h2>

        <Form
          setPokeSearch={setPokeSearch}
          typeList={typeList}
          setChangeType={setChangeType}
        />
      </div>

      <Paginacion
        arrayPages={paginationResponse?.arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={paginationResponse?.quantityPages}
      />

      <div className="container-poke-cards">
        {filteredPokemon ?
            filteredPokemon?.map((pokemon) => (
              <CardPokemon url={pokemon.url} key={pokemon.url} />
            ))
          : paginationResponse?.arrayPokemons.map((pokemon) => (
              <CardPokemon url={pokemon.url} key={pokemon.url} />
            ))}
      </div>
      <Paginacion
        arrayPages={paginationResponse?.arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={paginationResponse?.quantityPages}
      />
      <Footer />
    </div>
  );
};
export default PokedexHome;
