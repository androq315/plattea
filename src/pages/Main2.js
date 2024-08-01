import React from "react";
import Navbar from '../components/navbar/Navbar';
import Carousel from '../components/carousel/Carousel';
import "./Main2.css";

const Main2 = () => {
        return (
        <div className="body-2">
            <Navbar />
            <Carousel />
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
