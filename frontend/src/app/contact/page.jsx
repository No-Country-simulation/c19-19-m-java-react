
import React from 'react';
import Navbar from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import Backcontact from '../../Image/backcontact.webp';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMailBulk } from 'react-icons/fa';

import Link from 'next/link';

export default function Contact() {
  return (
    <>
    <Navbar />
    <section className=" relative w-full h-[75rem] sm:h-[60rem] bg-transparent flex justify-center items-center px-4 sm:px-10">
      <div className=' size-full absolute -z-10 bg-zinc-950'>
        <Image src={Backcontact} className=' w-full h-full object-cover object-top blur-sm'></Image>
      </div>

      <article className=' w-full max-w-5xl h-auto sm:h-[40rem] bg-white rounded-[2rem] p-5 flex flex-col sm:flex-row gap-8'>

        <div className=' gap-5 sm:gap-0 relative w-full sm:w-1/2 bg-green-500 rounded-3xl p-4 lg:p-8 flex flex-col justify-between overflow-hidden'>
          <div className=' absolute rounded-full size-56 bg-white/40 top-[28rem] left-[15rem] lg:left-[18rem]'></div>
          <div className=' absolute rounded-full size-36 bg-white/40 top-[25rem] left-[13rem] lg:left-[16rem]'></div>

          <div>
            <h1 className=' font-bold text-3xl'>Información de contacto </h1>
            <span> Visita también nuestros canales de comunicación</span>
          </div>

          <div className=' gap-8 flex flex-col'>
            <h2 className=' flex items-center gap-1'><FaPhone size={20}/>+57 320 2233456</h2>
            <a href="mailto://guatapenocountry@gmail.com" className=' flex items-center gap-1 text-sm sm:text-base'><FaMailBulk size={24}/>guatapenocountry@gmail.com</a>
            <a href='https://maps.app.goo.gl/F3MoHPVLA5vd3xjr8' className=' flex items-center gap-1'> <img src="/location.svg" alt="" className=' size-6' />El Peñol-Guatapé #30-1 Gautapé, Antioquia</a>
          </div>

          <div className=' flex items-center gap-8'>
            <Link href="https://facebook.com" className=" p-2 bg-white hover:bg-black transition-colors rounded-full group" aria-label="Facebook">
              <FaFacebook size={24} className=' group-hover:fill-white' />
            </Link>
            <Link href="https://twitter.com" className=" p-2 bg-white hover:bg-black transition-colors rounded-full group" aria-label="Twitter">
              <FaTwitter size={24} className=' group-hover:fill-white' />
            </Link>
            <Link href="https://instagram.com" className=" p-2 bg-white hover:bg-black transition-colors rounded-full group" aria-label="Instagram">
              <FaInstagram size={24} className=' group-hover:fill-white' />
            </Link>
          </div>
        </div>

        <form className=" w-full sm:w-1/2 h-auto flex flex-col justify-center ">
          <h1 className="text-3xl font-bold mb-4">Contactanos</h1>

          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 resize-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-md shadow-md hover:scale-105 transition-transform"
          >
            Enviar mensaje
          </button>
        </form>
    
      </article>
    </section>
    <Footer />
    </>
  );
}
