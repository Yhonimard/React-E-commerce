import { commerce } from "../lib/commerce";

export const getProducts = async () => {
  const res = await commerce.products.list();
  return res.data;
};

export const getCartProducts = async () => {
  const res = await commerce.cart.retrieve();
  return res;
};

export const getCart = async () => {
  const res = await commerce.cart.retrieve();
  return res;
};
