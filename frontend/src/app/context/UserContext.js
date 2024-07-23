"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userInfo) => {
    const { token, n_document, role } = userInfo;
    
    setUser({ token, n_document, role });
    localStorage.setItem('userInfo', JSON.stringify({ token, n_document, role }));
  };

  const logout = () => {
    console.log('Logout function called');
    setUser(null);
    localStorage.removeItem('userInfo');
  };


  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);
