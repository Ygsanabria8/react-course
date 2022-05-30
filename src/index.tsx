import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

import App from "./App";


const divRoot = ReactDOM.createRoot(document.getElementById("root") as Element);

divRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);