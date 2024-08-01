/* 
    # Modo de uso 
    <Subtitle styleAdd={"text-4xl m-10"}>Subtitulo de muestra</Subtitle>
*/
export default function Subtitle({ children, styleAdd }) {
  return <h2 className={`font-txSansita text-lg lg:text-2xl mt-6 mb-2 text-customGrayDark ${styleAdd}`}>{children}</h2>;
}
