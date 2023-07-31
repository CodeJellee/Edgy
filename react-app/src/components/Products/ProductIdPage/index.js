import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import * as reviewsActions from '../../../store/reviews'
import * as productsActions from '../../../store/products'
import { useSelector, useDispatch } from "react-redux";
import ReviewForm from "../../Reviews/ReviewForm"
import ReviewCard from "../../Reviews/ReviewCard";
import './ProductIdPage.css'



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
    const [mainImage, setMainImage] = useState("https://i.etsystatic.com/31560168/r/il/4336cd/4425918630/il_794xN.4425918630_38m9.jpg")
    console.log(id)

    const changeMainImage = (e) => {
        console.log(typeof e.target.src)
        setMainImage(e.target.src)
    }



    const addToFav = (e) => { }

    useEffect(() => {



        dispatch(reviewsActions.thunkGetReviewsByProductId(id))
        dispatch(productsActions.thunkGetSingleProduct(id))


    }, [dispatch])

    if (!productReviews.Reviews || !product.Reviews) return <h1>...loading</h1>


    let sum = 0
    let count = product.Reviews.length

    let products = Object.values(product.Reviews)
    for (const singleProduct of products) {

        sum += singleProduct.stars
    }

    let starAvg = Math.round(sum / count)
    console.log("Count:", count, "Sum:", sum, "Star average:", starAvg)
    let stars = []
    for (let i = 0; i < starAvg; i++) {
        stars.push("hi")
    }



    console.log(product)
    return (
        <>
            {/* product info */}
            <div className="column-holder">
                <div className="column">
                    <div className='PID-product'>
                        <div className='PID-all-Images'>
                            <div className='PID-images-div'>
                                <img className='PID-small-img' onClick={changeMainImage} src="https://i.etsystatic.com/31560168/r/il/9b902f/4473276055/il_794xN.4473276055_fcxk.jpg" alt="filler image 2"></img>
                                <img className='PID-small-img' onClick={changeMainImage} src="https://i.etsystatic.com/31560168/r/il/2f8cab/4425918302/il_794xN.4425918302_1x8r.jpg" alt="filler image 3"></img>
                                <img className='PID-small-img' onClick={changeMainImage} src="https://i.etsystatic.com/31560168/r/il/401a30/4473276305/il_794xN.4473276305_qrxw.jpg" alt="filler image 4"></img>
                            </div>
                            <div className='PID-main-image-div'>
                                <img className='PID-main-image' onClick={changeMainImage} src={mainImage} alt="filler image"></img>
                            </div>
                        </div>

                        <div>
                            {/* <div>
                        <i onClick={addToFav} className="fas fa-heart" />
                    </div> */}


                            <div className='PID-about-buttons-div'>


                                <div className='PID-about-product-div'>
                                    <p>{product.price}</p>
                                    <p> {product.description}</p>

                                    <div className='PID-seller-avg-stars'>
                                        <p className='PID-seller'>Seller: {product.Seller.username}   </p>

                                    </div>
                                </div>
                                <div className='PID-buttons'>
                                    <button className='PID-buyNowButt PID-P-button PID-Transp-butt'>Buy it now</button>
                                    <button className='PID-cartButt PID-P-button'>Add to cart</button>
                                    <button onClick={addToFav} className='PID-favFullButt PID-P-button PID-Transp-butt'> <i onClick={addToFav} className="fas fa-heart PID-heart" /> Add to Favorites</button>
                                </div>


                            </div>

                        </div>
                    </div>

                    <p className='Pid-ave-stars'>
                        <span className='PID-count'>{count} reviews</span>
                        {stars.map((star) =>
                            <>
                                <i className="fas fa-star PID-count PID-stars" />
                            </>
                        )}

                    </p>
                    {user && <ReviewForm ></ReviewForm>}

                    {productReviews.Reviews.map((review) => (
                        <>
                            <ReviewCard key={review.id} userFirstName={user.first_name} review={review} from="productPage" ></ReviewCard>
                        </>
                    ))}


                </div>
            </div>
        </>
    );
}

export default ProductIdPage;
