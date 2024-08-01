import Paragraph from "@/components/texts/Paragraph";
import Subtitle from "@/components/texts/Subtitle";
import SubtitleSpecial from "@/components/texts/SubtitleSpecial";

export default function Faqs() {
  return (
    <div className="py-10 bg-gray-200">
      <SubtitleSpecial>Preguntas frecuentes </SubtitleSpecial>
      <div className="w-2/5 mx-auto relative bottom-2 bg-customGray h-1"></div>

<div className="mx-5 lg:mx-20">
      <Subtitle>Pregunta 1</Subtitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum
      </Paragraph>

      <Subtitle>Pregunta 2</Subtitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum
      </Paragraph>

      <Subtitle>Pregunta 3</Subtitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum
      </Paragraph>
      </div>
    </div>
  );
}
