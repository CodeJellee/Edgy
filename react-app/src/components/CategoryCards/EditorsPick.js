import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products";
import "./CategoryCardsStyle1.css";
import { Link } from "react-router-dom";

function EditorsPickCard() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.thunkGetAllProducts());
  }, [dispatch]);

  let eachProduct = products?.Products;

  if (!eachProduct) return <h1>Loading</h1>;

  return (
    <div className="home">
      <div className="sec2">
        <h3>Editors' Picks</h3>
        <h2>Computer</h2>
        <Link to="/categories/computer">See more</Link>
        <div className="sec2Img">
          <img
            src={eachProduct[1].preview_imageURL}
            alt={eachProduct[1].id}
          ></img>
          <img
            src={eachProduct[2].preview_imageURL}
            alt={eachProduct[2].id}
          ></img>
        </div>
      </div>
      <div className="data">
        {eachProduct.map((p) => (
          <>
            <img src={p.preview_imageURL} alt="thandi fix this now"></img>
          </>
        ))}
      </div>
      <img
        src={eachProduct[0].preview_imageURL}
        alt="hey thandi pls fix this"
      ></img>
    </div>
  );
}

export default EditorsPickCard;
