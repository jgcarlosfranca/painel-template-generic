import React, { useState } from "react";
import ToggleSwitch from "../../Components/SwitchToogle/switchCustom";
import { FormHeader } from "../../Components/FormBasics/FormLayout/FormHeader";
import { Divider } from "../../Components/FormBasics/Divider"
import { TextInput } from "../../Components/FormBasics/TextInput"
import { Button } from "../../Components/FormBasics/Button"
import { CustomSelect } from "../../Components/FormBasics/Select";
import { FormBodyRow } from "../../Components/FormBasics/FormBodyRow/BodyRow";
import "./styles.css";

export default function Forms() {
  const [ligado, setLigado] = useState('')
  const [textInput1, setTextInput1] = useState('');
  const [selectTestInput, setSelectTestInput] = useState('');

  return (
    <div className="home">
      <div className="forms__general">
        <FormHeader titulo="Formulario Exemplo" cor='#16bf6e' />
        <Divider />
        <div className="form_body">
          <FormBodyRow>
            <TextInput titulo="Input text" placeholder="digite um texto" tamanho="30%"
              value={textInput1}
              onChange={(ev) => { setTextInput1(ev.target.value) }} />
            <CustomSelect
              titulo=" titulo custom"
              nome="testeSelect"
              placeholder={"Selecione ...."}
              value={selectTestInput}
              onChange={(ev) => setSelectTestInput(ev.value)}
              tamanho="30%"
              options={[
                { value: 'teste1', label: 'teste1' },
                { value: 'teste2', label: 'teste2' },
              ]}
            />
            <ToggleSwitch name="teste_Switch_toogle" valor={ligado} label="teste" handleChangeCheckBox={() => setLigado(!ligado)} />
          </FormBodyRow>
          <Divider />
        </div>
        <Button cor={'#16bf6e'} corHover={'#06311d'} titulo="Buscar" onClick={() => { console.log('clicou') }} />
      </div>
    </div>
  );
}