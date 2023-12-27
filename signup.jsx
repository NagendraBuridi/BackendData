import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import axios from "axios";
const Signup = () => {
  const [count, setCount] = useState(1);
  const [values, setValues] = useState({
    id: count,
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  //    const [obj,setObj]=useState([])
  //     const onsubmit=(e)=>{
  //         e.preventDefault();
  //         setObj([...obj, values]);
  //         setCount(count+1);
  //     }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/insert", values)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    axios
      .put("http://localhost:5000/update", values)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="outer-div">
      <div className="d-flex justify-content-center align-items-center vh-100  loginPage">
        <div className="p-3 rounded  w-25 border loginForm">
          <h2>Signup</h2>
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
            <div className="mb-3">
              <label htmlFor="">
                <b>Phone</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>:</b>
              </label>
              <input
                type="number"
                name="phone"
                autoComplete="off"
                placeholder="Enter phone"
                className="form-control-rounded-0"
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="">
                <b>Adresss&nbsp;&nbsp;&nbsp;&nbsp;:</b>
              </label>
              <input
                type="password"
                name="address"
                placeholder="Enter address"
                className="form-control-rounded-0"
                onChange={(e) =>
                  setValues({ ...values, address: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="btn mb-2 btn-success w-100 rounded-0"
            >
              Submit
            </button>
            <div>
              <p>
                Already have an account{" "}
                <button className="btn btn-success w-20 rounded-5">
                  <Link to="/login">Login</Link>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* <Login {...obj}/> */}
    </div>
  );
};

export default Signup;
