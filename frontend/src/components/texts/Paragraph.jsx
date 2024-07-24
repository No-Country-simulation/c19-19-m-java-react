/*  #Modo de uso
    <Paragraph light={true} addStyle={"bg-slate-700 text-2xl"}>texto blanco</Paragraph>
    <Paragraph addStyle={"text-2xl"}>texto gris</Paragraph>
 */

export default function Paragraph({ children, light, addStyle }) {
  let color = light ? "text-white" : "text-customGrayDark";
  return (
    <p
      className={`font-txBarlow text-base text-customGrayDark my-2 leading-7 ${color} ${addStyle}`}
    >
      {children}
    </p>
  );
}
