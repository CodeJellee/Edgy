//? =====================  types ===========================//

const GET_SHOPPING_CART = "shoppingCart/GET_SHOPPING_CART";
const DELETE_CART_ITEM = "shoppingCart/DELETE_CART_ITEM";
const POST_ITEM_IN_CART = "shoppingCart/POST_ITEM_IN_CART";
const CLEAR_USER_CART = "shoppingCart/CLEAR_USER_CART";

//?  ===================end of types ===================//

//* =====================  actions ===========================//

const getShoppingCartAction = (cart) => {
  return {
    type: GET_SHOPPING_CART,
    cart,
  };
};

const deleteShoppingCartAction = (productId) => {
  return {
    type: DELETE_CART_ITEM,
    productId,
  };
};

const postItemInCartAction = (product) => {
  return {
    type: POST_ITEM_IN_CART,
    product,
  };
};

export const clearCartAction = () => {
  return {
    type: CLEAR_USER_CART,
  };
};
//*  ======================= end of actions ===================//

//*  =====================  thunks ===========================//
//fetch route needs to match route from route file

export const thunkGetShoppingCart = () => async (dispatch) => {
  let current_cart = await fetch(`/api/carts/shopping_cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  current_cart = await current_cart.json();
  // console.log("THIS IS CURRENT CART THUNK", current_cart)
  dispatch(getShoppingCartAction(current_cart));
  return current_cart;
};

export const thunkDeleteCartItem = (productId) => async (dispatch) => {
  let product = await fetch(`/api/carts/shopping_cart/${productId}`, {
    method: "DELETE",
  });
  product = await product.json();
  // console.log('THIS IS DELETE THUNK', product, productId)
  await dispatch(deleteShoppingCartAction(productId));
  return product;
};

export const thunkPostItemInCart = (productId, userId) => async (dispatch) => {
  let product = await fetch(`/api/products/${productId}/add_to_cart`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      userId,
    }),
    // console.log('THIS IS PRODUCT', product)
  });
  product = await product.json();
  await dispatch(postItemInCartAction(product));
  // await dispatch(thunkGetShoppingCart());
  return product;
};

//*  ======================= end of thunks ===================//

//? ================== reducer================================//

let initialState = { userCart: {} };

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SHOPPING_CART: {
      newState = { ...state };

      action.cart.Shopping_Cart.forEach(
        (product) => (newState.userCart[product.productId] = { ...product })
      );
      return newState;
    }
    case POST_ITEM_IN_CART: {
      newState = { ...state };

      console.log("this is payload", action.product); // Payload

      const productPayload = action.product;

      // newState.userCart[product.id] = Product: {product}, id, productId, userId}
      newState.userCart[productPayload.CartItem.productId] = {
        Product: productPayload.Product,
        ...productPayload.CartItem,
      }; // payload: cartId, productId, userId

      return newState;
    }
    case DELETE_CART_ITEM: {
      newState = { ...state };
      newState.userCart = { ...newState.userCart };
      // console.log('WHAT IS THIS', newState.userCart[action.productId])
      delete newState.userCart[action.productId]; // refactor the get route to normalize by product id
      return newState;
    }
    case CLEAR_USER_CART: {
      return { ...state, userCart: {} };
    }
    default:
      return state;
  }
}
