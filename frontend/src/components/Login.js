import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory, useLocation, Link} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateUserStatus } from "./global-state/userStateSlice";

const LoginForm = () => {
  const history = useHistory();

  const location = useLocation();

  const { userLoggedIn } = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      password: Yup.string().required("Please enter your password"),
    }),
    onSubmit: ({ email, password }) => {
    //   if ((email = "chaoticgood@duck.com" && password === "incyd123")) {
    //     dispatch(updateUserStatus(true));
    //   }
        fetch('/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({'email':email, 'password':password}) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            data["access_token"] && dispatch(updateUserStatus(true));          
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },
  });

  if (userLoggedIn) history.push(location.state ? location.state.from.pathname : "/secret");
  return (
    <div className="login-form-wrapper">
      <div className="col-10 col-sm-6 col-md-5 mx-auto">
        <h1 className="font-weight-bold">Login</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group col-10 col-sm-6 col-md-5 mx-auto mt-5">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control form-control-lg"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="form-text text-danger">
              {formik.errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group col-10 col-sm-6 col-md-5 mx-auto">
          <label htmlFor="password">Password</label>
          <input
            className="form-control form-control-lg"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="form-text text-danger">
              {formik.errors.password}
            </small>
          ) : null}
        </div>
        <div className="col-10 col-sm-6 col-md-5 mx-auto">
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block my-3"
          >
            Login
          </button>
          <br /><Link to="/register"> Register</Link>
        </div>
        
      </form>
    </div>
  );
};
export default LoginForm;