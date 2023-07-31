import React, { useState } from "react";
import './ReviewForm.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from 'react-router-dom'
import * as reviewsActions from '../../../store/reviews'


function ReviewForm() {

    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const [stars, setStars] = useState(0);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const [submitted, setSubmitted] = useState(false)

    const { id } = useParams()
    console.log(id)

    const resetState = () => {
        setReview("")
        setStars(0)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true)
        const data = await dispatch(reviewsActions.thunkSubmitReview(stars, review, id));
        if (data) {
            setErrors(data);
        }
        console.log(data)
        if (errors.length === 0) {
            resetState()
        }
    };

    return (
        <>
        <h3>Submit a review for this product:</h3>
            <form onSubmit={handleSubmit} className="RF-Form">

                {/* {submitted &&  <displayError>} */}
                <label htmlFor="stars"></label>
                <input
                    type="number"
                    id="stars"
                    min="0"
                    max="5"
                    onChange={(e) => {
                        setStars(e.target.value)
                    }}
                    placeholder="Stars"
                    value={stars}
                />
                <label htmlFor="review"></label>
                <textarea

                    id="review"

                    onChange={(e) => {
                        setReview(e.target.value)
                    }}
                    placeholder="Please write a review"
                    value={review}
                />


                <button type="submit">Submit Review</button>
            </form>

        </>
    );
}

export default ReviewForm;
