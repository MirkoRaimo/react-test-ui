import React from "react";
import "./Body.css";
import logo from "../logo.svg";

function Body() {
  return (
    <>
      <div className="main-background">
        <div className="main-body">
          <h1 className="welcome-sentence">This is our great product</h1>
          <img src={logo} className="main-product" alt="Main Product" />
          <h1 className="company-motto">Innovation.<br></br>Always.</h1>
        </div>
      </div>
    </>
  );
}

export default Body;
