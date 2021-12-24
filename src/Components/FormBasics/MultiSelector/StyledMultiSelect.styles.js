import styled from "styled-components";

export const StyledFormGroup = styled.div`
  width: ${(props) => (props.tamanhoInput ? props.tamanhoInput : "45%")}; 
  display: flex;
  flex-direction: column;
  margin: 0.75em 0;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 1.10rem;
  line-height: 1.5rem;
  color: var(--cor-secundaria);
`;
