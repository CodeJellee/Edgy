import { useEffect } from "react";
import './ReviewsCurr.css'
import * as reviewsActions from '../../../store/reviews'
import { useSelector, useDispatch } from "react-redux";


function ReviewsCurr() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    console.log(currentUser.id)

    useEffect(() => {
        const thunks = async () => {


            let userReviewsInfo = await dispatch(reviewsActions.thunkGetReviewsById(currentUser.id))

        }
        thunks()





    }, [])


    return (
        <>
            <h1>Hi this should be a list of users reviews</h1>
        </>
    );
}

export default ReviewsCurr;
