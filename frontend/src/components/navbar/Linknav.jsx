import Link from "next/link";

function Linknav({children, href}) {
    return ( 
        <>
            <Link href={href} className="text-white hover:bg-white hover:text-customGreen px-3 py-2 rounded-full font-semibold transition-colors">
                {children}
            </Link>
        </>
     );
}

export default Linknav;