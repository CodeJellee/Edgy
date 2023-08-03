import React from "react";
import { useDispatch } from "react-redux";
import deleteShoppingCartAction, { thunkDeleteCartItem }  from "../../store/shoppingCart"
import "../ShoppingCart/ShoppingCartPage/ShoppingCart.css"

function DeleteCartIem({cartItemId}) {

    const dispatch = useDispatch()

    const onClick = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteCartItem(cartItemId))
    }


    return(
        <>
        <div className="remove-save-button" onClick={onClick}>✕ Remove</div>
        </>
    )
}

export default DeleteCartIem;
