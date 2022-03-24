import React from "react";
import { StyledPokeCard } from "./PokeCard.styles";

export const PokeAnimated = (props) => {
  return <StyledPokeAnimated>
    {props.children}
  </StyledPokeAnimated>;
};
