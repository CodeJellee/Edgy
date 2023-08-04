import "./Categories.css";
import { useState, useEffect } from "react";
import FavoriteButton from "../FavoritesPage/FavoritesButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import Stars from "../Reviews/Stars/Stars";
import * as favoriteActions from "../../store/favorites";
import { thunkGetUserFavorites } from "../../store/favorites";

function CategoryItem({ p }) {
  const [isHidden, setHidden] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userFavorites = useSelector((state) =>
    Object.values(state.favorites.userFavorites)
  );
  const [itemState, setItemState] = useState(false);

  const handleFavoriteClick = (productId) => {
    dispatch(favoriteActions.thunkPostFavoriteProduct(productId));
  };

  const handleUnfavoriteClick = (productId) => {
    dispatch(favoriteActions.thunkDeleteFavorite(productId));
  };
  // console.log("favorites state:", userFavorites)

  useEffect(() => {
    dispatch(thunkGetUserFavorites(user.id));
  }, [user.id, dispatch]);

  let favs = userFavorites?.filter((f) => f.id === p.id);

  if (favs.length > 0) {
    if (itemState === false) setItemState(true);
  }

  // console.log("my favorites: ", favs)

  const handleTouchStart = () => {
    setHidden(true);
  };

  const handleTouchEnd = () => {
    setHidden(false);
  };

  return (
    <div
      onMouseLeave={handleTouchStart}
      onMouseEnter={handleTouchEnd}
      className="p"
    >
      <div id={isHidden ? "hidden" : "container-container"}>
        <FavoriteButton
          productId={p.id}
          handleUnfavoriteClick={handleUnfavoriteClick}
          handleFavoriteClick={handleFavoriteClick}
          initialState={itemState}
        />
      </div>
      <img
        onClick={(e) => history.push(`/products/${p.id}`)}
        src={p.preview_imageURL}
      ></img>
      <p
        onClick={(e) => history.push(`/products/${p.id}`)}
        className="itemName"
      >
        {p.item_name}
      </p>
      <Stars
        onClick={(e) => history.push(`/products/${p.id}`)}
        reviews={p.Reviews}
      ></Stars>
      <p onClick={(e) => history.push(`/products/${p.id}`)} className="price">
        ${p.price}
      </p>
      <p onClick={(e) => history.push(`/products/${p.id}`)} className="seller">
        Ad by {p.Seller.first_name} {p.Seller.last_name}
      </p>
    </div>
  );
}

export default CategoryItem;