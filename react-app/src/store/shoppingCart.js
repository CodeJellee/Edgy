import {csrfFetch} from './csrf'

//? =====================  types ===========================//

const GET_SHOPPING_CART= "carts/GET_SHOPPING_CART"
const DELETE_CART_ITEM= "carts/DELETE_CART_ITEM"

//?  ===================end of types ===================//





//* =====================  actions ===========================//




//*  ======================= end of actions ===================//





//*  =====================  thunks ===========================//



//*  ======================= end of thunks ===================//










//? ================== reducer================================//

let initialState = { user: {} };

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      return state;
  }
}
