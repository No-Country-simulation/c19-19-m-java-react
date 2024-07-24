import Paragraph from "@/components/texts/Paragraph";
import SubtitleSpecial from "@/components/texts/SubtitleSpecial";

export default function AboutUs() {
  return (
    <div className="bg-customBlueDark py-10">
      {/* Subtitulo + divisor */}
      <div className="w-2/5">
        <SubtitleSpecial light={true}>Sobre nosotros</SubtitleSpecial>
        <div className="mx-auto ml-20 relative bottom-2 bg-customGray h-1"></div>
      </div>

      {/* Parrafos */}
      <div className="flex gap-20 mx-28">
        <Paragraph light={true}>
          Somos un equipo apasionado por Guatapé, un pueblo mágico que nos cautivó con su
          belleza, historia y calidez humana. Este blog nace con el objetivo de compartir
          nuestro amor por este lugar y convertirnos en una guía para viajeros que buscan
          descubrir sus encantos.
        </Paragraph>

        <Paragraph light={true}>
          Soñamos con inspirar a miles de personas a conocer Guatapé, a que se enamoren de
          sus calles coloridas, su imponente Peñol y la amabilidad de su gente. Queremos
          ser un puente entre Guatapé y el mundo, mostrando sus tesoros al natural y
          promoviendo un turismo responsable y sostenible.
        </Paragraph>

        <Paragraph light={true}>
          Agradecemos profundamente tu interés en Guatapé y en nuestro blog. Esperamos que
          la información que aquí encuentres te sea útil para planificar tu viaje y vivir
          momentos inolvidables en este paraíso colombiano.
        </Paragraph>
      </div>
    </div>
  );
}
