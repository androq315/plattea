import React from 'react';

import './Settings.css';
import Checkbox from '../components/checkbox/Checkbox';
import Navbar from '../components/navbar/Navbar';


const Settings = () => {
    console.log('Main component is rendering');
    return (
        <div className='body-settings'>
                <Navbar />

            <div className="content-body-settings">
                <h1 id="titulo">Configuracion</h1>
                <h1 id="subtitulo">Cuenta</h1>
                <div className="cuenta-settings">
                    <p>Nombre de usuario: danner <span> Editar</span></p>
                    <p>Numero de celular: 2312323 <span>Editar</span></p>
                    <p>Correo electronico: danner@gmail.com <span>Editar</span></p>
                    <p>Contraseña:  ******  <span>Editar</span></p>
                </div>
                <div className="tema-settings">
                    <h1 id="subtitulo">Tema</h1>
                    <div className="checkbox-container-settings">
                        <div className="temas-settings">
                            <label className="custom-checkbox-settings">
                                <p>Blanco</p><Checkbox />
                            </label>
                        </div>
                        <div className="temas-settings">
                            <label className="custom-checkbox-settings">
                                <p>Negra</p><Checkbox />
                            </label>
                        </div>
                        <div className="temas-settings">
                            <label className="custom-checkbox-settings">
                                <p>Por defecto</p><Checkbox />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Settings;