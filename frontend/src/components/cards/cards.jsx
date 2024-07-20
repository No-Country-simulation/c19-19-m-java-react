import React from 'react';
import hoteles from '../../app/data/hoteles';
import restaurantes from '../../app/data/restaurant';
import actividades from '../../app/data/actividades';
import Carousel from './Carousel';

const Cards = () => {
  return (
    <div className="w-4/5 mx-auto space-y-8 py-12 min-h-[60vh]"> {/* Ajusta el padding vertical y la altura mínima */}
      <div className="min-h-[20rem]"> {/* Ajusta la altura mínima del contenedor de cada carrusel */}
        <h2 className="text-2xl font-bold mb-4">Hoteles</h2>
        <Carousel items={hoteles} type="hotel" />
      </div>

      <div className="min-h-[20rem]"> {/* Ajusta la altura mínima del contenedor de cada carrusel */}
        <h2 className="text-2xl font-bold mb-4">Restaurantes</h2>
        <Carousel items={restaurantes} type="restaurante" />
      </div>

      <div className="min-h-[20rem]"> {/* Ajusta la altura mínima del contenedor de cada carrusel */}
        <h2 className="text-2xl font-bold mb-4">Actividades</h2>
        <Carousel items={actividades} type="actividad" />
      </div>
    </div>
  );
}

export default Cards;
