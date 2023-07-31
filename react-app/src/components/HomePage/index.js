import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products"
import "./HomePage.css"
import { Link } from "react-router-dom";
import EditorsPickCard from "../CategoryCards/EditorsPick";
import ShopLookCard from "../CategoryCards/ShopTheLook";
import EditorsPickTwoCard from "../CategoryCards/EditorsPick2";

function HomePage(){
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.getAllProducts())
    }, [dispatch])

        let eachProduct = products?.Products

        console.log(eachProduct)

        if (!eachProduct) return <h1>Loading</h1>

        return (
             <>
             <h2>Discrover fresh summer finds from creative sellers!</h2>
             <div className="searchResults">
                <div className="result">
                    <Link to="/">Gift Ideas</Link>
                    <img></img>
                </div>
                <div className="result">
                    <Link to="/">Manga</Link>
                    <img></img>
                </div>
                <div className="result">
                    <Link to="/">Best Sellers</Link>
                    <img></img>
                </div>
                <div className="result">
                    <Link to="/">Jewlery</Link>
                    <img></img>
                </div>
                <div className="result">
                    <Link to="/">Cool Finds</Link>
                    <img></img>
                </div>

             </div>
            <EditorsPickCard/>
            <ShopLookCard />
            <EditorsPickTwoCard />
            </>
            )


}

export default HomePage
