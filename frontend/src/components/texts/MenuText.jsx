/* 
    # Modo de uso

    <MenuText styleAdd={"text-3xl bg-slate-100"} navActive={true} >menu nav activo</MenuText>
    <MenuText styleAdd={"text-3xl bg-slate-500"} navInactive={true} >menu nav inactivo</MenuText>
    <MenuText styleAdd={"text-3xl bg-slate-500"} searchActive={true} >search activo</MenuText>
    <MenuText styleAdd={"text-3xl bg-slate-100"} searchInactive={true} >search inactivo</MenuText> 
 */

export default function MenuText({
  children,
  styleAdd,
  navActive = false,
  navInactive = false,
  searchActive = false,
  searchInactive = false,
}) {
  let color;
  if (navActive) {
    color = "text-customGreen";
  }
  if (navInactive) {
    color = "text-customGreenLight";
  }
  if (searchActive) {
    color = "text-customGreenLight";
  }
  if (searchInactive) {
    color = "text-customBrown";
  }
  return <p className={`font-txSpartan  font-medium w-full text-center ${styleAdd} ${color}`}>{children}</p>;
}
