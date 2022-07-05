import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const PokedexInfo = () => {
  const [pokeInfo, setPokeInfo] = useState();

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setPokeInfo(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
    <main>
    <Navbar/>
    <article className={`poke-info-screen`}>
      <div className={`pokeinfo ${pokeInfo?.types[0].type.name}`}>
          <div className="title-poke-info">
           <h2>{pokeInfo?.name}</h2>
           <h3 className="type">I'm a {pokeInfo?.types[0].type.name} type pokemon</h3>
           <ul className="abilities-info">
            <h3>Abilities:</h3>
          {pokeInfo?.abilities.map((ability) => (
            <li key={ability.ability.url}>{ability.ability.name}</li>
            ))}
        </ul>
          </div>
        <img
          src={pokeInfo?.sprites.other["official-artwork"].front_default}
          alt=""
          />
        <ul className="moves-info">
            <h3>Moves:</h3>
          {pokeInfo?.moves.map((move) => (
            <li key={move.move.url}>{move.move.name}</li>
            ))}
        </ul>
        
      </div>
    </article>
    </main>
    <Footer/>
  </>
  );
};

export default PokedexInfo;
