import React from "react";
import { NavLink } from "react-router-dom";
import useAppContext from "../AppContext";
import useCartContext from "../CartContext";

const Navbar = ({ mycart }) => {
  const { loggedIn, setLoggedIn, logout } = useAppContext();
  const {cartitems} = useCartContext();

  const showLoginOptions = () => {
    if (loggedIn) {
      return (
        <li className="nav-item">
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </li>
      );
    }
  };
  return (
    <nav className=" navbar navbar-expand-lg bg-body-secondary text-dark">
      {/* <nav className="navbar navbar-expand-lg bg-success text-white"> */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/event">
                EventHandling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/state">
                StateManagement
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo">
                TodoList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chat">
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                productlist
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chatting">
                Chatsir
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                ContactUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usermanager">
                UserManager
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cartpage">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/charts">
                UsingCharts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/memecreator">
                MemeCreator
              </NavLink>
            </li>
            <li className="nav-item"><h4>Cart Items : {cartitems.length}</h4></li>
            {showLoginOptions()}
          </ul>
          <button className="d-flex px-4 btn btn-outline-primary me-2 active">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </button>
          <button className="d-flex px-4 btn btn-outline-primary active">
            <NavLink className="nav-link" to="/signup">
              Sign up
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
