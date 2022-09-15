import React from "react";
import Login from "./components/Login";
import Secret from "./components/Secret";
import Header from "./components/Header";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/secret">
            <Route component={Secret} />
          </PrivateRoute>
          <Route path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
};

export default App;