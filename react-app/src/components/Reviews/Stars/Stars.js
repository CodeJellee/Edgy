import makeStars from "../../../utils";
import "./Stars.css"





function Stars({ reviews }) {


    let { stars, count } = makeStars(reviews)
    console.log(stars)

    return (
        <>
            {stars.map((_, idx) =>
                <div className="S-stars-count-div">
                    <i key={idx} className="fas fa-star pStars cat-Stars" />
                    <p> ({count}) </p>
                </div>
            )}
        </>
    )
}

export default Stars
