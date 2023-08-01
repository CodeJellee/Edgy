import React from "react";
import { useModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { thunkDeleteCartItem } from "../../../store/shoppingCart";
import thunk from "redux-thunk";


function DeleteItemModal({productId}) {

    const { closeModal } = useModal()
    const dispatch = useDispatch()

    const onClick = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteCartItem(productId))
        .then(closeModal)
    }

    return (
        <div class="delete-cart-item-modal-container">
            <div className="confirm-delete-item">Confirm Delete</div>
            <h3 className="delete-item-description">Are you sure you want to remove this spot from the listings?</h3>
            <div className="delete-spot-buttons-two">
                <button className="spot-yes" onClick={onClick}>Yes (Delete Spot)</button>
                <button className="spot-no" onClick={closeModal}>No (Keep Spot)</button>
            </div>
        </div>
    )
}
