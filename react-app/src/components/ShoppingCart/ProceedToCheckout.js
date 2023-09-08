import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkCheckoutCart, thunkGetShoppingCart } from "../../store/shoppingCart";
import { useHistory } from "react-router-dom";
// import clearCartAction from "../../store/shoppingCart";
import "../ShoppingCart/ShoppingCartPage/ShoppingCart.css";


function ProceedToCheckout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  // const onClick = (e) => {
  //   e.preventDefault();

  //   // dispatch(clearCartAction());
  //   // setCheckoutMessage("Successfully Checked Out!");
  //   alert("Feature coming soon!");
  // };

  const handleClearCart = async () => {
    await dispatch(thunkCheckoutCart());
    await dispatch(thunkGetShoppingCart())
    alert ("Purchase was successful!")
    history.push('/')
  };

  return (
    <>
      <div className='PID-cartButt'onClick={handleClearCart}>
        Proceed To Checkout
      </div>
      {checkoutMessage && <p>{checkoutMessage}</p>}
    </>
  );
}

export default ProceedToCheckout;
