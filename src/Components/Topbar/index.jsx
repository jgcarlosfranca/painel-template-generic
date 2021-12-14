import React from "react";
import "./styles.css";
import { IoMdExit } from "react-icons/io";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo_title">Titulo do Painel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoMdExit size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
