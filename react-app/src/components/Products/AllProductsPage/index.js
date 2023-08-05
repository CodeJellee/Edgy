import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as productActions from '../../../store/products'
import "./AllProductsPage.css"
import FooterTwo from "../../Footer/index2";
import DeleteProductModal from "./DeleteProduct";
import { useModal } from '../../../context/Modal'
import { useHistory } from "react-router-dom";


function AllProductsPage() {
    const { userProducts } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const { setModalContent } = useModal();
    const history = useHistory();

    let products
    if (userProducts) products = Object.values(userProducts)

    console.log(products)

    useEffect(() => {
    dispatch(productActions.thunkGetUserProducts());
    }, [dispatch]);

    return (
        <>
        <div className="allProductsPage">
            <h1>Products</h1>
            <div>
            <input placeholder="Search by title"></input>
            <button onClick={(e) => history.push('/products/new')}>Add a product</button>
            </div>
        </div>
        <div className="border"> </div>
        <div className="productPage">

        <div className="userProducts">

            {products?.map((p) => (
                <div className="userProduct">
                    <img onClick={((e) => history.push(`products/${p.id}`))} src={p.preview_imageURL} alt="meaningful text"></img>
                    <h4 onClick={((e) => history.push(`products/${p.id}`))}>{p.item_name}</h4>
                    <p onClick={((e) => history.push(`products/${p.id}`))}>{p.description}</p>
                    <div onClick={((e) => history.push(`products/${p.id}`))}className="product-p">
                    <p>{p.quantity} In Stock</p>
                    <p>|</p>
                    <p>{p.price}</p>
                    </div>
                    <p>Created At:
                    {` ${new Date(p.createdAt).toLocaleString('default', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}`}
                    </p>
                    <div className="deleteProduct">
                        <button onClick={(() => setModalContent(<DeleteProductModal productId={p.id} />))}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
        <button className="qEdit">Quick edit</button>
        </div>
        <FooterTwo />
        </>

    )
}

export default AllProductsPage
