

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
    console.log(userReviewsData)
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

      console.log(state)

      return { ...state, userReviews: action.userReviewsData }



    default:
      return state;
  }
}
