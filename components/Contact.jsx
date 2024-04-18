import styles from './Contact.module.css'; // Asegúrate de crear este archivo CSS
import Map from './Map'
const Contact = () => {
  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías el envío del formulario, por ejemplo, con un fetch a una API
  };

  return (
    <div className={styles.contactContainer} id="contact">
      <h2>Contactame</h2>
      <p>Escríbeme y me pondré en contacto contigo lo antes posible.</p>
      
      <div className={styles.contactContent}>
        <div className={styles.map}>
          <Map/>
        </div>
        
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.formInput} type="text" placeholder="Nombre" name="name" required />
            <input className={styles.formInput} type="email" placeholder="Email" name="email" required />
            <input className={styles.formInput} type="text" placeholder="Teléfono" name="phone" />
            <textarea className={styles.formTextarea} placeholder="Mensaje" name="message" required></textarea>
            <button className={styles.formButton} type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
