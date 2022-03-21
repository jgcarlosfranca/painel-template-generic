import styled from "styled-components";

export const StyledPokeName = styled.div`
display: flex;
height: 10%;
width: 20%;
margin: 20px;
align-items: center;
justify-content: center;
font-size: 25px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
background: ${(props) => (props.color ? props.color : '#9bcc50')};
-webkit-border-radius: 20px 20px 20px 20px;
-moz-border-radius: 20px 20px 20px 20px;
border-radius: 20px 20px 20px 20px;
 
`;
