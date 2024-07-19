/* 
    # Modo de uso 
  <ButtonSearch active={true} fx={función del onClick} styleAdd={"más estilos"}>activo</ButtonSearch>
  <ButtonSearch fx={() => console.log("hice click")}  styleAdd={"más estilos" >inactivo</ButtonSearch>

  Ejemplo completo junto con submenu
  <ButtonSearch fx={toggleGastronomy}>
      Gastronomia
  </ButtonSearch>

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

    import MenuText from "../texts/MenuText";

    export default function ButtonSearch({ children, active, fx, styleAdd }) {
      const stateClass = active ? "bg-customGreen" : "bg-customGreenLight";
      return (
        <>
          <button onClick={fx} className={`font-medium h-8 w-40 rounded-2xl flex justify-center items-center ${styleAdd} ${stateClass}`}>
            {active ? (
              <MenuText searchActive={true}>{children}</MenuText>
            ) : (
              <MenuText searchInactive={true}>{children}</MenuText>
            )}
          </button>
        </>
      );
    }
    