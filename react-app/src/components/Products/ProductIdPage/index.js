import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import * as reviewsActions from '../../../store/reviews'
import { useSelector, useDispatch } from "react-redux";
import ReviewForm from "../../Reviews/ReviewForm"

function ProductIdPage() {
    const { id } = useParams()
    let productId = id

    const dispatch = useDispatch()
    // const currentUser = useSelector(state => state.session.user)
    const productReviews = useSelector(state => state.reviews.productReviews)
    console.log(id)

    useEffect(() => {



        dispatch(reviewsActions.thunkGetReviewsByProductId(id))



    }, [dispatch])


    return (
        <>
            <ReviewForm ></ReviewForm>
            <h1>hi</h1>
        </>
    );
}

export default ProductIdPage;
