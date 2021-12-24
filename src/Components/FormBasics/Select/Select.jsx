import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import Select from "react-select";
import { StyledFormGroup, StyledSelect, StyledLabel } from "./Select.styles";

export function CustomSelect(props) {
  const {
    id,
    nome,
    titulo = "Título do campo",
    placeholder,
    value,
    onChange,
    tamanho,
    defaultValue = "",
    options,
    isDisabled = false,
    isLoading = false,
    isClearable = true,
    isRtl = false,
    isSearchable = true,
  } = props;

  return (
    <StyledFormGroup tamanhoInput={tamanho}>
      <StyledLabel htmlFor={id}>{titulo}</StyledLabel>
      <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder={placeholder}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name={nome}
        value={{ label: value }}
        onChange={onChange}
        options={options}
      />
    </StyledFormGroup>
  );
}

CustomSelect.propTypes = {
  id: PropType.string,
  nome: PropType.string,
  titulo: PropType.string,
  placeholder: PropType.string,
  value: PropType.string,
  onChange: PropType.func,
  tamanho: PropType.string,
  defaultValue: PropType.string,
  isDisabled: PropType.bool,
  isLoading: PropType.bool,
  isClearable: PropType.bool,
  isRtl: PropType.bool,
  isSearchable: PropType.bool,
  options: PropType.array,
};
