import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ProductList from "./products/ProductList";

const ApplicationViews = (props) => {
  return (
    <>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/products"
        render={(props) => {
          return <ProductList />;
        }}
      />
    </>
  );
};

export default ApplicationViews;
