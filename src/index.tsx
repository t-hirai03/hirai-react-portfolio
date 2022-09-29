import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "ress";
import "sanitize.css";
import { Provider } from "react-redux";
import store from "./store/store";
import CanvasTest from "./components/canvasTest"



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <CanvasTest />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
