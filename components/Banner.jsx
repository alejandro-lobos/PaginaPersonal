import styles from './Banner.module.css';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      {/* Puedes comentar o descomentar MyParticlesComponent según lo necesites */}
      {/* <MyParticlesComponent /> */}
      <div className={styles.bannerContent}>
      <Image
            src= "/images/ale-sf.png"
            width={1200}
            height={1200}
            alt="Alejandro Lobos"
            className={styles.bannerImage}
          />
      <p className={styles.bannerText}>INNOVAR, CREAR, INSPIRAR</p>

      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default Banner;    