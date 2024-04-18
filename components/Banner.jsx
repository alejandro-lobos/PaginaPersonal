import Particles from '@tsparticles/react';
import styles from './Banner.module.css';
import MyParticlesComponent from './Particles';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      {/* Puedes comentar o descomentar MyParticlesComponent según lo necesites */}
      {/* <MyParticlesComponent /> */}
      <div className={styles.bannerContent}>
      <p className={styles.bannerText}>Frase inspiradora</p>
      <Image
            src= "/images/profile.jpg"
            width={1200}
            height={1200}
            alt="Alejandro Lobos"
            className={styles.bannerImage}
          />
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default Banner;