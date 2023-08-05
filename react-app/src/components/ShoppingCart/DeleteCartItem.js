import React from "react";
import { useDispatch } from "react-redux";
import deleteShoppingCartAction, {
  thunkDeleteCartItem,
  thunkGetShoppingCart,
} from "../../store/shoppingCart";
import "../ShoppingCart/ShoppingCartPage/ShoppingCart.css";

function DeleteCartIem({ cartItemId }) {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();

    dispatch(thunkDeleteCartItem(cartItemId));
    //       .then(() => dispatch(thunkGetShoppingCart()))
    //       .then(() => console.log("dispatches complete"));
  };

  return (
    <>
      <div id="remove-save-button" className='PID-favFullButt PID-P-button PID-Transp-butt' onClick={onClick}>
        ✕ Remove
      </div>
    </>
  );
}

export default DeleteCartIem;
