import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ReviewsCurr from "./components/Reviews/ReviewsCurr";
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
import ProductIdPage from "./components/Products/ProductIdPage";
import FavoritesPage from "./components/FavoritesPage";
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
          <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/your_reviews">
            <ReviewsCurr />
          </Route>
          <Route exact path="/categories/clothing">
            <Categories category="Clothing" />
          </Route>
          <Route exact path="/categories/home_decor">
            <Categories category="Home Decor" />
          </Route>
          <Route exact path="/categories/accessories">
            <Categories category="Accessories" />
          </Route>
          <Route exact path="/categories/computer">
            <Categories category="Computer" />
          </Route>
          <Route exact path="/categories/waifu_body_pillows">
            <Categories category="Waifu Body Pillows" />
          </Route>
          <Route exact path="/categories/books">
            <Categories category="Books" />
          </Route>
          <Route exact path="/categories/music">
            <Categories category="Music" />
          </Route>
          <Route exact path="/categories/figurines">
            <Categories category="Figurines" />
          </Route>
          <Route path="/products/:id">
            <ProductIdPage />
          </Route>
          <Route exact path="/favorites/current">
            <FavoritesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
