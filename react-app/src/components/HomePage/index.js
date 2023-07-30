import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products"
import "./HomePage.css"

function HomePage(){
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.getAllProducts())
    }, [dispatch])

    let eachProduct = products.Products
    return (
        <>
       {eachProduct ? eachProduct.map((p) =>
            <>
            <p>{p.item_name}</p>
            <p>{p.price}</p>
            <p>{p.quantity}</p>
            <img src={p.preview_imageURL}></img>
            <p>{p.description}</p>
            <p>{p.category}</p>
            </>

        ) : null}
        </>
    )
}

export default HomePage
