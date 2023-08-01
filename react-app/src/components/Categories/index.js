import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products"
import './Categories.css'

function Categories({ category }){
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.thunkGetAllProducts())
    }, [dispatch])

       let eachProduct = Object.values(products)

        if (!eachProduct) return <h1>Loading</h1>

        eachProduct = eachProduct.filter((p) => p.category == category)

    return (
        <>
        <h2>{category}</h2>
        <h1>Find something you love</h1>
        <div className="products">
        {eachProduct.map((p) =>
            <div className="p">
            <img src={p.preview_imageURL}></img>
            <p>{p.item_name}</p>
            <p>{p.price}</p>
            <p>{p.quantity}</p>
            <p>{p.description}</p>
            <p>{p.category}</p>
            </div>
        )}
        </div>
        </>
    )
}

export default Categories
