import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetails";
import ProductForm from "./products/ProductForm";
import EmployeeList from "./employees/EmployeeList";
import EmployeeDetail from "./employees/EmployeeDetails";
import LocationList from "./locations/LocationList";

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
      <Route
        exact
        path="/employees"
        render={(props) => {
          if (hasUser) {
            return (
              <EmployeeList
                employeeId={props.match.params.employeeId}
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
        path="/employees/:employeeId(\d+)"
        render={(props) => {
          return (
            <EmployeeDetail
              employeeId={parseInt(props.match.params.employeeId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          if (hasUser) {
            return (
              <LocationList
                locationId={props.match.params.locationId}
                {...props}
              />
            );
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    </>
  );
};

export default ApplicationViews;
