"use client";
import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const Cards = () => {
  const [hoteles, setHoteles] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/post');
        const data = await response.json();

        // Filtrar los datos según el tipo
        const hoteles = data.data.post.filter(item => item.tipo === 'hotel');
        const restaurantes = data.data.post.filter(item => item.tipo === 'restaurante');
        const actividades = data.data.post.filter(item => item.tipo === 'actividad');

        setHoteles(hoteles);
        setRestaurantes(restaurantes);
        setActividades(actividades);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-4/5 mx-auto space-y-12 py-16">
      <div className="min-h-[30rem]">
        <h2 className="text-2xl font-bold mb-4">Hoteles</h2>
        <Carousel items={hoteles} type="hotel" />
      </div>

      <div className="min-h-[30rem]">
        <h2 className="text-2xl font-bold mb-4">Restaurantes</h2>
        <Carousel items={restaurantes} type="restaurante" />
      </div>

      <div className="min-h-[30rem]">
        <h2 className="text-2xl font-bold mb-4">Actividades</h2>
        <Carousel items={actividades} type="actividad" />
      </div>
    </div>
  );
}

export default Cards;

