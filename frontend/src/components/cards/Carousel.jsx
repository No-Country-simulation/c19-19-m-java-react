"use client";

import React, { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import StarRating from './StarRating';

const Carousel = ({ items, type }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
      >
        <AiOutlineLeft className="w-6 h-6" />
      </button>
      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-hidden scrollbar-hide"
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-[16rem] md:min-w-[16rem] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group">  {/* Añadido 'relative' y 'group' */}
            <img src={item.imagen} alt={item.nombre} className="w-full h-48 object-cover rounded-t-lg"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.nombre}</h3>
              <p className="text-gray-600">{item.ubicacion}</p>
              {type === 'hotel' && <StarRating rating={Math.round(item.estrellas)} />}
              {type === 'restaurante' && <StarRating rating={Math.round(item.estrellas)} />}
              {type === 'actividad' && <StarRating rating={Math.round(item.estrellas)} />}
            </div>
            {/* Contenedor del texto de "ver más" */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Ver más</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
      >
        <AiOutlineRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;

