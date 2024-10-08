"use client";

import React, { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import StarRating from './StarRating';
import Link from 'next/link';

const Carousel = ({ items,  itemsToShow = 6 }) => {
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
        className="flex space-x-6 overflow-x-hidden scrollbar-hide mx-auto"
        style={{ maxWidth: `calc(${itemsToShow} * 16rem + ${(itemsToShow - 1) * 1.5}rem)` }} // Ajusta el ancho máximo
      >
        {items.map((item, index) => (
          <Link href={`/detalle/${item.placeId}`} key={index}>
            <div 
              className="mb-5 min-w-[16rem] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
              style={{ height: '24rem' }} // Altura fija para las tarjetas
            >
              {item.Images && item.Images.length > 0 ? (
                <img 
                  src={item.Images[0].url} 
                  alt={item.nombre} 
                  style={{
                    width: '100%',
                    height: '200px', // Ajusta esta altura según tus necesidades
                    objectFit: 'cover', 
                    borderRadius: '0.5rem 0.5rem 0 0'
                  }}
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.nombre}</h3>
                  <p className="text-gray-600">{item.ubicacion}</p>
                </div>
                <StarRating rating={Math.round(item.valoracion)} />
              </div>
            </div>
          </Link>
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


