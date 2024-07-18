import Paragraph from "@/components/texts/Paragraph";
import Subtitle from "@/components/texts/Subtitle";
import MenuText from "@/components/texts/MenuText";
import Title from "@/components/texts/Title";

export default function Muestras() {
    return (
        <>
            <div className="m-10">

                <h2 className="  border-b-slate-700 border-solid border-b-2 text-lg">Componentes de texto</h2>
                <Paragraph>texto de prueba de Paragraph</Paragraph>
                <Subtitle>subtitulo de prueba</Subtitle>
                <Title logo={true}>titulo logo</Title>
                <Title videoSpan={true}>titulo videoSpan</Title>
                <Title videoTitle={true} >titulo videoTitle</Title>
                <MenuText>muestra de texto de menu (botones)</MenuText>
            </div>

            <div className="m-10">
                <h2 className="  border-b-slate-700 border-solid border-b-2 text-lg">Colores</h2>
                <p className="bg-customGrayLight"> customGrayLight</p>
                <p className="bg-customGray"> customGray</p>
                <p className="bg-customGreenLight"> customGreenLight</p>

                <p className="text-white bg-customGreen"> customGreen</p>
                <p className="text-white bg-customBlue"> customBlue</p>
                <p className="text-white bg-customGrayDark"> customGrayDark</p>
                <p className="text-white bg-customBrown"> customBrown</p>
                <p className="text-white bg-customBlueDark"> customBlueDark</p>
            </div>

            <div className="m-10">
                <h2 className="  border-b-slate-700 border-solid border-b-2 text-lg">Fuentes</h2>
                <p className="m-5 text-lg font-txBarlow">Barlow</p>
                <p className="m-5 text-lg font-txPoppins">Poppins</p>
                <p className="m-5 text-lg font-txTitle">Titulo cavean Brush</p>
                <p className="m-5 text-lg font-txMogra">Mogra</p>
                <p className="m-5 text-lg font-txSpartan">League Spartan</p>
                <p className="m-5 text-lg font-txSansita">Sansita</p>
            </div>
        </>
    )
}

