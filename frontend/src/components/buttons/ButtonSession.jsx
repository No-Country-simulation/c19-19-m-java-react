/* 
        # Modo de uso
        Ver ButtonLogin
 */
import Link from "next/link";
export default function ButtonSession({ to, children, addStyle }) {
  return (
    <>
    <button className={`flex  justify-center  items-center rounded-full size-10 shadow-lg shadow-customBrown ${addStyle}`}>
      <Link href={to}>{children}</Link>
    </button>
     
    </>
  );
}
