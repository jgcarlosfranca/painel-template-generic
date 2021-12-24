import styled from "styled-components";

export const StyledSelect = styled.select`
background: white;
color: gray;
font-size: 1.25rem;
padding: 0.5em;
border: var(--borda-padrao);

option {
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 10px;
  padding: 0px 2px 1px;
  font-size: 0.85rem;
  line-height: 1.5rem;
}
`;


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
