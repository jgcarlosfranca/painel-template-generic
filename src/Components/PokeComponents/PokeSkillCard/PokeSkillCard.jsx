import React from "react";
import { StyledPokeSkillCard } from "./PokeSkillCard.styles";

export const PokeSkillCard = (props) => {
  return <StyledPokeSkillCard>
    {props.children}
  </StyledPokeSkillCard>;
};
