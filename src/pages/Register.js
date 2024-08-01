import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='body-register'>
      <div className="container-register">
        <div className="logo-container-register">
          <div className="logo-circle-register">
            <img src="img/Logo.jpg" alt="Logo" />
          </div>
        </div>
        <form className="registration-form-register">
          <div className="form-row-register">
            <div className="input-container-register">
              <input type="text" id="username" required />
              <label htmlFor="username">Nombre de Usuario</label>
            </div>
            <div className="input-container-register">
              <input type="email" id="email" required />
              <label htmlFor="email">Correo</label>
            </div>
          </div>
          <div className="form-row-register">
            <div className="input-container-register">
              <input type="password" id="password" required />
              <label htmlFor="password">Contraseña</label>
            </div>
            <div className="input-container-register">
              <input type="password" id="confirm-password" required />
              <label htmlFor="confirm-password">Confirmar Contraseña</label>
            </div>
          </div>
          <button type="submit" className="login-button-register">Registrarse</button>
        </form>
        <div className="links-register">
          <Link to="#">¿Ya tienes cuenta?</Link>
        </div>
      </div>
    </div>

  );
};

export default Register;


