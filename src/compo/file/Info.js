import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../state/Cart";

function Info(props) {
  const cart = useRecoilValue(cartState);
  const totatl = useRecoilValue(cartTotal);
  
  return (
    <div>
      <h2>dádsahjdsajhsah</h2>
      <ul className="cart=item">
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title}: {item.qantity}
          </li>
        ))}
      </ul>
      <h3>total :{totatl}</h3>
    </div>
  );
}

export default Info;
