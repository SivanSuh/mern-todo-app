import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotContexProvider } from "./context/noteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotContexProvider>
      <App />
    </NotContexProvider>
  </React.StrictMode>
);
