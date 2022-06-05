import React from "react";

const Login = () => {
  return (
    <div class="row g-0 loginContainer">
      <form class="m-2 loginCard col col-md-8 col-lg-10">
        <div class="loginTitle">Login to your account</div>
        <div class="emailContainer">
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div class="passwordContainer">
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <button type="submit" class="signInbtn">
          Sign In
        </button>
        <div class="accessLinks">
          <a href="">Dont remember your password?</a>
          <a href="">Dont have an account yet?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
