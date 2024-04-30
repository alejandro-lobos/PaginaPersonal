// import { useCallback, useEffect, useState } from "react";
// import styles from './Particles.module.css'
// import { loadSlim } from "@tsparticles/slim"; 
// import Particles, { initParticlesEngine } from "@tsparticles/react";




// export default function MyParticlesComponent() {
//     const [ init, setInit ] = useState(false);
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             await loadSlim(engine);
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);
//   const particlesInit = (main) => {
//     // Puedes inicializar la instancia de tsParticles aquí
//   };

//   const particlesLoaded = (container) => {
//     // Se ejecuta cuando las partículas se han cargado completamente
//   };

//   return (
//     <Particles className={styles.particles}
//     options={{
//     //   background: {
//     //     color: {
//     //       value: "#0d47a1", // Color de fondo de las partículas, puedes usar cualquier color CSS.
//     //     },
//     //   },
//       fpsLimit: 120, // Límite de FPS para mejorar el rendimiento.
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true, // Habilita la interactividad al hacer clic.
//             mode: "push", // Añade partículas al hacer clic.
//           },
//           onHover: {
//             enable: true, // Habilita la interactividad al pasar el mouse.
//             mode: "repulse", // Las partículas se alejan del cursor.
//           },
//           resize: true, // Las partículas se recalculan al redimensionar la ventana.
//         },
//         modes: {
//           push: {
//             quantity: 4, // Número de partículas añadidas al hacer clic.
//           },
//           repulse: {
//             distance: 200, // Distancia de repulsión al pasar el mouse.
//             duration: 0.4, // Duración de la animación de repulsión.
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff", // Color de las partículas.
//         },
//         links: {
//           color: "#ffffff", // Color de los enlaces/líneas entre partículas.
//           distance: 150, // Máxima distancia para dibujar líneas entre partículas.
//           enable: true, // Habilitar o deshabilitar líneas entre partículas.
//           opacity: 0.5, // Opacidad de las líneas.
//           width: 1, // Ancho de las líneas.
//         },
//         move: {
//           direction: "none", // Dirección del movimiento de las partículas.
//           enable: true, // Habilitar movimiento.
//           outModes: {
//             default: "bounce", // Comportamiento al alcanzar el borde del canvas.
//           },
//           random: false, // Movimiento aleatorio.
//           speed: 6, // Velocidad de movimiento.
//           straight: false, // Movimiento directo (sin zigzag).
//         },
//         number: {
//           density: {
//             enable: true, // Habilitar optimización de densidad de partículas.
//             area: 800, // Área (en px cuadrados) usada para calcular la densidad de partículas.
//           },
//           value: 80, // Número inicial de partículas.
//         },
//         opacity: {
//           value: 0.5, // Opacidad de las partículas.
//         },
//         shape: {
//           type: "circle", // Forma de las partículas ('circle', 'edge', 'triangle', etc.).
//         },
//         size: {
//           value: { min: 1, max: 5 }, // Tamaño de las partículas.
//         },
//       },
//       detectRetina: true, // Ajustar partículas para dispositivos retina.
//     }}
//   />
  
//   );
// }