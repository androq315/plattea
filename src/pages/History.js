import React from 'react';

import './History.css';

import Navbar from '../components/navbar/Navbar';


const History = () => {
    return (
        <div className='body-history'>
            <Navbar />
            <div className="content-body">
                <h1 id="titulo">Historial de compra</h1>
                <div className="content-all">
                    <div className="content">
                        <img src="../Img/pnologo.png" alt="Plattéa Logo" />
                        <div className="content-product">
                            <div className="title-product">Balon</div>
                            <div className="mark">Golty</div>
                            <div className="store">fufol</div>
                        </div>
                    </div>
                    <div className="entregado">Entregado</div>
                </div>
                <div className="content-all">
                    <div className="content">
                        <img src="../Img/pnologo.png" alt="Plattéa Logo" />
                        <div className="content-product">
                            <div className="title-product">Balon</div>
                            <div className="mark">Golty</div>
                            <div className="store">fufol</div>
                        </div>
                    </div>
                    <div className="entregado">Entregado</div>
                </div>
                <div className="content-all">
                    <div className="content">
                        <img src="../Img/pnologo.png" alt="Plattéa Logo" />
                        <div className="content-product">
                            <div className="title-product">Balon</div>
                            <div className="mark">Golty</div>
                            <div className="store">fufol</div>
                        </div>
                    </div>
                    <div className="entregado">Entregado</div>
                </div>
            </div>
        </div>

    );
};

export default History;