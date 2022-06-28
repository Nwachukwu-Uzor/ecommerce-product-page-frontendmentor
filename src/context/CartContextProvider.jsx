import CartContext from "./CartContext";

import React, { useState } from "react";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([{ product: "prod" }]);

  const addToCart = (item) => setCart((crt) => [item, ...crt]);
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
