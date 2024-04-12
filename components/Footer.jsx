import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <h3>About Us</h3>
        <p>Noxtower hyundai Str. No: 786</p>
        <p>Toxilakcy Grandroad</p>
        <p>USA - America</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>Get In Touch</h3>
        <p>+123 456 789</p>
        <p>mail@example.com</p>
        <div className={styles.socialIcons}>
          {/* Aquí irían tus íconos de redes sociales */}
        </div>
      </div>
      <div className={styles.footerColumn}>
        <h3>Career</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
