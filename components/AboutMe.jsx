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
        <p>Nullam ornare aliquam tincidunt ut a gravida augue, et and mod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={styles.statsContainer}>
          <div>
            <strong>550 +</strong> Clients
          </div>
          <div>
            <strong>230 +</strong> Projects
          </div>
          <div>
            <strong>190 +</strong> Requests
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <div>Name: Kroo DeSuza</div>
          <div>Email: desuza@example.com</div>
          <div>Date of Birth: 28 June 1995</div>
          <div>Contact: +999 999 999</div>
          <div>Nationality: Indian</div>
          <div>Address: Dewas 65 New dummy Road</div>
        </div>
        <a href="/docs/ale.pdf" download="NombreDelArchivo.pdf" className={styles.botonDescarga}>
        Curriculum
        </a>

      </div>
    </div>
  );
};

export default AboutMe;
