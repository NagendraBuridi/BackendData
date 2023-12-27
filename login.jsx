import React from "react";
import "./style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (email, password) => {
  const nav = useNavigate(null);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/adminlogin", values)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="outer-div">
      <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className="p-1 rounded  w-25 border loginForm">
          <h2>Login</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="">
                <b>Email</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>:</b>
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter email"
                className="form-control-rounded-0"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="">
                <b>password:</b>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control-rounded-0"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <button
              className="btn mb-2 btn-success w-100 rounded-4 "
              // onClick={() => {
              //   if (subitform()) {
              //     nav("/Homepage");
              //   }
              // }}
              type="submit"
            >
              Submit
            </button>
            <div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Don't have an
                account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <button className="btn btn-success w-20 rounded-5">
                  <Link to={"/Signup"}>Signup</Link>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
