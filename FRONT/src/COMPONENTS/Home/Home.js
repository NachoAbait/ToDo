import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import List from "../List/List.jsx";
import Footer from "../Footer/Footer.jsx";
import  css from "./Home.module.css"

export default function Home() {
  return (
    <div className={css.container}>
      <Navbar></Navbar>
      <List></List>
      <Footer></Footer>
    </div>
  );
}
