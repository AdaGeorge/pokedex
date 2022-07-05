import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardPokemon.css";

const CardPokemon = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  const URL_POKEMON = url;

  const callPokemons = () => {
    axios
      .get(URL_POKEMON)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    callPokemons();
  }, []);

  const navigate = useNavigate()

  const clickCard= ()=>{
    navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <article onClick={clickCard} className={`poke-card ${pokemon?.types[0].type.name}`}>
      <img
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt="pokeimage"
      />
      
      <div className="info-pokemon-card">
        <hr />
        <h2>{`#${pokemon?.id} ${pokemon?.name}`}</h2>
        <hr />
        <h3>
          <span>Type:</span> {pokemon?.types[0].type.name}
        </h3>
        <h3>
          <span>Abilities:</span> {pokemon?.abilities.length}
        </h3>
        <h3>
          <span>Moves:</span> {pokemon?.moves.length}
        </h3>
      </div>
    </article>
  );
};

export default CardPokemon;
