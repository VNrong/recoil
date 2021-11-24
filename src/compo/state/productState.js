import { atom } from "recoil";

export const productListState = atom({
  key: `productList`,
  default: [
    { id: 1, price: 250, title: "ao thun" },
    { id: 2, price: 50, title: " thun" },
    { id: 3, price: 350, title: "ao " },
    { id: 4, price: 450, title: "ao trong thun" },
  ],
});

export const addToCart = (cart, product) => {
  const newCarrt = [...cart];
  const foundIndex = cart.findIndex((x) => x.id === product.id);

  if (foundIndex >= 0) {
    newCarrt[foundIndex] = {
      ...cart[foundIndex],
      qantity: cart[foundIndex].qantity + 1,
    };
    return newCarrt;
  }
  newCarrt.push({ id: product.id, product: product, qantity: 1 });
  return newCarrt;
};
