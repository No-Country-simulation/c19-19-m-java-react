"use client";

import React, { useState, useEffect } from 'react';
import StarRating from '@/components/cards/StarRating';
import { useUser } from '@/app/context/UserContext';
import RatingPopup from '@/components/RatingPopup/RatingPopup';
import { useRouter } from 'next/navigation';

const fetchPlace = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/post/${id}`);
    if (!response.ok) {
      throw new Error('Error fetching place');
    }
    const data = await response.json();
    
    console.log('Fetched place data:', data);

    return data.data.post;
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();
  const { user } = useUser();
console.log(user)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlace(params.id);
      if (data) {
        setPlace(data);
        console.log('Loaded place:', data);
        setLoading(false);
      } else {
        setError('Error fetching place');
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async () => {
    try {
      if (!user) {
        throw new Error('No user is logged in');
      }
      if (!place || !place.placeId) {
        throw new Error('Place ID is not available');
      }

      const token = user.token;

      if (newRating > 0) {
        console.log('Sending rating:', { placeId: place.placeId, rating: newRating });

        const ratingResponse = await fetch('http://localhost:3001/rating/newRating', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ placeId: place.placeId, rating: newRating }),
        });

        console.log('Rating response status:', ratingResponse.status);
        const ratingResponseData = await ratingResponse.json();
        console.log('Rating response data:', ratingResponseData);

        if (!ratingResponse.ok) {
          throw new Error('Error submitting rating');
        }
      }

      if (newComment.trim().length > 0) {
        console.log('Sending comment:', { placeId: place.placeId, text: newComment });

        const commentResponse = await fetch('http://localhost:3001/comment/createComment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ placeId: place.placeId, text: newComment }),
        });

        console.log('Comment response status:', commentResponse.status);
        const commentResponseData = await commentResponse.json();
        console.log('Comment response data:', commentResponseData);

        if (!commentResponse.ok) {
          throw new Error('Error submitting comment');
        }
      }

      alert('Submitted successfully!');
      setIsPopupOpen(false);
      router.push('/'); // Redirige a la página principal después del envío
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert('Failed to submit. Please try again.');
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
          <StarRating rating={Math.round(place.valoracion)} />
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
            <button onClick={() => setIsPopupOpen(true)} className="bg-green-600 text-white p-2 rounded">Dejar Comentario o Valoración</button>
            <RatingPopup
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              onSubmit={handleSubmit}
              newRating={newRating}
              setNewRating={setNewRating}
              newComment={newComment}
              setNewComment={setNewComment}
            />
          </div>
        )}
         <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Comentarios:</h3>
        {place.Comments && place.Comments.length > 0 ? (
          place.Comments.map((comment) => (
            <div key={comment.id} className="mb-4 p-4 border border-gray-300 rounded">
              <p className="text-lg font-medium text-gray-900 mb-2">{comment.User ? comment.User.first_name : 'Anónimo'}</p>
              <p className="text-gray-700">{comment.text}</p>
            </div>
          ))
        ) : (
          <p>No hay comentarios disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Detalle;




