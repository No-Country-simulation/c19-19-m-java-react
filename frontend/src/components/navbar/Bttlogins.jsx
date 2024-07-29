"use client";
import React from 'react';
import ButtonLogin from "../buttons/ButtonLogin";
import { useUser } from "@/app/context/UserContext";

function Bttlogins() {
  const { user, logout } = useUser();

  const isAuthenticated = () => !!user;

  const getRole = () => (user ? user.role : 'User');

  return (
    <>
      {!isAuthenticated() ? (
        <>
          <ButtonLogin to="/login" nouser />
          <ButtonLogin to="/register" addUser />
        </>
      ) : (
        <>
          <ButtonLogin to="/" logout onClick={logout} />
          {getRole() === 'Admin' && (
            <>
              <ButtonLogin to="/posteos" edit />
              <ButtonLogin to="/misPosts" />
            </>
          )}
          {getRole() === 'SuperAdmin' && (
            <>
              <ButtonLogin to="/posteos" edit />
              <ButtonLogin to="/register" addUser />
              <ButtonLogin to="/users" SuperForm />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Bttlogins;
