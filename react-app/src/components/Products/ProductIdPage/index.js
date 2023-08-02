import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as reviewsActions from '../../../store/reviews'
import * as productsActions from '../../../store/products'

import { useSelector, useDispatch } from "react-redux";
import ReviewForm from "../../Reviews/ReviewForm";
import ReviewCard from "../../Reviews/ReviewCard";
import './ProductIdPage.css'

import PutCartIemToCart from "./PutItemToCart";



function ProductIdPage() {

    const { id } = useParams()


    const dispatch = useDispatch()
    // using to check if a user is logged in
    // conditional render should also check to make sure product is not being sold by the login user
    const user = useSelector(state => state.session.user)
    const productReviews = useSelector(state => state.reviews.productReviews)
    const product = useSelector(state => state.products.singleProduct)

    // !!! default should be set to preview img
    // !   product.previewImage


    const [mainImage, setMainImage] = useState()


    const changeMainImage = (e) => {

        setMainImage(e.target.src)
    }



    const addToFav = (e) => { }

    useEffect(() => {



        dispatch(reviewsActions.thunkGetReviewsByProductId(id))
        dispatch(productsActions.thunkGetSingleProduct(id))


    }, [dispatch, id])

    if (!productReviews.Reviews || !product.Reviews) return <h1>...loading</h1>


    let sum = 0
    let count = product.Reviews.length

    let products = Object.values(product.Reviews)
    for (const singleProduct of products) {

        sum += singleProduct.stars
    }

    let starAvg = Math.round(sum / count)

    let stars = []
    for (let i = 0; i < starAvg; i++) {
        stars.push("hi")
    }

    let images = Object.values(product.ProductImages)


    // let userReviewExistCheck = products.include(product => product.userId === user.id)


    let noUserReviewExist = true
    let notSeller = true

    if (user?.id) {

        if (Object.values(user).length > 0) {

            console.log("user check:", user)
            noUserReviewExist = products.every(review => review.userId !== user.id)
            notSeller = user.id !== product.Seller.id

        }


    }

    // should start false
    console.log(noUserReviewExist)
    // setHasReview(userReviewExist)







    return (
        <>
            {/* product info */}
            <div className="column-holder">
                <div className="column">
                    <div className='PID-product'>
                        <div className='PID-all-Images'>
                            <div className='PID-images-div'>
                                <img className='PID-small-img' alt="product first loaded" onClick={changeMainImage} src={product.preview_imageURL} ></img>
                                {images.map((image, idx) => (

                                    <img key={idx} className='PID-small-img' onClick={changeMainImage} src={image.product_imageURL} alt="filler 2"></img>


                                ))}

                            </div>
                            <div className='PID-main-image-div'>

                                <img className='PID-main-image' onClick={changeMainImage} src={mainImage || product.preview_imageURL} alt="loading"></img>
                            </div>
                        </div>


                        {/* <div>
                        <i onClick={addToFav} className="fas fa-heart" />
                    </div> */}


                        <div className='PID-about-buttons-div'>


                            <div className='PID-about-product-div'>
                                <p className="PID-price">${product.price}</p>
                                <p> {product.description}</p>

                                <div className='PID-seller-avg-stars'>
                                    <p className='PID-seller'>Seller: {product.Seller.username}   </p>

                                </div>
                            </div>
                            {user?.id ? (
                                <div className='PID-buttons'>
                                <button className='PID-buyNowButt PID-P-button PID-Transp-butt'> <i class="fa-brands fas fa-cc-visa"></i> Buy it now</button>
                                {/* <button className='PID-cartButt PID-P-button'>Add to cart</button> */}
                                <PutCartIemToCart productId={product.id} className='PID-cartButt PID-P-button'/>
                                <button onClick={addToFav} className='PID-favFullButt PID-P-button PID-Transp-butt'> <i onClick={addToFav} className="fas fa-heart PID-heart" /> Add to Favorites</button>
                            </div>
                            ) : (
                                // <button className='PID-cartButt PID-P-button'>Sign up to purchase!</button>
                                <div lassName='PID-about-product-div'>Please log in or sign up to favorite or purchase the items!</div>

                            )}
                        </div>

                    </div>

                    <p className='Pid-ave-stars'>
                        <span className='PID-count'>{count}
                            {count === 1 ? " review" : " reviews"}

                        </span>
                        {stars.map((star, idx) =>

                            <i key={idx} className="fas fa-star PID-count pStars" />

                        )}

                    </p>
                    {user && noUserReviewExist && notSeller && <ReviewForm  ></ReviewForm>}

                    {productReviews.Reviews?.map((review) => (
                        <>
                            <ReviewCard key={review.id} userFirstName={review.User.first_name} review={review} from="productPage" ></ReviewCard>
                        </>
                    ))}


                </div>
            </div>

        </>


    );
}

export default ProductIdPage;
