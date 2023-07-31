import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ModalProvider, Modal } from "./context/Modal";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import * as favoriteActions from "./store/favorites";
import * as productActions from "./store/products";
import App from "./App";

import "./index.css";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.sessionActions = sessionActions;
  window.favoriteActions = favoriteActions;
  window.productActions = productActions;
}

//example to use in console to test thunk
//window.store.dispatch(window.actionName.thunkName(arg))
//window.store.dispatch(window.productActions.thunkGetAllProducts())
//window.store.dispatch(window.productActions.thunkDeleteProduct(1))
//Create a Product test
// window.store.dispatch(window.productActions.thunkCreateProduct({
//   "itemName": "Spiked Collar",
//   "price": 15.99,
//   "description": "Black pleather spiked collar will attract the attention you seek!",
//   "quantity": 3,
//   "previewImage": "https://images.all-free-download.com/images/graphiclarge/testing_with_magnifier_185604.jpg",
//   "category": "jewelry"
// }))

// Wrap the application with the Modal provider and render the Modal component
// after the App component so that all the Modal content will be layered as
// HTML elements on top of the all the other HTML elements:
function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <Modal />
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
