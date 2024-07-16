"use client"; // Esto marca el componente como un componente de cliente

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter desde next/navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const router = useRouter(); // Usa useRouter desde next/navigation

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUserInfo(data);
        // Almacena el token o la información del usuario según sea necesario
        localStorage.setItem('userInfo', JSON.stringify(data));
      } else {
        setError(data.message || 'Error en el inicio de sesión');
      }
    } catch (error) {
      setError('Error en el servidor');
    }

    setLoading(false);
  };

  useEffect(() => {
    if (userInfo) {
      router.push('/'); // Navega a la página principal si el usuario está autenticado
    }
  }, [userInfo, router]);

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={submitHandler} className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-6 text-center">Iniciar Sesión</h2>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{error}</div>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
