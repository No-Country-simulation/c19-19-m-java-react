/*  #Modo de uso
    <SubtitleSpecial light={true} styleAdd={"font-bold text-5xl"}>texto verde</SubtitleSpecial>
    <SubtitleSpecial styleAdd={"font-bold text-5xl"}  >texto marron</SubtitleSpecial>
 */

export default function SubtitleSpecial({ children, light, styleAdd }) {
  let color = light ? "text-customGreen" : "text-customBrown"  
  return <h2 className={`font-txMogra ${color} ${styleAdd}`}>{children}</h2>;
}
