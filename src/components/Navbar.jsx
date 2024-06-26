import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Función que maneja el evento de desplazamiento
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Configurar listener para el evento de desplazamiento
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  useEffect(() => {
    function handleResize() {
        if (window.innerWidth >= 1100) {  // Asume que 1100px es el breakpoint de 'md:'  




        }
    }

    // Añadir el event listener
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
}, []);  // Dependencias vacías para ejecutar solo en el montaje y desmontaje

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

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between  items-center  px-4 sm:px-6 lg:px-8 py-3 z-50 transition-colors duration-300 ${scrolled || isOpen ? 'bg-black bg-opacity-60' : 'bg-transparent'}} bg-opacity-70 text-white`}>
      <Link 
        to="inicio" 
        smooth={true} 
        duration={500}
        className="text-white no-underline transition-colors duration-800 hover:text-blue-500 text-sm sm:text-md lg:text-lg cursor-pointer"
      >
        ALEJANDRO LOBOS
      </Link>
      <div className="lg:hidden text-4xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>  
        &#9776;
      </div>
      <ul className={`absolute lg:relative w-full lg:w-auto flex flex-col lg:flex-row transition-all ease-out duration-300   ${isOpen ? 'top-16 left-0 bg-black bg-opacity-60  lg:bg-transparent block ' : 'hidden lg:flex'} text-white`}>
        <li className="ml-0 md:ml-20 transition-colors duration-200 ali flex justify-center my-3">
            <Link className="font-medium no-underline transition-colors duration-800 hover:text-blue-500 relative cursor-pointer" to="inicio" smooth={true} duration={500}>Inicio</Link>
        </li>
        <li className="ml-0 md:ml-20 transition-colors duration-200 flex justify-center my-3">
            <Link className="font-medium no-underline transition-colors duration-800 hover:text-blue-500 relative cursor-pointer" to="about" smooth={true} duration={500}>Acerca de Mí</Link>
        </li>
        <li className="ml-0 md:ml-20 transition-colors duration-200 flex justify-center my-3">
            <Link className="font-medium no-underline transition-colors duration-800 hover:text-blue-500 relative cursor-pointer" to="experience" smooth={true} duration={500}>Experiencia</Link>
        </li>
        <li className="ml-0 md:ml-20 transition-colors duration-200 flex justify-center my-3">
            <Link className="font-medium no-underline transition-colors duration-800 hover:text-blue-500 relative cursor-pointer" to="project" smooth={true} duration={500}>Proyectos</Link>
        </li>
     
    
      </ul>
    </nav>
  );
}
