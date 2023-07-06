import React, { useState } from "react";
import css from "./ModalSignup.module.css";
import { useDispatch, useSelector } from "react-redux";
import createUser from "../../REDUX/Actions/createUser.js";
import { closeModal2 } from "../../REDUX/Actions/closeModal2";
import { useAuth } from "../../Context/userContext.js";



export default function ModalSignup() {
  const dispatch = useDispatch();
  const { signup, user } = useAuth()
  console.log(user)

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(closeModal2())
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user, email, password } = e.target;
    const userData = {
      user: user.value,
      email: email.value,
      password: password.value
    };

    if (userData.user === "" || userData.email === "" || userData.password === "") {
      return alert("You must complete all fields");
    }

    signup(userData)
    
  };

 
  

  return (
    <div className={css.container}>
      <div className={css.close} onClick={handleClick}>
        ❌
      </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.signin}>
          <h1>Signup</h1>
        </div>
        <input
          type="user"
          placeholder="Insert username"
          name="user"
          className={css.input}
        />
        <input
          type="email"
          placeholder="Insert email"
          name="email"
          className={css.input}
        />
        <input
          type="password"
          placeholder="Insert password"
          name="password"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
