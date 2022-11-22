import React from 'react';
import {BsMouse} from "react-icons/bs";
import logo from "../assets/logo.png";
const Misc = () => {
  return (
    <>
    <div className="cursor"></div>
    <a href="/" className="logo" data-cursorpointer="true">
        <img src={logo} alt="logo" data-cursorpointer="true"/>
    </a>
    <a href="/franchise" className="franchiseBtn" data-cursorpointer="true">
       GET A FRANHCISE
    </a>

    <BsMouse className="scrollBtn" data-cursorpointer="true"/>
    </>
  )
}

export default Misc;