import React, { useState, useEffect } from "react";
import css from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import ModalLogin from "../ModalLogin/ModalLogin.jsx";
import ModalSignup from "../ModalSignup/ModalSignup.jsx";
import { useSelector , useDispatch} from "react-redux"
import { openModal2 } from "../../REDUX/Actions/openModal2";
import { openModal } from "../../REDUX/Actions/openModal";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/userContext.js";
import { Dropdown } from 'react-bootstrap'

export default function Navbar() {
  const dispatch = useDispatch()
  const { user, logout } = useAuth()

  const ModalOpen = useSelector((state) => state.isOpen);
  const ModalOpen2 = useSelector((state) => state.isOpen2);



  const toggleModal = () => {
    dispatch(openModal())
  };
  
  const toggleModal2 = () => {
    dispatch(openModal2())
  };

  

  return (
    <div className={css.container}>
      
        <Link to="/">
        <div className={css.logo}>
          
          <FontAwesomeIcon
          icon={faListCheck}
          style={{ color: "#e5ea47" }}
          className={css.task}
        />
        <h1>TaskTracker</h1>
      </div>
        </Link>
        
      <div className={css.usuario}>

        

        
        { !user ? (
          <div className={css.menu}>
            <a href="#" onClick={toggleModal} className={css.L}>
              LogIn
            </a>
            <Modal
              isOpen={ModalOpen}
              onRequestClose={toggleModal}
              contentLabel="Login Modal"
            >
              <ModalLogin />
            </Modal>
            <a href="#" onClick={toggleModal2} className={css.S}>
              SignUp
            </a>
            <Modal
              isOpen={ModalOpen2}
              onRequestClose={toggleModal2}
              contentLabel="Signin Modal"
            >
              <ModalSignup/>
            </Modal>
          </div>
        ) :
        <div className={css.containerUser}>
        
              <div className={css.opcion}>
                <Link to="/profile"  className={css.dropItem}>Profile</Link>
              </div>
              <div className={css.opcion}>
              <Link to="/"  className={css.dropItem} onClick={logout}>logOut</Link>
              </div>
                
        </div>
          

        }
        
      </div>
    </div>
  );
}
