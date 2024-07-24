import ButtonLogin from "../buttons/ButtonLogin";

function Bttlogins() {
    const isAuthenticated = () => {
        // Implementa la lógica para verificar si el usuario está autenticado
        // Devuelve true si está autenticado, false en caso contrario
        return false; // Ejemplo: siempre falso
    };
    
    // Esta función debe ser reemplazada por tu propia lógica para obtener el rol del usuario
    const getRole = () => {
        // Implementa la lógica para obtener el rol del usuario autenticado
        // Devuelve 'user' si el usuario es un usuario normal, 'admin' si es un administrador
        return 'user'; // Ejemplo: siempre 'user'
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
                    {getRole() === 'user' ? (
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