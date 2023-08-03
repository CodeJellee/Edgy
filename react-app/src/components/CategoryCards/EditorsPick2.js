import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products";
import "./CategoryCardsStyle3.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function EditorsPickTwoCard() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch(productActions.thunkGetAllProducts());
  }, [dispatch]);

  let eachProduct = Object.values(products);

  if (!eachProduct) return <h1>Loading</h1>;

  eachProduct = eachProduct.filter((p) => p.category === "Books");

  // console.log(eachProduct)

  return (
    <div className="epTwo">
      <div className="sec3">
        <div className="epTwoTitle">
          <h3>Editors' Picks</h3>
          <h2>Personalized Gifts</h2>
          <Link to="/categories/computer">
            Shop these unique finds <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="imgTwo1">
          <img
            onClick={((e) => history.push(`/products/${eachProduct[0]?.id}`))}
            src={eachProduct[0]?.preview_imageURL}
            alt="meaningfult text"
          ></img>
        </div>
        <div className="imgTwo2">
          <img
            onClick={((e) => history.push(`/products/${eachProduct[1]?.id}`))}
            src={eachProduct[1]?.preview_imageURL}
            alt="meaningfult text"
          ></img>
        </div>
        <div className="imgTwo3">
          <img
            onClick={((e) => history.push(`/products/${eachProduct[3]?.id}`))}
            src={eachProduct[3]?.preview_imageURL}
            alt="meaningfult text"
          ></img>
        </div>
      </div>
      <div className="sec4">
        <div className="imgTwo4">
          <img
            onClick={((e) => history.push(`/products/${eachProduct[9]?.id}`))}
            src={eachProduct[9]?.preview_imageURL}
            alt="meaningfult text"
          ></img>
        </div>
        <div className="imgTwo5">
          <img
            onClick={((e) => history.push(`/products/${eachProduct[8]?.id}`))}
            src={eachProduct[8]?.preview_imageURL}
            alt="meaningfult text"
          ></img>
        </div>
        <div className="imgTwo6">
          <img
            onClick={((e) => history.push(`/products/${eachProduct[6]?.id}`))}
            src={eachProduct[6]?.preview_imageURL}
            alt="meaningfult text"
          ></img>
        </div>
        <div className="epDescription">
          <h3>Thoughtful gifts galore at affordable prices you’ll adore</h3>
        </div>
      </div>
    </div>
  );
}

export default EditorsPickTwoCard;
