import React, { useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Products from "./components/Products";
import CartPage from "./components/CartPage";

const store = configureStore({ reducer: { cart: cartReducer } });

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <Provider store={store}>
      {(page === "products" || page === "cart") && (
        <Header page={page} setPage={setPage} />
      )}
      {page === "home" && <Landing setPage={setPage} />}
      {page === "products" && <Products />}
      {page === "cart" && <CartPage setPage={setPage} />}
    </Provider>
  );
}
