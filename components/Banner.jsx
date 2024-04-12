import Particles from '@tsparticles/react';
import styles from './Banner.module.css'
import MyParticlesComponent from './Particles'

const Banner = () => {
  return (
        <div className={styles.bannerContainer}>
            {/* <MyParticlesComponent /> */}
            <div className={styles.background}></div>
                {/* Otros elementos del banner aquí */}
        </div>
   
  );
};

export default Banner;



