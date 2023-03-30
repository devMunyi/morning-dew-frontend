import React, { useState } from "react";
import axios from "axios";
import Loader from "react-spinners/HashLoader";
import Error from "../components/Error";
import Success from "../components/Success";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const navigate = useNavigate();

  async function login() {
    const user = {
      email,
      password,
    };
    //console.log(user);
    try {
      setloading(true);
      const userdata = (await axios.post("/users/login", user)).data;
      setloading(false);
      seterror(false);
      setsuccess(true);

      localStorage.setItem("currentUser", JSON.stringify(userdata));

      setTimeout(function () {
        navigate("/home");
      }, 1500);

    } catch (error) {
      setloading(false);
      seterror(true);
      setsuccess(false);
      //console.log(error);
    }
  }
  return (
    <div>
      <h1 className="lgloader">{loading && <Loader />}</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-5 mr-3 ml-3">
          {error && <Error message="Invalid Credentials" />}
          {success && <Success message="Login success!" />}
          <div className="bs">
            <h2>Login</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button className="btn btn-primary mt-3" onClick={login}>
              Login
            </button>
            <p className="mt-3">Don't have an account yet? <Link to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
