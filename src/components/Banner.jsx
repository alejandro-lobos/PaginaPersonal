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
          className="w-1/3 h-auto rounded-full bg-black bg-opacity-50  shadow-lg "
        />
        <p className="mt-1 text-2xl md:text-3xl lg:text-4xl  text-white shadow-md bg-black bg-opacity-50 p-3 rounded">
          Pasión, Disciplina, Triunfo.
        </p>

      </div>
    </div>
  );
};
export default Banner;
