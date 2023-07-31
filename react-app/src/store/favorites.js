//* =====================  types ===========================//

const GET_USER_FAVORITES_ACTION = "favorites/GET_USER_FAVORITES_ACTION";
const POST_FAVORITE_PRODUCT_ACTION = "favorites/POST_FAVORITE_PRODUCT_ACTION";

//*  ===================end of types ===================//

//? =====================  actions ===========================//

const getUserFavoritesAction = (favs) => {
  return {
    type: GET_USER_FAVORITES_ACTION,
    favs,
  };
};

const postFavoriteProductAction = (res) => {
  return {
    type: POST_FAVORITE_PRODUCT_ACTION,
    res,
  };
};

//?  ======================= end of actions ===================//

//*  =====================  thunks ===========================//

export const thunkGetUserFavorites = (userId) => async (dispatch) => {
  let favs = await fetch(`/api/favorites/current`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  favs = await favs.json();
  dispatch(getUserFavoritesAction(favs));
  return favs;
};

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
      userFavorites: {
        [productId]: {
            productData
        }
      }
    }
 */

let initialState = { user: {}, userFavorites: {} };
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_USER_FAVORITES_ACTION: {
      newState = { ...state };
      console.log("this is the favs in the reducer =======>", action.favs);
      action.favs.Favorites.Products.forEach(
        (product) => (newState.userFavorites[product.id] = { ...product })
      );
      newState.user = { ...action.favs.Favorites.User };
      return newState;
    }
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
