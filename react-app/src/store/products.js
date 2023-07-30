

//*  =====================  thunks ===========================//



//*  ======================= end of thunks ===================//






//? =====================  types ===========================//



//?  ===================end of types ===================//






//* =====================  actions ===========================//




//*  ======================= end of actions ===================//






//? ================== reducer================================//



const GET_PRODUCTS = "products/GET_PRODUCTS";
const GET_PRODUCT = "products/GET_PRODUCT"
const GET_USER_PRODUCTS = "products/GET_USER_PRODUCTS"
const DELETE_PRODUCT = "products/DELETE_PRODUCTS";
const CREATE_PRODUCT = "products/CREATE_PRODUCTS"

const getProducts = (products) => ({
	type: GET_PRODUCTS,
	payload: products,
});

const getProduct = (product) => ({
	type: GET_PRODUCT,
  action: product
});

const deleteProduct = (product) => ({
	type: DELETE_PRODUCT,
  action: product
});

const createProduct = (product) => ({
	type: CREATE_PRODUCT,
  action: product
});

const getUserProducts = (products) => ({
	type: GET_USER_PRODUCTS,
	products,
});


export const getAllProducts = () => async (dispatch) => {
    const response = await fetch("/api/products/", {
      headers: {
          "Content-Type": "application/json",
      }
    }
    )
    console.log(response)
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      dispatch(getProducts(data));
      return data
    }
    return "error"
}


let initialState = { products: {}, userProducts: {}, singleProduct: {} };

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS:
      newState = initialState
      console.log(action.payload)
      newState.products = action.payload
      return newState
    default:
      return state;
  }
}
