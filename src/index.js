import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./components/KandyKorner.css";
import KandyKornerHome from "./components/KandyKorner";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <KandyKornerHome />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
