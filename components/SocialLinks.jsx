// components/SocialLinks.jsx
import styles from './SocialLinks.module.css'; // Asegúrate de crear este archivo CSS

const SocialLinks = () => {
  return (
    <div className={styles.socialLinksContainer}>
      <h2 className={styles.title}>Mis Redes Profesionales</h2>
      <div className={styles.cards}>
        <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className={styles.card}>
          LinkedIn
        </a>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className={styles.card}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
