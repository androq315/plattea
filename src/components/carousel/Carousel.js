import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Asegúrate de que los estilos se apliquen correctamente

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Maneja el movimiento de los slides
  const moveSlide = (n) => {
    setSlideIndex(prevIndex => {
      const slides = document.getElementsByClassName("carousel-item"); // Definir aquí
      const newIndex = prevIndex + n;
      if (newIndex >= slides.length) {
        return 0;
      } else if (newIndex < 0) {
        return slides.length - 1;
      } else {
        return newIndex;
      }
    });
  };

  // Configura el carrusel después de que el componente se haya montado
  useEffect(() => {
    const slides = document.getElementsByClassName("carousel-item");
    if (slides.length > 0) {
      const offset = -slideIndex * 100;
      document.querySelector(".carousel-inner-2").style.transform = `translateX(${offset}%)`;
    }
  }, [slideIndex]);

  return (
    <div className="carousel-2">
      <div className="carousel-inner-2">
        <div className="carousel-item-2">
          <h2>Pelixflix</h2>
        </div>
        <div className="carousel-item">
          <h2>Otro Contenido</h2>
        </div>
      </div>
      <button className="prev-2" onClick={() => moveSlide(-1)}>
        ❮
      </button>
      <button className="next-2" onClick={() => moveSlide(1)}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
