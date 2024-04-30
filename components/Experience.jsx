// components/Experience.jsx
import styles from './Experience.module.css'; // Asume que tienes un archivo de estilos para esto

const experiences = [
  {
    id: 1,
    date: "Mar 2024 - Presente",
    title: "Co-funder - Desarrollador Front",
    company: "Davit",
    description: "• Fundé, planifiqué y desarrollé la empresa Davit en colaboración con un equipo multidisciplinario compuesto por dos abogados, un diseñador gráfico y dos informáticos."
  },
  {
    id: 2,
    date: "Dic 2022 - May 2023",
    title: "Desarrollador Full Stack",
    company: "Qaudal",
    description: "• Recopilé requisitos de la empresa para diseñar y desarrollar la solución que necesitaban. • Desarrollé y probé la base de datos y la página de ventas de la empresa utilizando React y TypeScript, aplicando una metodología ágil como Scrum."
  },
  {
    id: 3,
    date: "Ene 2021 - Jun 2021",
    title: "Desarrollador de Softwares",
    company: "SENDA",
    description: "• Planifiqué uno de los proyectos de SENDA para la prevención del consumo de drogas a través de una app móvil que permite a los usuarios encontrar diversas actividades. • Desarrollé y probé la aplicación móvil para plataformas Android e iOS, utilizando React Native junto con Node.js y Express."
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
