import React from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Secret from "./components/Secret";
import Header from "./components/Header";
import Register from "./components/Register";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <PrivateRoute path="/blog">
            <Route component={Blog} />
          </PrivateRoute>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/secret">
            <Route component={Secret} />
          </PrivateRoute>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
};

export default App;