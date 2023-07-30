

//*  =====================  thunks ===========================//



//*  ======================= end of thunks ===================//






//? =====================  types ===========================//



//?  ===================end of types ===================//






//* =====================  actions ===========================//




//*  ======================= end of actions ===================//






//? ================== reducer================================//









let initialState = { products: {}, userProducts: {}, singleProduct: {} };

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      return state;
  }
}
