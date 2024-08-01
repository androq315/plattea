import React from "react";
import { Link } from "react-router-dom";
import "./Main2.css";

const Main2 = () => {
    return (
        <div className="body-2">
            <header>
                <div className="header-container-2">
                    <div className="logo-2">
                        <img className="img-2" src="Img/pnologo.png" alt="Plattéa Logo" />
                        <span>PLATTÉA</span>
                    </div>
                    <nav className="nav-2">
                        <ul className="ul-2">
                            <li className="li-2">
                                <Link to="#" className="a-2">
                                    Inicio
                                </Link>
                            </li>
                            <li className="li-2">
                                <Link to="/tienda" className="a-2">
                                    Cubículos
                                </Link>
                            </li>
                            <li className="li-2">
                                <Link to="#" className="a-2">
                                    Productos
                                </Link>
                            </li>
                            <li className="li-2">
                                <Link to="#" className="a-2">
                                    Categorías
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="user-actions-2">
                        <div className="search-container-2">
                            <form
                                id="search-form"
                                className="search-form-2"
                                onsubmit="return searchFunction(event)"
                            >
                                <input
                                    className="input-2"
                                    type="text"
                                    id="search-input"
                                    placeholder="Buscar..."
                                />
                                <button type="submit" className="search-button-2">
                                    <i className="fas fa-search search-icon-2" />
                                </button>
                            </form>
                        </div>
                        <div className="user-menu-2" onclick="toggleMenu()">
                            <img src="Img/A.jpeg" alt="User Icon" className="user-icon-2" />
                            <div id="dropdown-menu" className="dropdown-menu">
                                <div className="dropdown-header-2">
                                    <img
                                        src="Img/A.jpeg"
                                        alt="User Icon"
                                        className="dropdown-user-icon-2"
                                    />
                                    <div>
                                        <p className="user-name-2">Alexix Orostegui</p>
                                        <p className="user-email-2">aorostegui2@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                                <Link to="#" className="a-2">
                                    <i className="fas fa-user-2" /> Perfil
                                </Link>
                                <Link to="PantInicio.html" className="a-2">
                                    <i className="fas fa-sign-out-alt-2" /> Cerrar sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="carousel-2">
                <div className="carousel-inner-2">
                    <div className="carousel-item active-2">
                        <h2>Pelixflix</h2>
                    </div>
                    <div className="carousel-item-2">
                        <h2>Otro Contenido</h2>
                    </div>
                </div>
                <button className="prev-2" onclick="moveSlide(-1)">
                    ❮
                </button>
                <button className="next-2" onclick="moveSlide(1)">
                    ❯
                </button>
            </div>
            <section className="featured-stores-2">
                <h2 className="h2-2">Tiendas Destacadas</h2>
                <button className="acquire-2">Adquirir</button>
                <div className="acquire-container-2" />
                <div className="stores-container-2">
                    <div className="store-2">
                        <h3>Pelixflix</h3>
                        <div className="popcorn-2" />
                    </div>
                    <div className="store-2">
                        <h3>Sports+</h3>
                        <div className="sports-2" />
                    </div>
                    <div className="store-2">
                        <h3>Carros</h3>
                        <div className="popcorn-2" />
                    </div>
                    <div className="store-2">
                        <h3>Gucci</h3>
                        <div className="Gucci-2" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main2;
