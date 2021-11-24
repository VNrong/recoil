import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../state/Cart";
import { addToCart, productListState } from "../state/productState";
import Info from "./Info";

export const ProductList = (props) => {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };
  return (
    <div>
      <ul className="product-list">
        {productList.map((pro) => (
          <li key={pro.id} className={`pro-${pro.id} list-unstyled`}>
            {pro.title} có giá {pro.price}
            <button
              className="btn btn-success ml-3"
              onClick={() => handleAddToCart(pro)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <Info />
    </div>
  );
};
