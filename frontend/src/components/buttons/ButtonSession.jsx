export default function ButtonSession({ to, children, addStyle, onClick }) {
  const handleClick = () => {
    if (onClick) onClick(); // Llama a la función onClick si existe
    if (to) window.location.href = to; // Navega a la ruta especificada si existe
  };

  return (
    <button
      onClick={handleClick}
      className={`hover:bg-customGreen flex justify-center items-center rounded-full size-10 shadow-lg shadow-customBrown hover:shadow-customGreenLight ${addStyle}`}
    >
      {children}
    </button>
  );
}


