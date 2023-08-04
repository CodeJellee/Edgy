//if theres nothing recently reviewed then do 5 popular gift right now with the same styling as the
// categories but in a line instead of a grid too see more
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products";
import "./CategoryCardsStyle4.css";
import Stars from "../Reviews/Stars/Stars";
import { useHistory } from "react-router-dom";
import CategoryItem from "../Categories/CategoryItem";
import '../Categories/Categories.css'
import "../FavoritesPage/FavoritesPage.css"

function RecentlyReviewedCard() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch(productActions.thunkGetAllProducts());
  }, [dispatch]);

  let eachProduct = Object.values(products);

  if (!eachProduct) return <h1>Loading</h1>;

  eachProduct = eachProduct.filter((p) => p.Reviews.find((r) => r.stars > 4));
  eachProduct = eachProduct.slice(0, 5);
  // console.log(eachProduct);

  return (
    <div className="popular">
      <h1>Popular gifts right now</h1>
      <div className="data">
        {eachProduct.map((p) => (
            <CategoryItem p={p} page="recent"/>
        ))}
      </div>
    </div>
  );
}

export default RecentlyReviewedCard;
