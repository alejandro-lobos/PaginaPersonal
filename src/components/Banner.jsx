import Image from 'next/image';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);


    // Manejar el redimensionamiento de la ventana
    useEffect(() => {
      function handleResize() {
          if (window.innerWidth >= 1100) {
              setIsOpen(false);
          }
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(isOpen)
  return (
    <div className="relative w-full h-screen bg-fixed bg-center bg-cover flex justify-center items-center z-10" >
        <div className="flex flex-row justify-center text-center bg-black bg-opacity-60 lg:p-2 lg:w-2/5 w-4/5 h-[250px] lg:h-auto rounded-full">
          <Image
            src="/images/ale-sf.png"
            width={1200} // Ajusta estos valores para cambiar el tamaño de la imagen
            height={1200}
            alt="Alejandro Lobos"
            className="w-3/5 h-56 lg:w-1/2 lg:h-auto rounded-full shadow-lg p-3  lg:p-4 "
          />
          <div className=" flex flex-col justify-center  text-white   w-2/5 lg:bg-transparent ">
            <p className=' text-center justify-center text-xl lg:text-2xl mb-2 pr-12 lg:pr-0 lg:mb-5' >
              Pasión, Disciplina, Triunfo.
            </p>
            <p className='hidden lg:block text-sm lg:text-xl text-center justify-center '>
            ¡Bienvenido a mi sitio personal! Aquí comparto mi trabajo. Si te interesa colaborar, ¡contáctame! Juntos podemos llevar tus proyectos al siguiente nivel.
            </p>

          </div>
         
        </div>
      
    </div>
  );
};



export default Banner;
