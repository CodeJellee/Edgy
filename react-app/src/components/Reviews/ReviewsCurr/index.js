import { useEffect } from "react";
import "./ReviewsCurr.css";
import ".";
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
  }, [dispatch]);

  
  if (!userReviews.User) return <h1>...loading</h1>;


  return (
    <>
      {userReviews.Reviews.map((review) => (
        <>
          <ReviewCard
            key={review.id}
            userFirstName={userReviews.User.firstName}
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
