//*  =====================  thunks ===========================//

//*  ======================= end of thunks ===================//

//? =====================  types ===========================//

//?  ===================end of types ===================//

//* =====================  actions ===========================//

//*  ======================= end of actions ===================//

//? ================== reducer================================//

const GET_ALL_PRODUCTS_ACTION = "products/GET_ALL_PRODUCTS_ACTION";
const GET_SINGLE_PRODUCT_ACTION = "products/GET_SINGLE_PRODUCT_ACTION";
const GET_USER_PRODUCTS_ACTION = "products/GET_USER_PRODUCTS_ACTION";
const DELETE_PRODUCT_ACTION = "products/DELETE_PRODUCT_ACTION";
const CREATE_PRODUCT_ACTION = "products/CREATE_PRODUCT_ACTION";

const getAllProducts = (products) => ({
  type: GET_ALL_PRODUCTS_ACTION,
  products,
});

const getSingleProduct = (product) => ({
  type: GET_SINGLE_PRODUCT_ACTION,
  product,
});

const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT_ACTION,
  productId,
});

const createProduct = (product) => ({
  type: CREATE_PRODUCT_ACTION,
  product,
});

const getUserProducts = (products) => ({
  type: GET_USER_PRODUCTS_ACTION,
  products,
});

export const thunkGetAllProducts = () => async (dispatch) => {
  const response = await fetch("/api/products/", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(response)
  if (response.ok) {
    const data = await response.json();

    dispatch(getAllProducts(data));
    return data;
  }

  return "error";
};

export const thunkGetSingleProduct = (productId) => async (dispatch) => {
  let product = await fetch(`/api/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  product = await product.json();
  dispatch(getSingleProduct(product));
  return product;
};

export const thunkGetUserProducts = () => async (dispatch) => {
  let userProducts = await fetch(`/api/products/current`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  userProducts = await userProducts.json();
  dispatch(getUserProducts(userProducts));
  // await console.log(userProducts);
  return userProducts;
};

export const thunkCreateProduct = (productFormData) => async (dispatch) => {
  let newProduct = await fetch(`/api/products/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productFormData),
  });
  newProduct = await newProduct.json();
  dispatch(createProduct(newProduct));
  return newProduct;
};

export const thunkDeleteProduct = (productId) => async (dispatch) => {
  let product = await fetch(`/api/products/${productId}`, {
    method: "DELETE",
  });
  product = await product.json();
  // console.log(productId)
  await dispatch(deleteProduct(productId));
  return product;
};

let initialState = { products: {}, userProducts: {}, singleProduct: {} };

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_PRODUCTS_ACTION:
      // previous code that solved render issue
      // console.log(action.products, newState)
      // return  {
      //   ...state,
      //   products: action.products
      // }

      // minh's code normalizing the data
      newState = { ...state };
      // console.log('this is action.products', action.products.Products)
      action.products.Products.forEach(
        (product) => (newState.products[product.id] = product)
      );
      return newState;
    case GET_SINGLE_PRODUCT_ACTION: {
      newState = { ...state };
      newState.singleProduct = action.product;
      return newState;
    }
    case GET_USER_PRODUCTS_ACTION: {
      newState = { ...state };
      // console.log("this is state", state);
      // console.log("this is action.products", action.products);
      newState.userProducts = {};
      action.products.Products.forEach(
        (product) => (newState.userProducts[product.id] = product)
      );
      return newState;
    }
    case CREATE_PRODUCT_ACTION: {
      newState = { ...state };
      newState.singleProduct = {};
      newState.singleProduct = action.product;
      return newState;
    }
    case DELETE_PRODUCT_ACTION: {
      newState = { ...state };
      newState.products = { ...newState.products };
      newState.userProducts = { ...newState.userProducts };
      newState.singleProduct = {};
      // console.log('this is action.product', action.productId) //returns integer
      delete newState.products[action.productId];
      //need to add userproducts, by passing in a userid/user in the thunk and action
      delete newState.userProducts[action.productId];
      return newState;
    }
    default:
      return state;
  }
}
