import React from "react";
import { Link } from 'react-router-dom';
import './Resetpass.css';

const resetPass = () => {
  return (
    <div className="general">
      <div className="container-reset">
        <h1 className="h1">¿Has olvidado tu contraseña?</h1>
        <p className="p">Ingresa tu email</p>
        <form>
          <label htmlFor="email" className="label" />
          <input type="email" id="email" placeholder="Tu-email" required className="input" />
          <button type="submit" className="button">Enviar</button>
        </form>
        <Link to="#" className="a">Cancelar</Link>
      </div>
    </div>
  );
};

export default resetPass;
