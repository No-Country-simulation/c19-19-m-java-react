
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
                  Rincones de guatapé
                </span>
           
            </Link>
          </div>

        
          <div className="flex-1 flex justify-center sm:justify-end">
            <div className="flex space-x-4">
              <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                
                  About
              
              </Link>
              <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                
                  Contact
          
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
