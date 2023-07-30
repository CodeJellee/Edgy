import { useEffect, useState } from "react";
import './ReviewsCurr.css'
import * as reviewsActions from '../../../store/reviews'
import { useSelector, useDispatch } from "react-redux";


function ReviewsCurr() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const userReviews = useSelector(state => state.reviews.userReviews)
    const [hasRenderedOnce, setHasRenderedOnce] = useState(false);


    useEffect(() => {



        dispatch(reviewsActions.thunkGetReviewsById(currentUser.id))



    }, [dispatch, userReviews])




    console.log("Type of userReviews:", typeof userReviews);
    console.log("userReviews:", userReviews);
    // console.log(userReviews.Reviews)
    // if (!Object.keys(userReviews).length) return null
    // if (!currentUser || !Object.values(userReviews).length ) return null
    // console.log("hi")
    // console.log(Object.keys(usersReviews))
    // if (Object.keys(usersReviews) == 0) return null
    // console.log(Object.keys(usersReviews))
    console.log(userReviews)
    return (
        <>
            {/* {userReviews.Reviews && Object.values(userReviews.Reviews).map((review) => ( */}
            <div className="Ru-card">

                <div className="Ru-stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                </div>
                <p>This will be the description things, man this product sure was bad. it broke after only 2 uses!
                review.Description
                </p>
                <div>
                    <p>!!!userReviews.User.FirstName!!!</p>
                    <p></p>
                </div>



            </div>
            {/* ))} */}
            <h1>outside of map</h1>
        </>
    );
}

export default ReviewsCurr;
