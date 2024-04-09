import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Bienvenido a mi portafolio personal" />
      </Head>

      <Navbar />

            <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a Mi Portafolio
        </h1>
        
        <div className={styles.profileSection}>
          <Image
            src="/images/profile.jpg"
            width={300}
            height={300}
            alt="Alejandro Lobos"
            className={styles.profileImage}
          />
          
          <div className={styles.profileContent}>
            <p className={styles.description}>
              Soy Alejandro, Ingeniero Civil Informático especializado en desarrollo web y bal bla. Me apasiona crear soluciones tecnológicas innovadoras.
            </p>
            <div className={styles.profileLinks}>
              <a href="https://www.linkedin.com/in/alejandro-lobos-arenas/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Linkedin</a>
              <a href="https://github.com/alejandro-lobos" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>GitHub</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
