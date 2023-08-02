import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "../../store/products";
import "./Categories.css";
import FooterTwo from "../Footer/index2";
import Stars from "../Reviews/Stars/Stars"

function Categories({ category, name }) {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.thunkGetAllProducts())
  }, [dispatch])

  console.log(name)

  let eachProduct = Object.values(products)

  if (!eachProduct || eachProduct.length === 0) return <h1>Loading</h1>

  console.log(Array.isArray(eachProduct))
  eachProduct = eachProduct.filter((p) => p.category == category)
  console.log("products category:", eachProduct[0].Reviews)

  return (
    <>
      <div className="page">
        {name}
        <p>description</p>
      </div>
      <h1 className="pageT">Find something you love</h1>
      <div classname="filter1">
        <button>Estimated Arrival<span>Anytime</span></button>
        <button>All Filters</button>
      </div>
      <div className="filter2">
        <button><span>Sort by:</span>Revelancy</button>
      </div>
      <div className="products">
        {eachProduct.map((p) =>
          <div className="p">
            <img src={p.preview_imageURL}></img>
            <p className="itemName">{p.item_name}</p>
            <Stars reviews={p.Reviews}></Stars>
            <p>${p.price}</p>
          </div>
        )}
      </div>
      <FooterTwo />
    </>
  );
}

export default Categories;
