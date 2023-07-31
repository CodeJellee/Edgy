//? =====================  types ===========================//

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
