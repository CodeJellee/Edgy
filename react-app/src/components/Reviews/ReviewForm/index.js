import React, { useEffect, useState } from "react";

import "./ReviewForm.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as reviewsActions from "../../../store/reviews";
import * as productsActions from "../../../store/products";
import StarRating from "./StarRating";

function ReviewForm() {
  const dispatch = useDispatch();

  // const sessionUser = useSelector((state) => state.session.user);
  // const [stars, setStars] = useState(1);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submittedSuc, setSubmittedSuc] = useState(false);
  const [preventDoubleSubmit, setPreventDoubleSubmit] = useState(false);
  const [rating, setRating] = useState(1);
  const [vaErrors, setVaErrors] = useState({});

  const { id } = useParams();

  const resetState = () => {
    setReview("");
    setRating(1);
  };

  const handleSubmit = async (e) => {
    if (submittedSuc) return



    e.preventDefault();
    console.log("AFTER CLICK SHOULD SEE THIS ONCE")
    setSubmitted(true);
    // console.log(vaErrors)
    console.log("AFTER submitted check ")
    if (Object.keys(vaErrors).length) {
      return;
    }
    // console.log("RATING BY STARS =", rating)
    const data = await dispatch(
      reviewsActions.thunkSubmitReview(rating, review, id)
    );
    // if error exit out of handle submit
    if (data) {
      setErrors(data);
    }

    if (errors.length === 0) {
      resetState();
    }

    setSubmittedSuc(true);

    await dispatch(reviewsActions.thunkGetReviewsByProductId(id));
    await dispatch(productsActions.thunkGetSingleProduct(id));


  };

  const handleRatingChange = (number) => {
    setRating(parseInt(number));
  };

  useEffect(() => {
    const err = {};

    if (review.length < 10)
      err["Review"] = "Review needs 10 or more characters";
    if (review.length > 225)
      err["Review"] = "Review needs to be less than 225 or more characters";

    setVaErrors(err);
  }, [review]);

  return (
    <>
      {!submittedSuc && (
        <div className="">
          <h3>Submit a review for this product:</h3>
          <form onSubmit={handleSubmit} className="RF-Form">
            {/* {submitted &&  <displayError>} */}
            <label htmlFor="stars"></label>
            <StarRating
              disabled={false}
              onChange={handleRatingChange}
              rating={rating}
            />

            <label htmlFor="review"></label>

            <textarea
              className="RF-form-item RF-textarea"
              id="review"
              onChange={(e) => {
                setReview(e.target.value);
              }}
              placeholder="Please write a review"
              value={review}
            />
            {vaErrors.Review && submitted && (
              <p className="error-text">*{vaErrors.Review}</p>
            )}

            <button
              className={
                submitted && (vaErrors.Review || errors.length)
                  ? "RF-form-item PID-submit-review RF-subButt"
                  : " RF-form-item PID-cartButt RF-subButt"
              }
              type="submit"
              submitted
            >
              Submit Review
            </button>
          </form>
        </div>
      )}
      <hr className="Rc-hr"></hr>
    </>
  );
}

export default ReviewForm;
