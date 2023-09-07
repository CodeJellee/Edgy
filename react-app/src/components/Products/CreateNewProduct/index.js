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
  const [previewImageURL1, setPreviewImageURL1] = useState("");
  const [previewImageURL2, setPreviewImageURL2] = useState("");
  const [previewImageURL3, setPreviewImageURL3] = useState("");
  const [previewImageURL4, setPreviewImageURL4] = useState("");
  const [previewImageURL5, setPreviewImageURL5] = useState("");
  const [previewImageURL6, setPreviewImageURL6] = useState("");
  const [previewImageURL7, setPreviewImageURL7] = useState("");
  const [previewImageURL8, setPreviewImageURL8] = useState("");
  const [previewImageURL9, setPreviewImageURL9] = useState("");
  const [sellerId, setSellerId] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function imageIsWrongFormat(imgUrl) {
    if (imgUrl && !(
      imgUrl.endsWith(".png") ||
      imgUrl.endsWith(".jpg") ||
      imgUrl.endsWith(".jpeg")
    )
    ) {
      return true
    }
  }

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

    if (price.length > 9) {
      errorsObject.price = "Price is not reasonable or too large";
    }

    if (isNaN(Number(price)) || isNaN(price)) {
      errorsObject.price = "Please enter a valid integer price.";
    }

    if (!price.includes(".") || price.split('.')[1].length !== 2) {
      errorsObject.price = "Price needs to have 2 decimal places.";
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

    if (description.length > 255) {
      errorsObject.description = "Description needs 255 or less characters.";
    }

    if (quantity === "") {
      errorsObject.quantity = "Quantity is required.";
    }

    if (quantity > 50) {
      errorsObject.quantity = "You can only sell up to 50 items at once.";
    }

    if (isNaN(Number(quantity)) || isNaN(quantity)) {
      errorsObject.quantity = "Quantity needs to be an integer.";
    }

    if (previewImageURL1 === "") {
      errorsObject.previewImageURL1 = "Preview image is required.";
    }

    if (imageIsWrongFormat(previewImageURL1)) {
      errorsObject.previewImageURL1 = "Preview image 1 must end in .png, .jpg, or .jpeg"
    }
    if (previewImageURL2 && imageIsWrongFormat(previewImageURL2)) {
      errorsObject.previewImageURL2 = "Preview image 2 must end in .png, .jpg, or .jpeg"
    }
    if (previewImageURL3 && imageIsWrongFormat(previewImageURL3)) {
      errorsObject.previewImageURL3 = "Preview image 3 must end in .png, .jpg, or .jpeg"
    }
    if (previewImageURL4 && imageIsWrongFormat(previewImageURL4)) {
      errorsObject.previewImageURL4 = "Preview image 4 must end in .png, .jpg, or .jpeg"
    }
    if (previewImageURL5 && imageIsWrongFormat(previewImageURL5)) {
      errorsObject.previewImageURL5 = "Preview image 5 must end in .png, .jpg, or .jpeg"
    }
    if (previewImageURL6 && imageIsWrongFormat(previewImageURL6)) {
      errorsObject.previewImageURL6 = "Preview image 6 must end in .png, .jpg, or .jpeg"
    }
    if (previewImageURL7 && imageIsWrongFormat(previewImageURL7)) {
      errorsObject.previewImageURL7 = "Preview image 7 must end in .png, .jpg, or .jpeg"
    }
    if (previewImageURL8 && imageIsWrongFormat(previewImageURL8)) {
      errorsObject.previewImageURL8 = "Preview image 8 must end in .png, .jpg, or .jpeg"
    }
    if (previewImageURL9 && imageIsWrongFormat(previewImageURL9)) {
      errorsObject.previewImageURL9 = "Preview image 9 must end in .png, .jpg, or .jpeg"
    }




    // if (
    //   previewImageURL &&
    //   !(
    //     previewImageURL.endsWith(".png") ||
    //     previewImageURL.endsWith(".jpg") ||
    //     previewImageURL.endsWith(".jpeg")
    //   )
    // ) {
    //   errorsObject.previewImageURL =
    //     "Preview image must end in .png, .jpg, or .jpeg";
    // }


    // if (
    //   previewImageURL2 &&
    //   !(
    //     previewImageURL2.endsWith(".png") ||
    //     previewImageURL2.endsWith(".jpg") ||
    //     previewImageURL2.endsWith(".jpeg")
    //   )
    // ) {
    //   errorsObject.previewImageURL =
    //     "Preview image 2 must end in .png, .jpg, or .jpeg";
    // }





    if (Object.values(errorsObject).length > 0) return setErrors(errorsObject); // if there are any errors, stop


    let payload = {
      item_name: itemName,
      price: Number(price),
      category: category,
      description: description,
      quantity: Number(quantity),
      preview_imageURL: previewImageURL1,
      preview_imageURL2: previewImageURL2,
      preview_imageURL3: previewImageURL3,
      preview_imageURL4: previewImageURL4,
      preview_imageURL5: previewImageURL5,
      preview_imageURL6: previewImageURL6,
      preview_imageURL7: previewImageURL7,
      preview_imageURL8: previewImageURL8,
      preview_imageURL9: previewImageURL9,
      sellerId: user.id,
    };

    let fetchResponseFromThunk = await dispatch(thunkCreateProduct(payload));
    ;
    if (fetchResponseFromThunk) {

      await dispatch(
        productActions.thunkGetSingleProduct(
          fetchResponseFromThunk.New_Product.id
        )
      );
      history.push(`/products/${fetchResponseFromThunk.New_Product.id}`);
    }

  };

  return (
    <>
      <div className="pageColor">

        <form className="create-new-spot-form" onSubmit={onSubmit}>
          <Link to="/your_products">Back to products</Link>
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
                  Please add at least one photo to
                  show your item's most
                  important qualities.
                </p>
                <h4>Tips:</h4>
                <ul>
                  <li>Use natural light and no
                  flash.</li>
                  <li>Include a common object
                  for scale.</li>
                  <li>Show the item being
                  , held worn, or used.</li>
                  <li>Shoot against a clean,
                  simple background.</li>
                  <li>Add photos to your
                 variations so buyers can
                  see all their options.</li>
                </ul>
              </div>

              <div className="imgSide-2">
                <label>
                  <div className="label-and-error-info">
                    {submitted && errors.previewImageURL1 && (
                      <div className="errors">{errors.previewImageURL1}</div>
                    )}
                  </div>




                  <input
                    type="text"
                    name="previewImageURL1"
                    placeholder="Preview Image URL 1 (REQUIRED)"
                    value={previewImageURL1}
                    onChange={(e) => setPreviewImageURL1(e.target.value)}
                  />
                </label>
                <label>
                  <div className="label-and-error-info">
                    {submitted && errors.previewImageURL2 && (
                      <div className="errors">{errors.previewImageURL2}</div>
                    )}
                  </div>
                  <input
                    type="text"
                    name="previewImageURL2"
                    placeholder="Preview Image URL 2"
                    value={previewImageURL2}
                    onChange={(e) => setPreviewImageURL2(e.target.value)}
                  />
                </label>
                <label>
                  {submitted && errors.previewImageURL3 && (
                    <div className="errors">{errors.previewImageURL3}</div>
                  )}
                  <input
                    type="text"
                    placeholder="Preview Image URL 3"
                    value={previewImageURL3}
                    onChange={(e) => setPreviewImageURL3(e.target.value)}
                  />
                </label>
                <label>
                  {submitted && errors.previewImageURL4 && (
                    <div className="errors">{errors.previewImageURL4}</div>
                  )}
                  <input
                    type="text"
                    placeholder="Preview Image URL 4"
                    value={previewImageURL4}
                    onChange={(e) => setPreviewImageURL4(e.target.value)}
                  />
                </label>
                <label>
                  {submitted && errors.previewImageURL5 && (
                    <div className="errors">{errors.previewImageURL5}</div>
                  )}
                  <input
                    type="text"
                    placeholder="Preview Image URL 5"
                    value={previewImageURL5}
                    onChange={(e) => setPreviewImageURL5(e.target.value)}
                  />
                </label>
                <label>
                  {submitted && errors.previewImageURL6 && (
                    <div className="errors">{errors.previewImageURL6}</div>
                  )}
                  <input
                    type="text"
                    placeholder="Preview Image URL 6"
                    value={previewImageURL6}
                    onChange={(e) => setPreviewImageURL6(e.target.value)}
                  />
                </label>
                <label>
                  {submitted && errors.previewImageURL7 && (
                    <div className="errors">{errors.previewImageURL7}</div>
                  )}
                  <input
                    type="text"
                    placeholder="Preview Image URL 7"
                    value={previewImageURL7}
                    onChange={(e) => setPreviewImageURL7(e.target.value)}
                  />
                </label>
                <label>
                  {submitted && errors.previewImageURL8 && (
                    <div className="errors">{errors.previewImageURL8}</div>
                  )}
                  <input
                    type="text"
                    placeholder="Preview Image URL 8"
                    value={previewImageURL8}
                    onChange={(e) => setPreviewImageURL8(e.target.value)}
                  />
                </label>
                <label>
                  {submitted && errors.previewImageURL9 && (
                    <div className="errors">{errors.previewImageURL9}</div>
                  )}
                  <input
                    type="text"
                    placeholder="Preview Image URL 9"
                    value={previewImageURL9}
                    onChange={(e) => setPreviewImageURL9(e.target.value)}
                  />
                </label>
                <div className="label-and-error-info">
                  {submitted && errors.previewImageURL && (
                    <div className="errors">{errors.previewImageURL}</div>
                  )}
                </div>
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
                    on Ftsy.
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
                <div id="pS-3">
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
                  {submitted && errors.itemName && (
                    <div className="errors">{errors.itemName}</div>
                  )}
                </label>
                <div className="productAbout">

      <div id="pS-2" >
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
            {submitted && errors.price && (
              <div className="errors">{errors.price}</div>
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
            min="1"
            max="50"
          />
        </label>
            {submitted && errors.quantity && (
              <div className="errors">{errors.quantity}</div>
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
                    {submitted && errors.category && (
                      <div className="errors">{errors.category}</div>
                    )}
                  </label>
                </div>

                <div id="pS-4">
                  <label>
                    <div className="label-and-error-info">
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
                    {submitted && errors.description && (
                      <div className="errors">{errors.description}</div>
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
