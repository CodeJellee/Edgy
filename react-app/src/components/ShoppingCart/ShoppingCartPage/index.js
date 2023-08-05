import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as CartActions from "../../../store/shoppingCart"; //this will be grabbing all of our thunks/reducer from the store file
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import DeleteCartIem from "../DeleteCartItem";
import Footer2 from "../../Footer/index2"
import "./ShoppingCart.css";

function ShoppingCartPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const userCart = useSelector((state) =>
    Object.values(state.shoppingCart.userCart)
  );
  // console.log("THIS IS USERCART", userCart);
  //had to insert Object.values to const userCart because item was not rendering properly, bc of that no need to Object.values in the return at the bottom/html section for userCart
  //wasn't working with Object.values and chaining it with .map

  const itemLength = userCart.length;
  // console.log("length of cart here", itemLength);

  useEffect(() => {
    if (sessionUser) {
      //if user is logged in, dispatch thunk
      dispatch(CartActions.thunkGetShoppingCart());
      // dispatch(CartActions.thunkDeleteCartItem(productId));
    }
  }, [dispatch]);

  if (!sessionUser) return null;
  if (userCart.length === 0 || !userCart) return null;

  // const handleRemoveItem = (productId) => {
  //     // Call the thunkDeleteCartItem action creator to remove the item from the cart.
  //     dispatch(CartActions.thunkDeleteCartItem(productId));
  // };

  // console.log("THIS IS ID", item);

  return (
    <>
      <div className="primary-cart-container">
        <h1>{itemLength} items in your cart</h1>
        <div className="products-and-checkout-container">

          <div className="products-only-container">
            {userCart?.map((item) => (
              <>
                {/* {console.log(item)} */}
                <div className="each-cart-item-container">
                  <div>
                    <div className="sellerId-container">
                      Purchasing from Seller {item.Product.sellerId}
                    </div>
                  </div>
                  <div>
                    <div className="image-title-price-container">
                      <NavLink
                        to={`/products/${item.Product.id}`}
                        className="preview-image"
                      >
                        <img
                          className="cart-product-image"
                          src={item.Product.preview_imageURL}
                          alt={item.Product.item_name}
                        />
                      </NavLink>

                      <div className="name-blurb-cost-quantity">
                        <div className="name-description">
                          <NavLink
                            to={`/products/${item.Product.id}`}
                            className="items-link"
                          >
                            <div>{item.Product.item_name}</div>
                          </NavLink>
                          <div className="item-description">
                            {item.Product.description}
                          </div>
                        </div>
                        <div className="price-how-many-is-left">
                          <div>${item.Product.price} Each</div>
                          <div>Quantity:</div>
                          <input type="number" className="quantity-input" name="quantity" min="1" defaultValue="1"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="remove-save">
                    <DeleteCartIem
                      cartItemId={item.Product.id}
                    />
                    <div id="remove-save-button" className='PID-favFullButt PID-P-button PID-Transp-butt'>Save for Later</div>
                  </div>

                  <div className="note-and-delivery">
                    <div className="add-note">+ Add a note to Seller</div>
                    <div className="delivery-container">
                      <select name="delivery-drop-down">
                        <option value="Shipping Method">Shipping Method</option>
                        <option value="Free Shipping">FREE SHIPPING</option>
                        <option value="Next Day">Next Day</option>
                        <option value="2-3 Day">2-3 Day</option>
                      </select>
                      <div className="est-delivery">Estimated Delivery</div>
                    </div>
                  </div>

                  <div className="gift-coupon">
                    <div>
                      <div className="gift-toggle">
                        <input type="checkbox" class="toggle-input" />
                        <div>This order is a gift</div>
                      </div>
                      <div className="gift-order-blurb">
                        Prices will not be shown on the packing slip
                      </div>
                    </div>
                    <div className="coupon">Apply shop coupon codes</div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="checkout-button-container">
            <button className='PID-favFullButt PID-P-button PID-Transp-butt'>Proceed To Checkout</button>
          </div>
        </div>
      </div>
      <Footer2/>
    </>
  );
}

export default ShoppingCartPage;
