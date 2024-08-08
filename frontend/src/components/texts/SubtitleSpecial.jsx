/*  #Modo de uso
    <SubtitleSpecial light={true} styleAdd={"font-bold text-5xl"}>texto verde</SubtitleSpecial>
    <SubtitleSpecial styleAdd={"font-bold text-5xl"}  >texto marron</SubtitleSpecial>
 */

export default function SubtitleSpecial({ children, light = false, green =false, styleAdd }) {
  let color = "text-customBrown"
  if(green) {color = "text-customGreen"}
  if(light) {color = "text-customGray"}

  return <h2 className={`font-txMogra text-2xl w-full text-center ${styleAdd} ${color} `}>{children}</h2>;
}
