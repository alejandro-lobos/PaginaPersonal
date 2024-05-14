import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/about1.jpeg',
  '/images/about2.jpg',
  '/images/about3.webp',
];

const AboutMe = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  bg-transparent py-10  ">
      <h2 className="text-3xl md:text-5xl font-bold text-left p-5   ">
        Acerca de mi
      </h2>
       <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-center p-5">
        <div className="relative w-[400px] h-[300px] lg:w-1/3 lg:h-[400px] bg-gray-100 border-l-8 border-b-8 border-l-blue-word border-b-blue-word p-2">
          <Image
            src={images[currentImage]}
            layout="fill"
            objectFit="cover"
            alt="About me"
            className="absolute"
          />
        </div>
        <div className="w-full md:w-1/2 p-5 text-center">
          <p>Desarrollador Full Stack comprometido con la innovación y el desarrollo de soluciones de calidad. Me caracterizo por ser una persona responsable y apasionada, en constante búsqueda de conocimiento y crecimiento personal en el área de la informática.</p>
          <div className="lg:mt-5 justify-center text-center flex flex-col py-5  content-center justify-items-center">
            <div> Alejandro Lobos Arenas</div>
            <div> alejandro.lobosarenas@gmail.com</div>
            <div> +34639683333</div>
            <div> Español-Chileno</div>
            <div> Madrid</div>
            <div className='py-5'>
            <a href="/docs/Alejandro Lobos.pdf" download="Alejandro Lobos.pdf" className=" lg:w-1/4 mt-3 py-2 px-4 bg-blue-word  text-white rounded cursor-pointer hover:bg-blue-700">
              Curriculum
            </a>

            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default AboutMe;
