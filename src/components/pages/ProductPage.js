import React, { useState, useEffect } from "react";
import { productContext } from "../../context/product-context";
import Product from "../product/Product";
import { getCartProducts, getProducts } from "../../api/ProductApi";
import { commerce } from "../../lib/commerce";
import Loading from "../loading/Loading";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataProducts = () => {
    getProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  };

  const handleAddCart = async (productId, quantity) => {
    const res = await commerce.cart.add(productId, quantity);
    return res;
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  const context = {
    products,
    onAddCart: handleAddCart,
  };
  return (
    <>
      <productContext.Provider value={context}>
        <div>{loading ? <Loading /> : <Product />}</div>
      </productContext.Provider>
    </>
  );
};

export default ProductPage;
