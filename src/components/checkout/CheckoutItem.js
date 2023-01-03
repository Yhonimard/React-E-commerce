import { useState, useEffect, useContext } from "react";
import { Stepper } from "react-form-stepper";
import { cartContext } from "../../context/product-context";
import { commerce } from "../../lib/commerce";
import AddressForm from "./AddressForm";
import Confirm from "./Confirm";
import PayForm from "./PayForm";
import React from "react";
const CheckoutItem = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [token, setToken] = useState(null);
  const [data, setData] = useState({});
  const { cart } = useContext(cartContext);

  useEffect(() => {
    const generateToken = () =>
      commerce.checkout
        .generateToken(cart?.id, { type: "cart" })
        .then((res) => {
          setToken(res);
        });
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);

  const next = (data) => {
    setData(data);
    nextStep();
  };

  const Confirmation = () => (activeStep === 2 ? <Confirm /> : null);
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm token={token} next={next} />
    ) : (
      <PayForm data={data} token={token} back={backStep} />
    );

  return (
    <>
      <Stepper
        steps={[{ label: "shipping" }, { label: "payment" }]}
        activeStep={activeStep}
      />
      {activeStep === 2 ? <Confirmation /> : <Form />}
    </>
  );
};

export default CheckoutItem;
