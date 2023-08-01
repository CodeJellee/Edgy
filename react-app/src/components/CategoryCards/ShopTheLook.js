import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products"
import './CategoryCardsStyle2.css'
import { Link } from "react-router-dom";

function ShopLookCard(){
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.thunkGetAllProducts())
    }, [dispatch])

       let eachProduct = Object.values(products)

        if (!eachProduct) return <h1>Loading</h1>

        eachProduct = eachProduct.filter((p) => p.category == "Clothing")


    return (
    <div className="look">
        <h2>Shop the Look</h2>
        <div className="shopImg">
        <div>
        <img src={eachProduct[0]?.preview_imageURL}></img>
        <p>{eachProduct[0]?.item_name} from name</p>
        </div>
        <div>
        <img src={eachProduct[1]?.preview_imageURL}></img>
        <p>{eachProduct[1]?.item_name} from name</p>
        </div>
        <div>
        <img src={eachProduct[2]?.preview_imageURL}></img>
        <p>{eachProduct[2]?.item_name} from name</p>
        </div>
        </div>
    </div>
    )
}

export default ShopLookCard
