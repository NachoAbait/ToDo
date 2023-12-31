import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Card.module.css";
import { deleteTask } from "../../REDUX/Actions/deleteTask";
import { getTasks } from "../../REDUX/Actions/getTasks";

export default function Card({ title, description, date, id }) {
  const dispatch = useDispatch();
  
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(deleteTask(id, token));
  };

  console.log(date)

  return (
    <div className={css.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={css.date}>{date.split('T')[0]}</div>
      <div className={css.btn} onClick={handleSubmit}>
        ❌
      </div>
    </div>
  );
}
