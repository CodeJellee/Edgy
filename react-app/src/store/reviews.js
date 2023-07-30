

//*  =====================  thunks ===========================//

export const thunkGetReviewsById = () => async (dispatch) => {


  const response = await fetch("api/reviews/current", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response)
  if (response.ok) {
    const userReviewsData = await response.json();
    if (userReviewsData.errors) {
      return;
    }


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

      // flattens array of reviews
      // newState.userReviews.Reviews
      // console.log(newStateRe.userReviews)
      newState.userReviews.Reviews = {}
      action.userReviewsData.Reviews.forEach(review => newState.userReviews.Reviews[review.id] = review)


      // newState.userReviews.Reviews = newState.userReviews
      // appends user object to  userReviews.user
      newState.userReviews.User = (action.userReviewsData.User)

      return newState



    default:
      return state;
  }
}
