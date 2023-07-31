import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import * as reviewsActions from '../../../store/reviews'
import { useSelector, useDispatch } from "react-redux";
import ReviewForm from "../../Reviews/ReviewForm"
import ReviewCard from "../../Reviews/ReviewCard";

function ProductIdPage() {
    const { id } = useParams()


    const dispatch = useDispatch()
    // using to check if a user is logged in
    // conditional render should also check to make sure product is not being sold by the login user
    const user = useSelector(state => state.session.user)
    const productReviews = useSelector(state => state.reviews.productReviews)
<<<<<<< HEAD
    // console.log(id)
=======

    // !!! default should be set to preview img
    // !   product.previewImage
    const [mainImage, setMainImage] = useState("https://i.etsystatic.com/31560168/r/il/4336cd/4425918630/il_794xN.4425918630_38m9.jpg")
    console.log(id)
>>>>>>> reviewsFE-errorHandling

    const changeMainImage = (e) => {
        console.log(typeof e.target.src)
        setMainImage(e.target.src)
    }



    const addToFav = (e) => { }

    useEffect(() => {



        dispatch(reviewsActions.thunkGetReviewsByProductId(id))



    }, [dispatch])

    if (!productReviews.Reviews) return <h1>...loading</h1>
    console.log(productReviews, "HHHHHHHHHHHIIIIIIIIII")
    console.log(user)
    return (
        <>
            {/* product info */}
            <div className='PID-product'>
                <div className='PID-all-Images'>
                    <div className='PID-images-div'>
                        <img onClick={changeMainImage} src="https://i.etsystatic.com/31560168/r/il/9b902f/4473276055/il_794xN.4473276055_fcxk.jpg" alt="filler image 2"></img>
                        <img onClick={changeMainImage} src="https://i.etsystatic.com/31560168/r/il/2f8cab/4425918302/il_794xN.4425918302_1x8r.jpg" alt="filler image 3"></img>
                        <img onClick={changeMainImage} src="https://i.etsystatic.com/31560168/r/il/401a30/4473276305/il_794xN.4473276305_qrxw.jpg" alt="filler image 4"></img>
                    </div>
                    <img className='PID-main-image' onClick={changeMainImage} src={mainImage} alt="filler image"></img>
                </div>
                <button className='PID-favButt' onclick={addToFav}> <i className="fas fa-heart" /></button>
                <div className='PID-about-product-div'>
                    product.price
                    product.description
                    <div className='PID-seller-avg-stars'>
                        <p className='PID-seller'>  seller.first_name </p>
                        <p className='Pid-ave-stars'>reviews.stars.average</p></div>
                </div>
                <div className='PID-buttons'>
                    <button className='PID-buyNowButt'>Buy it now!</button>
                    <button className='PID-cartButt'>Add to cart</button>
                    <button className='PID-favFullButt'>Add to Favorites</button>
                </div>
            </div>

            {user && <ReviewForm ></ReviewForm>}

            {productReviews.Reviews.map((review) => (
                <>
                    <ReviewCard key={review.id} userFirstName={user.first_name} review={review} from="productPage" ></ReviewCard>
                </>
            ))}


            <h1>hi</h1>
        </>
    );
}

export default ProductIdPage;
