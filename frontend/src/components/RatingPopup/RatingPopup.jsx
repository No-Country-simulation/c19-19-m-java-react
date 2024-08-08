import React, { useState, useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingPopup = ({ isOpen, onClose, onSubmit, newRating, setNewRating, newComment, setNewComment }) => {
  const [hover, setHover] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={popupRef} className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Dejar Comentario o Valoración</h2>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Valoración:</label>
          <div className="flex">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue}
                    onClick={() => setNewRating(ratingValue)}
                    className="hidden"
                  />
                  <FaStar 
                    className="cursor-pointer" 
                    color={ratingValue <= (hover || newRating) ? "#ffc107" : "#e4e5e9"}
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Comentario:</label>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onSubmit}
            className=" bg-black text-white px-4 py-2 rounded"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingPopup;