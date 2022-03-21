import React from "react";
import { StyledPokeName } from "./PokeName.styles";

export const PokeName = (props) => {
  const {
    name,
  } = props;


  return <StyledPokeName>
    {name}
  </StyledPokeName>;
};


TextInput.propTypes = {
  name: PropType.string,
  // titulo: PropType.string,
  // placeholder: PropType.string,
  // value: PropType.string,
  // onChange: PropType.func,
  // tamanho: PropType.string,
};


