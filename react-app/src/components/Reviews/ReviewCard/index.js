import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './ReviewCard.css'
import * as reviewsActions from '../../../store/reviews'
import ReviewForm from "../ReviewForm";

function ReviewCard({ userFirstName, review, from, user }) {
    let loadProductName = false
    if (from === "userReviews") {
        loadProductName = true

    }
    const userReviews = useSelector((state) => state.reviews.userReviews);
    const dispatch = useDispatch();
    // const [review2, setReview] = useState(review)

    const [deleteTrigger, setDeleteTrigger] = useState(false);
    const [formTrigger, setFormTrigger] = useState(false);

    // useEffect(() => {
    // console.log(review)
    //     dispatch(reviewsActions.thunkGetReviewsById(user.id));
    // }, [dispatch, user.id]);

    if (!user) {
        user = {}
        user.id = -1
    }
    // console.log("loggin in user:", user.id)

    let isReviewOwner = false

    if (from === "userReviews") {
        isReviewOwner = true

    } else if (from === "productPage") {
        isReviewOwner = user.id === review.userId
    }
    // console.log(review)


    // let isReviewOwner = user.id === review.User.id
    // console.log(isReviewOwner)
    let numOfStars = review.stars
    let star = []
    for (var i = 0; i < numOfStars; i++) {
        star.push("uwu star")
    }

    const handleDelete = (e) => {
        // console.log(review.id);


        dispatch(reviewsActions.thunkDeleteReview(review.id))
            .then(() => {
                // Step 2: Update the state variable after successful deletion
                setDeleteTrigger(true);
            })
            .catch((error) => {
                // Handle any errors here, if needed
                console.error(error);
            });
    }


    // handle delete jsut hast setFormTriggler
    const handleEdit = (e) => {
        setFormTrigger(true)
    }
    // review.id   is not found return null

    const starsEdit = review.stars
    const reviewEdit = review.review

    console.log(review.id)
    if (deleteTrigger) return null
    if (formTrigger)
        return (
            <>
                <ReviewForm from="edit" starsEdit={starsEdit} reviewEdit={reviewEdit} reviewObj={review}></ReviewForm>
            </>
        )



    return (
        <>

            <div className="Rc-card">

                <div className="Rc-stars-name">

                    {loadProductName &&
                        <Link to={`products/${review.Product.id}`}>
                            <p>{review.Product.item_name}</p>

                        </Link>
                    }

                    {star.map((star, idx) => (
                        <i key={idx} className="fas fa-star PID-stars RC-stars" />
                    ))}


                </div>
                <p className='Rc-review'>
                    {review.review}
                </p>
                {/* <div className="Rc-name-date"> */}
                <p className='Rc-name-date-p'> <span className='Rc-username-span'>{userFirstName}  </span> -  {review.createdAt}  </p>
                {isReviewOwner &&
                    <>
                        <button onClick={handleEdit}>
                            edit
                        </button>
                        <button onClick={handleDelete}>
                            delete
                        </button>
                    </>
                }

                {/* </div> */}
                <hr className='Rc-hr Rc-hr-bottom'></hr>
            </div>





        </>
    );
}

export default ReviewCard;
