import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
);
