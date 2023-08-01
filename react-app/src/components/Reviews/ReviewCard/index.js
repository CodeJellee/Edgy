import { Link } from 'react-router-dom'
import './ReviewCard.css'

function ReviewCard({ userFirstName, review, from }) {
    let loadProductName = false
    if (from === "userReviews") {
        loadProductName = true
    }
  

    let numOfStars = review.stars
    let star = []
    for (var i = 0; i < numOfStars; i++) {
        star.push("this can be whatever")
    }


    return (
        <>

            <div className="Rc-card">

                <div className="Rc-stars-name">

                    {loadProductName &&
                        <Link to={`products/${review.Product.id}`}>
                            <p>{review.Product.item_name}</p>

                        </Link>
                    }

                    {star.map(() => (
                        <i className="fas fa-star PID-stars RC-stars" />
                    ))}


                </div>
                <p>
                    {review.review}
                </p>
                {/* <div className="Rc-name-date"> */}
                <p><span className='Rc-username-span'>{userFirstName}  </span>               {review.createdAt}  </p>

                {/* </div> */}
                <hr className='Rc-hr'></hr>
            </div>





        </>
    );
}

export default ReviewCard;
