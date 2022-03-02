import "./styles.css";
import ToggleSwitch from "../../Components/SwitchToogle/switchCustom";
import React, { useState } from "react";


export default function Forms() {
  const [ligado, setLigado] = useState('')

  return (
    <div className="home">
      <div className="row_form">
        Hello world
      </div>
      <div className="row_form">
        <ToggleSwitch name="teste_Switch_toogle" valor={ligado} label="teste" handleChangeCheckBox={() => setLigado(!ligado)} />
      </div>
    </div>
  );
}