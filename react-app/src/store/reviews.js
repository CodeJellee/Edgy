

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





export const thunkGetReviewsByProductId = (productId) => async (dispatch) => {

  console.log(productId, "PRODUCT ID")

  const response = await fetch(`/api/products/${productId}/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response)



  if (response.ok) {

    const productReviewsData = await response.json();
    console.log("original Query object", productReviewsData)
    if (productReviewsData.errors) {
      return;
    }

    // productIdReviewsData.Products =
    let passingObj = {}

    passingObj.Reviews = productReviewsData.Reviews
    console.log("before passing in", passingObj)

    dispatch(setProductReviews(productReviewsData));
  }
};


//*  ======================= end of thunks ===================//






//? =====================  types ===========================//

const GET_USER_REVIEWS = "REVIEWS/GetUserReviews";
const GET_PRODUCT_REVIEWS = "REVIEWS/GetProductReviews";

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

//*  ======================= end of actions ===================//






//? ================== reducer================================//

let initialState = { userReviews: {}, productReviews: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REVIEWS:
      return { ...state, userReviews: action.userReviewsData };

    case GET_PRODUCT_REVIEWS:
      return { ...state, productReviews: action.productReviewsData };

    default:
      return state;
  }
}
