

//? =====================  types ===========================//

const GET_SHOPPING_CART= "shoppingCart/GET_SHOPPING_CART"
// const DELETE_CART_ITEM= "shoppingCart/DELETE_CART_ITEM"

//?  ===================end of types ===================//

//* =====================  actions ===========================//

const getShoppingCartAction = (cart) => {
  return {
    type: GET_SHOPPING_CART,
    cart,
  };
};


//*  ======================= end of actions ===================//

//*  =====================  thunks ===========================//

export const thunkGetShoppingCart = () => async (dispatch) => {
  let current_cart = await fetch(`/api/carts/shopping_cart`,  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  current_cart = await current_cart.json();
  console.log("THIS IS CURRENT CART THUNK", current_cart)
  dispatch(getShoppingCartAction(current_cart));
  return current_cart
}

//*  ======================= end of thunks ===================//


//? ================== reducer================================//

let initialState = { userCart: {}};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SHOPPING_CART: {
      newState = { ...state };
      console.log("this is the cart in the reducer", action.cart)
      //below is action.<the payload insert here from above>
      action.cart.Shopping_Cart.forEach(
        (product) => (newState.userCart[product.id] = { ...product })
      );
      return newState
    }
    default:
      return state;
  }
}
