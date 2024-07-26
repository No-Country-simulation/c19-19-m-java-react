import React from 'react';

const RatingPopup = ({ isOpen, onClose, onSubmit, newRating, setNewRating, newComment, setNewComment }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Dejar Comentario o Valoración</h2>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Valoración:</label>
          <select
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="0">Seleccionar</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
export default RatingPopup;


