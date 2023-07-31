//* =====================  types ===========================//

const POST_FAVORITE_PRODUCT_ACTION = "favorites/POST_FAVORITE_PRODUCT_ACTION";

//*  ===================end of types ===================//

//? =====================  actions ===========================//

const postFavoriteProductAction = (res) => {
  return {
    type: POST_FAVORITE_PRODUCT_ACTION,
    res,
  };
};

//?  ======================= end of actions ===================//

//*  =====================  thunks ===========================//

export const thunkPostFavoriteProduct =
  (productId, userId) => async (dispatch) => {
    let res = await fetch(`/api/products/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        productId,
      }),
    });
    res = await res.json();
    dispatch(postFavoriteProductAction(res));
    return res;
  };

//*  ======================= end of thunks ===================//

//? ================== reducer================================//

/**
 favorites: {
          user: {
            userData
          },
          [productId]: {
               productData
          }
     }
 */

let initialState = { user: {}, userFavorites: {} };
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case POST_FAVORITE_PRODUCT_ACTION: {
      newState = { ...state };
      newState.user = action.res.User;
      newState.userFavorites[action.res.Product.id] = action.res.Product;
      return newState;
    }
    default:
      return state;
  }
}
