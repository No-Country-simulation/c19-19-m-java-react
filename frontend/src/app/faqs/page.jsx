import Paragraph from "@/components/texts/Paragraph";
import Subtitle from "@/components/texts/Subtitle";
import SubtitleSpecial from "@/components/texts/SubtitleSpecial";

export default function Faqs() {
  return (
    <div className="py-10 bg-gray-200">
      <SubtitleSpecial>Preguntas frecuentes </SubtitleSpecial>
      <div className="w-2/5 mx-auto relative bottom-2 bg-customGray h-1"></div>

      <div className="mx-5 lg:mx-20">
        <Subtitle>¿Cómo me suscribo?</Subtitle>
        <Paragraph>
          Busca el botón de suscripción, completa los datos del formulario, introduce el
          método de pago de tu preferencia (tarjeta de débito o crédito) y por último haz
          click en el botón “Confirmar pago" . ¡Listo, ya puedes comenzar a publicar tus
          servicios!
        </Paragraph>

        <Subtitle>¿Cómo cancelo la suscripción?</Subtitle>
        <Paragraph>
          Toda suscripción tiene una fecha de expiración la cuál marca el fin de la
          suscripción. ¡No necesitas realizar nada extra!
        </Paragraph>

        <Subtitle>¿Cómo extiendo mi suscripción?</Subtitle>
        <Paragraph>
          Luego de finalizada la fecha de expiración, podrás suscribirte nuevamente y
          ampliar tu fecha de finalización. ¡Bienvenido nuevamente!
        </Paragraph>
      </div>
    </div>
  );
}
