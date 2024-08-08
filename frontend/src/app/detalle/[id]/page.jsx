"use client";

import React, { useState, useEffect } from 'react';
import StarRating from '@/components/cards/StarRating';
import { useUser } from '@/app/context/UserContext';
import RatingPopup from '@/components/RatingPopup/RatingPopup';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Navbar from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Eshotel from '@/components/idComponent/esthotel';
import Esrestaurant from '@/components/idComponent/Estrestaurante';
import Estactividad from '@/components/idComponent/Estactividad';

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
    // console.error('Error in fetchPlace:', error);
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
// console.log(user)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlace(params.id);
      if (data) {
        setPlace(data);
        // console.log('Loaded place:', data);
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
        // console.log('Sending rating:', { placeId: place.placeId, rating: newRating });

        const ratingResponse = await fetch('http://localhost:3001/rating/newRating', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ placeId: place.placeId, rating: newRating }),
        });

        // console.log('Rating response status:', ratingResponse.status);
        const ratingResponseData = await ratingResponse.json();
        // console.log('Rating response data:', ratingResponseData);

        if (!ratingResponse.ok) {
          throw new Error('Error submitting rating');
        }
      }

      if (newComment.trim().length > 0) {
        // console.log('Sending comment:', { placeId: place.placeId, text: newComment });

        const commentResponse = await fetch('http://localhost:3001/comment/createComment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ placeId: place.placeId, text: newComment }),
        });

        // console.log('Comment response status:', commentResponse.status);
        const commentResponseData = await commentResponse.json();
        // console.log('Comment response data:', commentResponseData);

        if (!commentResponse.ok) {
          throw new Error('Error submitting comment');
        }
      }

      Swal.fire({
        title: "Gracias por tu comentario!",
        text: "Tu comentario ha sido enviado con éxito.",
        icon: "success",
      });
      setIsPopupOpen(false);
      // Refleja el comentario en la página sin recargar
      const updatedPlace = await fetchPlace(params.id);
      setPlace(updatedPlace);
    } catch (error) {
      // console.error('Error in handleSubmit:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " ¡Algo salió mal! Por favor, inténtalo de nuevo más tarde.",
        footer: '<a href="/"> Volver a inicio?</a>'
      });
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

  {/* Función para abrir la imagen en un modal */}
  const handleImageClick = (e, url) => {
    e.preventDefault(); // Evitar que se abra el link
    Fancybox.show([{ src: url, type: "image" }]);
  };
  // Create a mapping from user n_document to their rating
  const ratingMap = place.Ratings.reduce((acc, rating) => {
    acc[rating.n_document] = rating.rating;
    return acc;
  }, {});


  return (
    <>
    <Navbar />
    <section className=" bg-white relative size-full flex flex-col items-center justify-center px-4 sm:px-8 py-32 gap-8">

      <article className="bg-white rounded-lg max-w-6xl w-full h-auto">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">{place.nombre}</h2>
          <p className="text-lg text-black mb-4 flex items-center gap-1"><img src="/location.svg" alt="" className=' size-5'/> Ubicación: {place.ubicacion} Guatapé</p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-4 w-full h-auto">
          {place.Images && place.Images.length > 0 ? (
            place.Images.map((image) => (
              <div
                key={image.id_image}
                className=" relative flex-shrink-0 cursor-pointer w-full h-auto"
                onClick={(e) => handleImageClick(e, image.url)}
              >
                <img
                  src={image.url}
                  alt={place.nombre}
                  className="h-full w-auto object-cover object-center rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
              </div>
            ))
          ) : (
            <div>No hay imágenes disponibles</div>
          )}
        </div>
      </article>

      <article className="bg-white border border-black/10 rounded-lg max-w-6xl w-full h-auto p-6">
        <span className=' text-xl font-semibold'> Acerca de: </span>
        <hr className=' w-full my-5'/>

        <div className=' w-full flex sm:flex-row flex-col gap-6 '>
          {/* Parte del nombre y descripcion */}
          <div className=' w-full lg:w-1/2'>

            <div className="flex items-center gap-2">
              <span className=' text-black text-7xl font-semibold'> {place.valoracion.toFixed(1)}</span>
              <div>
                <p className="text-xl sm:text-2xl font-semibold text-black mr-4">Valoración:</p>
                <StarRating rating={Math.round(place.valoracion)} />
              </div>
            </div>
            
            <hr className=' my-4'/>

            <div>
              <p className="text-lg text-black"> <span className=' font-medium'>Descripción: </span> {place.descripcion}</p>
            </div>
            
            <hr className=' my-4'/>

            {user && (
              <div>
                <button onClick={() => setIsPopupOpen(true)} className="bg-black text-white p-2 rounded hover:scale-105 transition-transform">Dejar Comentario o Valoración</button>
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
            <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Comentarios:</h3>

            <div className=''>
                {place.Comments && place.Comments.length > 0 ? (
                  place.Comments.map((comment) => {
                    const userRating = ratingMap[comment.n_document];
                    return (
                      <div key={comment.id} className="border border-gray-300 rounded-lg p-4 mb-4">
                        <div className="flex flex-col mb-2">
                          <span className="font-semibold">{comment.User.first_name} {comment.User.last_name}</span>
                          <div className=" mt-2">
                            <StarRating rating={userRating || 0} />
                          </div>
                        </div>
                        <p>{comment.text}</p>
                      </div>
                    );
                  })
                ) : (
                  <div>No hay comentarios disponibles</div>
                )}
              </div>
          </div>
          
          <div className=' w-full lg:w-1/2'>
            {
              place.tipo === 'actividad' ? <Estactividad /> :
              place.tipo === 'hotel' ? <Eshotel /> :
              place.tipo === 'restaurante' ? <Esrestaurant /> :
              null
            }
          </div>

        </div>
      </article>

    </section>
    <Footer />
    </>
  );
};

export default Detalle;