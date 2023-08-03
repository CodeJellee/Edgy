import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ReviewsCurr from "./components/Reviews/ReviewsCurr";
import ShoppingCart from "./components/ShoppingCart/ShoppingCartPage";
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
import ProductIdPage from "./components/Products/ProductIdPage";
import FavoritesPage from "./components/FavoritesPage";
import NewProductForm from "./components/Products/CreateNewProduct";
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

          <Route exact path="/your_reviews">
            <ReviewsCurr />
          </Route>

          <Route exact path="/shopping_cart">
            <ShoppingCart />
          </Route>

          <Route exact path="/categories/clothing">
            <Categories
              category="Clothing"
              name="Clothing & Shoes / All things wonderful and wearable for men, women, kids, and even little bitty babies"
            />
          </Route>

          <Route exact path="/categories/home_decor">
            <Categories
              category="Home Decor"
              name="Home Decor / Kitchen and dining, storage solutions, rugs, lighting, wall decor, and furniture—everything you need to make your home yours"
            />
          </Route>

          <Route exact path="/categories/accessories">
            <Categories
              category="Accessories"
              name="Jewlery & Accessories / Necklaces, bracelets, earrings, and rings to complete your look or wow them with a perfect gift"
            />
          </Route>

          <Route exact path="/categories/computer">
            <Categories
              category="Computer"
              name="Computer & Tech / Embark on our high-tech, cutting-edge computer and tech offerings. Explore a world of innovation with the latest gadgets, devices, and accessories. "
            />
          </Route>

          <Route exact path="/categories/waifu_body_pillows">
            <Categories
              category="Waifu Body Pillows"
              name="Waifu Body Pillows /  Fall in love with the soft embrace of these premium body pillows while staying seamlessly linked to the online world."
            />
          </Route>

          <Route exact path="/categories/books">
            <Categories
              category="Books"
              name="Manga / A diverse collection of visually stunning and emotionally engaging stories that span across genres and cultures. Our selection offers something for every avid reader."
            />
          </Route>

          <Route exact path="/categories/music">
            <Categories
              category="Music"
              name="Music & Entertainment / Discover the enchanting melodies and captivating rhythms of our music collection. From soulful ballads to energetic beats, our carefully curated tracks cater to diverse tastes and emotions."
            />
          </Route>

          <Route exact path="/categories/figurines">
            <Categories
              category="Figurines"
              name="Art & Figurines / Custom artwork, figurines, and totally original paintings and prints to add to your collection"
            />
          </Route>

          <Route exact path="/categories">
            <Categories category="All" name="" />
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

          <Route exact path="/products/new">
            <NewProductForm />
          </Route>

          <Route exact path="/products/:id">
            <ProductIdPage />
          </Route>

          <Route path="/">
            <h1>404 not found</h1>
          </Route>

        </Switch>
      )}
      <Footer isLoaded={isLoaded} />
    </>
  );
}

export default App;
