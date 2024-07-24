import React from 'react';
import ButtonLogin from "../buttons/ButtonLogin";
import { useUser } from "@/app/context/UserContext";

function Bttlogins() {
    const { user } = useUser();


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
                    <ButtonLogin to={"/login"} nouser></ButtonLogin>
                    <ButtonLogin to={"/register"} addUser></ButtonLogin>
                </>
                ) : (
                <>
                    {getRole() === 'User' ? (
                    <>
                        <ButtonLogin to={"/profile"} user></ButtonLogin>
                        <ButtonLogin to={"/logout"} logout></ButtonLogin>
                    </>
                    ) : (
                    <>
                        <ButtonLogin to={"/admin/profile"} admin></ButtonLogin>
                        <ButtonLogin to={"/dashboard"} edit></ButtonLogin>
                        <ButtonLogin to={"/logout"} logout></ButtonLogin>
                    </>
                    )}
                </>
            )}
        </>
    );
}

export default Bttlogins;