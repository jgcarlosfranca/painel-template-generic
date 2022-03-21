import React from "react";
import PropType from "prop-types";
import { StyledPokeName } from "./PokeName.styles";


const colorTypes = (type) => {
  const pokemonTypes = {
    grass: '#9bcc50',
    water: '#4592c4',
    fire: '#fd7d24',
    bug: '#729f3f',
    poison: '#b97fc9',
    electric: '#eed535',
    stell: '#9eb7b8',
    rock: '#a38c21',
    fighting: '#d56723',
    ice: '#51c4e7',
    psychic: '#f366b9',
    fairy: '#fdb9e9 ',
    flying:'linear-gradient(90deg, rgba(61,199,239,1) 20%, rgba(189,185,184,1) 100%)',
    dragon: 'linear-gradient(90deg, rgba(241,110,87,1) 20%, rgba(83,164,207,1) 100%)',
    normal: '#a4acaf',
    ground: 'linear-gradient(90deg, rgba(247,222,63,1) 20%, rgba(171,152,66,1) 100%)',
    dark: '#707070',
    ghost: '#7b62a3',
  }
  return pokemonTypes[type];
}

export const PokeName = (props) => {
  const {
    name,
    typePokemon = 'grass',
  } = props;

  const fontColor = colorTypes(typePokemon)
  console.log(fontColor)

  return <StyledPokeName color={fontColor}>
    {name}
  </StyledPokeName>;
};


PokeName.propTypes = {
  name: PropType.string,
  typePokemon: PropType.string,
};


