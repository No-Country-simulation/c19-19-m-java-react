/* 
    # Modo de uso

    opc3 » indica  sí son tres botonos. En false por defecto

  <SearchSubmenu 
    textOpc1={"opcion 1"}
    fxOpc1={()=> console.log("hace click opcion 1")}

    textOpc2={"opcion 2"}
    fxOpc2={()=> console.log("hace click opcion 2")}

    opc3={true}
    textOpc3={"opcion 3"}
    fxOpc3={()=> console.log("hace click opcion 3")}>
  </SearchSubmenu>

 */
import ButtonSearchSubmenu from "./ButtonSearchSubmenu";

export default function SearchSubmenu({
  textOpc1,
  fxOpc1,
  textOpc2,
  fxOpc2,
  opc3 = false,
  textOpc3,
  fxOpc3,
}) {
  return (
    <div className="origin-top-left z-50 absolute left-0 mt-2 w-36 rounded-md shadow-lg shadow-customBrown bg-customGreenLight ring-1 ring-customBrown ring-opacity-5">
      <div className="py-2" role="menu" aria-orientation="vertical">
        <ButtonSearchSubmenu fx={fxOpc1}>{textOpc1}</ButtonSearchSubmenu>
        <ButtonSearchSubmenu fx={fxOpc2}>{textOpc2}</ButtonSearchSubmenu>
        {opc3 ? <ButtonSearchSubmenu fx={fxOpc3}>{textOpc3}</ButtonSearchSubmenu> : null}
      </div>
    </div>
  );
}
