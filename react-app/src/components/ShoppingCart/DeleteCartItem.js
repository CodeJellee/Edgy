import React from "react";
import { useDispatch } from "react-redux";
import deleteShoppingCartAction, { thunkDeleteCartItem }  from "../../store/shoppingCart"


function DeleteCartIem({cartItemId}) {

    const dispatch = useDispatch()

    const onClick = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteCartItem(cartItemId))
    }


    return(
        <>
        <button onClick={onClick}>Remove</button>
        </>
    )
}

export default DeleteCartIem;
