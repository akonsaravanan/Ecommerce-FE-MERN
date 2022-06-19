import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../redux/apiReduxCalls";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    LoginApi(dispatch, navigate, { email: username, password: password });
  };
  return (
    <div class="row g-0 loginContainer">
      <form class="m-2 loginCard col col-md-8 col-lg-10">
        <div class="loginTitle">Login to your account</div>
        <div class="emailContainer">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>
        <div class="passwordContainer">
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button disabled={isFetching} type="submit" onClick={handleSubmit} class="signInbtn">
          Sign In
        </button>
        <div class="accessLinks">
          <a href="">Dont remember your password?</a>
          <a href="/register">Dont have an account yet?</a>
        </div>
        {error && <span class="login-error">Something went wrong</span>}
      </form>
    </div>
  );
};

export default Login;
