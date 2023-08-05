// frontend/src/components/Products/CreateNewProduct/index.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateProduct } from "../../../store/products";
import * as productActions from "../../../store/products";

const NewProductForm = () => {
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [previewImageURL, setPreviewImageURL] = useState("");
  const [sellerId, setSellerId] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const errorsObject = {};

    if (itemName === "") {
      errorsObject.itemName = "Item name is required.";
    }

    if (price === "") {
      errorsObject.price = "Price is required.";
    }

    if (category === "") {
      errorsObject.category = "Category is required.";
    }

    if (description === "") {
      errorsObject.description = "Description is required.";
    }

    if (description.length < 5) {
      errorsObject.description = "Description needs 5 or more characters.";
    }

    if (quantity === "") {
      errorsObject.quantity = "Quantity name is required.";
    }

    if (previewImageURL === "") {
      errorsObject.previewImageURL = "Preview image is required.";
    }

    if (
      previewImageURL &&
      !(
        previewImageURL.endsWith(".png") ||
        previewImageURL.endsWith(".jpg") ||
        previewImageURL.endsWith(".jpeg")
      )
    ) {
      errorsObject.previewImageURL =
        "Preview image must end in .png, .jpg, or .jpeg";
    }
    console.log("Create Component - Err Obj onSubmit", errorsObject);
    if (Object.values(errorsObject).length > 0) return setErrors(errorsObject); // if there are any errors, stop here and return the errors

    let payload = {
      item_name: itemName,
      price: price,
      category: category,
      description: description,
      quantity: quantity,
      preview_imageURL: previewImageURL,
      sellerId: user.id,
    };

    let fetchResponseFromThunk = await dispatch(thunkCreateProduct(payload));
    console.log("return from createProduct dispatch", fetchResponseFromThunk);
    await dispatch(
      productActions.thunkGetSingleProduct(
        fetchResponseFromThunk.New_Product.id
      )
    );
    console.log(
      "you've made it past the create and get single product dispatches - now redirect"
    );
    history.push(`/products/${fetchResponseFromThunk.New_Product.id}`);
  };

  return (
    <form className="create-new-spot-form" onSubmit={onSubmit}>
      <h2>List Your Product!</h2>

      <div>
        <h4>What are you trying to sell?</h4>
        <label>
          <div className="label-and-error-info">
            Item Name
            {submitted && errors.itemName && (
              <div className="errors">{errors.itemName}</div>
            )}
          </div>
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <h4>How much do you want to sell it for?</h4>
        <label>
          <div className="label-and-error-info">
            Price
            {submitted && errors.price && (
              <div className="errors">{errors.price}</div>
            )}
          </div>
          $
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>

      <div>
        <h4>What category does it belong to?</h4>
        <label>
          <div className="label-and-error-info">
            Category
            {submitted && errors.category && (
              <div className="errors">{errors.category}</div>
            )}
          </div>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Home Decor">Home Decor</option>
            <option value="Accessories">Accessories</option>
            <option value="Computer">Computer</option>
            <option value="Waifu Body Pillows">Waifu Body Pillows</option>
            <option value="Books">Books</option>
            <option value="Music">Music</option>
            <option value="Figurines">Figurines</option>
          </select>
        </label>
      </div>

      <div>
        <h4>Provide a description for your product!</h4>
        <label>
          <div className="label-and-error-info">
            Description
            {submitted && errors.description && (
              <div className="errors">{errors.description}</div>
            )}
          </div>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>

      <div>
        <h4>How many do you want to sell?</h4>
        <label>
          <div className="label-and-error-info">
            Quantity
            {submitted && errors.quantity && (
              <div className="errors">{errors.quantity}</div>
            )}
          </div>
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>

      <div>
        <h4>How does your product look like?</h4>
        <label>
          <div className="label-and-error-info">
            Preview Image
            {submitted && errors.previewImageURL && (
              <div className="errors">{errors.previewImageURL}</div>
            )}
          </div>
          <input
            type="text"
            name="previewImageURL"
            placeholder="Preview Image URL"
            value={previewImageURL}
            onChange={(e) => setPreviewImageURL(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button type="submit">Create Product</button>
      </div>
    </form>
  );
};

export default NewProductForm;
