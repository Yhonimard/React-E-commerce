import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { productContext } from "../../context/product-context";

const ProductList = ({ item }) => {
  const { onAddCart } = useContext(productContext);

  return (
    <div className="max-w-sm min-h-max">
      <Card imgSrc={item.image.url} className="h-full ">
        <div className="flex justify-between flex-col sm:flex-row">
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white truncate ">
            {item.name}
          </h5>
          <p className="  font-normal text-sm  text-gray-700 dark:text-gray-400 truncate ">
            {item.price.formatted_with_symbol}
          </p>
        </div>
        <p
          className="font-normal text-sm text-gray-700 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faCartPlus}
            className="cursor-pointer"
            onClick={() => onAddCart(item.id, 1)}
          />
        </div>
      </Card>
    </div>
  );
};

export default ProductList;
