import Paragraph from "@/components/texts/Paragraph";
import Subtitle from "@/components/texts/Subtitle";
import SubtitleSpecial from "@/components/texts/SubtitleSpecial";
import Image from "next/image";
import React from "react";
import Photo_1 from "/public/about/fotos_1.png";
import Photo_2 from "/public/about/fotos_2.png";
import MapGuatapé from "./MapGuatapé";

export default function AboutGuatape() {
  return (
    <div className="py-10">
      {/* Subtitulo especial con divisores */}
      <div className="flex flex-wrap justify-center">
        <div className=" hidden lg:block h-1 w-64 mr-10 bg-customGreen"></div>
        <SubtitleSpecial green={true} styleAdd="py-2">
          Conoce Guatapé
        </SubtitleSpecial>
        <div className="h-1 w-64 lg:ml-10 bg-customGreen"></div>
      </div>

      {/* Parrafos */}
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 ml-5 mr-5 lg:ml-20 lg:mr-10">
          <Subtitle>Un pueblo multicolor</Subtitle>

          <Paragraph>
            Guatapé, también conocido como el "Pueblo de Zócalos", se encuentra ubicado en
            el oriente de Antioquia, Colombia. Este municipio se caracteriza por sus
            vibrantes casas adornadas con coloridos zócalos que narran historias y
            leyendas locales. Su ambiente tranquilo y acogedor, sumado a sus imponentes
            paisajes naturales, lo convierten en un destino turístico ideal para aquellos
            que buscan desconectarse y disfrutar de la belleza colombiana.
          </Paragraph>
          <Paragraph>
            Guatapé goza de un clima primaveral durante todo el año, con temperaturas
            promedio que oscilan entre los 18°C y 24°C. La temporada seca va de diciembre
            a marzo, mientras que la temporada de lluvias se extiende de abril a
            noviembre.
          </Paragraph>

          {/* Imagenes + Subtitulo */}
          <Image
            src={Photo_1}
            alt="Grupo de fotos"
            className="w-11/12 mx-auto mb-10"
          ></Image>

          <Subtitle>Atractivos que enamoran</Subtitle>

          <Image src={Photo_2} alt="Grupo de fotos" className="mx-auto"></Image>
        </div>

        {/* Mapa */}
        <div className="lg:w-2/5 mx-5 lg:mx-20 flex items-center">
          <MapGuatapé />
        </div>
      </div>
    </div>
  );
}
