import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import * as reviewsActions from '../../../store/reviews'
import { useSelector, useDispatch } from "react-redux";

function ProductIdPage() {
    const { id } = useParams()

    const dispatch = useDispatch()
    // const currentUser = useSelector(state => state.session.user)
    const productReviews = useSelector(state => state.reviews.productReviews)
    console.log(id)

    useEffect(() => {



        dispatch(reviewsActions.thunkGetReviewsByProductId(id))



    }, [dispatch])


    return (
        <>
            <h1>hi</h1>

        </>
    );
}

export default ProductIdPage;
