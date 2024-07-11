import React from 'react';
import hoteles from '../data/hoteles';
import restaurantes from '../data/restaurant';
import actividades from '../data/actividades';
import Carousel from './Carousel';

const Cards = () => {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Hoteles</h2>
          <Carousel items={hoteles} type="hotel" />
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-4">Restaurantes</h2>
          <Carousel items={restaurantes} type="restaurante" />
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-4">Actividades</h2>
          <Carousel items={actividades} type="actividad" />
        </div>
      </div>
    );
  }
  
  export default Cards;