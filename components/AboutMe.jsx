import React, { useState, useEffect } from 'react';
import styles from './AboutMe.module.css'; // Asume que has creado este archivo de estilos
import Image from 'next/image';

const images = [
  '/images/PaginaPersonal.jpg', // Reemplaza con tus imágenes
  '/images/t1.jpg',
  '/images/t3.jpg',
  // ... más imágenes si es necesario
];

const AboutMe = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId); // Limpieza del intervalo
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <Image
            src={images[currentImage]}
            width={1200}
            height={1200}
            alt="About me"
          />
      </div>
      <div className={styles.infoContainer}>
        <h2>About Me</h2>
        <p>Desarrollador Full Stack comprometido
          con la innovación y el desarrollo de
          soluciones de calidad. Me caracterizo
          por ser una persona responsable y
          apasionada, en constante búsqueda de
          conocimiento y crecimiento personal en
          el área de la informática.</p>
  
        <div className={styles.detailsContainer}>
          <div>Nombre: Alejandro Lobos Arenas</div>
          <div>Correo: alejandro.lobosarenas@gmail.com</div>
          <div>Contacto: +34639683333</div>
          <div>Nacionalidad: Española-Chilena</div>
          <div>Ubicacion: Madrid</div>
        </div>
        <a href="/docs/Alejandro Lobos.pdf" download="Alejandro Lobos.pdf" className={styles.botonDescarga}>
        Curriculum
        </a>

      </div>
    </div>
  );
};

export default AboutMe;
