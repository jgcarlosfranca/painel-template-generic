import "./styles.css";
import ToggleSwitch from "../../Components/SwitchToogle/switchCustom";
import React, {useState} from "react";


export default function Home() {
  const [ligado, setLigado] = useState('')

  return (
    <div className="home">
      Hello world
      <ToggleSwitch name="teste_Switch_toogle" valor={ligado} label="teste" handleChangeCheckBox={() => setLigado(!ligado)}/>
    </div>
  );
}