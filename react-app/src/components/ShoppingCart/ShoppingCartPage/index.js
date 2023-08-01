import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import * as CartActions from '../../../store/shoppingCart'
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


function ShoppingCartPage(){
    const { id } = useParams()

    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const userCart = useSelector((state) => Object.values(state.shoppingCart.userCart));
    // console.log('THIS IS USERCART', Object.values(userCart))
    //had to insert Object.values to const userCart because item was not rendering properly, bc of that no need to Object.values in the return at the bottom/html section for userCart
    //wasn't working with Object.values and chaining it with .map


    useEffect(() => {
        if (sessionUser){
            //if user is logged in, dispatch thunk
            dispatch(CartActions.thunkGetShoppingCart());
        }
    }, [dispatch, sessionUser])

    if (!sessionUser) return null;
    if (userCart.length === 0 || !userCart) return null;

    // console.log('THIS IS ID', item)


    return (
        <>
            <h1>User's Shopping Cart Page</h1>
            <div>
                {userCart?.map((item) => (
                    <div class="cart_item_container">
                    <div>
                        <NavLink to={`/products/${item.Product.id}`} class="items-link">
                            <img src={item.Product.preview_imageURL} alt={item.Product.item_name}/>
                        </NavLink>
                        <div class="name_price_container">
                            <NavLink to={`/products/${item.Product.id}`} class="items-link">
                                <div>{item.Product.item_name}</div>
                            </NavLink>
                            <div>${item.Product.price}</div>
                        </div>
                    </div>
                    <button>Delete</button>
                    </div>
                ))}
                <button>Proceed To Checkout</button>

            </div>

        </>
    );
}

export default ShoppingCartPage;
