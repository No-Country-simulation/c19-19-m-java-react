"use client";

import React, { useState, useEffect } from 'react';
import StarRating from '@/components/cards/StarRating';
import { useUser } from '@/app/context/UserContext';

const fetchPlace = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/post/${id}`);
    if (!response.ok) {
      throw new Error('Error fetching place');
    }
    const data = await response.json();
    
    console.log('Fetched place data:', data);

    return data.data.post; // Asegúrate de que esto contenga el `id`
  } catch (error) {
    console.error('Error in fetchPlace:', error);
    return null;
  }
};

const Detalle = ({ params }) => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');

  const { user } = useUser(); // Obtén el contexto del usuario

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlace(params.id);
      if (data) {
        setPlace(data);
        console.log('Loaded place:', data); // Verifica los datos del lugar
        setLoading(false);
      } else {
        setError('Error fetching place');
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  const handleRatingSubmit = async () => {
    try {
      if (!user) {
        throw new Error('No user is logged in');
      }
      if (!place || !place.placeId) {
        throw new Error('Place ID is not available');
      }
      if (!newRating || isNaN(newRating) || newRating < 1 || newRating > 5) {
        throw new Error('Invalid rating value'); // Validación adicional para rating
      }

      const token = user.token; // Usa el token del contexto

      console.log('Sending rating:', { placeId: place.placeId, rating: newRating });

      const response = await fetch('http://localhost:3001/rating/newRating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Incluye el token en el encabezado
        },
        body: JSON.stringify({ placeId: place.placeId, rating: newRating }),
      });

      console.log('Rating response status:', response.status);
      const responseData = await response.json();
      console.log('Rating response data:', responseData);

      if (!response.ok) {
        throw new Error('Error submitting rating');
      }

      // Recarga los datos del lugar para reflejar la nueva valoración
      const data = await fetchPlace(params.id);
      if (data) {
        setPlace(data);
      }
    } catch (error) {
      console.error('Error in handleRatingSubmit:', error);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      if (!user) {
        throw new Error('No user is logged in');
      }
      if (!place || !place.placeId) { // Asegúrate de usar place.placeId
        console.error('Place data:', place);
        throw new Error('Place ID is not available');
      }
      if (!newComment || newComment.trim().length === 0) {
        throw new Error('Comment cannot be empty');
      }

      const token = user.token; // Usa el token del contexto

      console.log('Sending comment:', { placeId: place.placeId, text: newComment });

      const response = await fetch('http://localhost:3001/comment/createComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ placeId: place.placeId, text: newComment }),
      });

      console.log('Comment response status:', response.status);
      const responseData = await response.json();
      console.log('Comment response data:', responseData);

      if (!response.ok) {
        throw new Error('Error submitting comment');
      }

      alert('Comment submitted successfully!');

      const data = await fetchPlace(params.id);
      if (data) {
        setPlace(data);
        setNewComment('');
      }
    } catch (error) {
      console.error('Error in handleCommentSubmit:', error);
      alert('Failed to submit comment. Please try again.');
    }
  };

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
        {user && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Deja tu valoración</h3>
            <input
              type="number"
              min="1"
              max="5"
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
              className="border rounded p-2 mb-4"
            />
            <button onClick={handleRatingSubmit} className="bg-green-600 text-white p-2 rounded">
              Enviar Valoración
            </button>
          </div>
        )}
        {user && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Deja un comentario</h3>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="border rounded p-2 mb-4 w-full"
            />
            <button onClick={handleCommentSubmit} className="bg-green-600 text-white p-2 rounded">
              Enviar Comentario
            </button>
          </div>
        )}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Comentarios</h3>
          {place.Comments && place.Comments.length > 0 ? (
            place.Comments.map((comment) => (
              <div key={comment.id} className="mb-4">
                <p className="text-lg text-gray-700">{comment.text}</p>
              </div>
            ))
          ) : (
            <div>No hay comentarios disponibles</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detalle;




