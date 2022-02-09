import React from "react";
import ReactDOM from "react-dom";

import "typeface-lato";
import { HashRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <HashRouter basename="https://DumitrescuAlexandra.github.io/Psychademy/">
    <App />
  </HashRouter>,

  document.getElementById("root")
);
