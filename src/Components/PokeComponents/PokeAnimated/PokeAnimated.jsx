import React from "react";
import { StyledPokeAnimated } from "./PokeAnimated.styles";

export const PokeAnimated = (props) => {
  return <StyledPokeAnimated>
    {props.children}
  </StyledPokeAnimated>;
};
