import React, { useState } from "react";

import './ReviewForm.css'
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import * as reviewsActions from '../../../store/reviews'
import * as productsActions from '../../../store/products'



function ReviewForm() {
    const dispatch = useDispatch();

    // const sessionUser = useSelector((state) => state.session.user);
    const [stars, setStars] = useState(1);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const [submitted, setSubmitted] = useState(false);


    const { id } = useParams();


    const resetState = () => {
        setReview("");
        setStars(1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        const data = await dispatch(
            reviewsActions.thunkSubmitReview(stars, review, id)
        );
        // if error exit out of handle submit
        if (data) {
            setErrors(data);
        }

        if (errors.length === 0) {
            resetState();
        }
        setSubmitted(true)
        dispatch(reviewsActions.thunkGetReviewsByProductId(id))
        dispatch(productsActions.thunkGetSingleProduct(id))
    };



    return (

        <>
            {!submitted &&
                <div className="">


                    <h3>Submit a review for this product:</h3>
                    <form onSubmit={handleSubmit} className="RF-Form">

                        {/* {submitted &&  <displayError>} */}
                        <label htmlFor="stars"></label>
                        <input className="RF-form-item"
                            type="number"
                            id="stars"
                            min="1"
                            max="5"
                            onChange={(e) => {
                                setStars(e.target.value)
                            }}
                            placeholder="Stars"
                            value={stars}
                        />
                        <label htmlFor="review"></label>
                        <textarea className="RF-form-item RF-textarea"

                            id="review"

                            onChange={(e) => {
                                setReview(e.target.value)
                            }}
                            placeholder="Please write a review"
                            value={review}
                        />


                        <button className="RF-form-item PID-cartButt RF-subButt" type="submit" submitted>Submit Review</button>

                    </form>
                </div>}
            <hr className="Rc-hr"></hr>



        </>
    );
}

export default ReviewForm;
