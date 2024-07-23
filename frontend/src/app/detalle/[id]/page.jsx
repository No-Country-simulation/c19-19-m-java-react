"use client";

import { useState, useEffect } from 'react';
import StarRating from '@/components/cards/StarRating';

const fetchPlace = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/post/${id}`);
    if (!response.ok) {
      throw new Error('Error fetching place');
    }
    const data = await response.json();
    return data.data.post; 
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Detalle = ({ params }) => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlace(params.id);
      if (data) {
        setPlace(data);
        setLoading(false);
      } else {
        setError('Error fetching place');
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!place) {
    return <div>No se encontró el posteo.</div>;
  }

  return (
    <div className="bg-yellow-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full mx-4 sm:mx-6 lg:mx-8 p-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{place.nombre}</h2>
        <p className="text-lg text-gray-700 mb-4">Ubicación: {place.ubicacion}</p>
        <p className="text-lg text-gray-700 mb-4">Descripción: {place.descripcion}</p>
        <div className="flex items-center mb-6">
          <p className="text-2xl font-semibold text-green-600 mr-4">Valoración:</p>
          <StarRating rating={Math.round(place.valoracion)} /> {/* Renderiza las estrellas */}
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mb-6">
          {place.Images && place.Images.length > 0 ? (
            place.Images.map((image) => (
              <div key={image.id_image} className="group relative">
                <img
                  src={image.url}
                  alt={place.nombre}
                  className="h-full w-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
            ))
          ) : (
            <div>No hay imágenes disponibles</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detalle;







