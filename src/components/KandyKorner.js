import React, { useState } from "react";
import "./KandyKorner.css";
import ApplicationViews from "./ApplicationViews";

const KandyKornerHome = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (user) => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  return (
    <>
      {/* <NavBar hasUser={hasUser} clearUser={clearUser} /> */}
      <ApplicationViews />
    </>
  );
};

export default KandyKornerHome;
