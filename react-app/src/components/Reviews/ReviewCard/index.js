import { Link } from 'react-router-dom'


function ReviewCard({ userFirstName, review, from }) {
    let loadProductName = false
    if (from === "userReviews") {
        loadProductName = true
    }
    console.log(from)
    console.log(loadProductName)

    let numOfStars = review.stars
    let star = []
    for (var i = 0; i < numOfStars; i++) {
        star.push("star")
    }


    return (
        <>

            <div className="Ru-card">

                <div className="Ru-stars-name">

                    {loadProductName &&
                        <Link to={`products/${review.Product.id}`}>
                            <p>{review.Product.item_name}</p>

                        </Link>
                    }




                    {star.map((star) => (
                        <i className="fas fa-star" />
                    ))}


                </div>
            <p>
                {review.review}
            </p>
            <div className="Ru-name-date">
                <p>{userFirstName}    </p>
                <p>{review.createdAt}</p>
            </div>
            </div>





        </>
    );
}

export default ReviewCard;
