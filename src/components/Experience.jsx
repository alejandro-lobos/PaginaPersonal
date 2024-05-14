// components/Experience.jsx
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
  {
    id: 4,
    date: "Mar 2018 - Dic 2023",
    title: "Ingeniero Civil Informatico",
    company: "Pontificia Universidad Catolica de Valparaiso",
    description: "Titulado de la carrera"
  }
  // ... otros objetos de experiencia
];

const Experience = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-5 bg-transparent bg-opacity-60 py-10">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative w-full sm:w-[400px] max-w-md min-h-[300px] bg-white bg-opacity-80 border-l-4 border-blue-word my-3 mx-2 p-5 rounded shadow">
          <div className="absolute top-[-10px] right-0 bg-blue-word text-white px-2 py-1 text-sm rounded-sm">
            {exp.date}
          </div>
          <div>
            <h3 className="text-lg text-gray-800 mb-2">{exp.title}</h3>
            <p className="font-semibold overflow-hidden text-ellipsis">{exp.company}</p>
            <p className="text-md text-gray-600 overflow-auto max-h-80">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Experience;


