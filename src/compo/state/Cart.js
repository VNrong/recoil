import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cart",
  default: [],
});

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => {
      return total + item.product.price * item.qantity;
    },0);
  },
});
