import React, { useState } from "react";

const Home = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    props.setUser(credentials);
    props.history.push("/");
  };

  return (
    <>
      <div className="App">
        <div className="home">
          <h1 className="homeHeaderName">Kandy Korner</h1>

          <section className="loginForm">
            <form onSubmit={handleLogin}>
              <fieldset className="signInFormBox">
                <h3>Please sign in</h3>
                <div className="formgrid">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                    className="loginEmailBox"
                    onChange={handleFieldChange}
                    type="email"
                    id="email"
                    placeholder="Email address"
                    required=""
                    autoFocus=""
                  />

                  <label htmlFor="inputPassword">Password</label>
                  <input
                    className="loginPasswordBox"
                    onChange={handleFieldChange}
                    type="password"
                    id="password"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <h6 className="centerText">
                  Note: If you are a new hire please contact Management to
                  create your account
                </h6>
                <button type="submit">Sign in</button>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
