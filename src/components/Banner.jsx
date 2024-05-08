import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-fixed bg-center bg-cover flex justify-center items-center z-10" style={{ backgroundImage: "url('/images/tp3.jpg')" }}>
      <div className="flex flex-col items-center text-center text-white">
        <Image
          src="/images/ale-sf.png"
          width={1200}  // Estos valores pueden requerir ajuste según las necesidades de diseño
          height={1200}
          alt="Alejandro Lobos"
          className="w-1/3 h-auto rounded-full shadow-lg"
        />
      <p className="mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-white shadow-md bg-black bg-opacity-40 p-3 rounded-xl">
        Pasión - Disciplina - Triunfo.
      </p>

      </div>
    </div>
  );
};
export default Banner;
