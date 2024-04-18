// components/Education.jsx
import styles from './Education.module.css'; // Asume que tienes un archivo de estilos para esto

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.timeline}>
        <div className={styles.timelineEntry}>
          <div className={styles.timelineDate}>
            Jun 2018 - Mar 2019
          </div>
          <div className={styles.timelineContent}>
            <h3>Educational Specialist</h3>
            <p>UNIVERSITY OF DEMOXYZ</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        {/* Repite timelineEntry para cada entrada */}
      </div>
    </div>
  );
};

export default Education;
