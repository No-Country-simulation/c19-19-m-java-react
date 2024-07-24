import Title from '../texts/Title';
import Image from 'next/image';
import Timeset from './Timeset';
import Wheater from './Wheater';
import Filters from '../filters/page';

const Banner = () => {

  return (
    <header className="bg-cover bg-center">
      <div className="bg-black/30 relative w-full h-[55rem] flex flex-col items-center justify-center">

        {/* Video de Fondo */}
        <video className="w-full h-full object-cover absolute -z-10" loop autoPlay muted>
          <source src={'/videoback.mp4'} type="video/mp4" />
        </video>

        {/* Tiempo y Clima */}
        <div className="absolute top-[31rem] min-[425px]:top-[33rem] sm:top-[35rem] left-0 p-4 flex flex-col items-start text-white animate-fade-right animate-delay-[700ms] animate-ease-in-out">
          <span className="flex items-center gap-2 mb-2">
            <Image src={"/time.svg"} width={25} height={25} alt="Time Icons" />
            <Timeset>Guatapé, Colombia</Timeset>
          </span>

          <span className="flex items-center gap-2">
            <Image src={"/weather.svg"} width={25} height={25} alt="Weather Icons" />
            <Wheater />
          </span>
        </div>

        {/* Título */}
        <div className="text-center px-4 text-white my-auto pt-28">
          <Title styleAdd=" text-7xl sm:text-8xl animate-fade-up animate-ease-in-out">Rincones de Guatapé</Title>
          <Title styleAdd=" text-4xl sm:text-5xl animate-fade-up animate-delay-200 animate-ease-in-out">Un paraíso escondido en Colombia</Title>
        </div>

        {/* Filtros */}
        <div className=' mb-8 px-4 w-full'>
          <Filters />
        </div>

      </div>
    </header>
  );
};

export default Banner;


