import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as CartActions from "../../../store/shoppingCart"; //this will be grabbing all of our thunks/reducer from the store file
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import DeleteCartIem from "../DeleteCartItem";
import "./ShoppingCart.css"

function ShoppingCartPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const userCart = useSelector((state) =>
    Object.values(state.shoppingCart.userCart)
  );
  // console.log('THIS IS USERCART', Object.values(userCart))
  //had to insert Object.values to const userCart because item was not rendering properly, bc of that no need to Object.values in the return at the bottom/html section for userCart
  //wasn't working with Object.values and chaining it with .map

  const itemLength = userCart.length;
  // console.log('length of cart here', itemLength)

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



    if (!sessionUser) return null;
    if (userCart.length === 0 || !userCart) return null;

    // console.log('THIS IS ID', item)


  return (
    <>
      <div className="primary-cart-container">
        <h1>{itemLength} items in your cart</h1>
        <div className="products-and-checkout-container">
              <div className="products-only-container">
                {userCart?.map((item) => (
                  <div className="each-cart-item-container">
                    <div>
                      <div className="image-title-price-container">
                      <NavLink to={`/products/${item.Product.id}`} className="preview-image">
                        <img className="cart-product-image" src={item.Product.preview_imageURL} alt={item.Product.item_name} />
                      </NavLink>

                      <div className="name-blurb-cost-quantity">
                      <div className="name-description">
                        <NavLink to={`/products/${item.Product.id}`} className="items-link">
                          <div>{item.Product.item_name}</div>
                        </NavLink>
                        <div className="item-description">EMPTY SPACE</div>
                      </div>
                      <div className="price-how-many-is-left">
                        <div>${item.Product.price}</div>
                        <div>how many is left</div>
                      </div>
                      </div>


                      </div>
                    </div>
                  <DeleteCartIem cartItemId={item.id}/>
                  <div>Save for Later</div>

                  <div className="note-and-delivery">
                    <div>+ Add a note to Seller</div>
                    <div className="delivery-container">
                    <select name="delivery-drop-down">
                        <option value="Shipping Method">Shipping Method</option>
                        <option value="Free Shipping">FREE SHIPPING</option>
                        <option value="Next Day">Next Day</option>
                        <option value="2-3 Day">2-3 Day</option>
                    </select>
                      <div>Estimated Delivery</div>
                    </div>
                  </div>

                  <div className="gift-coupon">
                    <div>
                      <div>This order is a gift</div>
                      <div>Prices will not be shown on the packing slip</div>
                    </div>
                    <div>Apply shop coupon codes</div>
                  </div>

                  </div>
                ))}

              </div>
              <div className="checkout-button-container">
                <button>Proceed To Checkout</button>
              </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartPage;
