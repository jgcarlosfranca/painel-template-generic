import PropTypes from "prop-types";
import React from "react";
import { StyledToggle } from "./ToggleButton.styles";

export function Button(props) {
  const { checked, iconTrue, iconFalse, cor} = props;

  return (
    <StyledToggle cor={cor} iconFalse={iconFalse} iconTrue={iconTrue} checked={checked}>
    </StyledToggle>
  );
}

Button.propTypes = {
  checked: PropTypes.func.isRequired,
};
