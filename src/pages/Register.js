import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterApi } from "../redux/apiReduxCalls";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setinputValue] = useState({});
  const { isFetching, error } = useSelector((state) => state.user);
  const handleInput = (e) =>
    setinputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.password === inputValue.confirmpassword) {
      RegisterApi(dispatch, navigate, {
        name: inputValue.firstname && inputValue.lastname,
        email: inputValue.email,
        password: inputValue.password,
      });
    }
    console.log(inputValue);
    setinputValue({});
    console.log(inputValue);
  };
  return (
    <div class="row g-0 registerContainer">
      <form class="m-2 registerCard col col-lg-10">
        <div class="registerTitle">Create Your Account Free</div>
        <div class="registerfirstNameContainer">
          <input type="text" name="firstname" placeholder="Enter Your Firstname" onChange={(e) => handleInput(e)} value={inputValue.firstname} />
        </div>
        <div class="registerlastNameContainer">
          <input type="text" name="lastname" placeholder="Enter Your Lastname" onChange={(e) => handleInput(e)} value={inputValue.lastname} />
        </div>
        <div class="registeremailContainer">
          <input type="email" name="email" placeholder="Enter Your Email" onChange={(e) => handleInput(e)} value={inputValue.email} />
        </div>
        <div class="registerpasswordContainer">
          <input type="password" name="password" placeholder="Enter Your Password" onChange={(e) => handleInput(e)} value={inputValue.password} />
        </div>
        <div class="registerconfirmpasswordContainer">
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Your Password"
            onChange={(e) => handleInput(e)}
            value={inputValue.confirmpassword}
          />
        </div>
        <span class="registerpolicy">
          By creating an account I consent to processing of my personal information, in accordance with the privacy policies
        </span>
        <button type="submit" onClick={handleSubmit} class="registerbtn">
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;
