import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';


/** Individual Pokemon card. */

function Pokecard({ name, id, type, exp }) {
  let imgSrc = `${POKE_API}${id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{name}</div>
      <img className="Pokecard-image" src={imgSrc} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {exp}</div>
    </div>
  );
}

export default Pokecard;
