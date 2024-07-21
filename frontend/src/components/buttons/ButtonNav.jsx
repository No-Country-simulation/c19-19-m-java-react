/* 
    # Modo de uso 
    <ButtonNav ref={"ruta"} active={true}>boton activo</ButtonNav>
    
    <ButtonNav ref={"ruta"}>boton inactivo</ButtonNav>
 */

import Link from "next/link";
import MenuText from "../texts/MenuText";

export default function ButtonNav({ children, active, ref }) {
  const stateClass = active ? "bg-customGreenLight" : "bg-transparent";
  return (
    <>
    <Link href={ref} className={`font-medium h-8 w-40  rounded-2xl flex justify-center items-center ${stateClass}`}>      
        {active ? (
          <MenuText navActive={true}>{children}</MenuText>
        ) : (
          <MenuText navInactive={true}>{children}</MenuText>
        )}
      </Link>
    </>
  );
}
