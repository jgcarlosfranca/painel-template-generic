import React, { useState } from "react";
import ToggleSwitch from "../../Components/SwitchToogle/switchCustom";
import { FormHeader } from "../../Components/FormBasics/FormLayout/FormHeader";
import { Divider } from "../../Components/FormBasics/Divider"
import { TextInput } from "../../Components/FormBasics/TextInput"
import { Button } from "../../Components/FormBasics/Button"
import { CustomSelect } from "../../Components/FormBasics/Select";
import "./styles.css";

export default function Forms() {
  const [ligado, setLigado] = useState('')
  const [textInput1, setTextInput1] = useState('');

  return (
    <div className="home">
      <div className="forms__general">
        <FormHeader titulo="Formulario Exemplo" cor='#16bf6e' />
        <Divider />
        <div className="form_body">
          <TextInput titulo="Input text" placeholder="digite um texto" tamanho="30%"
            value={textInput1}
            onChange={(ev) => { setTextInput1(ev.target.value) }} />
          <CustomSelect />
          <ToggleSwitch name="teste_Switch_toogle" valor={ligado} label="teste" handleChangeCheckBox={() => setLigado(!ligado)} />

        </div>
        <Button cor={'#16bf6e'} corHover={'#06311d'} titulo="Buscar" onClick={() => { console.log('clicou') }} />
      </div>
    </div>
  );
}