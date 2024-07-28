import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';


const Main = () => {
    console.log('Main component is rendering');
    return (
        <div className='body-main'>


            <header>
                <div className="header-container">
                    <div className="logo">
                        <img src="img/logoinicio.jpg" alt="Plattéa Logo" />
                        <span>PLATTÉA</span>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Cubículos</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Categorías</a></li>
                        </ul>
                    </nav>
                    <div>
                        <Link to={'/login'} className="relogin">Iniciar Sesion</Link>
                        <Link to={'/register'} className="relogin">Registrarse</Link>

                    </div>
                </div>
            </header>
            <div className="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2>Pelixflix</h2>
                    </div>
                    <div className="carousel-item">
                        <h2>Otro Contenido</h2>
                    </div>
                </div>
                <button className="prev" onclick="moveSlide(-1)">❮</button>
                <button className="next" onclick="moveSlide(1)">❯</button>
            </div>
            <section className="featured-stores">
             
                    <h2>Tiendas Destacadas</h2>
                    <button className="acquire">Adquirir</button> 
        
                
                <div className="stores-container">
                    <div className="store">
                        <h3>Pelixflix</h3>
                        <div className="popcorn">
                        </div>
                    </div>
                    <div className="store">
                        <h3>Sports+</h3>
                        <div className="sports">
                        </div>
                    </div>
                    <div className="store">
                        <h3>Carros</h3>
                        <div className="popcorn">
                        </div>
                    </div>
                    <div className="store">
                        <h3>Gucci</h3>
                        <div className="Gucci" />
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Main;