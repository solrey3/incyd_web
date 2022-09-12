import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./global-state/userStateSlice";
const Header = ({ history }) => {
  const { userLoggedIn } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout(false));
    history.push("/");
  };
  return (
    <header>
      <nav>
        <NavLink to="/about" activeStyle={{ color: "#F2F2F2" }}>
          About
        </NavLink>
        <NavLink to="/blog" activeStyle={{ color: "#F2F2F2" }}>
          Blog
        </NavLink>
        <NavLink to="/secret" activeStyle={{ color: "#F2F2F2" }}>
          Secret
        </NavLink>
        {!userLoggedIn && (
          <NavLink to="/login" activeStyle={{ color: "#F2F2F2" }}>
            Login
          </NavLink>
        )}
        {userLoggedIn ? (
          <button className="btn btn-primary" onClick={logoutHandler}>
            Logout
          </button>
        ) : null}
      </nav>
    </header>
  );
};
export default withRouter(Header);