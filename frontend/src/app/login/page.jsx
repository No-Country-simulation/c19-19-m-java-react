"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { login } = useUser();

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

      if (!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }

      const data = await response.json();
      const { token, n_document, role, first_name, last_name } = data.data;

      login({ token, n_document, role, first_name, last_name }); // Establece el usuario en el contexto
      router.push('/'); // Redirige al inicio
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={submitHandler}>
          <label className="block mb-4">
            <span className="text-gray-700">Correo Electrónico</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input mt-1 block w-full"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input mt-1 block w-full"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;



