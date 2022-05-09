import React from "react";
import "./styles.css";

const LunaToggleButton = (props) => {
    return (
        <div className="container_switch_toogle">
            <div className="toggle-switch">
                <label for="checkbox" class="toggler">
                    <input type="checkbox" id="Luna-checkbox"
                        name={props.name} checked={props.valor} onChange={props.handleChangeCheckBox} >
                        <span class="ball"></span>
                        <i class="ri-sun-line sun"></i>
                        <i class="ri-moon-line moon"></i>
                    </input>
                </label>
            </div>
        </div>
    );
};

export default LunaToggleButton;