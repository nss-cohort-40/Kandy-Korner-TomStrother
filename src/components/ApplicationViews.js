import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ProductList from "./products/ProductList";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/products"
        render={(props) => {
          if (hasUser) {
            return <ProductList {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    </>
  );
};

export default ApplicationViews;
