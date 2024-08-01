"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '../context/UserContext';
import Image from 'next/image';
import formImage from '../../Image/form.jpeg';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

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
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [focus, setFocus] = useState('');
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
        requiredFields.push('subscriptionStartAt', 'subscriptionExpiresAt', 'cardNumber', 'cardName', 'expiryDate', 'cvv');
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
                    <option value="">Seleccione  género</option>
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
                    <div className="col-span-2">
  <label className="text-xl font-semibold p-2 rounded-md ">Información de la Tarjeta</label>
  <Cards
    number={formData.cardNumber}
    name={formData.cardName}
    expiry={formData.expiryDate}
    cvc={formData.cvv}
    focused={focus}
  />
  <div className="space-y-3 mt-3">
    <input
      type="text"
      name="cardNumber"
      value={formData.cardNumber}
      onChange={handleChange}
      onFocus={(e) => setFocus(e.target.name)}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
      placeholder="Número de la Tarjeta"
      required
    />
    <input
      type="text"
      name="cardName"
      value={formData.cardName}
      onChange={handleChange}
      onFocus={(e) => setFocus(e.target.name)}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
      placeholder="Nombre en la Tarjeta"
      required
    />
    <input
      type="text"
      name="expiryDate"
      value={formData.expiryDate}
      onChange={handleChange}
      onFocus={(e) => setFocus(e.target.name)}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
      placeholder="Fecha de Expiración (MM/AA)"
      required
    />
    <input
      type="text"
      name="cvv"
      value={formData.cvv}
      onChange={handleChange}
      onFocus={(e) => setFocus(e.target.name)}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
      placeholder="CVV"
      required
    />
  </div>
</div>

                  </>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 disabled:opacity-50"
                  disabled={!isFormValid || loading}
                >
                  {loading ? 'Cargando...' : 'Registrar'}
                </button>
              </div>
            </form>
            {error && (
              <div className="mt-4 text-red-500">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {showPaymentPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Confirmar Pago</h3>
            <p>¿Desea continuar con el registro y pagar la suscripción?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handlePaymentSubmit}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Confirmar
              </button>
              <button
                onClick={closePopup}
                className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;




