import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          ALEJANDRO LOBOS
        </Link>
      </div>
      <div className={styles.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/about">Acerca de Mí</Link></li>
        <li><Link href="/experience">Experiencia</Link></li>
        <li><Link href="/contact">Contacto</Link></li>
        <li><Link href="/curriculum">Currículum</Link></li>
      </ul>
     
    </nav>
 
  );
}
