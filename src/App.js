import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { cartContext } from "./context/product-context";
import { commerce } from "./lib/commerce";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Layout from "./components/layouts/Layout";
import ProductPage from "./components/pages/ProductPage";

function App() {
  const [cart, setCart] = useState({});
  useEffect(() => {
    getCart();
    Cart(cart);
  }, []);

  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleUpdateCartQty = (productId, quantity) => {
    commerce.cart.update(productId, { quantity }).then((res) => {
      setCart(res);
    });
  };

  const handleRemoveFromCart = async (productId) => {
    const res = await commerce.cart.remove(productId);
    setCart(res);
  };

  const handleEmptyCart = async () => {
    const res = await commerce.cart.empty();
    setCart(res);
  };
  const context = {
    cart,
    onUpdate: handleUpdateCartQty,
    onRemove: handleRemoveFromCart,
    onEmpty: handleEmptyCart,
  };

  return (
    <cartContext.Provider value={context}>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </div>
    </cartContext.Provider>
  );
}

export default App;
