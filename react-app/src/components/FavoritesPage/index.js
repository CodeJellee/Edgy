import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetUserFavorites } from "../../store/favorites";
import { useState } from "react";
import FavoriteButton from "./FavoritesButton";
import * as favoriteActions from "../../store/favorites";
import "../Navigation/Navigation.css";
import "./FavoritesPage.css";

function FavoritesPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userFavorites = useSelector((state) =>
    Object.values(state.favorites.userFavorites)
  );

  const handleFavoriteClick = (productId) => {
    dispatch(favoriteActions.thunkPostFavoriteProduct(productId));
  };

  const handleUnfavoriteClick = (productId) => {
    dispatch(favoriteActions.thunkDeleteFavorite(productId));
  };

  useEffect(() => {
    dispatch(thunkGetUserFavorites(user.id));
  }, [user.id, dispatch]);

  if (!user || userFavorites.length === 0) return null;

  return (
    <div id="favorites__main-container">
      {/* Can be one component for user-options-sales */}
      <div id="user-details__container">
        {/* image is a span so it can be on the left of the div containing the user options and user sales */}
        <div id="user-options">
          <div id="user-options-pfp">
            <img
              src="https://images.all-free-download.com/images/graphiclarge/testing_with_magnifier_185604.jpg"
              alt="user pfp or they can have the option to choose a pfp by clicking this"
              id="test-img"
            ></img>
          </div>
          {/* Name should be a modal button to open up popup that allows the user to click on an edit public profile button to redirect them to their edit profile page */}
          <div id="user-options__name-profile">
            <div>{user.first_name}</div>
            <div>
              <NavLink to="">Edit public profile</NavLink>
              <NavLink to="">About</NavLink>
            </div>
          </div>
        </div>

        <div id="user-sales">
          {/* Links to the user's listed items page */}
          <NavLink to="">t3mr4pewz0u1pcee</NavLink>
          {/* Links to # of user sales page */}
          <NavLink to="">0 Sales</NavLink>
        </div>
      </div>

      {/* Can be one component for user-search-bar */}
      <div id="user-search-favorites__container">
        <div id="user-favorites__count">
          Favorite items <span>{userFavorites.length} items</span>
        </div>
        <div id="user-favorites__search">
          <input
            type="search"
            placeholder="Search Your Favorites"
            id="search-favorites"
          ></input>
          <button id="search-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      {/* Can be all of user's favorited items component */}
      {/*!!! For the map, sellerId, should be the seller's username */}
      <div id="user-favorites__container">
        {userFavorites?.map((fav) => (
          <>
            <div key={fav?.item_name} id={`favorite-product`}>
              <div id="container-container">
                <FavoriteButton
                  onClick={() => handleUnfavoriteClick(fav.id)}
                  productId={fav.id}
                  handleUnfavoriteClick={handleUnfavoriteClick}
                  handleFavoriteClick={handleFavoriteClick}
                  initialState={true}
                />
              </div>
              <div id="fav-img__container">
                <img
                  src={fav.preview_imageURL}
                  alt={`productId-${fav.productId}`}
                  id="product-img"
                />
              </div>

              <p>{fav.item_name}</p>
              <p>{fav.Seller.username}</p>
              <p>{fav.price}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
