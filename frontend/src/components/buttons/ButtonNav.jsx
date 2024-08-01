/* 
    # Modo de uso 
    <ButtonNav ref={"ruta"} active={true}>boton activo</ButtonNav>
    
    <ButtonNav ref={"ruta"}>boton inactivo</ButtonNav>
 */

import Link from "next/link";
import MenuText from "../texts/MenuText";

export default function ButtonNav({ children, active, to }) {
  const stateClass = active ? "bg-customGreenLight" : "bg-transparent";
  return (
    <>
      <Link
        href={to}
        className={`group hover:transition-all hover:bg-customGreen hover:border-2 hover:border-solid hover:border-customGray h-8 w-40 rounded-2xl flex justify-center items-center ${stateClass}`}
      >
        {active ? (
          <MenuText
            styleAdd={"group-hover:text-customGreenLight group-hover:transition-all"}
            navActive={true}
          >
            {children}
          </MenuText>
        ) : (
          <MenuText navInactive={true}>{children}</MenuText>
        )}
      </Link>
    </>
  );
}
