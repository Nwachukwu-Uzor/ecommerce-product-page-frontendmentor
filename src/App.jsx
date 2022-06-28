import React from "react";
import Nav from "./components/Nav";
import Product from "./components/Product";

import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <Nav />
      <Product />
    </CartContextProvider>
  );
};

export default App;
