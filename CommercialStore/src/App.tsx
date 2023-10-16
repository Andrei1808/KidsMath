import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { useProducts } from "./hooks/useProducts";
import { serverResponse } from "./interfaces/DataInterfaces";

function App(): React.ReactElement {

  return (
    <div>
        <Layout />
    </div>
  );
}

export default App;
