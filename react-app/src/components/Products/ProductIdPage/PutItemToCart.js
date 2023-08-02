import React from "react";
import { useDispatch } from "react-redux";
import postItemInCartAction, { thunkPostItemInCart }  from "../../../store/shoppingCart"


function PutCartIemToCart({productId}) {

    const dispatch = useDispatch()

    const onClick = (e) => {
        e.preventDefault();
        dispatch(thunkPostItemInCart(productId))
    }


    return(
        <>
        <button onClick={onClick}>Add to Cart</button>
        </>
    )
}

export default PutCartIemToCart;
