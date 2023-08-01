import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products"
import './CategoryCardsStyle3.css'
import { Link } from "react-router-dom";



function EditorsPickTwoCard(){
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.thunkGetAllProducts())
    }, [dispatch])

       let eachProduct = Object.values(products)

        if (!eachProduct) return <h1>Loading</h1>

        eachProduct = eachProduct.filter((p) => p.category == "Books")

        console.log(eachProduct)

    return (
        <div className='epTwo'>
            <div className='sec3'>
            <div className="epTwoTitle">
            <h3>Editors' Picks</h3>
                 <h2>Personalized Gifts</h2>
                 <Link to='/categories/computer'>See more</Link>
            </div>
            <div className='imgTwo1'>
                    <img src={eachProduct[0]?.preview_imageURL}></img>
                </div>
                <div className='imgTwo2'>
                    <img src={eachProduct[1]?.preview_imageURL}></img>
                </div>
                <div className='imgTwo3'>
                    <img src={eachProduct[2]?.preview_imageURL}></img>
                </div>
            </div>
            <div className='sec4'>
            <div className='imgTwo4'>
                    <img src={eachProduct[3]?.preview_imageURL}></img>
                </div>
                <div className='imgTwo5'>
                    <img src={eachProduct[4]?.preview_imageURL}></img>
                </div>
                <div className='imgTwo6'>
                    <img src={eachProduct[0]?.preview_imageURL}></img>
                </div>
                <div className='epDescription'>
                <h3>Thoughtful gifts galore at affordable prices you’ll adore</h3>
                </div>
            </div>
            </div>
    )
}

export default EditorsPickTwoCard
