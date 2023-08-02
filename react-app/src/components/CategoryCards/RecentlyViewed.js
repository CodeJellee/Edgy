//if theres nothing recently reviewed then do 5 popular gift right now with the same styling as the
// categories but in a line instead of a grid too see more
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products"
import './CategoryCardsStyle4.css'



function RecentlyReviewedCard(){
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.thunkGetAllProducts())
    }, [dispatch])

       let eachProduct = Object.values(products)

        if (!eachProduct) return <h1>Loading</h1>

        eachProduct = eachProduct.filter((p) => p.category === "Music")

        eachProduct = eachProduct.slice(0, 5)
        console.log(eachProduct)

    return (
        <div className="popular">
            <h2>Popular gifts right now</h2>
            <div className="data">
            {eachProduct.map((p) =>
                <div className="popP">
                <img src={p.preview_imageURL} alt="meaningfult text"></img>
                <p className="popTitle">{p.item_name}</p>
                <p>${p.price}</p>
                </div>
            )}
             </div>
        </div>
    )
}

export default RecentlyReviewedCard
