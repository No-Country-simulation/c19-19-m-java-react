import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-white font-semibold text-lg">
                Rincones de Guatapé
              </span>
            </Link>
          </div>

          {/* Barra de Búsqueda */}
          <div className="flex-1 flex justify-center sm:justify-center">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l-2-2m2 2H6m2 6a9 9 0 110-18 9 9 0 010 18z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Enlaces y Botones */}
          <div className="flex space-x-4">
            <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link href="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

