import React from "react";
import logo from '../logo.svg';
import './AppBar.css'

function AppBar() {
  return (
    <>
      <div className="nav-container">
        <nav className="nav-bar">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <ul className="menu-elements">
            <a href="#" className="element">Element1</a>
            <a href="#" className="element">Element2</a>
            <a href="#" className="element">Element3</a>
            <a href="#" className="element">Element4</a>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default AppBar;
