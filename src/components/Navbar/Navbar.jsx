import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img src="/img/iconos/logo.png " alt="" className="img-logo"></img>
        <h1>Lucía Navas Pastelería</h1>
      </a>
      <ul className="menu">
        <li>
          <a className="menu-link" href="#">
            Inicio
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Tortas
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Tartas
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Pequeñas tentaciones
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Contacto
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
