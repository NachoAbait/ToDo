import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./COMPONENTS/Home/Home.js";
import Profile from "./COMPONENTS/Profile/Profile.js";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/profile" Component={Profile}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
