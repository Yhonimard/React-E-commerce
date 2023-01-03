import { Card } from "flowbite-react";

const BestProductList = ({ item }) => {
  return (
    <Card imgSrc={`http://source.unsplash.com/500x500?${item.name}`}>
      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {item.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.price}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.type}
      </p>
    </Card>
  );
};

export default BestProductList;
