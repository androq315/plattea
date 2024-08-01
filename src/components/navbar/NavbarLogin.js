import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {


    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src="img/logoinicio.jpg" alt="Plattéa Logo" />
                    <span>PLATTÉA</span>
                </div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/tienda'}>Cubículos</Link></li>
                        <li><Link to={''}>Productos</Link></li>
                        <li><Link to={''}>Categorías</Link></li>
                    </ul>
                </nav>
                <div>
                    <Link to={'/login'} className="relogin">Iniciar Sesion</Link>
                    <Link to={'/register'} className="relogin">Registrarse</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
