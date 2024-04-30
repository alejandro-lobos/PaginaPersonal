import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <h3>Alejandro Lobos</h3>
        <p>Ingeniero Informatico</p>
        <p>Madrid, España</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>Contacto</h3>
        <p>+34 639683333</p>
        <p>alejandro.lobosarenas@gmail.com</p>
        <div className={styles.socialIcons}>
          {/* Aquí irían tus íconos de redes sociales */}
        </div>
      </div>
      <div className={styles.footerColumn}>
        <h3>Redes</h3>
        <p>LK GH IG</p>
      </div>
    </footer>
  );
};

export default Footer;
