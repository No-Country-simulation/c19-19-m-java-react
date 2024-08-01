"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '../context/UserContext';
import Image from 'next/image';
import formImage from '../../Image/form.jpeg';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    n_document: '',
    phone: '',
    city: '',
    role: 'User', // Default role
    gender: '',
    subscriptionStartAt: '',
    subscriptionExpiresAt: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useUser();
  
  
  const isSubscriptionFlow = searchParams.get('subscription') === 'true';
 useEffect(() => {
    if (user && (user.role === 'Admin' || user.role === 'SuperAdmin')) {
      // Mostrar campos adicionales si el usuario es Admin o SuperAdmin
      setFormData(prevFormData => ({
        ...prevFormData,
        role: prevFormData.role,
        subscriptionStartAt: prevFormData.subscriptionStartAt,
        subscriptionExpiresAt: prevFormData.subscriptionExpiresAt,
      }));
    }
  }, [user]);

  useEffect(() => {
    
    if (isSubscriptionFlow) {
      setFormData(prevFormData => ({
        ...prevFormData,
        role: 'Admin',
      }));
    }
  }, [isSubscriptionFlow]);

  useEffect(() => {
    const isFormComplete = () => {
      const requiredFields = ['first_name', 'last_name', 'email', 'password', 'n_document', 'phone', 'city', 'gender'];

      
      if (isSubscriptionFlow) {
        requiredFields.push('subscriptionStartAt', 'subscriptionExpiresAt', 'cardNumber', 'expiryDate', 'cvv');
      }

      
      return requiredFields.every(field => formData[field] && formData[field].trim() !== '');
    };

    setIsFormValid(isFormComplete());
  }, [formData, isSubscriptionFlow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubscriptionFlow) {
      setShowPaymentPopup(true);
    } else {
      await submitForm();
    }
  };

  const submitForm = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setUserInfo(data);
        router.push('/'); 
      } else {
        setError(data.message || 'Error en el registro');
      }
    } catch (error) {
      setError('Error en el registro');
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
    setShowPaymentPopup(false); 
  };

  const closePopup = () => {
    setShowPaymentPopup(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow items-center justify-center">
        <div className="relative w-full max-w-4xl flex rounded-lg shadow-md overflow-hidden">
          <div className="hidden md:block w-1/2 relative">
            <Image src={formImage} alt="Imagen de Registro" layout="fill" objectFit="cover" className="absolute inset-0" />
          </div>
          <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              <h2 className="text-2xl font-bold bg-[#F1D232] p-4 rounded-md">Registro de Cliente</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Apellido</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Número de Documento</label>
                  <input
                    type="text"
                    name="n_document"
                    value={formData.n_document}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Ciudad</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Género</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                    required
                  >
                    <option value="">Seleccione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otro</option>
                  </select>
                </div>
                {isSubscriptionFlow && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Fecha de Inicio de Suscripción</label>
                      <input
                        type="date"
                        name="subscriptionStartAt"
                        value={formData.subscriptionStartAt}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Fecha de Expiración de Suscripción</label>
                      <input
                        type="date"
                        name="subscriptionExpiresAt"
                        value={formData.subscriptionExpiresAt}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Número de Tarjeta</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Fecha de Expiración</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                        required
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className={`bg-[#3B764C] text-white py-2 px-6 rounded-md hover:bg-[#336843] transition ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={loading || !isFormValid}
                >
                  {isSubscriptionFlow ? (loading ? 'Registrando...' : 'Confirmar Pago') : (loading ? 'Registrando...' : 'Registrarse')}
                </button>
                {error && <p className="text-red-500">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
      {showPaymentPopup && isSubscriptionFlow && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Confirmar Pago</h3>
            <p className="mb-4">¿Estás seguro de que deseas confirmar el pago?</p>
            <form onSubmit={handlePaymentSubmit}>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="px-4 py-2 rounded-md font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;




