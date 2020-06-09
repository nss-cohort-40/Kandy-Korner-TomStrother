import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetails";
import ProductForm from "./products/ProductForm";

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
            return (
              <ProductList
                productId={props.match.params.productId}
                {...props}
              />
            );
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
      <Route
        exact
        path="/products/:productId(\d+)"
        render={(props) => {
          return (
            <ProductDetail
              productId={parseInt(props.match.params.productId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/products/:productId(\d+)/form"
        render={(props) => {
          if (hasUser) {
            return (
              <ProductForm
                productId={parseInt(props.match.params.productId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default ApplicationViews;
