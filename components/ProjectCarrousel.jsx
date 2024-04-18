import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProjectCarrousel.module.css'; // Asume que tienes un archivo de estilos para esto
import Image from 'next/image';

const ProjectCarousel = ({ projects }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // Puedes agregar más configuraciones según lo necesites
  };


  console.log(projects)



// Uso en tu componente, asegúrate de manejar las llamadas adecuadamente para no sobrecargar la API o violar sus políticas


  return (
    <div className={styles.carouselContainer}>
    <Slider {...settings}>
      {projects.map((project) => (
        <a href={project.html_url} target="_blank" rel="noopener noreferrer" key={project.id} className={styles.slide}>
            <Image
            src={`/images/${project.name}.jpg`}
            width={1200}
            height={1200}
            alt={project.name}
            className={styles.projectImage}
          />
          <div className={styles.projectContent}>
            <div className={styles.projectName}>{project.name}</div>
            <p className={styles.projectDescription}>{project.description || "No description available"}</p>
          </div>
        </a>
      ))}
    </Slider>
  </div>
  );
};

export default ProjectCarousel;
