

//*  =====================  thunks ===========================//

export const thunkGetReviewsById = () => async (dispatch) => {


  const response = await fetch("api/reviews/current", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const userReviewsData = await response.json();
    if (userReviewsData.errors) {
      return;
    }
    console.log(userReviewsData, "THIS IS THE DATA being passed to actions")

    dispatch(setUserReviews(userReviewsData));
  }
};


//*  ======================= end of thunks ===================//






//? =====================  types ===========================//

const GET_USER_REVIEWS = "REVIEWS/GetUserReviews";

//?  ===================end of types ===================//






//* =====================  actions ===========================//

const setUserReviews = (userReviewsData) => {
  return {
    type: GET_USER_REVIEWS,
    userReviewsData
  }
}


//*  ======================= end of actions ===================//






//? ================== reducer================================//

let initialState = { userReviews: {}, productReviews: {} };

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case GET_USER_REVIEWS:
      let newState = Object.assign({}, state)

      action.userReviewsData.Reviews.forEach(review => newState.userReviews[review.id] = { ...review })


      return newState



    default:
      return state;
  }
}
