import React from "react";
import ReactDOM from "react-dom/client";
import "ress";
import "sanitize.css";
import "./assets/scss/index.scss";
import "./assets/scss/layout.scss";
import App from "./App";
import { LoadingProvider } from "./context/LoadingContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
);
