"use client";
import React from 'react';
import ButtonLogin from "../buttons/ButtonLogin";
import Link from 'next/link';
import { useUser } from "@/app/context/UserContext";
import { FaSignInAlt, FaUserPlus, FaSignOutAlt, FaPlus, FaClipboardList, FaUserShield } from 'react-icons/fa';



function Bttlogins() {
    const { user, logout } = useUser();


    const isAuthenticated = () => {
        return !!user; // Devuelve true si userInfo no es null o undefined
      };
    
      const getRole = () => {
        return user ? user.role : 'User'; // Devuelve el rol del usuario autenticado
      };

    return ( 
        <>
            {!isAuthenticated() ? (
                <>
                <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <FaSignInAlt className="inline mr-2" />
                </Link>
                <Link href="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <FaUserPlus className="inline mr-2" />
                </Link>
              </>
                ) : (
                    <>
                    <button
                      onClick={logout}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <FaSignOutAlt className="inline mr-2" />
                    </button>
                    {getRole() === 'Admin' && (
                      <>
                        <Link href="/posteos" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          <FaPlus className="inline mr-2" /> Crear Publicación
                        </Link>
                        <Link href="/my-posts" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          <FaClipboardList className="inline mr-2" /> Mis Publicaciones
                        </Link>
                      </>
                    )}
                    {getRole() === 'SuperAdmin' && (
                      <>
                        <Link href="/posteos" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          <FaPlus className="inline mr-2" /> Crear Publicación
                        </Link>
                        <Link href="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          <FaUserShield className="inline mr-2" /> Alta Admin
                        </Link>
                      </>
                    )}
                  </>
                )}
              </>
            );
          }
export default Bttlogins;