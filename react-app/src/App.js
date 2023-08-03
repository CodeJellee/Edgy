import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ReviewsCurr from "./components/Reviews/ReviewsCurr";
import ShoppingCart from "./components/ShoppingCart/ShoppingCartPage"
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
import ProductIdPage from "./components/Products/ProductIdPage";
import FavoritesPage from "./components/FavoritesPage";
import Footer from "./components/Footer";
import NewProductForm from "./components/Products/CreateNewProduct"


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
          <Route exact path="/shopping_cart">
            <ShoppingCart />
          </Route>
          <Route exact path="/categories/clothing">
            <Categories category="Clothing" name="Clothing & Shoes" />
          </Route>
          <Route exact path="/categories/home_decor">
            <Categories category="Home Decor" name="Home Decor" />
          </Route>
          <Route exact path="/categories/accessories">
            <Categories category="Accessories" name="Jewlery & Accessories" />
          </Route>
          <Route exact path="/categories/computer">
            <Categories category="Computer" name="Computer & Tech" />
          </Route>
          <Route exact path="/categories/waifu_body_pillows">
            <Categories category="Waifu Body Pillows" name="Waifu Body Pillows" />
          </Route>
          <Route exact path="/categories/books">
            <Categories category="Books" name="Manga" />
          </Route>
          <Route exact path="/categories/music">
            <Categories category="Music" name="Music & Entertainment" />
          </Route>
          <Route exact path="/categories/figurines">
            <Categories category="Figurines" name="Art & Figurines" />
          </Route>
          <Route exact path="/products/new">
            <NewProductForm />
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
    </>
  );
}

export default App;
