import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { useAuth } from "../../Context/userContext.js";
import getTasks from "../../REDUX/Actions/getTasks.js";
import css from "./Profile.module.css";
import Card from "../Card/Card.jsx";
import postTask from "../../REDUX/Actions/postTask.js";

export default function Profile() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  console.log(user);

  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);


  useEffect(() => {
    const token = {token: localStorage.getItem('token')};
    
    console.log("desde el front", token)
    dispatch(getTasks(token));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description } = e.target;

    const taskData = {
      title: title.value,
      description: description.value,
    };
    console.log("esta es la data");
    console.log(taskData);
    if (taskData.title === "" || taskData.description === "") {
      return alert("You must complete all fields");
    }
    
    const token = localStorage.getItem('token');
    dispatch(postTask(taskData, token));
    title.value = "";
    description.value = "";
  };

  return (
    <div className={css.container}>
      <Navbar></Navbar>
      <div className={css.containerForm}>
        <div className={css.form}>
          <form onSubmit={handleSubmit} className={css.formulario}>
            <input
              type="string"
              placeholder="Title..."
              name="title"
              className={css.input}
            />
            <input
              type="string"
              placeholder="Description..."
              name="description"
              className={css.inputD}
            />
            <button type="submit" className={css.btn}>
              {" "}
              ➕
            </button>
          </form>
        </div>
      </div>

      <div className={css.containerTask}>
        <div className={css.tasks}>
          {tasks.length ? (
            tasks.map((task) => (
              <Card
                title={task.title}
                description={task.description}
                date={task.date}
                id={task._id}
              ></Card>
            ))
          ) : (
            <h1>Add some tasks</h1>
          )}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
