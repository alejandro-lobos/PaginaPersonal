import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectCarousel = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
          breakpoint: 1100, // Bajo este ancho, el carrusel se ajustará para móviles
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              className: "center",
              centerMode: true,

          }
      }
  ]
    // Agrega más configuraciones según necesites
  };

  return (
    <>
    <h2 className="flex flex-col justify-center text-center text-3xl md:text-5xl font-bold  py-10 ">
    Proyectos
    </h2>
    <div className="p-12">

      <Slider {...settings}>
        {projects.map((project) => (
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" key={project.id} className="p-2 shadow-lg transition-transform duration-300 ease-in-out h-[500px] flex flex-col justify-between hover:scale-105">
            <Image
              src={`/images/${project.name}.jpg`}
              width={1200}
              height={1200}
              alt={project.name}
              className="w-full object-content rounded-lg h-4/5"
            />
            <div className="overflow-hidden">
              <div className="truncate text-lg font-semibold">{project.name}</div>
              <p className="truncate text-sm">{project.description || "No description available"}</p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default ProjectCarousel;
