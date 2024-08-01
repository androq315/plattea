// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  const searchFunction = (event) => {
    event.preventDefault();
    console.log("Buscando:", searchQuery); // Lógica de búsqueda
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="../Img/pnologo.png" alt="Plattéa Logo" />
          <span>PLATTÉA</span>
        </div>
        <nav>
          <ul>
            <li><Link to="">Inicio</Link></li>
            <li><Link to="#">Cubículos</Link></li>
            <li><Link to="#">Productos</Link></li>
            <li><Link to="#">Categorías</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <div className="search-container">
            <form id="search-form" className="search-form" onSubmit={searchFunction}>
              <input
                type="text"
                id="search-input"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-button">
                <i className="fas fa-search search-icon" />
              </button>
            </form>
          </div>
          
          <div className="user-menu" onClick={toggleMenu}>
            <img src="../img/a.jpg" alt="User Icon" className="user-icon" />
            <div id="dropdown-menu" className={`dropdown-menu ${menuVisible ? 'show' : ''}`}>
              <div className="dropdown-header">
                <img src="../img/a.jpg" alt="User Icon" className="dropdown-user-icon" />
                <div>
                  <p className="user-name">Alexix Orostegui</p>
                  <p className="user-email">aorostegui2@gmail.com</p>
                </div>
              </div>
              <hr />
              <Link to={'/settings'}><i className="fas fa-user" /> Perfil</Link>
              <Link to={'/carrito'}><i className="fas fa-user" /> carrito</Link>
              <Link to={'/history'}><i className="fas fa-user" /> Historial</Link>
              <Link to={'/main'}><i className="fas fa-sign-out-alt" /> Cerrar sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
