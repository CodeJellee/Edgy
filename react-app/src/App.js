import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ReviewsCurr from './components/Reviews/ReviewsCurr'
<<<<<<< HEAD
import ProductIdPage from './components/Products/ProductIdPage'
=======
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
>>>>>>> products_routes

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
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/your_reviews">
            <ReviewsCurr />
          </Route>
<<<<<<< HEAD
          <Route path="/products/:id">
            <ProductIdPage />
=======
          <Route exact path="/categories/clothing">
            <Categories category="clothing"/>
          </Route>
          <Route exact path="/categories/home_decor">
            <Categories category="home_decor"/>
          </Route>
          <Route exact path="/categories/accessories">
            <Categories category="accessories"/>
          </Route>
          <Route exact path="/categories/computer">
            <Categories category="computer"/>
          </Route>
          <Route exact path="/categories/waifu_body_pillows">
            <Categories category="waifu_body_pillows"/>
          </Route>
          <Route exact path="/categories/books">
            <Categories category="books"/>
          </Route>
          <Route exact path="/categories/music">
            <Categories category="music"/>
          </Route>
          <Route exact path="/categories/figurines">
            <Categories category="figurines"/>
          </Route>
          <Route path="/">
            <h2>404 not found</h2>
>>>>>>> products_routes
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
