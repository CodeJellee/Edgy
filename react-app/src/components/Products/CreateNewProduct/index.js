// frontend/src/components/Products/CreateNewProduct/index.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {thunkCreateProduct} from "../../../store/products";
import * as productActions from '../../../store/products'

const NewProductForm = () => {
    const user = useSelector(state => state.session.user)

    const dispatch = useDispatch();
    const history = useHistory();

    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("")
    const [previewImageURL, setPreviewImageURL] = useState("")
    const [sellerId, setSellerId] = useState("")

    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = async(e) => {
        e.preventDefault()
        setSubmitted(true);

        const errorsObject = {}

        if(itemName === ""){
            errorsObject.itemName = "Item name is required."
        }

        if(price === ""){
            errorsObject.price = "Price is required."
        }

        if(category === ""){
            errorsObject.category = "Category is required."
        }

        if(description === ""){
            errorsObject.description = "Description is required."
        }

        if(quantity === ""){
            errorsObject.quantity = "Quantity name is required."
        }

        if(previewImageURL === ""){
            errorsObject.previewImageURL = "Preview image is required."
        }

        if(previewImageURL && !(previewImageURL.endsWith('.png') || previewImageURL.endsWith('.jpg') || previewImageURL.endsWith('.jpeg'))) {
            errorsObject.previewImageURL = "Preview image must end in .png, .jpg, or .jpeg"
        }

        if (Object.values(errorsObject).length) return setErrors(errorsObject) // if there are any errors, stop here and return the errors

        let payload = {
            itemName,
            price,
            category,
            description,
            quantity,
            previewImageURL,
            sellerId: user.id
        }

        let fetchResponseFromThunk = await dispatch(thunkCreateProduct(payload))
        history.push(`/products/${fetchResponseFromThunk.id}`)
    }


    return (
        <form className="create-new-spot-form" onSubmit={onSubmit}>

        </form>
    )

}
