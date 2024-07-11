
import React from 'react';
import './bn.css'

const Banner = () => {
  return (
    <header className="relative bg-cover bg-center h-[50vh] banner" >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
        <div className="text-left">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">Descubre Guatapé</h1>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, lectus vel viverra fermentum, tortor lacus maximus erat, ac dapibus mauris augue sit amet enim. Nullam hendrerit justo sed dolor fringilla convallis.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
