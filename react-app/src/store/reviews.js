

//*  =====================  thunks ===========================//

export const thunkGetReviewsById = () => async (dispatch) => {



  const response = await fetch("api/reviews/current", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(response)



  if (response.ok) {
    const userReviewsData = await response.json();
    // console.log(userReviewsData)
    if (userReviewsData.errors) {
      return;
    }


    dispatch(setUserReviews(userReviewsData));
  }
};


export const thunkGetReviewsByProductId = (productId) => async (dispatch) => {

  // console.log(productId, "PRODUCT ID")

  const response = await fetch(`/api/products/${productId}/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(response)



  if (response.ok) {

    const productReviewsData = await response.json();


    if (productReviewsData.errors) {
      return;
    }

    // productIdReviewsData.Products =
    let passingObj = {}

    passingObj.Reviews = productReviewsData.Reviews
    // console.log("before passing in", passingObj)

    dispatch(setProductReviews(productReviewsData));
  }
};


// post a review

export const thunkSubmitReview = (stars, review, id) => async (dispatch) => {

  const response = await fetch(`/api/products/${id}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stars,
      review,
    }),


  });
  // console.log("hi")

  if (response.ok) {
    const data = await response.json();
    dispatch(postReview(data))
    // return null so front side will know there is not an error
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }




}


export const thunkDeleteReview = (reviewId) => async (dispatch) => {
  let response = await fetch(`/api/products/${reviewId}`, {
    method: "DELETE",
  });
  response = await response.json();

  // await dispatch(deleteReview())

}



//*  ======================= end of thunks ===================//






//? =====================  types ===========================//

const GET_USER_REVIEWS = "REVIEWS/GetUserReviews";
const GET_PRODUCT_REVIEWS = "REVIEWS/GetProductReviews";
const POST_REVIEW = "REVIEWS/PostReview"
const DELETE_REVIEW = "REVIEWS/delete"

//?  ===================end of types ===================//






//* =====================  actions ===========================//

const setUserReviews = (userReviewsData) => {
  return {
    type: GET_USER_REVIEWS,
    userReviewsData
  }
}

const setProductReviews = (productReviewsData) => {
  return {
    type: GET_PRODUCT_REVIEWS,
    productReviewsData
  }
}

const postReview = (newReview) => {
  return {
    type: POST_REVIEW,
    newReview
  }
}

//*  ======================= end of actions ===================//






//? ================== reducer================================//

let initialState = { userReviews: {}, productReviews: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REVIEWS:

      return { ...state, userReviews: action.userReviewsData };

    case GET_PRODUCT_REVIEWS:
      return { ...state, productReviews: action.productReviewsData };

    case POST_REVIEW:
      state.productReviews?.Reviews.push(action.newReview)
      return { ...state };

    // case DELETE_REVIEW:
    //   newState =

    default:
      return state;
  }
}
