import React, { useState } from 'react';

const PaymentPopup = ({ onClose, onPayment }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Lógica para manejar el pago (ficticio)
    onPayment();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Pagar Suscripción</h2>
        <label className="block text-sm font-medium text-gray-700">Número de Tarjeta</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          placeholder="1234 5678 9012 3456"
        />
        <label className="block text-sm font-medium text-gray-700 mt-4">Fecha de Expiración</label>
        <input
          type="text"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          placeholder="MM/YY"
        />
        <label className="block text-sm font-medium text-gray-700 mt-4">CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          placeholder="123"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handlePayment}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-400"
          >
            Pagar
          </button>
          <button
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-400"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;


