import { Card } from "flowbite-react";
import { useContext } from "react";
import { BestProductContext } from "../../context/product-context";
import BestProductList from "./BestProductList";
import Carousol from "./Carousol";
const BestProduct = () => {
  const { bestProducts } = useContext(BestProductContext);

  return (
    <>
      <h1 className="text-4xl font-black text-center ">BEST PRODUCT!!!</h1>
      <div className="p-4">
        <Carousol>
          {bestProducts.map((item) => {
            return (
              <div className="max-w-xs" key={item.id}>
                <BestProductList item={item} />
              </div>
            );
          })}
        </Carousol>
      </div>
    </>
  );
};

export default BestProduct;
