import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products";
import "./HomePage.css";
import { Link } from "react-router-dom";
import EditorsPickCard from "../CategoryCards/EditorsPick";

function HomePage() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.thunkGetAllProducts());
  }, [dispatch]);

  let eachProduct = products?.Products;

  // console.log(eachProduct)

  if (!eachProduct) return <h1>Loading</h1>;

  return (
    <>
      <h2>Discrover fresh summer finds from creative sellers!</h2>
      <div className="searchResults">
        <div className="result">
          <Link to="/">Gift Ideas</Link>
          <img alt="hey thandi fix this"></img>
        </div>
        <div className="result">
          <Link to="/">Manga</Link>
          <img alt="hey thandi fix this1"></img>
        </div>
        <div className="result">
          <Link to="/">Best Sellers</Link>
          <img alt="hey thandi fix this2"></img>
        </div>
        <div className="result">
          <Link to="/">Jewlery</Link>
          <img alt="hey thandi fix this3"></img>
        </div>
        <div className="result">
          <Link to="/">Cool Finds</Link>
          <img alt="hey thandi fix this4"></img>
        </div>
      </div>
      <EditorsPickCard />
    </>
  );
}

export default HomePage;
