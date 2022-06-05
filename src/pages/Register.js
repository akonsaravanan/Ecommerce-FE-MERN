import React from "react";

const Register = () => {
  return (
    <div class="row g-0 registerContainer">
      <form class="m-2 registerCard col col-lg-10">
        <div class="registerTitle">Create Your Account Free</div>
        <div class="registerfirstNameContainer">
          <input type="text" placeholder="Enter Your Firstname" />
        </div>
        <div class="registerlastNameContainer">
          <input type="text" placeholder="Enter Your Lastname" />
        </div>
        <div class="registeremailContainer">
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div class="registerpasswordContainer">
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <div class="registerconfirmpasswordContainer">
          <input type="password" placeholder="Confirm Your Password" />
        </div>
        <span class="registerpolicy">
          By creating an account I consent to processing of my personal information, in accordance with the privacy policies
        </span>

        <button type="submit" class="registerbtn">
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;
