// # Modo de uso » ver SearchSubmenu

import MenuText from "../texts/MenuText";

export default function ButtonSearchSubmenu({ children, fx }) {
  return (
    <button
      className="w-full z-50 text-left px-4 py-2 bg-customGreenLight hover:bg-customGreen"
      role="menuitem"
      onClick={ fx }
    >
      <MenuText styleAdd={"text-customBrown"}>{children}</MenuText>
    </button>
  );
}
