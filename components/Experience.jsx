// components/Experience.jsx
import styles from './Experience.module.css'; // Asume que tienes un archivo de estilos para esto

const experiences = [
  {
    id: 1,
    date: "Ene 2020 - Presente",
    title: "Desarrollador Senior",
    company: "Tech Solutions Inc",
    description: "Trabajo con un equipo de desarrollo ágil para crear aplicaciones web con React y Node.js."
  },
  {
    id: 1,
    date: "Ene 2020 - Presente",
    title: "Desarrollador Senior",
    company: "Tech Solutions Inc",
    description: "Trabajo con un equipo de desarrollo ágil para crear aplicaciones web con React y Node.js."
  },
  {
    id: 1,
    date: "Ene 2020 - Presente",
    title: "Desarrollador Senior",
    company: "Tech Solutions Inc",
    description: "Trabajo con un equipo de desarrollo ágil para crear aplicaciones web con React y Node.js."
  },
  // ... otros objetos de experiencia
];

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      {experiences.map(exp => (
        <div key={exp.id} className={styles.experienceEntry}>
          <div className={styles.experienceDate}>
            {exp.date}
          </div>
          <div className={styles.experienceContent}>
            <h3>{exp.title}</h3>
            <p>{exp.company}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
