import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './ReviewCard.css'
import * as reviewsActions from '../../../store/reviews'
import ReviewForm from "../ReviewForm";

function ReviewCard({ userFirstName, review, from, user }) {



    const [reviewRender, setReviewRender] = useState(review)

    let loadProductName = false
    if (from === "userReviews") {
        loadProductName = true

    }

    const dispatch = useDispatch();


    const [deleteTrigger, setDeleteTrigger] = useState(false);
    // TODO   set this back to false after submission
    const [formTrigger, setFormTrigger] = useState(false);



    if (!user) {
        user = {}
        user.id = -1
    }


    let isReviewOwner = false

    if (from === "userReviews") {
        isReviewOwner = true

    } else if (from === "productPage") {
        isReviewOwner = user.id === reviewRender.userId
    }




    let numOfStars = reviewRender.stars
    let star = []
    for (var i = 0; i < numOfStars; i++) {
        star.push("uwu star")
    }

    const handleDelete = (e) => {



        dispatch(reviewsActions.thunkDeleteReview(reviewRender.id))
            .then(() => {
                // Step 2: Update the state variable after successful deletion
                setDeleteTrigger(true);
            })
            .catch((error) => {
                // Handle any errors here, if needed
                console.error(error);
            });
    }


    // handle delete just hast setFormTrigger
    const handleEdit = (e) => {
        setFormTrigger(true)
    }


    const starsEdit = reviewRender.stars
    const reviewEdit = reviewRender.review

    // (review.id)
    if (deleteTrigger) return null
    if (formTrigger)
        return (
            <>
                <ReviewForm from="edit" starsEdit={starsEdit} reviewEdit={reviewEdit} reviewObj={reviewRender} setReviewRender={setReviewRender} setFormTrigger={setFormTrigger}></ReviewForm>
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
                    {reviewRender.review}
                </p>
                {/* <div className="Rc-name-date"> */}
                <p className='Rc-name-date-p'> <span className='Rc-username-span'>{userFirstName}  </span> -  {reviewRender.createdAt}  </p>
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
