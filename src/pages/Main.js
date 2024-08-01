import React from 'react';

import './Main.css';
import Navbar from '../components/navbar/NavbarLogin';
import Carousel from '../components/carousel/Carousel';


const Main = () => {
    console.log('Main component is rendering');
    return (
        <div className='body-main'>

            <Navbar />
            <Carousel />
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