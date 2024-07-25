"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';
import Image from 'next/image';
import formImage from '../../img/form.jpeg';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    n_document: '',
    phone: '',
    city: '',
    role: 'User',
    gender: '',
    subscription: false,
    subscriptionExpiresAt: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const router = useRouter(); 
  const { user } = useUser(); // Obtén el usuario del contexto

  useEffect(() => {
    if (user && (user.role === 'Admin' || user.role === 'SuperAdmin')) {
      // Mostrar los campos 'role' y 'subscription' si el usuario está logueado y es Admin o SuperAdmin
      setFormData(prevFormData => ({
        ...prevFormData,
        role: prevFormData.role,
        subscription: prevFormData.subscription,
        subscriptionExpiresAt: prevFormData.subscriptionExpiresAt
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Actualiza el estado basado en el tipo de input
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Si el checkbox de subscription se marca, establece la fecha actual
    if (name === 'subscription' && checked) {
      setFormData(prevFormData => ({
        ...prevFormData,
        subscriptionExpiresAt: new Date().toISOString()
      }));
    } else if (name === 'subscription' && !checked) {
      // Si se desmarca, puedes limpiar la fecha si lo deseas
      setFormData(prevFormData => ({
        ...prevFormData,
        subscriptionExpiresAt: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md flex">
        <div className="w-2/5 flex items-center justify-center">
          <Image src={formImage} alt="Imagen de Registro" className="h-full object-cover object-center" width={500} height={800} />
        </div>
        <div className="w-3/5  pl-5 pr-5 p-1">
        <div className="flex justify-center">
            <h2 className="text-2xl w-2/3 font-bold mb-10 text-center bg-[#F1D232] p-2 rounded-md">Registro de Cliente</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ciudad</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Género</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Seleccione</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
          </div>
          {(user && (user.role === 'Admin' || user.role === 'SuperAdmin')) && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rol</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                >
                  <option value="User">Usuario</option>
                  <option value="Admin">Administrador</option>
                  <option value="SuperAdmin">SuperAdmin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Suscripción</label>
                <input
                  type="checkbox"
                  name="subscription"
                  checked={formData.subscription}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </>
          )}
          </div>
          <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 h-8 bg-[#3B764C] text-white py-1 px-4 rounded-md hover:bg-[#336843]"
                disabled={loading}
              >
                {loading ? 'Registrando...' : 'Enviar'}
              </button>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </form>
          {userInfo && <div className="text-green-500 mt-2">Registro exitoso!</div>}
        </div>
      </div>
    </div>
  );
 
};

export default Register;

