import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products";
import "./CategoryCardsStyle1.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function EditorsPickCard() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch(productActions.thunkGetAllProducts());
  }, [dispatch]);

  let eachProduct = Object.values(products);

  if (!eachProduct) return <h1>Loading</h1>;

  eachProduct = eachProduct.filter((p) => p.category === "Computer");

  // console.log(eachProduct)

  return (
    <div className="ep">
      <div className="sections">
        <div className="sec1">
          <div className="epTitle">
            <h3>Editors' Picks</h3>
            <h2>Best Tech Items For Gaming Setup</h2>
            <Link to="/categories/computer">
              See more<i onClick={((e) => history.push(`/categories/computer`))} class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="imgOne">
            <img
            onClick={((e) => history.push(`/products/${eachProduct[0]?.id}`))}
            src={eachProduct[0]?.preview_imageURL}
              alt="meaningful text"
            ></img>
          </div>
          <div className="imgOne">
            <img
            onClick={((e) => history.push(`/products/${eachProduct[1]?.id}`))}
            src={eachProduct[1]?.preview_imageURL}
              alt="meaningful text"
            ></img>
          </div>
        </div>
        <div className="sec2">
          <div className="imgOne">
            <img
            onClick={((e) => history.push(`/products/${eachProduct[8]?.id}`))}
            src={eachProduct[7]?.preview_imageURL}
              alt="meaningfult text"
            ></img>
          </div>
          <div className="imgOne">
            <img
            onClick={((e) => history.push(`/products/${eachProduct[6]?.id}`))}
            src={eachProduct[6]?.preview_imageURL}
              alt="meaningfult text"
            ></img>
          </div>
          <div className="imgOne">
            <img
            onClick={((e) => history.push(`/products/${eachProduct[4]?.id}`))}
            src={eachProduct[4]?.preview_imageURL}
              alt="meaningfult text"
            ></img>
          </div>
          <div className="imgOne">
            <img
              onClick={((e) => history.push(`/products/${eachProduct[5]?.id}`))}
              src={eachProduct[5]?.preview_imageURL}
              alt="meaningfult text"
            ></img>
          </div>
        </div>
      </div>
      <div className="home"></div>
    </div>
  );
}

export default EditorsPickCard;
