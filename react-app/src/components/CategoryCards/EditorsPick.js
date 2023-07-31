import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products"
import './CategoryCardsStyle1.css'
import { Link } from "react-router-dom";

function EditorsPickCard(){
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.thunkGetAllProducts())
    }, [dispatch])

        let eachProduct = products?.Products

        if (!eachProduct) return <h1>Loading</h1>

        eachProduct = eachProduct.filter((p) => p.category == "Computer")

        console.log(eachProduct)

        return (
            <div className="ep">
                <div className="sections">
                <div className="sec1">
                <div className='epTitle'>
                <h3>Editors' Picks</h3>
                 <h2>Computers</h2>
                 <Link to='/categories/computer'>See more</Link>
                </div>
                <div className='imgOne'>
                    <img src={eachProduct[0].preview_imageURL}></img>
                </div>
                <div className='imgOne'>
                    <img src={eachProduct[1].preview_imageURL}></img>
                </div>
                </div>
                <div className="sec2">
                <div className='imgOne'>
                    <img src={eachProduct[2].preview_imageURL}></img>
                </div>
                <div className='imgOne'>
                    <img src={eachProduct[3].preview_imageURL}></img>
                </div>
                <div className='imgOne'>
                    <img src={eachProduct[4].preview_imageURL}></img>
                </div>
                <div className='imgOne'>
                    <img src={eachProduct[0].preview_imageURL}></img>
                </div>
                </div>
                </div>
             <div className="home">
             </div>
            </div>

            )


}

export default EditorsPickCard
