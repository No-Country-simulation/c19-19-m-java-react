"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recupera el usuario desde el almacenamiento local si está disponible
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userInfo) => {
    // Establece el usuario en el estado y en el almacenamiento local
    const { token, n_document, role } = userInfo;
    setUser({ token, n_document, role });
    localStorage.setItem('userInfo', JSON.stringify({ token, n_document, role }));
    localStorage.setItem('token', token); // Asegúrate de guardar el token también en localStorage
  };

  const logout = () => {
    // Limpia el estado y el almacenamiento local al cerrar sesión
    setUser(null);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
  };

  // Verifica si el usuario está autenticado
  const isLoggedIn = () => !!user;

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);


