"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Linknav from './Linknav';
import Title from '../texts/Title';
import ButtonLogin from '../buttons/ButtonLogin';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className=" relative ">
      <div className={`w-full fixed mx-auto p-4 sm:px-6 lg:px-8 top-0 z-50 transition-colors duration-300 ${scrolled ? ' bg-customGrayDark' : 'bg-transparent'} animate-fade-down animate-ease-in-out`}>

        <div className=" flex items-center justify-between px-2 sm:p-0">
          {/* Logo */}
          <div className=" flex items-center">
            <Link href="/" className="flex items-center gap-4">
              <h2 className=" text-white text-xl font-txTitle text-right hidden sm:inline">
                Rincones de <br/>Guatapé 
              </h2>
              <Image src="/logo.svg" alt="Rincones de Guatapé" width={50} height={50}/>
            </Link>
          </div>

          {/* Botón de Menú */}
          <div className="lg:hidden">
            <label className=" flex flex-col gap-2 w-8">
                <input
                    className="peer hidden"
                    type="checkbox"
                    onChange={() => setMenuOpen(!menuOpen)}
                />
                <div
                    className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"
                ></div>
                <div
                    className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45"
                ></div>
                <div
                    className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"
                ></div>
            </label>
        </div>

          {/* Enlaces y Botones */}
          <div className=" lg:flex space-x-4 hidden">
            <Linknav href={"/"}>
              Inicio
            </Linknav>
            <Linknav href={"/contact"}>
              Donde Comer
            </Linknav>
            <Linknav href={"/login"}>
              Donde ir
            </Linknav>
            <Linknav href={"/register"}>
              Que hacer
            </Linknav>
            <Linknav href={"/posteos"}>
              Contacto
            </Linknav>
          </div>

          {/* Botones de Inicio de Sesión y Registro */}
          <div className=" lg:flex items-center gap-4 hidden">
            <ButtonLogin to={"/login"} nouser></ButtonLogin>
            <ButtonLogin to={"/register"} addUser></ButtonLogin>
          </div>

        </div>
      </div>
      {menuOpen && (
        <div className="fixed lg:hidden inset-0 w-full h-full bg-black/40 backdrop-blur-md z-20 overflow-auto transition-colors ease-in-out animate-fade animate-delay-75">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg text-2xl flex flex-col items-center">
              {/* Aquí van los enlaces y botones del menú */}
              <Link href="/" className="block mb-4">
                Inicio
              </Link>
              <Link href="/where-to-eat" className="block mb-4">
                Donde Comer
              </Link>
              <Link href="/where-to-go" className="block mb-4">
                Donde Ir
              </Link>
              <Link href="/what-to-do" className="block mb-4">
                Que Hacer
              </Link>
              <Link href="/contact" className="block mb-4">
                Contacto
              </Link>
              <div className=' flex items-center gap-4'>
                <Link href="/login" className="block mb-4">
                  <ButtonLogin to={"/login"} nouser></ButtonLogin>
                </Link>
                <Link href="/register" className="block mb-4">
                  <ButtonLogin to={"/"} addUser></ButtonLogin>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;