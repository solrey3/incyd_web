import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children, ...rest }) => {
  const { userLoggedIn } = useSelector((state) => state.userState);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userLoggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
export default PrivateRoute;