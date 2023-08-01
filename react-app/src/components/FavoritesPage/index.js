import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetUserFavorites } from "../../store/favorites";

function FavoritesPage() {
  // A single page of the user's favorite items
  // Each item will 'link'/'redirect' to the item when clicked on
  // User needs to be logged in
  const dispatch = useDispatch();
  // I need to grab the userId
  const user = useSelector((state) => state.session.user);
  const userFavorites = useSelector((state) =>
    Object.values(state.favorites.userFavorites)
  ); // figure out the state first
  // console.log("userId ===>", userId);
  console.log("user favorites ===>", userFavorites);

  useEffect(() => {
    // insert thunk query to grab user's favorite items
    dispatch(thunkGetUserFavorites(user.id));
  }, [user.id, dispatch]);

  if (!user || userFavorites.length === 0) return null;

  return (
    <>
      {/* Can be one component for user-options-sales */}
      <div id="user-details__container">
        {/* image is a span so it can be on the left of the div containing the user options and user sales */}
        <span>
          <img
            src=""
            alt="user pfp or they can have the option to choose a pfp by clicking this"
          ></img>
        </span>
        <div id="user-options-sales__container">
          <div id="user-options">
            {/* Name should be a modal button to open up popup that allows the user to click on an edit public profile button to redirect them to their edit profile page */}
            <div>{user.first_name}</div>
            <NavLink to="">Edit public profile</NavLink>
            <NavLink to="">About</NavLink>
          </div>

          <div id="user-sales">
            {/* Links to the user's listed items page */}
            <NavLink to="">t3mr4pewz0u1pcee</NavLink>
            {/* Links to # of user sales page */}
            <NavLink to="">0 Sales</NavLink>
          </div>
        </div>
      </div>
      {/* Can be one component for user-search-bar */}
      <div id="user-search-favorites__container">
        <div>
          <div>
            Favorite items <span>{userFavorites.length} items</span>
          </div>
          <div>Insert Search Bar Here</div>
        </div>
      </div>

      {/* Can be all of user's favorited items component */}
      {/*!!! For the map, sellerId, should be the seller's username */}
      <div id="user-favorites__container">
        {userFavorites?.map((fav) => (
          <>
            <div key={fav.id}>
              <div>
                <img
                  src={fav.preview_imageURL}
                  alt={`productId-${fav.productId}`}
                />
              </div>
              <div>{fav.item_name}</div>
              <div>{fav.Seller.username}</div>
              <div>{fav.price}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default FavoritesPage;
