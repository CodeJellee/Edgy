// frontend/src/components/Products/CreateNewProduct/index.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateProduct } from "../../../store/products";
import * as productActions from "../../../store/products";
import "./CreateNewProduct.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FooterTwo from "../../Footer/index2";

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
  const [vaErrors, setVaErrors] = useState({});


  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {

    const err = {};

    if (itemName === "") {
      err["itemName"] = "Item name is required.";
    }

    if (price === "") {
      err["price"] = "Price is required.";
    }

    if (price.length > 9) {
      err["price"] = "Price is not reasonable or too large";
    }

    if (isNaN(Number(price)) || isNaN(price)) {
      err["price"] = "Please enter a valid integer price.";
    }

    if (!price.includes(".") || price.split('.')[1].length !== 2) {
      err["price"] = "Price needs to have 2 decimal places.";
    }

    if (category === "") {
      err["category"] = "Category is required.";
    }

    if (description === "") {
      err["description"] = "Description is required.";
    }

    if (description.length < 5) {
      err["description"] = "Description needs 5 or more characters.";
    }

    if (description.length > 255) {
      err["description"] = "Description needs 255 or less characters.";
    }

    if (quantity === "") {
      err["quantity"] = "Quantity is required.";
    }

    if (quantity > 50) {
      err["quantity"] = "You can only sell up to 50 items at once.";
    }

    if (isNaN(Number(quantity)) || isNaN(quantity)) {
      err["quantity"] = "Quantity needs to be an integer.";
    }

    if (previewImageURL === "") {
      err["previewImageURL"] = "Preview image is required.";
    }

    if (
      previewImageURL &&
      !(
        previewImageURL.endsWith(".png") ||
        previewImageURL.endsWith(".jpg") ||
        previewImageURL.endsWith(".jpeg")
      )
    ) {
      err["previewImageURL"] =
        "Preview image must end in .png, .jpg, or .jpeg";
    }

    setVaErrors(err)

  }, [itemName, previewImageURL, quantity, description, category, price])



  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(vaErrors)


    if (Object.keys(vaErrors).length) {
      return;
    }


    let payload = {
      item_name: itemName,
      price: Number(price),
      category: category,
      description: description,
      quantity: Number(quantity),
      preview_imageURL: previewImageURL,
      sellerId: user.id,
    };

    let fetchResponseFromThunk = await dispatch(thunkCreateProduct(payload));
    console.log("return from createProduct dispatch", fetchResponseFromThunk);

    if (fetchResponseFromThunk) {
      await dispatch(
        productActions.thunkGetSingleProduct(
          fetchResponseFromThunk.New_Product.id
        )
      );
      history.push(`/products/${fetchResponseFromThunk.New_Product.id}`);
    }
    // console.log(
    // "you've made it past the create and get single product dispatches - now redirect"
    // );
  };

  return (
    <>
    <div className="pageColor">

    <form className="create-new-spot-form" onSubmit={onSubmit}>
      <Link to="/your_products">{"<"} Back to products</Link>
      <h2>Add a new Product!</h2>
      <div className="productImages">

      <div className="photoTitle">
        <h4>Photos</h4>
        <p>Add as many as you can so buyers can see every detail.</p>
      </div>
        <div className="addPhotos">
      <div className="imgSide-1">
        <h4>Photos*</h4>
        <p>
        Please add atleast one photo to
        show your item's most
        important qualities.
        </p>
        <h4 id="tips">Tips:</h4>
        <ul>
          <li>Use natural light and no</li>
          <li>flash.</li>
          <li>Include a common object</li>
          <li>for scale.</li>
          <li>Show the item being</li>
          <li>held. worn, or used.</li>
          <li>Shoot against a clean,</li>
          <li>simple background.</li>
          <li>Add photos to your</li>
          <li>variations so buyers can</li>
          <li>see all their opuons.</li>
        </ul>
        </div>
        {/* <div className="imgSide-2"> */}
            <div className="imgSide-2">
              <label>
                <div className="label-and-error-info">
                  {submitted && vaErrors.previewImageURL && (
                    <div className="errors">{vaErrors.previewImageURL}</div>
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
              <label>
          <input
            type="text"
            placeholder="Preview Image URL"
            value={previewImageURL}
          />
        </label>
        <label>

          <input
            type="text"
            placeholder="Preview Image URL"
            value={previewImageURL}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Preview Image URL"
            value={previewImageURL}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Preview Image URL"
            value={previewImageURL}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Preview Image URL"
            value={previewImageURL}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Preview Image URL"
            value={previewImageURL}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Preview Image URL"
            value={previewImageURL}
          />
        </label>
            </div>
        </div>
      </div>
      <div className="productDetails">

      <div className="productTitle">
        <p>Product Details</p>
        <p>Tell the world all about your item and why they'll love it</p>
      </div>
      <div className="pDetails">

      <div className="productSide-1">
        <div id="pS-1">

              <h4>Title*</h4>
              <p>
                Include keywords that
                buyers would use to search
                or your item.
              </p>
        </div>
        <div id="pS-2">
              <h4>About this product*</h4>
              <p>
                Learn more about what
                types of items are allowed
                on Edgy.
              </p>
        </div>
        <div id="pS-3">
              <h4>Category*</h4>
              <p>
                Type a two- or three-word
                description of your item to
                get category suggestions
                that will help more shoppers
                find it.
              </p>
        </div>
        <div className="pS-4">
              <h4>Description*</h4>
             <p>Start with a brief overview
                that describes your item's
                finest features. Shoppers will
                only see the first few lines of
                your description at first, so
                make it count
                Not sure what else to say?
                Shoppers also like hearing
                about your process, and the
                story behind this item.</p>
            </div>
      </div>
          <div className="productSide-2">
        <label id="pS-1">
          <div className="label-and-error-info">
            Item Name
          </div>
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            />
            {submitted && vaErrors.itemName && (
              <div className="errors">{vaErrors.itemName}</div>
            )}
        </label>
        <div id="pS-2" className="productAbout">
      <div >
        <label>
          <div className="label-and-error-info">
            Price
          </div>
          <input
            type="text" //double check this
            name="price"
            placeholder="$"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
        </label>
            {submitted && vaErrors.price && (
              <div className="errors">{vaErrors.price}</div>
            )}
      </div>
      <div>
        <label>
          <div className="label-and-error-info">
            Quantity
          </div>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
        </label>
            {submitted && vaErrors.quantity && (
              <div className="errors">{vaErrors.quantity}</div>
            )}
      </div>
        </div>


      <div id="pS-3">
        <label>
          <div className="label-and-error-info">
            Category
          </div>
          <select
          className="sel"
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
            {submitted && vaErrors.category && (
              <div className="errors">{vaErrors.category}</div>
            )}
        </label>
      </div>

      <div id="pS-4">
        <label>
          <div id="pS-5" className="label-and-error-info">
            Description
          </div>
          <textarea
          className="ta"
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
          {submitted && vaErrors.description && (
            <div className="errors">{vaErrors.description}</div>
          )}
        </label>
      </div>

          </div>
      </div>
      </div>
    </form>
    <div className="footerFour">
      <div className="subForm">
        <button onClick={onSubmit} type="submit">Create Product</button>
      </div>
        </div>
    </div>

    </>
  );
};

export default NewProductForm;
