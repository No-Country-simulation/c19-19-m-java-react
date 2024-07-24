import Link from "next/link";
import Btlogins from "./Bttlogins";

function Manuenav() {
    return ( 
        <div className="fixed lg:hidden inset-0 w-full h-full bg-black/40 backdrop-blur-md z-20 overflow-auto transition-colors ease-in-out animate-fade animate-delay-75">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-white p-8 rounded shadow-lg text-2xl flex flex-col items-center">
                {/* Aquí van los enlaces y botones del menú */}
                <Link href="/" className="block mb-4">
                    Inicio
                </Link>
                <Link href="/wheretoeat" className="block mb-4">
                    Donde Comer
                </Link>
                <Link href="/wheretogo" className="block mb-4">
                    Donde Ir
                </Link>
                <Link href="/whattodo" className="block mb-4">
                    Que Hacer
                </Link>
                <Link href="/contact" className="block mb-4">
                    Contacto
                </Link>
                <div className=' flex items-center gap-4'>
                    <Btlogins/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Manuenav; 