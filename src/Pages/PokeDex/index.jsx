import React, { useState, useEffect } from "react";
import { FormHeader } from "../../Components/FormBasics/FormLayout/FormHeader";
import { Divider } from "../../Components/FormBasics/Divider"
import { TextInput } from "../../Components/FormBasics/TextInput"
import { Button } from "../../Components/FormBasics/Button"
import { FormBodyRow } from "../../Components/FormBasics/FormBodyRow/BodyRow";
import { PokeCard } from "../../Components/PokeComponents/PokeCard";
import { PokeName } from "../../Components/PokeComponents/Pokename";
import { PokeAnimated } from "../../Components/PokeComponents/PokeAnimated/PokeAnimated";
import { PokeSkillCard } from "../../Components/PokeComponents/PokeSkillCard";
import { FaEraser, FaChevronDown, FaChevronUp } from "react-icons/fa"
import axios from "axios";

import { randomNumberSearch } from "../../utils/Functions/randomSearch";

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

  const getUp = () => {
    let idPokemonUp = idPokemon;
    idPokemonUp++
    setIdPokemon(idPokemonUp)
  }

  const getDown = () => {
    let idPokemonDown = idPokemon;
    idPokemonDown--
    setIdPokemon(idPokemonDown)
  }

  const setTimer = () => {
    setInterval(() => {
      randomPokemon()
    }, 1000)
  }

  const buscaDePokemon = () => {
    let config = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/' + (idPokemon || '1'),
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setCanShowPokemon(true)
        setPokemon(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const randomPokemon = () => {
    let pokeRandom = randomNumberSearch(600)
    setIdPokemon(pokeRandom)
  }

  useEffect(() => {
    buscaDePokemon()
  }, [idPokemon]);

  return (
    <div className="home">
      <div className="forms__general">
        <FormHeader titulo="Busca de Pokemons" />
        <Divider />
        <div className="form_body">
          <FormBodyRow>
            <TextInput titulo="indice do pokemon" placeholder="digite o numero do pokemon a ser buscado" tamanho="23%"
              value={idPokemon}
              onChange={(ev) => { setIdPokemon(ev.target.value.replace(/[^0-9]/g, '')) }} />
            <div className="arrow">
              <FaChevronUp onClick={getUp} />
              <FaChevronDown onClick={getDown} />
            </div>
            <div className="limpar">
              <FaEraser onClick={limpar} />
            </div>
          </FormBodyRow>
        </div>
        <div className="button_layout">
          <Button cor={'#16bf6e'} corHover={'#06311d'} titulo="Buscar" onClick={buscaDePokemon} />
          <Button cor={'#4169E1'} corHover={'#06311d'} titulo="Random Pokemon" onClick={randomPokemon} />
          <Button cor={'#9C061F'} corHover={'#06311d'} titulo="Timer Pokemon" onClick={setTimer} />
        </div>


        <div className="search" hidden={!canShowPokemon}>

          <PokeCard>
            <PokeName name={pokemon ? pokemon.name : 'no data'}
              typePokemon={pokemon ? pokemon.types[0].type.name : 'grass'}>
            </PokeName>
            <PokeAnimated>
              <div className="image-fixing-temporary">
                <img src={pokemon ? pokemon['sprites']['other']['official-artwork']['front_default']
                  : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}>

                </img>
                <img
                  src={pokemon
                    ? pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}></img>
                <img
                  src={pokemon
                    ? pokemon['sprites']['versions']['generation-v']['black-white']['animated']['back_default']
                    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}></img>

                <img
                  src={pokemon
                    ? pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
                    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}></img>
                <img
                  src={pokemon
                    ? pokemon['sprites']['versions']['generation-v']['black-white']['animated']['back_shiny']
                    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}></img>
              </div>
              <PokeSkillCard>
                <div>
                  {pokemon ? pokemon.stats[0].stat.name + ':  ' + pokemon.stats[0].base_stat : ''}
                  <div className="endless_bar">
                    <progress value={pokemon ? pokemon.stats[0].base_stat : '0'} max="250"></progress>
                  </div>
                </div>
                <div>
                  {pokemon ? pokemon.stats[1].stat.name + ':  ' + pokemon.stats[1].base_stat : ''}
                  <div className="endless_bar">
                    <progress value={pokemon ? pokemon.stats[1].base_stat : '0'} max="250"></progress>
                  </div>
                </div>
                <div>
                  {pokemon ? pokemon.stats[2].stat.name + ':  ' + pokemon.stats[2].base_stat : ''}
                  <div className="endless_bar">
                    <progress value={pokemon ? pokemon.stats[2].base_stat : '0'} max="250"></progress>
                  </div>
                </div>
                <div>
                  {pokemon ? pokemon.stats[3].stat.name + ':  ' + pokemon.stats[3].base_stat : ''}
                  <div className="endless_bar">
                    <progress value={pokemon ? pokemon.stats[3].base_stat : '0'} max="250"></progress>
                  </div>
                </div>
                <div>
                  {pokemon ? pokemon.stats[4].stat.name + ':  ' + pokemon.stats[4].base_stat : ''}
                  <div className="endless_bar">
                    <progress value={pokemon ? pokemon.stats[4].base_stat : '0'} max="250"></progress>
                  </div>
                </div>
                <div>
                  {pokemon ? pokemon.stats[5].stat.name + ':  ' + pokemon.stats[5].base_stat : ''}
                  <div className="endless_bar">
                    <progress value={pokemon ? pokemon.stats[5].base_stat : '0'} max="250"></progress>
                  </div>
                </div>
              </PokeSkillCard>
            </PokeAnimated>
          </PokeCard>

        </div>
      </div>
    </div>
  );
}
