import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FavoriteButton({ productId, handleUnfavoriteClick, handleFavoriteClick, initialState}) {
  const [solid, setSolid] = useState(initialState);
  const currentUser = useSelector(state => state.session.user)
  const product = useSelector(state => state.products.singleProduct)

  //   console.log("this is solid value", solid);
  //   console.log("this is the product id", productId);

  const handleFavorite = (productId) => {

    if( currentUser.id === product.sellerId){
      alert("Cannot like your own product!")
      return;
    }

    if( !currentUser.id){
      alert("Need to be logged in to favorite!")
      return;
    }

    if (solid === false) {
      setSolid(!solid);
      handleFavoriteClick(productId);
    } else {
      setSolid(!solid);
      handleUnfavoriteClick(productId);
    }
  };


  return (
    <div
    id="favorite-icon__container">
      <i
        className={solid ? `fa-solid fa-heart` : `fa-regular fa-heart`}
        onClick={() => handleFavorite(productId)}
      ></i>
    </div>

  );
}
export default FavoriteButton;
