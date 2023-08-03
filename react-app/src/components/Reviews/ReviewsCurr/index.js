import { useEffect, useState } from "react";
import "./ReviewsCurr.css";

import * as reviewsActions from "../../../store/reviews";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from 'react-router-dom'
import ReviewCard from "../ReviewCard";

function ReviewsCurr() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const userReviews = useSelector((state) => state.reviews.userReviews);


  useEffect(() => {
    dispatch(reviewsActions.thunkGetReviewsById(currentUser.id));
  }, [dispatch, currentUser.id]);


  if (!Object.keys(userReviews).length || !userReviews) return <h1>...loading</h1>;
  console.log("hiiiiiiii", currentUser)
  let reviews = Object.values(userReviews.Reviews)
  console.log("user review:", userReviews.Reviews)


  // console.log(reviews)
  // console.log(reviews)

  return (
    <>

      {reviews.map((review) => (
        <>
          <ReviewCard
            key={review.id}
            userFirstName={currentUser.username}
            review={review}
            from="userReviews"
            user={currentUser}
          ></ReviewCard>
          <h1>hi</h1>
        </>
      ))}
    </>
  );
}

export default ReviewsCurr;
