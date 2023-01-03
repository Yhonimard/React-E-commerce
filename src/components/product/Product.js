import React, { useContext } from "react";
import { productContext } from "../../context/product-context";
import ProductList from "./ProductList";

const Product = () => {
  const { products } = useContext(productContext);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-4 sm:p-0 justify-center">
        {products.map((item) => (
          <ProductList item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Product;
