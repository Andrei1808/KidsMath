import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { useProducts } from "./hooks/useProducts";
import { serverResponse } from "./interfaces/DataInterfaces";

function App(): React.ReactElement {
  const prod = useProducts();

  return (
    <div>
      <div>
      {prod.map((product) => (
        <div key={product.id}>
    </div>
  ))}
      </div>
        <Layout />
    </div>
  );
}

export default App;
