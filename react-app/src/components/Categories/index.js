import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
import { useHistory, useParams } from "react-router-dom";
import SearchAll from "./SearchAll";
import CategoryItem from "./CategoryItem";

function Categories({ category, name }) {
  const { products, search } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const { query } = useParams();
  console.log(query);
  console.log(search);

  useEffect(() => {
    dispatch(productActions.thunkGetAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productActions.thunkSearchAllProducts(query));
  }, [dispatch, query]);

  let info;

  if (name) info = name.split(" / ");

  if (name) name = info[0];

  let description;

  if (info) description = info[1];

  let eachProduct;

  if (!query) eachProduct = Object.values(products);
  if (query) eachProduct = Object.values(search);

  console.log(eachProduct);

  if (!eachProduct) return <h1>Loading</h1>;

  if (!query && category !== "All")
    eachProduct = eachProduct.filter((p) => p.category == category);

  console.log(
    "hi this right here is the array you want to look at",
    eachProduct
  );
  return (
    <>
      {!query ? (
        <>
          <div className="page">
            <div className="pageInfo">
              <div className="pInfo1">
                <h1>{name ? name : "All Categories"}</h1>
                <p className="des">{description ? description : null}</p>
                <div className="pageAll">
                  <p
                    onClick={(e) => history.push("/categories")}
                    className="pAll"
                  >
                    All
                  </p>
                  <span>
                    {name ? ">" : null} {name ? name : null}
                  </span>
                </div>
                <p className="numberR">
                  ({eachProduct.length} resultes, with Ads)
                </p>
              </div>
              <div></div>
              <div className="allcats">
                {category === "Clothing" ? <SearchClothes /> : null}
                {category === "Accessories" ? <SearchJewlery /> : null}
                {category === "Home Decor" ? <SearchHome /> : null}
                {category === "Computer" ? <SearchComputer /> : null}
                {category === "Waifu Body Pillows" ? <SearchWaifu /> : null}
                {category === "Books" ? <SearchManga /> : null}
                {category === "Music" ? <SearchMusic /> : null}
                {category === "Figurines" ? <SearchFigurines /> : null}
                {category === "All" ? <SearchAll /> : null}
              </div>
            </div>
          </div>
          <h1 className="pageT">Find something you love</h1>
        </>
      ) : null}
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
          <CategoryItem p={p} />
        ))}
      </div>
      <FooterTwo />
    </>
  );
}

export default Categories;
