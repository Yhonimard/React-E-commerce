import { Card } from "flowbite-react";
import CheckoutItem from "./CheckoutItem";
const Checkout = () => {
  return (
    <div className="px-4 sm:px-0">
      <Card>
        <p className="text-center text-4xl font-black">Checkout</p>
        <CheckoutItem />
      </Card>
    </div>
  );
};

export default Checkout;
