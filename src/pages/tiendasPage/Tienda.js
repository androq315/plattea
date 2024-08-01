import React from 'react'
import "./Tienda.css"
import { Link } from 'react-router-dom'

const Tienda = () => {
    return (
        <div className='body-tienda'>
            <header>
                <div className="header-container-tienda">
                    <div className="logo-tienda">
                        <img className='img-tienda' src="Img/pnologo.png" alt="Plattéa Logo" />
                        <span>PLATTÉA</span>
                    </div>
                    <nav className="nav-tienda">
                        <ul className="ul-tienda">
                            <li className="li-tienda">
                                <Link to="#" className="a-tienda">
                                    Inicio
                                </Link>
                            </li>
                            <li className="li-tienda">
                                <Link to="/tienda" className="a-tienda">
                                    Tienda
                                </Link>
                            </li>
                            <li className="li-tienda">
                                <Link to="#" className="a-tienda">
                                    Productos
                                </Link>
                            </li>
                            <li className="li-tienda">
                                <Link to="#" className="a-tienda">
                                    Categorías
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="user-actions-tienda">
                        <div className="search-container-tienda">
                            <form id="search-form" className="search-form-tienda" onsubmit="return searchFunction(event)">
                                <input className='input-tienda' type="text" id="search-input" placeholder="Buscar..." />
                                <button type="submit" className="search-button-tienda"><i className="fas fa-search search-icon-tienda" /></button>
                            </form>
                        </div>
                        <div className="user-menu-tienda" onclick="toggleMenu()">
                            <img src="Img/A.jpeg" alt="User Icon" className="user-icon-tienda" />
                            <div id="dropdown-menu" className="dropdown-menu-tienda">
                                <div className="dropdown-header-tienda">
                                    <img src="Img/A.jpeg" alt="User Icon" className="dropdown-user-icon-tienda" />
                                    <div>
                                        <p className="user-name-tienda">Alexix Orostegui</p>
                                        <p className="user-email-tienda">aorostegui2@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                                <Link to = "#"><i className="fas fa-user-tienda" /> Perfil</Link>
                                <Link to = "#"><i className="fas fa-sign-out-alt-tienda" /> Cerrar sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="featured-stores-tienda">
                <div className="stores-container-tienda">
                    <div className="store-tienda" style={{ backgroundColor: 'black' }}>
                        <h3>Pelixflix</h3>
                    </div> 
                    <div className="store-tienda" style={{ backgroundColor: 'rgb(199, 125, 41)' }}>
                        <h3>Sports+</h3>
                    </div>
                    <div className="store-tienda" style={{ backgroundColor: 'lightgreen' }}>
                        <h3>Verdes</h3>
                    </div>
                    <div className="store-tienda" style={{ backgroundColor: 'darkred' }}>
                        <h3>Vinosky</h3>
                    </div>
                    <div className="store-tienda" style={{ backgroundColor: 'lightblue' }}>
                        <h3>Mares</h3>
                    </div>
                    <div className="store-tienda" style={{ backgroundColor: 'yellow' }}>
                        <h3>Sunshane</h3>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Tienda