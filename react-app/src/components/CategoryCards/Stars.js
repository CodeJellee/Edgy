import makeStars from "../../utils";

import './CategoryCardsStyle4.css'




function Stars({ reviews }) {


    let stars = makeStars(reviews)
    console.log(stars)

    return (
        <>
            {stars.map((_, idx) =>

                <i key={idx} className="fas fa-star pStars" />

            )}
        </>
    )
}

export default Stars
