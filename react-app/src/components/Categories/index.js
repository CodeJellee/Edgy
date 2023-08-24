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
  const [ hidden, setHidden ] = useState(true)
  const [ relevancy, setRelevancy ] = useState(true)
  const [ highest, setHighest ] = useState(false)
  const [ lowest, setLowest ] = useState(false)
  const [ recent, setRecent ] = useState(false)
  const [ top, setTop ] = useState(false)


  const handleRelevancy = () => {
    setRelevancy(true)
    setHighest(false)
    setLowest(false)
    setRecent(false)
    setTop(false)
  }

  const handleHighest = () => {
    setRelevancy(false)
    setHighest(true)
    setLowest(false)
    setRecent(false)
    setTop(false)
  }

  const handleLowest = () => {
    setRelevancy(false)
    setHighest(false)
    setLowest(true)
    setRecent(false)
    setTop(false)
  }

  const handleRecent = () => {
    setRelevancy(false)
    setHighest(false)
    setLowest(false)
    setRecent(true)
    setTop(false)
  }

  const handleTop = () => {
    setRelevancy(false)
    setHighest(false)
    setLowest(false)
    setRecent(false)
    setTop(true)
  }
  // console.log(query);
  // console.log(search);

  // useEffect(() => {
  //   dispatch(productActions.thunkGetAllProducts());
  // }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top instantly when the page loads
}, []);

  useEffect(() => {
    if (query) dispatch(productActions.thunkSearchAllProducts(query));
  }, [dispatch, query]);

  let info;

  if (name) info = name.split(" / ");

  if (name) name = info[0];

  let description;

  if (info) description = info[1];

  let eachProduct;

  let filtering = "filters"

  if (!query) eachProduct = Object.values(products);
  if (query) eachProduct = Object.values(search);
  if (query) filtering = "filtersS"

//   if (!eachProduct.length) return <h1>Loading</h1>;

  if (!query && category !== "All") eachProduct = eachProduct.filter((p) => p.category == category);

  console.log(eachProduct)
  if (lowest) eachProduct = eachProduct.sort((a, b) => a.price - b.price);
  if (highest) eachProduct = eachProduct.sort((a, b) => b.price - a.price);
  if (recent) eachProduct = eachProduct.sort((a, b) => b.id - a.id);

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
                  ({eachProduct.length} resultes, with Ads <i class="fi fi-rr-interrogation"></i>)
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
      <div className={filtering}>
        <div className="filter1">
          <button onClick={((e) => window.alert("Feature coming soon"))} >
            Estimated Arrival<span>Anytime</span>
            <i class="fa-solid fa-caret-down"></i>
          </button>
          <button onClick={((e) => window.alert("Feature coming soon"))} >
            <i class="fa-solid fa-filter"></i>All Filters
          </button>
        </div>
        <div className="filter2">
          <button onClick={(() => setHidden(!hidden))}>
            <span>Sort by:</span>Relevancy<i class="fa-solid fa-caret-down"></i>
          </button>
          <div id={ hidden ? "hidden" : "relevancy"}>
          <div id="rel" onClick={(() => setHidden(!hidden))}><span id="forty">Sort by:</span>Relevancy<i class="fa-solid fa-caret-down"></i></div>
          <div id="choose55">
            <span onClick={handleRelevancy} id={relevancy ? "c-c" : ""}>Relevancy<i id={relevancy ? "" : "hidden"} class="fi fi-br-check"></i></span>
            <span onClick={handleLowest} id={lowest ? "c-c" : ""}>Lowest Price<i id={lowest ? "" : "hidden"} class="fi fi-br-check"></i></span>
            <span onClick={handleHighest} id={highest ? "c-c" : ""}>Highest Price<i id={highest ? "" : "hidden"} class="fi fi-br-check"></i></span>
            <span onClick={handleTop} id={top ? "c-c" : ""}>Top Customer Reviews<i id={top ? "" : "hidden"} class="fi fi-br-check"></i></span>
            <span onClick={handleRecent} id={recent ? "c-c" : ""}>Most Recent<i id={recent ? "" : "hidden"} class="fi fi-br-check"></i></span>
          </div>
          </div>
        </div>
      </div>
      <div className="products">
        {eachProduct.map((p) => (
          <CategoryItem p={p} />
        ))}
      </div>
      {query && eachProduct.length === 0 ? (
        <div className="noResult">Could not find results for '{query}'</div>
      ) : null}
      <FooterTwo />
    </>
  );
}

export default Categories;
