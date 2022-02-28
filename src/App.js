import React from "react";
import "./App.css";
import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import RouteTest from "./components/RouteTest";

function App() {
  return (
    <div className="App">
      <Nav />
      <RouteTest />
    </div>
  );
}

export default App;
