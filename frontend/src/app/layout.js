import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:  "Rincones de Guatapé",
  description: "Nuestro sitio web, Rincones de Guatapé: Un paraíso escondido en Colombia, está diseñado para ofrecer una experiencia turística única en Guatapé, Colombia. La plataforma se especializa en organizar y reunir a viajeros solitarios en grupos turísticos, facilitando que puedan explorar y disfrutar del encantador pueblito en compañía. Además, el sitio contará con un blog de reseñas de hoteles, información detallada sobre opciones de alojamiento, y una guía de los mejores lugares para disfrutar de la comida típica de la región. También habrá una sección dedicada a eventos diurnos y nocturnos, abiertos a todos los visitantes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
