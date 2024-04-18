import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
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

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
      <Link className={styles.navCursor} to="inicio" smooth={true} duration={500}>ALEJANDRO LOBOS</Link>
      </div>
      <div className={styles.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li><Link className={styles.navCursor} to="inicio" smooth={true} duration={500}>Inicio</Link></li>
        <li><Link className={styles.navCursor} to="about" smooth={true} duration={500}>Acerca de Mí</Link></li>
        <li><Link className={styles.navCursor} to="project" smooth={true} duration={500}>Proyectos</Link></li>
        <li><Link className={styles.navCursor} to="contact" smooth={true} duration={500}>Contacto</Link></li>
        <li><Link className={styles.navCursor} to="socialLinks" smooth={true} duration={500}>Redes Profesionales</Link></li>
      </ul>
     
    </nav>
 
  );
}
