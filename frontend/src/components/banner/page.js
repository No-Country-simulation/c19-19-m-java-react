import Title from '../texts/Title';
import Image from 'next/image';
import Timeset from './Timeset';
import Wheater from './Wheater';

const Banner = () => {

  return (
    <header className="bg-cover bg-center">
      <div className="bg-black/30 relative w-full h-[50rem] flex items-center justify-center">

        {/* Video de Fondo */}
        <video className="w-full h-full object-cover absolute -z-10" loop autoPlay muted>
          <source src={'/videoback.mp4'} type="video/mp4" />
        </video>

        {/* Tiempo y Clima */}
        <div className="absolute top-[43rem] left-0 p-4 flex flex-col items-start text-white animate-fade-right animate-delay-[700ms] animate-ease-in-out">
          <span className="flex items-center gap-2 mb-2">
            <Image src={"/time.svg"} width={25} height={25} alt="Time Icon" />
            <Timeset>Guatapé, Colombia</Timeset>
          </span>

          <span className="flex items-center gap-2">
            <Image src={"/weather.svg"} width={25} height={25} alt="Weather Icon" />
            <Wheater />
          </span>
        </div>

        {/* Título */}
        <div className="text-center px-4 lg:pl-8 text-white">
          <Title styleAdd=" text-8xl animate-fade-up animate-ease-in-out">Rincones de Guatapé</Title>
          <Title styleAdd=" text-5xl animate-fade-up animate-delay-200 animate-ease-in-out">Un paraíso escondido en Colombia</Title>
        </div>

      </div>
    </header>
  );
};

export default Banner;
