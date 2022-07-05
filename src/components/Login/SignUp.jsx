import React from "react";
import InputHome from "./InputHome";
import {SiPokemon} from 'react-icons/si'

const SignUp = () => {
  return (
    <div className="sign-up-section">
        <h1 className="super-title"><SiPokemon/></h1>
      <div className="centered-text">
        <h2>Hello trainer</h2>
        <h3>type your name to begin</h3>
        <InputHome />
      </div>
    </div>
  );
};

export default SignUp;
