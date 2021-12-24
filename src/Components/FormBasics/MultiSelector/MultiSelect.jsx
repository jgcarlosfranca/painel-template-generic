import React, { useEffect } from "react";
import PropType from "prop-types";
import Select from "react-select";
import { StyledFormGroup, StyledLabel } from "./StyledMultiSelect.styles";

export function MultiSelect(props) {
  const {
    id,
    nome,
    titulo = "Título do campo",
    placeholder = null,
    value,
    onChange,
    tamanho,
    defaultValue = null,
    options,
    isDisabled = false,
    isLoading = false,
    isClearable = true,
    isRtl = false,
    isSearchable = true,
    setValor,
    contReset,
  } = props;

  const handleChange = (ev) => {
    // setValor(Array.isArray(ev) ? ev.map((element) => element.label) : []);
    setValor(ev ?? []);
  };

  useEffect(() => {
    if (setValor) {
      setValor([]);
    }
    // eslint-disable-next-line
  }, [contReset]);

  return (
    <StyledFormGroup tamanhoInput={tamanho}>
      <StyledLabel htmlFor={id}>{titulo}</StyledLabel>
      <Select
        isMulti={true}
        className="basic-multi-select"
        classNamePrefix="select"
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name={nome}
        onChange={setValor ? handleChange : onChange}
        options={options}
        value={value}
      />
    </StyledFormGroup>
  );
}

MultiSelect.propTypes = {
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
