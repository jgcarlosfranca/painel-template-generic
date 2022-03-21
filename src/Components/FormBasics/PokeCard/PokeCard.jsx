import React from "react";
import { StyledPokeCard } from "./PokeCard.styles";

export const PokeCard = (props) => {
  return <StyledPokeCard>
    {props.children}
  </StyledPokeCard>;
};
