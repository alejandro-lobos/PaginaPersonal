// components/Education.jsx
import styles from './Education.module.css'; // Asume que tienes un archivo de estilos para esto

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.timeline}>
        <div className={styles.timelineEntry}>
          <div className={styles.timelineDate}>
            Mar 2018 - Dic 2023
          </div>
          <div className={styles.timelineContent}>
            <h3>Ingenieria Civil Informatica</h3>
            <p>Pontificia Universidad Catolica de Valparaiso</p>
            <p>Titulado</p>
          </div>
        </div>
        {/* Repite timelineEntry para cada entrada */}
      </div>
    </div>
  );
};

export default Education;
