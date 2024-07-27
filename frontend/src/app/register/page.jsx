"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
    role: 'User',
    gender: '',
    subscriptionStartAt: '',
    subscriptionExpiresAt: '',
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
        subscriptionStartAt: prevFormData.subscriptionStartAt,
        subscriptionExpiresAt: prevFormData.subscriptionExpiresAt,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualiza el estado basado en el tipo de input
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  //   // Si el checkbox de subscription se marca, establece la fecha actual
  //   if (name === 'subscription' && checked) {
  //     setFormData(prevFormData => ({
  //       ...prevFormData,
  //       subscriptionExpiresAt: new Date().toISOString()
  //     }));
  //   } else if (name === 'subscription' && !checked) {
  //     // Si se desmarca, puedes limpiar la fecha si lo deseas
  //     setFormData(prevFormData => ({
  //       ...prevFormData,
  //       subscriptionExpiresAt: ''
  //     }));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
 console.log(formData)
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
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Género</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
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
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                      >
                        <option value="User">Usuario</option>
                        <option value="Admin">Administrador</option>
                        <option value="SuperAdmin">SuperAdmin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Inicio de Suscripción</label>
                      <input
                        type="date"
                        name="subscriptionStartAt"
                        value={formData.subscriptionStartAt}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Fin de Suscripción</label>
                      <input
                        type="date"
                        name="subscriptionExpiresAt"
                        value={formData.subscriptionExpiresAt}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-[#F1F1F1]"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-[#3B764C] text-white py-2 px-6 rounded-md hover:bg-[#336843] transition"
                  disabled={loading}
                >
                  {loading ? 'Registrando...' : 'Enviar'}
                </button>
              </div>
              {error && <div className="text-red-500 text-center mt-2">{error}</div>}
              {userInfo && <div className="text-green-500 text-center mt-2">Registro exitoso!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;