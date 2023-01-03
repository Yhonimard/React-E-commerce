import Review from "./Review";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { Button, Card } from "flowbite-react";

const stripe = loadStripe("..");

const PayForm = ({ token, data, back }) => {
  console.log("token", token);
  console.log("data", data);
  return (
    <>
      <Review token={token} />
      <hr />

      <Elements stripe={stripe}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form>
              <CardElement />
              <br />
              <div className="flex justify-between">
                <Button size="xs" onClick={back}>
                  back
                </Button>
                <Button size="xs" disabled={!stripe}>
                  Pay
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PayForm;
