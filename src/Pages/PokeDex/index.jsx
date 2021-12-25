import React, { useState } from "react";
import { FormHeader } from "../../Components/FormBasics/FormLayout/FormHeader";
import { Divider } from "../../Components/FormBasics/Divider"
import { TextInput } from "../../Components/FormBasics/TextInput"
import { Button } from "../../Components/FormBasics/Button"
import { FaEraser } from "react-icons/fa"
import axios from "axios";

import "./styles.css";

export default function Pokedex() {
  const [idPokemon, setIdPokemon] = useState('');
  const [canShowPokemon, setCanShowPokemon] = useState(false)
  const [pokemon, setPokemon] = useState('')

  const limpar = () => {
    setCanShowPokemon(false)
    setIdPokemon('')
    setPokemon('')
  }

  const buscaDePokemon = () => {
    let config = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/' + idPokemon,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setCanShowPokemon(true)
        setPokemon(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="home">
      <div className="forms__general">
        <FormHeader titulo="Busca de Pokemons" />
        <Divider />
        <div className="form_body">
          <TextInput titulo="indice do pokemon" placeholder="digite o numero do pokemon a ser buscado" tamanho="23%"
            value={idPokemon}
            onChange={(ev) => { setIdPokemon(ev.target.value.replace(/[^0-9]/g, '')) }} />

          <FaEraser onClick={limpar} />
        </div>
        <Button cor={'#16bf6e'} corHover={'#06311d'} titulo="Buscar" onClick={buscaDePokemon} />


        <div className="search" hidden={!canShowPokemon}>
          {pokemon.name}
          <div className="search_img" hidden={!canShowPokemon}>
            <img src={pokemon ? pokemon['sprites']['other']['official-artwork']['front_default'] : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}></img>
            <img
              src={pokemon
                ? pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}></img>
            <img
              src={pokemon
                ? pokemon['sprites']['versions']['generation-v']['black-white']['animated']['back_default']
                : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}></img>

          </div>
        </div>
      </div>
    </div>
  );
}
