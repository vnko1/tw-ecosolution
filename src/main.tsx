import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App.tsx";
import "./extensions/number.extensions.ts";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
