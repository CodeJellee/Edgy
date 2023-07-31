

//*  =====================  thunks ===========================//



//*  ======================= end of thunks ===================//






//? =====================  types ===========================//



//?  ===================end of types ===================//






//* =====================  actions ===========================//




//*  ======================= end of actions ===================//






//? ================== reducer================================//



const GET_ALL_PRODUCTS_ACTION = "products/GET_ALL_PRODUCTS_ACTION";
const GET_SINGLE_PRODUCT_ACTION = "products/GET_SINGLE_PRODUCT_ACTION"
const GET_USER_PRODUCTS_ACTION = "products/GET_USER_PRODUCTS_ACTION"
const DELETE_PRODUCT_ACTION = "products/DELETE_PRODUCT_ACTION";
const CREATE_PRODUCT_ACTION = "products/CREATE_PRODUCT_ACTION"

const getAllProducts = (products) => ({
	type: GET_ALL_PRODUCTS_ACTION,
	products,
});

const getSingleProduct = (product) => ({
	type: GET_SINGLE_PRODUCT_ACTION,
  product
});

const deleteProduct = (product) => ({
	type: DELETE_PRODUCT_ACTION,
  product
});

const createProduct = (product) => ({
	type: CREATE_PRODUCT_ACTION,
  product
});

const getUserProducts = (products) => ({
	type: GET_USER_PRODUCTS_ACTION,
	products,
});


export const thunkGetAllProducts = () => async (dispatch) => {
    const response = await fetch("/api/products/", {
      headers: {
          "Content-Type": "application/json",
      }
    }
    )
    // console.log(response)
    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      dispatch(getAllProducts(data));
      return data
    }
    return "error"
}

export const thunkGetSingleProduct = (productId) => async dispatch => {
  let product = await fetch(`/api/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  product = await product.json()
  dispatch(getSingleProduct(product))
  return product
}

let initialState = { products: {}, userProducts: {}, singleProduct: {} };

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_PRODUCTS_ACTION:
      console.log(action.products, newState)
      return  {
        ...state,
        products: action.products
      }
    case GET_SINGLE_PRODUCT_ACTION: {
      newState = {...state}
      newState.singleProduct = action.product
    }
    default:
      return state;
  }
}
