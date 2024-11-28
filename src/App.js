import React from "react";
import { Header } from "./components/Header/Header";
import Section from "./components/section/Section";
import Products from "./pages/Home/components/products/Products";



function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Products />
    </div>

  );
}

export default App;
