import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./body/Main";

function RouteTest() {
  return (
    <Routes>
      <Route exact path="/test-messenger" element={<Main />}>
        Home
      </Route>
      <Route path="/test-messenger/features" element={<Features />}>
        Features
      </Route>
      <Route path="/test-messenger/desktop" element={<Desktop />}>
        Desktop app
      </Route>
      <Route path="/test-messenger/privacy" element={<Privacy />}>
        Privacy and safety
      </Route>
      <Route path="/test-messenger/dev" element={<Dev />}>
        For developers
      </Route>
    </Routes>
  );
}

function Features() {
  return <h1>This is Features</h1>;
}
function Desktop() {
  return <h1>This is Desktop</h1>;
}
function Privacy() {
  return <h1>This is Privacy</h1>;
}
function Dev() {
  return (
    <h1 style={{ height: "300px", backgroundColor: "red" }}>This is Dev</h1>
  );
}

export default RouteTest;
