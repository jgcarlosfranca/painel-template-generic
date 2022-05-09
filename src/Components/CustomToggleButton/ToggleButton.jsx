import PropTypes from "prop-types";
import React from "react";
import { StyledToggle } from "./ToggleButton.styles";
import {BsSun, BsMoon} from "react-icons/bs"

export function Button(props) {
  const { checked, iconTrue = BsSun, iconFalse = BsMoon, cor} = props;

  return (
    <StyledToggle cor={cor} iconFalse={iconFalse} iconTrue={iconTrue} checked={checked}>
    </StyledToggle>
  );
}

Button.propTypes = {
  checked: PropTypes.func.isRequired,
};
