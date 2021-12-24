import React, { useState } from "react";
import { FormHeader } from "../../Components/FormBasics/FormLayout/FormHeader";
import { Divider } from "../../Components/FormBasics/Divider"
import { TextInput } from "../../Components/FormBasics/TextInput"
import "./styles.css";

export default function Pokedex() {
  const [nomeGeracao, setNomeGeracao] = useState('1');

  return (
    <div className="home">
      <div className="forms__general">
        <FormHeader titulo="Busca de Pokemons" />
        <Divider />
        <TextInput titulo="indice do pokemon" placeholder="digite o numero do pokemon a ser buscado" tamanho="23%"
          onChange={(ev) => { setNomeGeracao(ev.target.value.replace(/[^0-9]/g, '')) }} />
      </div>
    </div>
  );
}
