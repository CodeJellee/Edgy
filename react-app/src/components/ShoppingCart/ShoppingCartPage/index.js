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
      <div className="primary_cart_container">
        <h1>{itemLength} items in your cart</h1>
        <div className="products_and_checkout_container">
              <div className="products_only_container">
                {userCart?.map((item) => (
                  <div className="each_cart_item_container">
                    <div>
                      <NavLink to={`/products/${item.Product.id}`} className="items_link">
                        <img src={item.Product.preview_imageURL} alt={item.Product.item_name} />
                      </NavLink>
                      <div className="name_price_container">
                        <NavLink to={`/products/${item.Product.id}`} className="items_link">
                          <div>{item.Product.item_name}</div>
                        </NavLink>
                        <div>${item.Product.price}</div>
                      </div>
                    </div>
                  <DeleteCartIem cartItemId={item.id}/>
                  </div>
                ))}

              </div>
              <div className="checkout_button_container">
                <button>Proceed To Checkout</button>
              </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartPage;
