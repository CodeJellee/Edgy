

 const makeStars = (reviewsArray) => {

    let sum = 0
    // let count = product.Reviews.length
    let count = reviewsArray.length

    let products = Object.values(reviewsArray)
    for (const singleProduct of products) {

        sum += singleProduct.stars
    }

    let starAvg = Math.round(sum / count)

    let stars = []
    for (let i = 0; i < starAvg; i++) {
        stars.push("hi")
    }

    return stars
}

export default makeStars
