import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function FavoritesPage() {
  // A single page of the user's favorite items
  // Each item will 'link'/'redirect' to the item when clicked on
  // User needs to be logged in
  const dispatch = useDispatch();
  // I need to grab the userId
  const sessionUser = useSelector((state) => state.session.user);
  const userFavorites = useSelector((state) => state); // figure out the state first

  if (!sessionUser) return null;

  useEffect(() => {
    // insert thunk query to grab user's favorite items
  }, [dispatch]);

  return (
    <>
      <h1>this is the user's favorite items page</h1>
    </>
  );
}

export default FavoritesPage;
