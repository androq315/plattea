import React from 'react'
import "./Tienda.css"
import Navbar from '../components/navbar/Navbar';

const Tienda = () => {
    return (
        <div className='body-tienda'>
            <Navbar />
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