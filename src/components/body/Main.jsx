import React from "react";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";
import "./body.css";
import Footer from "../footer/Footer";

function Main() {
  return (
    <div className="Main ">
      <div className="row">
        <LeftBody />
        <RightBody />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
