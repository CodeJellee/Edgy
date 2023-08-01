import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products"
import './CategoryCardsStyle6.css'

function FreshArticlesCard(){
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.thunkGetAllProducts())
    }, [dispatch])

       let eachProduct = Object.values(products)

        if (!eachProduct) return <h1>Loading</h1>

        eachProduct = eachProduct.filter((p) => p.category === "Clothing")


    return (
    <div className="articles">
        <h1>Fresh articles we love<i class="fa-solid fa-arrow-right"></i></h1>
        <div className="eA">
            <div className="a">
                <img src="https://www.gothicbeauty.com/wp-content/uploads/2017/01/punkrave-re.jpg"></img>
                <p>Shopping Guides</p>
                <h2>Punkrave: Gothic Fashion born from Punk Spirit</h2>
                <p>Founded a little over ten years ago, fashion label Punk Rave has become synonymous with intricate, yet eminently wearable, gothic designs.</p>
            </div>
            <div className="a">
                <img src="https://otakuusamagazine.com/wp-content/uploads/2023/02/duke-death-maid-s2.jpg"></img>
                <p>Breaking News</p>
                <h2>The Duke of Death and His Maid Season 2 Dub Debuts This Weekend</h2>
                <p>The dub for the second season of The Duke of Death and His Maid is set to premiere on Crunchyroll in two days, on July 30. Crunchyroll shared info on the cast and crew.</p>
            </div>
            <div className="a">
                <img src="https://i0.wp.com/tsl.news/wp-content/uploads/2023/02/Clare_Martin_Goth.png?fit=2100%2C1500&ssl=1"></img>
                <p>Shopping Guides</p>
                <h2>So You Want to Dress: Goth</h2>
                <p>Goth culture is all about embracing individuals who have been outcasted from society for being who they are. Gothic fashion is romantic, it is inclusive, it is queer and most importantly, it is non-judgmental. </p>
            </div>
        </div>
    </div>
    )
}

export default FreshArticlesCard
