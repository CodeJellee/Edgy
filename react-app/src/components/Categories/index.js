import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products";
import "./Categories.css";
import FooterTwo from "../Footer/index2";
import SearchClothes from "./SearchClothes";
import SearchJewlery from "./SearchJewlery";
import SearchHome from "./SearchHome";
import SearchComputer from "./SearchComputer";
import SearchWaifu from "./SearchWaifu";
import SearchManga from "./SearchManga";
import SearchMusic from "./SearchMusic";
import SearchFigurines from "./SearchFigurines";
import Stars from "../Reviews/Stars/Stars.js";

function Categories({ category, name }) {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.thunkGetAllProducts());
  }, [dispatch]);

  let info = name.split(" / ");

  name = info[0];
  let description = info[1];

  let eachProduct = Object.values(products);

  if (!eachProduct) return <h1>Loading</h1>;

  eachProduct = eachProduct.filter((p) => p.category == category);

  return (
    <>
      <div className="page">
        <div className="pageInfo">
          <div className="pInfo1">
            <h1>{name}</h1>
            <p className="des">{description}</p>
            <p className="numberR">({eachProduct.length} resultes, with Ads)</p>
          </div>
          <div>
            {category === "Clothing" ? <SearchClothes /> : null}
            {category === "Accessories" ? <SearchJewlery /> : null}
            {category === "Home Decor" ? <SearchHome /> : null}
            {category === "Computer" ? <SearchComputer /> : null}
            {category === "Waifu Body Pillows" ? <SearchWaifu /> : null}
            {category === "Books" ? <SearchManga /> : null}
            {category === "Music" ? <SearchMusic /> : null}
            {category === "Figurines" ? <SearchFigurines /> : null}
          </div>
        </div>
      </div>
      <h1 className="pageT">Find something you love</h1>
      <div className="filters">
        <div className="filter1">
          <button>
            Estimated Arrival<span>Anytime</span>
            <i class="fa-solid fa-caret-down"></i>
          </button>
          <button>
            <i class="fa-solid fa-filter"></i>All Filters
          </button>
        </div>
        <div className="filter2">
          <button>
            <span>Sort by:</span>Revelancy<i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
      </div>
      <div className="products">
        {eachProduct.map((p) => (
          <div className="p">
            <img src={p.preview_imageURL}></img>
            <p className="itemName">{p.item_name}</p>
            <Stars reviews={p.Reviews}></Stars>
            <p>${p.price}</p>
            <p>
              Ad by {p.Seller.first_name} {p.Seller.last_name}
            </p>
          </div>
        ))}
      </div>
      <FooterTwo />
    </>
  );
}

export default Categories;
