import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="body-login">
      <div className="login-container-login">
        <div className="logo-container-login">
          <img src="../img/logo.jpg" alt="Logo" />
        </div>
        <form>
          <div className="input-container-login">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Correo</label>
          </div>
          <div className="input-container-login">
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Contraseña</label>
          </div>
          <button type="submit" className="login-button-login">Ingresar</button>
          <div className="links-login">
            <Link to={'/resetpass'}>¿Haz olvidado la contraseña?</Link>
            <Link to="#">Registrar</Link>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;