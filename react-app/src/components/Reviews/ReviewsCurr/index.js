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


  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    dispatch(reviewsActions.thunkGetReviewsById(currentUser.id));
  }, [dispatch, currentUser.id]);


  useEffect(() => {
    setReviews(Object.values(userReviews.Reviews))
  }, [userReviews])


  if (!Object.keys(userReviews).length || !userReviews) return <h1>...loading</h1>;





  //   console.log("user review:", userReviews.Reviews)


  // console.log(reviews)
  // console.log(reviews)

  // console.log("you reviews rendering right before cares:", "first_name:", currentUser.username, "review array of objects:", reviews, "from: userReviews",)
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

        </>
      ))}
    </>
  );
}

export default ReviewsCurr;
