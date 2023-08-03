import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postItemInCartAction, { thunkPostItemInCart }  from "../../../store/shoppingCart"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

function PutCartIemToCart({productId}) {

    const dispatch = useDispatch()
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products.singleProduct)
    // console.log('WHAT IS PRODUCT', product)

    const onClick = (e) => {
        e.preventDefault();
        if (productBelongsToUser()) {
            alert("You cannot add your own product to the cart.");
        } else {
            dispatch(thunkPostItemInCart(productId))
            history.push("/shopping_cart")

        }
    }

    const productBelongsToUser = () => {
        return product.sellerId === currentUser.id;
    };


    return(
        <>
        <button className='PID-cartButt PID-P-button' onClick={onClick}>Add to Cart</button>
        </>
    )
}

export default PutCartIemToCart;
