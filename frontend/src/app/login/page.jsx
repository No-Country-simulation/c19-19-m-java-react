"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';
import Navbar from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import Image from 'next/image';
import Imageregister from '../../Image/login.webp';
import Imagebackground from '../../Image/backlogin.webp';

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
      const { token, n_document, role, first_name, last_name, subscriptionStartAt, subscriptionExpiresAt } = data.data;

      login({ token, n_document, role, first_name, last_name, subscriptionStartAt, subscriptionExpiresAt}); // Establece el usuario en el contexto
      router.push('/'); // Redirige al inicio
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
      <section className=" relative w-full h-[60rem] bg-transparent flex justify-center items-center px-4 sm:px-10">
        <div className=' size-full absolute -z-10 bg-zinc-950'>
          <Image src={Imagebackground} alt="imagen fondo" className=' w-full h-full object-cover object-top blur-sm'></Image>
        </div>

        <article className=' p-8 sm:p-6 gap-4 sm:gap-6 max-w-5xl h-auto sm:h-[44rem] flex flex-col-reverse sm:flex-row bg-white rounded-[2rem]'>
          {error && <div className="text-red-500 mb-4">{error}</div>}

          <form onSubmit={submitHandler} className=" w-full sm:w-1/2 h-auto sm:px-8 flex flex-col justify-center items-center">
            <div className=" text-left mb-8">  
              <h2 className="text-2xl font-semibold  text-black mb-2">¡Bienvenido Turista! 👋</h2>
              <p>Inicia sesión para explorar y descubrir los encantos de este paraíso escondido.</p>
            </div>

            <label className="block mb-4 w-full">
              <span className="text-gray-700">Correo Electrónico</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='example@gmail.com'
                required
              />
            </label>
            <label className="block mb-4 w-full">
              <span className="text-gray-700">Contraseña</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder=' Hasta 8 caracteres'
                required
              />
            </label>
            <button
              type="submit"
              className=" bg-green-500 hover:scale-105 hover:shadow-xl transition-all text-white p-2 rounded w-full"
              disabled={loading}
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>

            <div>
              <p className="mt-8 text-sm text-gray-600">
                ¿No tienes una cuenta?{' '}
                <a href="/register" className="font-medium text-green-500 hover:text-green-700">
                  Regístrate
                </a>
              </p>
            </div>
          </form>

          <div className=' w-full h-44 sm:h-full sm:w-1/2'>
              <Image src={Imageregister} alt="imagen fondo" className=' size-full object-cover object-top rounded-2xl' />
          </div>

        </article>
      </section>
    <Footer/>
    </>
  );
};

export default Login;



